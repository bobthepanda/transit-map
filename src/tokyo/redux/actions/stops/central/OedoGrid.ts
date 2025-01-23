import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import {
    E,
    ESE,
    N,
    NNE,
    NNW,
    offsetCoordinates,
    S,
    scale,
    scaleToUnitX,
    scaleToUnitY,
    SSE,
    SSW,
    W,
    WNW,
} from '../../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, selectMidpoint, selectOffset, TextAlignment } from '../../../slice/StopLocation';
import { offsetSingleStop, offsetStopGroup } from '../../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../../store';

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
        offsetSingleStop(
            'E 15',
            { stationCode: 'T 13', strokeColor: 'stroke-tozai', textAlignment: TextAlignment.UP },
            scaleToUnitX(SSE, OFFSET * 2),
            scaleToUnitX(E, MAJOR_LINE)
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
    dispatch(offsetSingleStop('E 13', { stationCode: 'S 11', strokeColor: 'stroke-shinjuku', hideText: true }, scale(S, OFFSET)));
    dispatch(
        offsetSingleStop(
            'S 11',
            { stationCode: 'S 10', strokeColor: 'stroke-shinjuku', textAlignment: TextAlignment.DOWN },
            scaleToUnitX(W, MAJOR_LINE)
        )
    );

    dispatch(
        addStopDefinition({
            stationCode: 'C 13',
            location: selectIntersection(getState(), 'JY 04', W, 'C 12', NNE),
            strokeColor: 'stroke-chiyoda',
            textAlignment: TextAlignment.WNW,
        })
    );
};

const addOkachimachi = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'JY 03',
                    newStationData: { stationCode: 'JY 04', strokeColor: 'stroke-yamanote', textAlignment: TextAlignment.WNW },
                },
                { stationCode: 'JK 28', newStationData: { stationCode: 'JK 29', strokeColor: 'stroke-keihin-tohoku', hideText: true } },
            ],
            scaleToUnitY(NNE, MAJOR_LINE + OFFSET)
        )
    );
    dispatch(
        addStopDefinition({
            stationCode: 'H 17',
            strokeColor: 'stroke-hibiya',
            textAlignment: TextAlignment.ESE,
            location: selectIntersection(getState(), 'H 16', NNE, 'JK 29', ESE),
        })
    );
    dispatch(
        offsetSingleStop(
            'JY 04',
            { stationCode: 'E 09', strokeColor: 'stroke-oedo', textAlignment: TextAlignment.UP },
            scaleToUnitY(N, OFFSET * 2)
        )
    );

    dispatch(
        offsetSingleStop(
            'E 09',
            { stationCode: 'G 15', strokeColor: 'stroke-ginza', textAlignment: TextAlignment.WNW },
            scaleToUnitX(WNW, OFFSET * 4)
        )
    );

    dispatch(
        offsetSingleStop(
            'G 15',
            { stationCode: 'G 14', strokeColor: 'stroke-ginza', textAlignment: TextAlignment.WNW },
            scaleToUnitY(SSW, MAJOR_LINE * 1.5)
        )
    );
};

const addKuramae = (dispatch: AppDispatch, getState: () => RootState) => {
    const { dy = 0 } = selectOffset(getState(), 'A 16', 'E 09');
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'A 16',
                    newStationData: { stationCode: 'A 17', strokeColor: 'stroke-asakusa', hideText: true },
                },
                {
                    stationCode: 'JB 20',
                    newStationData: {
                        stationCode: 'E 11',
                        strokeColor: 'stroke-oedo',
                        textAlignment: '-translate-x-[10pt] translate-y-vertical-double',
                    },
                },
            ],
            scaleToUnitY(NNE, dy + OFFSET)
        )
    );

    dispatch(
        addStopDefinition({
            stationCode: 'E 10',
            location: offsetCoordinates(selectMidpoint(getState(), 'E 09', 'E 11'), scaleToUnitX(E, OFFSET * 2.875)),
            strokeColor: 'stroke-oedo',
            textAlignment: TextAlignment.UP,
        })
    );
    dispatch(offsetSingleStop('E 10', { stationCode: 'TX 02', hideText: true }, scale(S, OFFSET)));
};

const addKasuga = (dispatch: AppDispatch, getState: () => RootState) => {
    const { dy = 0 } = selectOffset(getState(), 'I 11', 'E 09');
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'I 11',
                    newStationData: { stationCode: 'I 12', strokeColor: 'stroke-mita', textAlignment: TextAlignment.ENE },
                },
                { stationCode: 'JB 17', newStationData: { stationCode: 'E 07', strokeColor: 'stroke-oedo', hideText: true } },
                {
                    stationCode: 'M 20',
                    newStationData: { stationCode: 'M 21', strokeColor: 'stroke-marunouchi', textAlignment: TextAlignment.ENE },
                },
                { stationCode: 'JB 18', newStationData: { stationCode: 'E 08', strokeColor: 'stroke-oedo', hideText: true } },
            ],
            scaleToUnitY(NNW, dy + OFFSET)
        )
    );
};

const addNorthGrid = (dispatch: AppDispatch) => {
    dispatch(addOkachimachi);
    dispatch(addKuramae);
    dispatch(addKasuga);
};

export const addOedoGrid = (dispatch: AppDispatch) => {
    dispatch(addEastGrid);
    dispatch(addNorthGrid);
};
