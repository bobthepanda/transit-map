import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import {
    E,
    ENE,
    findIntersectionFromSlopes,
    midPoint,
    N,
    NNE,
    NNW,
    offsetCoordinates,
    S,
    scale,
    scaleToUnitX,
    scaleToUnitY,
    SSE,
    SSW,
    W,
    WNW,
    WSW,
} from '../../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, selectMidpoint, selectStopLocation, TextAlignment } from '../../../slice/StopLocation';
import { fillInStops, offsetSingleStop, offsetStopGroup, spaceOutStops } from '../../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../../store';

const addTabata = (dispatch: AppDispatch) => {
    dispatch(
        spaceOutStops({
            stationPrefix: 'JK',
            startCount: 33,
            endCount: 47,
            strokeColor: 'stroke-keihin-tohoku',
            offsets: [scaleToUnitY(NNW, MAJOR_LINE * 1.5)],
            textAlignments: [TextAlignment.ENE],
            hideTexts: ['JK 36'],
        })
    );
    dispatch(
        offsetSingleStop(
            'JK 34',
            { stationCode: 'JY 09', strokeColor: 'stroke-yamanote', hideText: true },

            scale(WSW, OFFSET)
        )
    );
    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'JK 38', newStationData: { stationCode: 'JU 04', strokeColor: 'stroke-tohoku', hideText: true } },
                { stationCode: 'JU 04', newStationData: { stationCode: 'JS 22', strokeColor: 'stroke-shonan-shinjuku', hideText: true } },
                { stationCode: 'JS 22', newStationData: { stationCode: 'JA 15', strokeColor: 'stroke-saikyo', hideText: true } },
            ],
            scale(WSW, OFFSET)
        )
    );
};

const addSugamo = (dispatch: AppDispatch, getState: () => RootState) => {
    const VERTICAL_COORDINATE = selectMidpoint(getState(), 'JK 34', 'JK 35');
    const JY_09 = selectStopLocation(getState(), 'JY 09');
    const IKEBUKURO_COORDINATE = findIntersectionFromSlopes({
        start: { location: selectStopLocation(getState(), 'JY 13'), direction: NNE },
        end: { location: JY_09, direction: W },
    });
    const HORIZONTAL_COORDINATE = midPoint(IKEBUKURO_COORDINATE, JY_09);
    const SUGAMO_INTERSECTION = findIntersectionFromSlopes({
        start: { location: HORIZONTAL_COORDINATE, direction: N },
        end: { location: VERTICAL_COORDINATE, direction: W },
    });
    dispatch(
        addStopDefinition({
            stationCode: 'JY 11',
            location: SUGAMO_INTERSECTION,
            strokeColor: 'stroke-yamanote',
            hideText: true,
        })
    );
    dispatch(
        offsetSingleStop('JY 11', { stationCode: 'I 15', strokeColor: 'stroke-mita', textAlignment: TextAlignment.ENE }, scale(N, OFFSET))
    );

    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'JY 11', newStationData: { stationCode: 'JY 10', strokeColor: 'stroke-yamanote', hideText: true } },
                {
                    stationCode: 'I 15',
                    newStationData: { stationCode: 'N 14', strokeColor: 'stroke-namboku', textAlignment: TextAlignment.ENE },
                },
            ],
            scaleToUnitX(E, MAJOR_LINE * 1.5)
        )
    );

    dispatch(
        addStopDefinition({
            stationCode: 'JY 12',
            strokeColor: 'stroke-yamanote',
            hideText: true,
            location: selectMidpoint(getState(), 'JY 11', 'JY 13'),
        })
    );

    dispatch(offsetSingleStop('JY 12', { stationCode: 'SA 23', textAlignment: TextAlignment.WNW }, scale(N, OFFSET * 2)));
};

