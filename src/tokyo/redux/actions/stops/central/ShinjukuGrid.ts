import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import {
    E,
    ENE,
    ESE,
    findIntersectionFromSlopes,
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
} from '../../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, selectMidpoint, selectStopLocation, TextAlignment } from '../../../slice/StopLocation';
import {
    fillInStops,
    offsetEquallySpacedStops,
    offsetSingleStop,
    offsetStopGroup,
    spaceOutStops,
} from '../../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../../store';

const addShinjuku = (dispatch: AppDispatch, getState: () => RootState) => {
    const JY_13 = selectStopLocation(getState(), 'JY 13');
    const S_04 = selectStopLocation(getState(), 'S 04');
    const SHINJUKU_INTERSECTION = findIntersectionFromSlopes({
        start: { location: offsetCoordinates(JY_13, scale(ESE, OFFSET)), direction: SSW },
        end: { location: S_04, direction: W },
    });

    dispatch(
        addStopDefinition({
            stationCode: 'JB 10',
            strokeColor: 'stroke-chuo-sobu',
            location: offsetCoordinates(SHINJUKU_INTERSECTION, scaleToUnitY(SSW, OFFSET * 2)),
            hideText: true,
        })
    );

    dispatch(
        offsetSingleStop(
            'JB 10',
            { stationCode: 'S 01', strokeColor: 'stroke-shinjuku', hideText: true },
            scale(S, OFFSET),
            scale(E, OFFSET * 0.5)
        )
    );
    dispatch(offsetSingleStop('S 01', { stationCode: 'KO 01', hideText: true }, scale(W, OFFSET)));

    dispatch(
        offsetEquallySpacedStops(
            'JB 10',
            [
                { stationCode: 'JY 17', strokeColor: 'stroke-yamanote', hideText: true },
                { stationCode: 'JS 20', strokeColor: 'stroke-shonan-shinjuku', hideText: true },
                { stationCode: 'JA 11', strokeColor: 'stroke-saikyo', hideText: true },
                { stationCode: 'JC 05', strokeColor: 'stroke-chuo-rapid', hideText: true },
            ],
            scale(WNW, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop(
            'JC 05',
            { stationCode: 'M 08', strokeColor: 'stroke-marunouchi', textAlignment: TextAlignment.UP },
            scale(N, OFFSET)
        )
    );

    dispatch(offsetSingleStop('JC 05', { stationCode: 'E 27', strokeColor: 'stroke-oedo', hideText: true }, scale(W, OFFSET)));

    dispatch(
        offsetSingleStop('M 08', { stationCode: 'E 01', strokeColor: 'stroke-oedo', textAlignment: TextAlignment.UP }, scale(N, OFFSET * 3))
    );
};

const fillInYamanote = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        fillInStops({
            stationPrefix: 'JY',
            startCount: 13,
            endCount: 17,
            strokeColor: 'stroke-yamanote',
            textAlignments: [TextAlignment.ESE],
            hideTexts: ['JY 15'],
        })
    );
    dispatch(offsetSingleStop('JY 15', { stationCode: 'SS 02', hideText: true }, scale(E, OFFSET)));
    dispatch(
        offsetSingleStop(
            'SS 02',
            { stationCode: 'T 03', textAlignment: TextAlignment.ENE, strokeColor: 'stroke-tozai' },
            scale(ENE, OFFSET)
        )
    );

    const SEIBU_MIDPOINT = offsetCoordinates(selectMidpoint(getState(), 'JY 17', 'JY 16'), scale(ESE, OFFSET * 3));
    dispatch(addStopDefinition({ stationCode: 'SS 01', location: SEIBU_MIDPOINT, textAlignment: TextAlignment.ESE }));
};

const fillInSakura = (dispatch: AppDispatch, getState: () => RootState) => {
    const MUSASHINO_INTERSECTION = selectIntersection(getState(), 'M 25', E, 'SA 23', SSW);

    dispatch(
        addStopDefinition({
            stationCode: 'SA 24',
            textAlignment: TextAlignment.ESE,
            location: offsetCoordinates(MUSASHINO_INTERSECTION, scaleToUnitY(NNE, OFFSET * 3)),
        })
    );

    const YURAKUCHO_INTERSECTION = selectIntersection(getState(), 'Y 09', SSE, 'SA 23', SSW);

    dispatch(
        addStopDefinition({
            stationCode: 'SA 25',
            textAlignment: TextAlignment.ESE,
            location: offsetCoordinates(YURAKUCHO_INTERSECTION, scaleToUnitX(NNE, OFFSET), scaleToUnitY(SSE, OFFSET * 2.5)),
        })
    );

    dispatch(
        offsetSingleStop(
            'SA 25',
            { stationCode: 'Y 10', strokeColor: 'stroke-yurakucho', textAlignment: TextAlignment.WSW },
            scale(W, OFFSET * 2)
        )
    );

    dispatch(offsetSingleStop('SA 25', { stationCode: 'SA 26', textAlignment: TextAlignment.ESE }, scaleToUnitY(SSW, OFFSET * 3)));

    dispatch(
        spaceOutStops({
            stationPrefix: 'SA',
            startCount: 26,
            endCount: 28,
            textAlignments: [TextAlignment.ESE],
            offsets: [scaleToUnitY(SSW, OFFSET * 1.25)],
        })
    );

    dispatch(offsetSingleStop('SA 28', { stationCode: 'SA 29', textAlignment: TextAlignment.WSW }, scaleToUnitY(S, OFFSET * 3)));
    dispatch(offsetSingleStop('SA 29', { stationCode: 'SA 30', textAlignment: TextAlignment.WSW }, scaleToUnitX(SSE, OFFSET * 2)));
};

