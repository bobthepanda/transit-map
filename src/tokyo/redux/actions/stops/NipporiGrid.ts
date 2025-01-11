import { MAJOR_LINE } from '../../../../map/GridLines';
import { OFFSET } from '../../../../utils/CommonCoordinates';
import { ENE, N, NNW, scale, scaleToUnitY, SSW, W } from '../../../../utils/PathUtils';
import { addStopDefinition, selectMidpoint, TextAlignment } from '../../slice/StopLocation';
import { offsetSingleStop, offsetStopGroup } from '../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../store';

const addUguisudani = (dispatch: AppDispatch) => {
    dispatch(
        offsetSingleStop(
            'JY 05',
            { stationCode: 'JY 06', strokeColor: 'stroke-yamanote', textAlignment: TextAlignment.WSW },
            scaleToUnitY(N, MAJOR_LINE)
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
                    newStationData: { stationCode: 'JY 07', strokeColor: 'stroke-yamanote', textAlignment: TextAlignment.WSW },
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

export const addNipporiGrid = (dispatch: AppDispatch) => {
    dispatch(addUguisudani);
    dispatch(addNishiNippori);
    dispatch(fillInChiyoda);
};