const addIkebukuro = (dispatch: AppDispatch, getState: () => RootState) => {
    const JK_38 = selectStopLocation(getState(), 'JK 38');
    const JY_09 = selectStopLocation(getState(), 'JY 07');
    dispatch(
        addStopDefinition({
            stationCode: 'JY 13',
            location: findIntersectionFromSlopes({
                start: { location: offsetCoordinates(JK_38, scaleToUnitY(S, MAJOR_LINE)), direction: SSW },
                end: { location: JY_09, direction: W },
            }),
            strokeColor: 'stroke-yamanote',
            hideText: true,
        })
    );

    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'JY 13', newStationData: { stationCode: 'JS 21', strokeColor: 'stroke-shonan-shinjuku', hideText: true } },
                {
                    stationCode: 'JS 21',
                    newStationData: { stationCode: 'JA 12', strokeColor: 'stroke-saikyo', hideText: true },
                },
            ],
            scale(WNW, OFFSET)
        )
    );

    dispatch(offsetSingleStop('JY 13', { stationCode: 'M 25', strokeColor: 'stroke-marunouchi', hideText: true }, scale(S, OFFSET)));

    dispatch(offsetSingleStop('JA 12', { stationCode: 'Y 09', strokeColor: 'stroke-yurakucho', hideText: true }, scale(W, OFFSET)));

    dispatch(
        offsetSingleStop(
            'Y 09',
            { stationCode: 'F 09', strokeColor: 'stroke-fukutoshin', textAlignment: TextAlignment.WSW },
            scale(WSW, OFFSET)
        )
    );
};

const addKorakuen = (dispatch: AppDispatch) => {
    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'E 07', newStationData: { stationCode: 'M 22', strokeColor: 'stroke-marunouchi', hideText: true } },
                {
                    stationCode: 'I 12',
                    newStationData: { stationCode: 'N 11', strokeColor: 'stroke-namboku', textAlignment: TextAlignment.WNW },
                },
            ],
            scaleToUnitY(N, MAJOR_LINE * 0.6)
        )
    );
};

const fillInMusashino = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        addStopDefinition({
            stationCode: 'M 24',
            strokeColor: 'stroke-musashino',
            textAlignment: TextAlignment.ENE,
            location: offsetCoordinates(
                selectIntersection(getState(), 'JY 12', S, 'M 25', E),
                scaleToUnitY(WSW, (MAJOR_LINE * 2) / 3),
                scaleToUnitY(NNW, OFFSET * 2)
            ),
        })
    );

    dispatch(
        offsetSingleStop(
            'M 24',
            { stationCode: 'M 23', strokeColor: 'stroke-marunouchi', textAlignment: TextAlignment.ENE },
            scaleToUnitY(SSE, MAJOR_LINE - OFFSET * 1.5)
        )
    );
};

const fillInNamboku = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetSingleStop(
            'JK 36',
            { stationCode: 'N 16', strokeColor: 'stroke-namboku', textAlignment: TextAlignment.ESE },
            scale(E, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop(
            'N 16',
            { stationCode: 'N 15', strokeColor: 'stroke-namboku', textAlignment: TextAlignment.ESE },
            scaleToUnitY(SSW, MAJOR_LINE)
        )
    );

    dispatch(
        spaceOutStops({
            stationPrefix: 'N',
            startCount: 11,
            endCount: 13,
            textAlignments: [TextAlignment.ESE],
            offsets: [scaleToUnitY(NNE, MAJOR_LINE * 2)],
            strokeColor: 'stroke-namboku',
        })
    );

    const AKABANE = offsetCoordinates(selectStopLocation(getState(), 'JK 38'), scaleToUnitX(ENE, MAJOR_LINE));

    dispatch(
        addStopDefinition({
            stationCode: 'N 19',
            strokeColor: 'stroke-namboku',
            textAlignment: TextAlignment.ENE,
            location: offsetCoordinates(AKABANE, scale(SSE, OFFSET * 0.5)),
        })
    );

    dispatch(offsetSingleStop('N 19', { stationCode: 'SR 19', strokeColor: 'stroke-namboku', hideText: true }, scale(NNW, OFFSET)));
    dispatch(
        spaceOutStops({
            stationPrefix: 'N',
            startCount: 19,
            endCount: 17,
            textAlignments: [TextAlignment.ENE],
            offsets: [scaleToUnitY(SSE, MAJOR_LINE)],
            strokeColor: 'stroke-namboku',
        })
    );
};

