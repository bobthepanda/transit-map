import { MAJOR_LINE } from '../../../../map/GridLines';
import { OFFSET } from '../../../../utils/CommonCoordinates';
import { E, NNE, offsetCoordinates, S, scale, scaleToUnitY, SSE } from '../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, selectMidpoint, TextAlignment } from '../../slice/StopLocation';
import { offsetSingleStop, offsetStopGroup } from '../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../store';

const addEastGrid = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'Y 20', newStationData: { stationCode: 'Y 21', strokeColor: 'stroke-yurakucho', hideText: true } },
                { stationCode: 'H 11', newStationData: { stationCode: 'E 16', strokeColor: 'stroke-oedo' } },
                { stationCode: 'T 11', newStationData: { stationCode: 'T 12', strokeColor: 'stroke-tozai', hideText: true } },
                { stationCode: 'H 13', newStationData: { stationCode: 'E 15', strokeColor: 'stroke-oedo' } },
            ],
            scaleToUnitY(SSE, MAJOR_LINE * 0.75)
        )
    );

    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'JE 02 M',
                    newStationData: {
                        stationCode: 'JE 03 M',
                        displayStationCode: 'JE 03',
                        strokeColor: 'stroke-musashino',
                        textAlignment: TextAlignment.ENE,
                    },
                },
                { stationCode: 'JE 02', newStationData: { stationCode: 'JE 03', strokeColor: 'stroke-keiyo', hideText: true } },
            ],
            scaleToUnitY(SSE, OFFSET * 5)
        )
    );

    const kiyosumiIntersection = selectIntersection(getState(), 'E 15', NNE, 'Z 10', E);
    dispatch(
        addStopDefinition({
            stationCode: 'E 14',
            location: offsetCoordinates(kiyosumiIntersection, scaleToUnitY(NNE, OFFSET)),
            strokeColor: 'stroke-oedo',
            textAlignment: TextAlignment.WNW,
        })
    );
    dispatch(offsetSingleStop('E 14', { stationCode: 'Z 11', strokeColor: 'stroke-hanzomon', hideText: true }, scale(S, OFFSET)));

    const ryogokuIntersection = selectIntersection(getState(), 'E 15', NNE, 'JB 20', E);
    dispatch(
        addStopDefinition({
            stationCode: 'E 12',
            location: offsetCoordinates(ryogokuIntersection, scaleToUnitY(NNE, OFFSET)),
            strokeColor: 'stroke-oedo',
            textAlignment: TextAlignment.WNW,
        })
    );
    dispatch(offsetSingleStop('E 12', { stationCode: 'JB 21', strokeColor: 'stroke-chuo-sobu', hideText: true }, scale(S, OFFSET)));

    dispatch(
        addStopDefinition({
            stationCode: 'E 13',
            location: selectMidpoint(getState(), 'E 12', 'E 14'),
            strokeColor: 'stroke-oedo',
            textAlignment: TextAlignment.WNW,
        })
    );
    dispatch(offsetSingleStop('E 13', { stationCode: 'S 10', strokeColor: 'stroke-shinjuku', hideText: true }, scale(S, OFFSET)));
};

export const addOedoGrid = (dispatch: AppDispatch) => {
    dispatch(addEastGrid);
};