const fillInFukutoshin = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetSingleStop(
            'SA 27',
            { stationCode: 'F 10', strokeColor: 'stroke-fukutoshin', textAlignment: TextAlignment.WNW },
            scaleToUnitX(WNW, OFFSET * 2)
        )
    );

    const SANCHOME_INTERSECTION = selectIntersection(getState(), 'S 01', E, 'F 10', SSW);
    dispatch(
        addStopDefinition({
            stationCode: 'F 13',
            hideText: true,
            strokeColor: 'stroke-fukutoshin',
            location: offsetCoordinates(SANCHOME_INTERSECTION, scaleToUnitY(NNE, OFFSET)),
        })
    );
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'F 13',
                    newStationData: { stationCode: 'S 02', strokeColor: 'stroke-shinjuku', hideText: true },
                },
                {
                    stationCode: 'S 02',
                    newStationData: { stationCode: 'M 09', strokeColor: 'stroke-marunouchi', textAlignment: TextAlignment.DOWN },
                },
            ],
            scale(S, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop(
            'S 04',
            { stationCode: 'S 03', strokeColor: 'stroke-shinjuku', textAlignment: TextAlignment.DOWN },
            scaleToUnitX(W, MAJOR_LINE * 1.75)
        )
    );

    const OEDO_INTERSECTION = selectIntersection(getState(), 'E 01', E, 'F 13', NNE);

    dispatch(
        addStopDefinition({
            stationCode: 'F 12',
            location: offsetCoordinates(OEDO_INTERSECTION, scaleToUnitY(SSW, OFFSET)),
            strokeColor: 'stroke-fukutoshin',
            textAlignment: TextAlignment.ESE,
        })
    );
    dispatch(offsetSingleStop('F 12', { stationCode: 'E 02', strokeColor: 'stroke-oedo', hideText: true }, scaleToUnitX(N, OFFSET)));
    dispatch(
        offsetSingleStop(
            'F 12',
            { stationCode: 'F 11', strokeColor: 'stroke-fukutoshin', textAlignment: TextAlignment.WNW },
            scaleToUnitY(NNE, MAJOR_LINE * 1.5 - OFFSET)
        )
    );
};

const fillInOedo = (dispatch: AppDispatch) => {
    dispatch(
        spaceOutStops({
            stationPrefix: 'E',
            startCount: 2,
            endCount: 5,
            textAlignments: [TextAlignment.UP, TextAlignment.DOWN],
            offsets: [scaleToUnitX(E, OFFSET * 5)],
            strokeColor: 'stroke-oedo',
        })
    );
};

const fillInTozai = (dispatch: AppDispatch) => {
    dispatch(
        offsetSingleStop(
            'T 06',
            { stationCode: 'T 05', strokeColor: 'stroke-tozai', textAlignment: TextAlignment.DOWN },
            scaleToUnitY(NNW, OFFSET * 4),
            scaleToUnitY(W, MAJOR_LINE * 0.5)
        )
    );

    dispatch(
        offsetSingleStop(
            'T 05',
            { stationCode: 'T 04', strokeColor: 'stroke-tozai', textAlignment: TextAlignment.DOWN },
            scaleToUnitY(W, MAJOR_LINE)
        )
    );
};

const fillInMarunouchi = (dispatch: AppDispatch) => {
    dispatch(
        spaceOutStops({
            stationPrefix: 'M',
            startCount: 9,
            endCount: 11,
            textAlignments: [TextAlignment.UP, TextAlignment.DOWN],
            offsets: [scaleToUnitX(E, MAJOR_LINE + OFFSET)],
            strokeColor: 'stroke-marunouchi',
        })
    );
};

export const addShinjukuGrid = (dispatch: AppDispatch) => {
    dispatch(addShinjuku);
    dispatch(fillInYamanote);
    dispatch(fillInSakura);
    dispatch(fillInFukutoshin);
    dispatch(fillInOedo);
    dispatch(fillInTozai);
    dispatch(fillInMarunouchi);
};