const fillInMita = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'N 12',
                    newStationData: { stationCode: 'I 13', strokeColor: 'stroke-mita', textAlignment: TextAlignment.WNW },
                },
                {
                    stationCode: 'N 13',
                    newStationData: { stationCode: 'I 14', strokeColor: 'stroke-mita', textAlignment: TextAlignment.WNW },
                },
            ],
            scaleToUnitX(W, MAJOR_LINE)
        )
    );

    const NISHI_SUGAMO_INTERSECTION = selectIntersection(getState(), 'I 15', NNW, 'SA 23', NNE);

    dispatch(
        addStopDefinition({
            stationCode: 'I 16',
            location: offsetCoordinates(NISHI_SUGAMO_INTERSECTION, scaleToUnitY(NNW, OFFSET * 1.5)),
            strokeColor: 'stroke-mita',
            textAlignment: TextAlignment.WSW,
        })
    );

    dispatch(
        addStopDefinition({
            stationCode: 'SA 20',
            location: offsetCoordinates(NISHI_SUGAMO_INTERSECTION, scaleToUnitY(SSW, OFFSET * 1.5)),
            textAlignment: TextAlignment.WNW,
        })
    );

    const ITABASHI_INTERSECTION = selectIntersection(getState(), 'I 15', NNW, 'JA 12', NNE);

    dispatch(
        addStopDefinition({
            stationCode: 'I 17',
            location: offsetCoordinates(ITABASHI_INTERSECTION, scaleToUnitY(NNW, OFFSET * 1.5)),
            strokeColor: 'stroke-mita',
            textAlignment: TextAlignment.WSW,
        })
    );

    dispatch(
        addStopDefinition({
            stationCode: 'JA 13',
            location: offsetCoordinates(ITABASHI_INTERSECTION, scaleToUnitY(SSW, OFFSET * 1.5)),
            textAlignment: TextAlignment.WNW,
            strokeColor: 'stroke-saikyo',
        })
    );

    dispatch(
        offsetSingleStop(
            'JA 13',
            { stationCode: 'JA 14', strokeColor: 'stroke-saikyo', textAlignment: TextAlignment.WNW },
            scaleToUnitY(NNE, MAJOR_LINE * 1.25)
        )
    );
};

const fillInSakura = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        fillInStops({
            stationPrefix: 'SA',
            startCount: 20,
            endCount: 23,
            textAlignments: [TextAlignment.WNW],
        })
    );

    const OJI_MIDPOINT = selectMidpoint(getState(), 'JK 36', 'N 16');
    dispatch(
        addStopDefinition({
            stationCode: 'SA 16',
            location: offsetCoordinates(OJI_MIDPOINT, scaleToUnitY(N, OFFSET * 2)),
            textAlignment: TextAlignment.UP,
        })
    );

    dispatch(
        spaceOutStops({
            stationPrefix: 'SA',
            startCount: 9,
            endCount: 12,
            offsets: [scaleToUnitY(NNW, OFFSET * 2.5)],
            textAlignments: [TextAlignment.WSW],
        })
    );

    dispatch(
        spaceOutStops({
            stationPrefix: 'SA',
            startCount: 16,
            endCount: 13,
            offsets: [scaleToUnitX(E, OFFSET * 5.5)],
            textAlignments: [TextAlignment.UP],
        })
    );

    dispatch(
        spaceOutStops({
            stationPrefix: 'SA',
            startCount: 16,
            endCount: 18,
            offsets: [scaleToUnitX(W, OFFSET * 4.5)],
            textAlignments: [TextAlignment.DOWN, TextAlignment.UP],
        })
    );

    dispatch(offsetSingleStop('SA 20', { stationCode: 'SA 19', textAlignment: TextAlignment.ESE }, scaleToUnitY(NNE, MAJOR_LINE - OFFSET)));
};

export const addTabataGrid = (dispatch: AppDispatch) => {
    dispatch(addTabata);
    dispatch(addIkebukuro);
    dispatch(addSugamo);
    dispatch(addKorakuen);
    dispatch(fillInMusashino);
    dispatch(fillInNamboku);
    dispatch(fillInMita);
    dispatch(fillInSakura);
};
