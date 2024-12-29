import { Coordinates } from '../../../../interfaces/Dimensions';
import { MAJOR_LINE, OFFSET } from '../../../../utils/CommonCoordinates';
import { E, N, NNE, offsetCoordinates, S, scale, scaleToUnitX, SSE, SSW, W, WNW } from '../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, TextAlignment } from '../../slice/StopLocation';
import { offsetSingleStop, offsetStopGroup } from '../../slice/StopLocationActions';
import { AppDispatch } from '../../store';

const addKanda = (dispatch: AppDispatch) => {
    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'JC 01', newStationData: { stationCode: 'JC 02', strokeColor: 'stroke-chuo-rapid', hideText: true } },
                { stationCode: 'JY 01', newStationData: { stationCode: 'JY 02', strokeColor: 'stroke-yamanote', hideText: true } },
                { stationCode: 'JK 26', newStationData: { stationCode: 'JK 27', strokeColor: 'stroke-keihin-tohoku', hideText: true } },
            ],
            scaleToUnitX(NNE, MAJOR_LINE * 1.5)
        )
    );
    dispatch(
        offsetSingleStop(
            'JC 02',
            { stationCode: 'G 13', strokeColor: 'stroke-ginza', textAlignment: TextAlignment.WNW },
            scale(WNW, OFFSET)
        )
    );
};
const addNingyocho = (dispatch: AppDispatch, getState) => {
    const ningyochoIntersection: Coordinates = selectIntersection(getState(), 'H 15', SSE, 'A 13', NNE);
    dispatch(
        addStopDefinition({
            stationCode: 'H 14',
            location: offsetCoordinates(ningyochoIntersection, scaleToUnitX(SSE, OFFSET * 0.5)),
            strokeColor: 'stroke-hibiya',
            textAlignment: TextAlignment.ENE,
        })
    );
    dispatch(
        addStopDefinition({
            stationCode: 'A 14',
            location: offsetCoordinates(ningyochoIntersection, scaleToUnitX(SSW, OFFSET * 0.5)),
            strokeColor: 'stroke-asakusa',
            hideText: true,
        })
    );
    dispatch(
        offsetSingleStop(
            'A 14',
            { stationCode: 'Z 10', strokeColor: 'stroke-hanzomon', textAlignment: TextAlignment.DOWN },
            scaleToUnitX(S, OFFSET * 2.75)
        )
    );
};

const addMitsukoshimae = (dispatch: AppDispatch, getState) => {
    const mitsukoshimaeIntersection: Coordinates = selectIntersection(getState(), 'Z 10', W, 'G 11', NNE);
    dispatch(
        addStopDefinition({
            stationCode: 'Z 09',
            location: offsetCoordinates(mitsukoshimaeIntersection, scaleToUnitX(E, (OFFSET * 2) / 3)),
            strokeColor: 'stroke-hanzomon',
            textAlignment: 'translate-y-vertical-double translate-x-[-10pt]',
        })
    );
    dispatch(
        addStopDefinition({
            stationCode: 'G 12',
            location: offsetCoordinates(mitsukoshimaeIntersection, scaleToUnitX(NNE, (OFFSET * 2) / 3)),
            strokeColor: 'stroke-ginza',
            hideText: true,
        })
    );
    dispatch(
        offsetSingleStop(
            'G 12',
            { stationCode: 'JO 18', strokeColor: 'stroke-sobu-rapid', textAlignment: TextAlignment.UP },
            scaleToUnitX(N, MAJOR_LINE * 0.5)
        )
    );
};

export const addKandaGrid = (dispatch: AppDispatch) => {
    dispatch(addKanda);
    dispatch(
        offsetSingleStop(
            'JY 02',
            { stationCode: 'H 15', strokeColor: 'stroke-hibiya' },
            scaleToUnitX(SSE, MAJOR_LINE * 0.75),
            scaleToUnitX(NNE, MAJOR_LINE * 0.25)
        )
    );
    dispatch(addNingyocho);
    dispatch(addMitsukoshimae);
};
