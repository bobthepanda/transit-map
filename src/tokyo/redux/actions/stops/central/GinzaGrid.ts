import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import { E, ENE, NNW, offsetCoordinates, scale, scaleToUnitX, SSE, SSW, W, WNW } from '../../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, selectMidpoint, TextAlignment } from '../../../slice/StopLocation';
import { offsetSingleStop, offsetStopGroup } from '../../../slice/StopLocationActions';
import { AppDispatch } from '../../../store';

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
            textAlignment: TextAlignment.ENE,
        })
    );
    dispatch(offsetSingleStop('C 09', { stationCode: 'I 08', strokeColor: 'stroke-mita', hideText: true }, scale(WNW, OFFSET)));
};

const addGinzaStops = (dispatch: AppDispatch) => {
    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'G 10', newStationData: { stationCode: 'G 09', strokeColor: 'stroke-ginza', hideText: true } },
                {
                    stationCode: 'A 12',
                    newStationData: { stationCode: 'A 11', strokeColor: 'stroke-asakusa', textAlignment: TextAlignment.WNW },
                },
            ],
            scaleToUnitX(SSW, MAJOR_LINE)
        )
    );
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'G 09',
                    newStationData: { stationCode: 'H 09', strokeColor: 'stroke-hibiya', textAlignment: TextAlignment.ENE },
                },
                {
                    stationCode: 'A 11',
                    newStationData: { stationCode: 'H 10', strokeColor: 'stroke-hibiya', hideText: true },
                },
            ],
            scaleToUnitX(E, OFFSET)
        )
    );
    dispatch(offsetSingleStop('G 09', { stationCode: 'M 16', strokeColor: 'stroke-marunouchi', hideText: true }, scale(WNW, OFFSET)));
};

const addKasumigaseki = (dispatch: AppDispatch) => {
    dispatch(
        offsetSingleStop(
            'C 09',
            { stationCode: 'H 07', strokeColor: 'stroke-hibiya', textAlignment: TextAlignment.WNW },
            scaleToUnitX(W, MAJOR_LINE + OFFSET)
        )
    );
    dispatch(offsetSingleStop('H 07', { stationCode: 'M 15', strokeColor: 'stroke-marunouchi', hideText: true }, scale(E, OFFSET)));
    dispatch(offsetSingleStop('M 15', { stationCode: 'C 08', strokeColor: 'stroke-ginza', hideText: true }, scale(ENE, OFFSET)));
};

export const addGinzaGrid = (dispatch: AppDispatch, getState) => {
    dispatch(addGinzaStops);
    dispatch(addHibiya);

    const chiyodaMidpoint = selectMidpoint(getState(), 'C 09', 'C 11');
    dispatch(
        addStopDefinition({
            stationCode: 'C 10',
            location: chiyodaMidpoint,
            strokeColor: 'stroke-chiyoda',
            textAlignment: TextAlignment.ESE,
        })
    );

    dispatch(addKasumigaseki);
};
