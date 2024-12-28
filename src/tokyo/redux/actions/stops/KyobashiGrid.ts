import { MAJOR_LINE } from '../../../../utils/CommonCoordinates';
import { scaleToUnitX, SSW } from '../../../../utils/PathUtils';
import { offsetGridOfStops } from '../../slice/StopLocation';
import { AppDispatch } from '../../store';

export const addKyobashiGrid = (dispatch: AppDispatch) => {
    dispatch(
        offsetGridOfStops(
            [
                { stationCode: 'G 11', newStationData: { stationCode: 'G 10', strokeColor: 'stroke-ginza' } },
                { stationCode: 'A 13', newStationData: { stationCode: 'A 12', strokeColor: 'stroke-asakusa' } },
            ],
            scaleToUnitX(SSW, MAJOR_LINE)
        )
    );
};
