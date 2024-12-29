import { MAJOR_LINE } from '../../../../map/GridLines';
import { OFFSET } from '../../../../utils/CommonCoordinates';
import { NNE, NNW, offsetCoordinates, scaleToUnitX, SSE, SSW, W } from '../../../../utils/PathUtils';
import { addStopDefinition, offsetGridOfStops, offsetSingleStop, selectIntersection, TextAlignment } from '../../slice/StopLocation';
import { AppDispatch } from '../../store';

const addYurakucho = (dispatch: AppDispatch) => {
    dispatch(
        offsetGridOfStops(
            [
                { stationCode: 'JY 01', newStationData: { stationCode: 'JY 30', strokeColor: 'stroke-yamanote', hideText: true } },
                { stationCode: 'JK 26', newStationData: { stationCode: 'JK 25', strokeColor: 'stroke-keihin-tohoku', hideText: true } },
            ],
            scaleToUnitX(SSW, MAJOR_LINE * 0.75)
        )
    );
    dispatch(
        offsetSingleStop(
            'JY 30',
            { stationCode: 'Y 18', strokeColor: 'stroke-yurakucho', textAlignment: TextAlignment.LEFT },
            scaleToUnitX(W, OFFSET)
        )
    );
};

const addGinzaItchome = (dispatch: AppDispatch, getState) => {
    const ginzaItchomeIntersection = selectIntersection(getState(), 'Y 18', SSE, 'G 10', SSW);
    dispatch(
        addStopDefinition({
            stationCode: 'Y 19',
            location: offsetCoordinates(ginzaItchomeIntersection, scaleToUnitX(SSE, OFFSET * 0.5)),
            strokeColor: 'stroke-yurakucho',
        })
    );
};

const addTsukiji = (dispatch: AppDispatch, getState) => {
    const tsukijiIntersection = selectIntersection(getState(), 'Y 19', SSE, 'H 12', SSW);
    dispatch(
        addStopDefinition({
            stationCode: 'Y 20',
            location: offsetCoordinates(tsukijiIntersection, scaleToUnitX(NNW, OFFSET * 0.5)),
            strokeColor: 'stroke-yurakucho',
            textAlignment: TextAlignment.LEFT,
        })
    );
    dispatch(
        addStopDefinition({
            stationCode: 'H 11',
            location: offsetCoordinates(tsukijiIntersection, scaleToUnitX(NNE, OFFSET * 0.5)),
            strokeColor: 'stroke-hibiya',
        })
    );
};

export const addYurakuchoGrid = (dispatch: AppDispatch) => {
    dispatch(addYurakucho);
    dispatch(addGinzaItchome);
    dispatch(addTsukiji);
};
