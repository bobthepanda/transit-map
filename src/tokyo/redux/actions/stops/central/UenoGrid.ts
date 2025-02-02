import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import {
    E,
    ESE,
    findIntersectionFromSlopes,
    N,
    NNE,
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
import { addStopDefinition, selectIntersection, selectStopLocation, TextAlignment } from '../../../slice/StopLocation';
import { offsetEquallySpacedStops, offsetSingleStop, offsetStopGroup, spaceOutStops } from '../../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../../store';

const addUeno = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'JY 04',
                    newStationData: { stationCode: 'JY 05', strokeColor: 'stroke-yamanote', textAlignment: TextAlignment.WNW },
                },
                { stationCode: 'JK 29', newStationData: { stationCode: 'JK 30', strokeColor: 'stroke-keihin-tohoku', hideText: true } },
            ],
            scaleToUnitY(NNE, MAJOR_LINE * 2)
        )
    );
    dispatch(
        offsetEquallySpacedStops(
            'JK 30',
            [
                { stationCode: 'JU 02', strokeColor: 'stroke-tohoku', hideText: true },
                { stationCode: 'JJ 01', strokeColor: 'stroke-joban-rapid', hideText: true },
            ],
            scale(ESE, OFFSET)
        )
    );
    dispatch(
        addStopDefinition({
            stationCode: 'H 18',
            location: selectIntersection(getState(), 'H 17', NNE, 'JJ 01', ESE),
            hideText: true,
            strokeColor: 'stroke-hibiya',
        })
    );
    dispatch(offsetSingleStop('H 18', { stationCode: 'G 16', strokeColor: 'stroke-ginza', hideText: true }, scale(S, OFFSET)));
    dispatch(offsetSingleStop('JY 05', { stationCode: 'KS 01', textAlignment: TextAlignment.WNW }, scaleToUnitX(WNW, OFFSET * 3)));
};

const addAsakusa = (dispatch: AppDispatch, getState: () => RootState) => {
    const asakusaIntersection = selectIntersection(getState(), 'G 16', E, 'A 17', NNE);
    dispatch(
        addStopDefinition({
            stationCode: 'G 19',
            location: offsetCoordinates(asakusaIntersection, scaleToUnitX(E, OFFSET * 2)),
            strokeColor: 'stroke-ginza',
            hideText: true,
        })
    );
    dispatch(
        offsetSingleStop(
            'G 19',
            { stationCode: 'A 18', strokeColor: 'stroke-asakusa', textAlignment: TextAlignment.DOWN },
            scale(S, OFFSET),
            scale(E, OFFSET * 0.5)
        )
    );
    dispatch(offsetSingleStop('G 19', { stationCode: 'TS 01', textAlignment: TextAlignment.DOWN, hideText: true }, scale(E, OFFSET)));

    dispatch(
        spaceOutStops({
            stationPrefix: 'G',
            startCount: 16,
            endCount: 18,
            strokeColor: 'stroke-ginza',
            textAlignments: [TextAlignment.DOWN, TextAlignment.UP],
            offsets: [scaleToUnitX(E, MAJOR_LINE * 0.5)],
        })
    );
    const A_17_TX = offsetCoordinates(selectStopLocation(getState(), 'A 17'), scale(WNW, OFFSET));
    const A_18_TX = selectStopLocation(getState(), 'A 18');
    dispatch(
        addStopDefinition({
            stationCode: 'TX 03',
            location: findIntersectionFromSlopes({
                start: { location: A_17_TX, direction: NNE },
                end: { location: A_18_TX, direction: N },
            }),
            textAlignment: TextAlignment.ESE,
        })
    );
};

const addSkyTree = (dispatch: AppDispatch) => {
    dispatch(
        offsetSingleStop(
            'TS 01',
            { stationCode: 'TS 02', textAlignment: TextAlignment.WNW },
            scaleToUnitX(E, OFFSET * 2),
            scaleToUnitY(NNE, MAJOR_LINE)
        )
    );

    dispatch(offsetSingleStop('TS 02', { stationCode: 'KS 45', hideText: true }, scaleToUnitX(E, MAJOR_LINE * 0.5)));
    dispatch(offsetSingleStop('KS 45', { stationCode: 'TS 03', hideText: true }, scale(E, OFFSET)));
    dispatch(
        offsetSingleStop(
            'TS 03',
            {
                stationCode: 'Z 14',
                strokeColor: 'stroke-hanzomon',
                textAlignment: '[text-anchor:middle] translate-y-vertical-double -translate-x-[18pt]',
            },
            scale(SSE, OFFSET)
        )
    );
    dispatch(offsetSingleStop('KS 45', { stationCode: 'A 20', strokeColor: 'stroke-asakusa', hideText: true }, scale(SSW, OFFSET)));
    dispatch(
        offsetSingleStop(
            'A 20',
            { stationCode: 'A 19', strokeColor: 'stroke-asakusa', textAlignment: TextAlignment.ESE },
            scaleToUnitY(SSW, OFFSET * 4)
        )
    );
};

const addKeiseiOshiage = (dispatch: AppDispatch) => {
    dispatch(
        spaceOutStops({
            stationPrefix: 'KS',
            startCount: 45,
            endCount: 49,
            textAlignments: [TextAlignment.ESE],
            offsets: [scaleToUnitY(NNE, MAJOR_LINE)],
        })
    );
};

const addTobuSkyTree = (dispatch: AppDispatch) => {
    dispatch(offsetSingleStop('TS 02', { stationCode: 'TS 04', textAlignment: TextAlignment.WNW }, scaleToUnitY(NNE, MAJOR_LINE)));

    dispatch(
        spaceOutStops({
            stationPrefix: 'TS',
            startCount: 4,
            endCount: 6,
            textAlignments: [TextAlignment.WNW],
            offsets: [scaleToUnitY(NNE, MAJOR_LINE)],
        })
    );

    dispatch(offsetSingleStop('TS 08', { stationCode: 'TS 07', textAlignment: TextAlignment.WSW }, scaleToUnitY(SSE, OFFSET * 4)));
};

const addTobuKameido = (dispatch: AppDispatch) => {
    dispatch(
        offsetSingleStop(
            'TS 04',
            { stationCode: 'TS 04 KAMEIDO', displayStationCode: 'TS 04', textAlignment: TextAlignment.WNW, hideText: true },
            scale(E, OFFSET)
        )
    );
    dispatch(offsetSingleStop('JB 23', { stationCode: 'TS 44', textAlignment: TextAlignment.UP }, scale(W, OFFSET)));
    dispatch(offsetSingleStop('TS 04 KAMEIDO', { stationCode: 'TS 41', textAlignment: TextAlignment.ENE }, scaleToUnitY(SSE, OFFSET * 3)));

    dispatch(
        spaceOutStops({
            stationPrefix: 'TS',
            startCount: 41,
            endCount: 43,
            textAlignments: [TextAlignment.ENE],
            offsets: [scaleToUnitY(SSE, OFFSET * 2)],
        })
    );
};

export const addUenoGrid = (dispatch: AppDispatch) => {
    dispatch(addUeno);
    dispatch(addAsakusa);
    dispatch(addSkyTree);
    dispatch(addKeiseiOshiage);
    dispatch(addTobuSkyTree);
    dispatch(addTobuKameido);
};
