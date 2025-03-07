import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import {
    E,
    ESE,
    N,
    NNE,
    NNW,
    offsetCoordinates,
    roundPoint,
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
import { addStopDefinition, selectMidpoint, selectStopLocation, TextAlignment } from '../../../slice/StopLocation';
import { offsetEquallySpacedStops, offsetSingleStop, offsetStopGroup } from '../../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../../store';

const addYoyogi = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'JY 17', newStationData: { stationCode: 'JY 18', hideText: true, strokeColor: 'stroke-yamanote' } },
                { stationCode: 'JB 10', newStationData: { stationCode: 'JB 11', hideText: true, strokeColor: 'stroke-chuo-sobu' } },
            ],
            scaleToUnitY(SSW, MAJOR_LINE)
        )
    );
    dispatch(
        offsetSingleStop('JB 11', { stationCode: 'E 26', strokeColor: 'stroke-oedo', textAlignment: TextAlignment.ESE }, scale(ESE, OFFSET))
    );

    dispatch(
        offsetSingleStop(
            'JB 11',
            { stationCode: 'JB 12', strokeColor: 'stroke-chuo-sobu', textAlignment: TextAlignment.UP },
            scaleToUnitY(SSE, MAJOR_LINE * 0.5 + OFFSET),
            scaleToUnitX(E, MAJOR_LINE * 1.5)
        )
    );

    dispatch(
        offsetSingleStop(
            'JB 12',
            { stationCode: 'JB 13', strokeColor: 'stroke-chuo-sobu', textAlignment: TextAlignment.UP },
            scaleToUnitX(E, MAJOR_LINE * 2)
        )
    );

    const OEDO_MIDPOINT = offsetCoordinates(selectMidpoint(getState(), 'JB 12', 'JB 13'), scaleToUnitY(S, MAJOR_LINE * 0.5));

    dispatch(
        addStopDefinition({
            stationCode: 'E 25',
            location: OEDO_MIDPOINT,
            strokeColor: 'stroke-oedo',
            textAlignment: TextAlignment.DOWN,
        })
    );
};

const addHarajuku = (dispatch: AppDispatch, getState: () => RootState) => {
    const HARAJUKU = roundPoint(offsetCoordinates(selectStopLocation(getState(), 'JY 18'), scaleToUnitY(S, MAJOR_LINE * 2.5)));

    dispatch(
        addStopDefinition({
            stationCode: 'JY 19',
            location: HARAJUKU,
            strokeColor: 'stroke-yamanote',
            textAlignment: TextAlignment.ENE,
        })
    );

    dispatch(
        offsetSingleStop(
            'JY 19',
            { stationCode: 'F 15', strokeColor: 'stroke-fukutoshin', textAlignment: TextAlignment.ENE },
            scaleToUnitX(E, OFFSET * 5)
        )
    );
    dispatch(offsetSingleStop('F 15', { stationCode: 'C 03', strokeColor: 'stroke-chiyoda', hideText: true }, scale(S, OFFSET)));
    dispatch(
        offsetSingleStop(
            'F 15',
            { stationCode: 'F 14', strokeColor: 'stroke-fukutoshin', textAlignment: TextAlignment.ENE },
            scaleToUnitY(NNW, OFFSET * 3.5)
        )
    );
};

const addShibuya = (dispatch: AppDispatch) => {
    dispatch(
        offsetSingleStop('JY 19', { stationCode: 'JY 20', strokeColor: 'stroke-yamanote', hideText: true }, scaleToUnitX(SSE, MAJOR_LINE))
    );

    dispatch(
        offsetEquallySpacedStops(
            'JY 20',
            [
                { stationCode: 'JS 19', strokeColor: 'stroke-shonan-shinjuku', hideText: true },
                { stationCode: 'JA 10', strokeColor: 'stroke-saikyo', hideText: true },
            ],
            scale(WSW, OFFSET)
        )
    );

    dispatch(offsetSingleStop('JY 20', { stationCode: 'G 01', strokeColor: 'stroke-ginza', hideText: true }, scale(N, OFFSET)));

    dispatch(offsetSingleStop('G 01', { stationCode: 'Z 01', strokeColor: 'stroke-hanzomon', hideText: true }, scale(N, OFFSET)));
    dispatch(offsetSingleStop('JY 20', { stationCode: 'F 16', strokeColor: 'stroke-fukutoshin', hideText: true }, scale(ESE, OFFSET)));
};

export const fillInGinza = (dispatch: AppDispatch, getState: () => RootState) => {
    const G_04 = roundPoint(
        offsetCoordinates(selectStopLocation(getState(), 'G 05'), scaleToUnitX(W, MAJOR_LINE), scaleToUnitX(SSW, MAJOR_LINE * 0.5))
    );

    dispatch(addStopDefinition({ stationCode: 'G 04', location: G_04, strokeColor: 'stroke-ginza', hideText: true }));
    dispatch(offsetSingleStop('G 04', { stationCode: 'Z 03', strokeColor: 'stroke-hanzomon', hideText: true }, scale(WNW, OFFSET)));
    dispatch(
        offsetSingleStop('Z 03', { stationCode: 'E 24', strokeColor: 'stroke-oedo', textAlignment: TextAlignment.WSW }, scale(W, OFFSET))
    );

    dispatch(
        offsetSingleStop('G 01', { stationCode: 'G 02', strokeColor: 'stroke-ginza', hideText: true }, scaleToUnitX(E, MAJOR_LINE * 1.5))
    );
    dispatch(
        offsetEquallySpacedStops(
            'G 02',
            [
                { stationCode: 'Z 02', strokeColor: 'stroke-hanzomon', hideText: true },
                { stationCode: 'C 04', strokeColor: 'stroke-chiyoda', textAlignment: TextAlignment.ENE },
            ],
            scale(N, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop(
            'G 04',
            { stationCode: 'G 03', strokeColor: 'stroke-ginza', textAlignment: TextAlignment.ESE },
            scaleToUnitY(SSW, MAJOR_LINE)
        )
    );
};

const fillInChiyoda = (dispatch: AppDispatch) => {
    dispatch(
        offsetSingleStop(
            'G 03',
            { stationCode: 'C 05', strokeColor: 'stroke-chiyoda', textAlignment: TextAlignment.ESE },
            scaleToUnitY(SSE, MAJOR_LINE)
        )
    );

    dispatch(
        offsetSingleStop(
            'C 05',
            { stationCode: 'C 06', strokeColor: 'stroke-chiyoda', textAlignment: TextAlignment.ESE },
            scaleToUnitY(NNE, MAJOR_LINE * 1.5)
        )
    );
};

export const addShibuyaGrid = (dispatch: AppDispatch) => {
    dispatch(addYoyogi);
    dispatch(addHarajuku);
    dispatch(addShibuya);
    dispatch(fillInGinza);
    dispatch(fillInChiyoda);
};
