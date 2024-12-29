import { MAJOR_LINE } from '../../../../utils/CommonCoordinates';
import { scaleToUnitX, SSW } from '../../../../utils/PathUtils';
import { TextAlignment } from '../../slice/StopLocation';
import { offsetStopGroup } from '../../slice/StopLocationActions';
import { AppDispatch } from '../../store';

export const addKyobashiGrid = (dispatch: AppDispatch) => {
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'G 11',
                    newStationData: { stationCode: 'G 10', strokeColor: 'stroke-ginza', textAlignment: TextAlignment.ESE },
                },
                {
                    stationCode: 'A 13',
                    newStationData: { stationCode: 'A 12', strokeColor: 'stroke-asakusa', textAlignment: TextAlignment.ESE },
                },
            ],
            scaleToUnitX(SSW, MAJOR_LINE)
        )
    );
};
