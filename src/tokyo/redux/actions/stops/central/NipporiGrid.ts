import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import {
    ENE,
    ESE,
    N,
    NNE,
    NNW,
    offsetCoordinates,
    scale,
    scaleToUnitX,
    scaleToUnitY,
    SSW,
    W,
    WNW,
    WSW,
} from '../../../../../utils/PathUtils';
import { addStopDefinition, selectMidpoint, selectOffset, TextAlignment } from '../../../slice/StopLocation';
import { fillInStops, offsetSingleStop, offsetStopGroup } from '../../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../../store';

const addUguisudani = (dispatch: AppDispatch) => {
    dispatch(
        offsetSingleStop(
            'JY 05',
            { stationCode: 'JY 06', strokeColor: 'stroke-yamanote', textAlignment: TextAlignment.WSW },
            scaleToUnitY(N, MAJOR_LINE),
            scale(WSW, OFFSET)
        )
    );
    dispatch(offsetSingleStop('JY 06', { stationCode: 'JK 31', strokeColor: 'stroke-keihin-tohoku', hideText: true }, scale(ENE, OFFSET)));
};

const addNishiNippori = (dispatch: AppDispatch) => {
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'JY 06',
                    newStationData: { stationCode: 'JY 07', strokeColor: 'stroke-yamanote', hideText: true },
                },
                {
                    stationCode: 'JY 07',
                    newStationData: { stationCode: 'JY 08', strokeColor: 'stroke-yamanote', hideText: true },
                },
                {
                    stationCode: 'JK 31',
                    newStationData: { stationCode: 'JK 32', strokeColor: 'stroke-keihin-tohoku', hideText: true },
                },
                {
                    stationCode: 'JK 32',
                    newStationData: { stationCode: 'JK 33', strokeColor: 'stroke-keihin-tohoku', hideText: true },
                },
            ],
            scaleToUnitY(NNW, MAJOR_LINE)
        )
    );
    dispatch(
        offsetSingleStop(
            'JY 08',
            { stationCode: 'C 16', strokeColor: 'stroke-chiyoda', textAlignment: TextAlignment.WNW },
            scale(W, OFFSET)
        )
    );
    dispatch(offsetSingleStop('JK 32', { stationCode: 'JJ 02', strokeColor: 'stroke-joban-rapid', hideText: true }, scale(ENE, OFFSET)));
    dispatch(offsetSingleStop('JY 07', { stationCode: 'KS 02', textAlignment: TextAlignment.WSW }, scale(WSW, OFFSET)));
};

const fillInChiyoda = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetSingleStop(
            'C 16',
            { stationCode: 'C 15', strokeColor: 'stroke-chiyoda', textAlignment: TextAlignment.WNW },
            scaleToUnitY(SSW, MAJOR_LINE * 1.5)
        )
    );
    dispatch(
        addStopDefinition({
            stationCode: 'C 14',
            location: selectMidpoint(getState(), 'C 15', 'C 13'),
            strokeColor: 'stroke-chiyoda',
            textAlignment: TextAlignment.WSW,
        })
    );
};

const addMinamiSenju = (dispatch: AppDispatch, getState: () => RootState) => {
    const { dy = 0 } = selectOffset(getState(), 'H 18', 'JY 07');
    dispatch(
        offsetSingleStop(
            'H 18',
            { stationCode: 'H 21', strokeColor: 'stroke-hibiya', hideText: true },
            scaleToUnitY(NNE, dy + MAJOR_LINE * 1.5 + OFFSET)
        )
    );
    dispatch(offsetSingleStop('H 21', { stationCode: 'JJ 04', strokeColor: 'stroke-joban-rapid', hideText: true }, scale(WNW, OFFSET)));
    dispatch(offsetSingleStop('H 21', { stationCode: 'TX 04', textAlignment: TextAlignment.ESE }, scale(ESE, OFFSET)));

    dispatch(
        addStopDefinition({
            stationCode: 'JJ 03',
            location: offsetCoordinates(selectMidpoint(getState(), 'JJ 02', 'JJ 04'), scaleToUnitX(W, MAJOR_LINE)),
            strokeColor: 'stroke-joban-rapid',
            textAlignment: TextAlignment.UP,
        })
    );

    dispatch(
        fillInStops({ stationPrefix: 'H', startCount: 18, endCount: 21, strokeColor: 'stroke-hibiya', textAlignments: [TextAlignment.ESE] })
    );
};

export const addNipporiGrid = (dispatch: AppDispatch) => {
    dispatch(addUguisudani);
    dispatch(addNishiNippori);
    dispatch(fillInChiyoda);
    dispatch(addMinamiSenju);
};
