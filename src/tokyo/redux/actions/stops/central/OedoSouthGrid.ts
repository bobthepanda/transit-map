import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import { E, ESE, offsetCoordinates, S, scale, scaleToUnitX, scaleToUnitY, SSE, SSW } from '../../../../../utils/PathUtils';
import { addStopDefinition, selectMidpoint, TextAlignment } from '../../../slice/StopLocation';
import { offsetSingleStop, offsetStopGroup } from '../../../slice/StopLocationActions';
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

export const addOedoSouthGrid = (dispatch: AppDispatch) => {
    dispatch(addYoyogi);
};
