import { MAJOR_LINE } from '../../../../map/GridLines';
import { OFFSET } from '../../../../utils/CommonCoordinates';
import { E, NNW, offsetCoordinates, scale, scaleToUnitX, SSE, SSW, WNW } from '../../../../utils/PathUtils';
import { addStopDefinition, offsetGridOfStops, offsetSingleStop, selectIntersection } from '../../slice/StopLocation';
import { AppDispatch } from '../../store';

const addHibiya = (dispatch: AppDispatch, getState) => {
    const hibiyaIntersection = selectIntersection(getState(), 'C 11', SSW, 'H 09', NNW);
    dispatch(
        addStopDefinition({
            stationCode: 'C 09',
            strokeColor: 'stroke-chiyoda',
            location: offsetCoordinates(hibiyaIntersection, scaleToUnitX(SSW, OFFSET * 0.5)),
            hideText: true,
        })
    );
    dispatch(
        addStopDefinition({
            stationCode: 'H 08',
            strokeColor: 'stroke-hibiya',
            location: offsetCoordinates(hibiyaIntersection, scaleToUnitX(SSE, OFFSET * 0.5)),
        })
    );
    dispatch(offsetSingleStop('C 09', { stationCode: 'I 08', strokeColor: 'stroke-mita', hideText: true }, scale(WNW, OFFSET)));
};

const addGinzaStops = (dispatch: AppDispatch) => {
    dispatch(
        offsetGridOfStops(
            [
                { stationCode: 'G 10', newStationData: { stationCode: 'G 09', strokeColor: 'stroke-ginza', hideText: true } },
                { stationCode: 'A 12', newStationData: { stationCode: 'A 11', strokeColor: 'stroke-asakusa', hideText: true } },
            ],
            scaleToUnitX(SSW, MAJOR_LINE)
        )
    );
    dispatch(
        offsetGridOfStops(
            [
                { stationCode: 'G 09', newStationData: { stationCode: 'H 09', strokeColor: 'stroke-hibiya' } },
                { stationCode: 'A 11', newStationData: { stationCode: 'H 10', strokeColor: 'stroke-hibiya' } },
            ],
            scaleToUnitX(E, OFFSET)
        )
    );
    dispatch(offsetSingleStop('G 09', { stationCode: 'M 16', strokeColor: 'stroke-marunouchi', hideText: true }, scale(WNW, OFFSET)));
};

export const addGinzaGrid = (dispatch: AppDispatch) => {
    dispatch(addGinzaStops);
    dispatch(addHibiya);
};
