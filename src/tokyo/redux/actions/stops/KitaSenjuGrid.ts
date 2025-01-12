import { MAJOR_LINE } from '../../../../map/GridLines';
import { OFFSET } from '../../../../utils/CommonCoordinates';
import {
    E,
    findIntersectionFromSlopes,
    N,
    NNE,
    NNW,
    offsetCoordinates,
    scale,
    scaleToUnitX,
    scaleToUnitY,
    SSE,
    W,
    WNW,
} from '../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, selectMidpoint, selectStopLocation, TextAlignment } from '../../slice/StopLocation';
import { offsetSingleStop, offsetStopGroup, spaceOutStops } from '../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../store';

const addKitaSenju = (dispatch: AppDispatch) => {
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'JJ 04',
                    newStationData: { stationCode: 'JJ 05', strokeColor: 'stroke-joban-rapid', hideText: true },
                },
                {
                    stationCode: 'H 21',
                    newStationData: { stationCode: 'H 22', strokeColor: 'stroke-hibiya', hideText: true },
                },
                {
                    stationCode: 'TX 04',
                    newStationData: { stationCode: 'TX 05', hideText: true },
                },
            ],
            scaleToUnitY(NNE, MAJOR_LINE * 2.5)
        )
    );
    dispatch(offsetSingleStop('JJ 05', { stationCode: 'C 18', strokeColor: 'stroke-chiyoda', hideText: true }, scale(WNW, OFFSET)));
    dispatch(offsetSingleStop('C 18', { stationCode: 'TS 09', textAlignment: TextAlignment.WSW }, scale(W, OFFSET)));
};

const addMachiya = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(offsetSingleStop('H 20', { stationCode: 'SA 01', textAlignment: TextAlignment.WSW }, scaleToUnitY(N, OFFSET * 3)));

    const chiyodaMidpoint = selectMidpoint(getState(), 'C 16', 'C 18');
    const minowaSakura = selectStopLocation(getState(), 'SA 01');
    const machiyaIntersection = findIntersectionFromSlopes({
        start: { location: chiyodaMidpoint, direction: E },
        end: { location: minowaSakura, direction: NNW },
    });
    dispatch(
        addStopDefinition({
            stationCode: 'SA 06',
            location: offsetCoordinates(machiyaIntersection, scaleToUnitY(NNW, OFFSET * 2)),
            textAlignment: TextAlignment.ENE,
        })
    );
    dispatch(offsetSingleStop('SA 06', { stationCode: 'KS 04', hideText: true }, scaleToUnitY(N, OFFSET * 2)));
    dispatch(
        offsetSingleStop('KS 04', { stationCode: 'C 17', strokeColor: 'stroke-chiyoda', textAlignment: TextAlignment.UP }, scale(N, OFFSET))
    );

    dispatch(
        spaceOutStops({
            stationPrefix: 'SA',
            startCount: 6,
            endCount: 2,
            textAlignments: [TextAlignment.ENE],
            offsets: [scaleToUnitY(SSE, OFFSET * 2.5)],
        })
    );

    dispatch(
        addStopDefinition({
            stationCode: 'KS 03',
            location: offsetCoordinates(selectMidpoint(getState(), 'KS 02', 'KS 04'), scaleToUnitX(WNW, OFFSET * 2.5)),
            textAlignment: TextAlignment.ESE,
        })
    );
};

export const addUshida = (dispatch: AppDispatch, getState: () => RootState) => {
    const ushidaIntersection = selectIntersection(getState(), 'TS 09', SSE, 'KS 04', E);

    dispatch(
        addStopDefinition({
            stationCode: 'TS 08',
            location: offsetCoordinates(ushidaIntersection, scaleToUnitY(SSE, OFFSET * 2)),
            textAlignment: TextAlignment.WSW,
        })
    );
    dispatch(
        offsetSingleStop(
            'TS 08',
            {
                stationCode: 'KS 06',
                textAlignment: TextAlignment.UP,
            },
            scaleToUnitY(N, OFFSET * 2)
        )
    );

    dispatch(
        addStopDefinition({
            stationCode: 'KS 05',
            location: selectMidpoint(getState(), 'KS 04', 'KS 06'),
            textAlignment: TextAlignment.DOWN,
        })
    );
};

export const addKitaSenjuGrid = (dispatch: AppDispatch) => {
    dispatch(addKitaSenju);
    dispatch(addMachiya);
    dispatch(addUshida);
};
