import { MAJOR_LINE } from '../../../../map/GridLines';
import { OFFSET } from '../../../../utils/CommonCoordinates';
import { midPoint, offsetCoordinates, scale, scaleToUnitX, SSE, SSW, WSW } from '../../../../utils/PathUtils';
import { addStopDefinition, offsetGridOfStops, offsetSingleStop, selectIntersection, TextAlignment } from '../../slice/StopLocation';
import { AppDispatch } from '../../store';

const addShimbashi = (dispatch: AppDispatch) => {
    dispatch(
        offsetGridOfStops(
            [
                { stationCode: 'JY 30', newStationData: { stationCode: 'JY 29', strokeColor: 'stroke-yamanote', hideText: true } },
                { stationCode: 'JK 25', newStationData: { stationCode: 'JK 24', strokeColor: 'stroke-keihin-tohoku', hideText: true } },
                {
                    stationCode: 'Y 18',
                    newStationData: { stationCode: 'G 08', strokeColor: 'stroke-ginza', hideText: true },
                },
            ],
            scaleToUnitX(SSW, MAJOR_LINE * 1.75)
        )
    );

    dispatch(
        offsetSingleStop(
            'G 08',
            { stationCode: 'A 10', strokeColor: 'stroke-asakusa', textAlignment: TextAlignment.LEFT },
            scale(WSW, OFFSET)
        )
    );
};

const addToranomon = (dispatch: AppDispatch, getState) => {
    const toranomonIntersection = selectIntersection(getState(), 'H 07', SSW, 'G 08', SSE);

    dispatch(
        addStopDefinition({
            stationCode: 'G 07',
            strokeColor: 'stroke-ginza',
            location: offsetCoordinates(toranomonIntersection, scaleToUnitX(SSE, OFFSET * 0.5)),
        })
    );
    dispatch(
        addStopDefinition({
            stationCode: 'H 06',
            strokeColor: 'stroke-hibiya',
            location: offsetCoordinates(toranomonIntersection, scaleToUnitX(SSW, OFFSET)),
            textAlignment: TextAlignment.LEFT,
        })
    );
};

const addUchisawiwaicho = (dispatch: AppDispatch, getState) => {
    const marunouchiIntersection = selectIntersection(getState(), 'M 15', SSE, 'I 08', SSW);
    const ginzaIntersection = selectIntersection(getState(), 'G 07', SSE, 'I 08', SSW);
    dispatch(
        addStopDefinition({
            stationCode: 'I 07',
            strokeColor: 'stroke-mita',
            location: midPoint(marunouchiIntersection, ginzaIntersection),
        })
    );
};

export const addShimbashiGrid = (dispatch: AppDispatch) => {
    dispatch(addShimbashi);
    dispatch(addToranomon);
    dispatch(addUchisawiwaicho);
};
