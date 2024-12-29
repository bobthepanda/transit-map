import { Coordinates } from '../../../../interfaces/Dimensions';
import { MAJOR_LINE, OFFSET } from '../../../../utils/CommonCoordinates';
import {
    ENE,
    findIntersectionFromSlopes,
    NNE,
    NNW,
    offsetCoordinates,
    scale,
    scaleToUnitX,
    SSE,
    SSW,
    WNW,
    WSW,
} from '../../../../utils/PathUtils';
import {
    addStopDefinition,
    offsetSingleStop,
    selectIntersection,
    selectMidpoint,
    selectStopLocation,
    TextAlignment,
} from '../../slice/StopLocation';
import { AppDispatch, RootState } from '../../store';

const addOtemachi = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetSingleStop(
            'JY 01',
            { stationCode: 'M 18', strokeColor: 'stroke-marunouchi', hideText: true },
            scaleToUnitX(NNW, MAJOR_LINE * 0.5),
            scaleToUnitX(NNE, MAJOR_LINE * 0.25)
        )
    );
    dispatch(
        offsetSingleStop(
            'M 18',
            { stationCode: 'C 11', strokeColor: 'stroke-chiyoda', hideText: true },
            scaleToUnitX(NNW, MAJOR_LINE * 0.5)
        )
    );
    dispatch(offsetSingleStop('C 11', { stationCode: 'I 09', strokeColor: 'stroke-mita', hideText: true }, scale(WNW, OFFSET)));

    const T_09 = selectMidpoint(getState(), 'M 18', 'C 11');
    dispatch(
        addStopDefinition({
            stationCode: 'T 09',
            strokeColor: 'stroke-tozai',
            location: offsetCoordinates(T_09, scaleToUnitX(WSW, OFFSET)),
            textAlignment: TextAlignment.DOWN,
        })
    );
    dispatch(
        offsetSingleStop('T 09', { stationCode: 'Z 08', strokeColor: 'stroke-hanzomon', hideText: true }, scaleToUnitX(ENE, OFFSET * 3.5))
    );
};

export const addNihombashi = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetSingleStop(
            'JY 01',
            { stationCode: 'G 11', strokeColor: 'stroke-ginza' },
            scaleToUnitX(SSE, MAJOR_LINE * 0.75),
            scaleToUnitX(NNE, MAJOR_LINE * 0.5)
        )
    );
    dispatch(offsetSingleStop('G 11', { stationCode: 'A 13', strokeColor: 'stroke-asakusa' }, scaleToUnitX(SSE, MAJOR_LINE * 0.5)));
    dispatch(
        addStopDefinition({
            location: offsetCoordinates(selectMidpoint(getState(), 'G 11', 'A 13'), scaleToUnitX(WSW, (OFFSET * 2) / 3)),
            stationCode: 'T 10',
            strokeColor: 'stroke-tozai',
            hideText: true,
        })
    );
};
const addHatchobori = (dispatch: AppDispatch, getState) => {
    const hatchoboriIntersection: Coordinates = selectIntersection(getState(), 'JE 01', SSE, 'H 13', SSW);
    dispatch(
        addStopDefinition({
            stationCode: 'H 12',
            location: offsetCoordinates(hatchoboriIntersection, scaleToUnitX(SSW, OFFSET * 0.5)),
            strokeColor: 'stroke-hibiya',
            hideText: true,
        })
    );
    dispatch(
        addStopDefinition({
            stationCode: 'JE 02',
            location: offsetCoordinates(hatchoboriIntersection, scaleToUnitX(SSE, OFFSET * 0.5)),
            strokeColor: 'stroke-keiyo',
            hideText: true,
        })
    );
    dispatch(
        offsetSingleStop(
            'JE 02',
            { stationCode: 'JE 02 M', strokeColor: 'stroke-musashino', displayStationCode: 'JE 02' },
            scale(ENE, OFFSET)
        )
    );
};
const addKayabacho = (dispatch: AppDispatch, getState) => {
    const hibiyaOffset: Coordinates = offsetCoordinates(selectStopLocation(getState(), 'A 13'), scaleToUnitX(SSE, MAJOR_LINE * 0.5));
    const tozaiStation: Coordinates = selectStopLocation(getState(), 'T 10');
    const kayabachoIntersection: Coordinates = findIntersectionFromSlopes({
        start: { location: hibiyaOffset, direction: SSW },
        end: { location: tozaiStation, direction: SSE },
    });
    dispatch(
        addStopDefinition({
            stationCode: 'H 13',
            location: offsetCoordinates(kayabachoIntersection, scaleToUnitX(NNE, OFFSET * 0.5)),
            strokeColor: 'stroke-hibiya',
        })
    );
    dispatch(
        addStopDefinition({
            stationCode: 'T 11',
            location: offsetCoordinates(kayabachoIntersection, scaleToUnitX(NNW, OFFSET * 0.5)),
            strokeColor: 'stroke-tozai',
            hideText: true,
        })
    );
};

export const addTozaiGrid = (dispatch: AppDispatch) => {
    dispatch(addNihombashi);
    dispatch(addOtemachi);
    dispatch(addKayabacho);
    dispatch(addHatchobori);
};
