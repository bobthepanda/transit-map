import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import {
    E,
    ENE,
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
    WSW,
} from '../../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, selectMidpoint, TextAlignment } from '../../../slice/StopLocation';
import { fillInStops, offsetSingleStop, offsetStopGroup, spaceOutStops } from '../../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../../store';

const addKeiseiToMusashino = (dispatch: AppDispatch) => {
    dispatch(
        spaceOutStops({
            stationPrefix: 'KS',
            startCount: 11,
            endCount: 20,
            textAlignments: [TextAlignment.ENE],
            offsets: [scaleToUnitY(SSE, OFFSET * 2)],
        })
    );
};

const addJRToMusashino = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'KS 14',
                    newStationData: { stationCode: 'JB 27', strokeColor: 'stroke-chuo-sobu', textAlignment: TextAlignment.WSW },
                },
                {
                    stationCode: 'KS 16',
                    newStationData: { stationCode: 'JB 28', strokeColor: 'stroke-chuo-sobu', textAlignment: TextAlignment.WSW },
                },
            ],
            scaleToUnitX(WSW, OFFSET * 3)
        )
    );
    dispatch(
        offsetSingleStop(
            'KS 20',
            {
                stationCode: 'JB 30',
                strokeColor: 'stroke-chuo-sobu',
                textAlignment: '[text-anchor:end] -translate-x-[18pt]',
            },
            scaleToUnitX(WSW, OFFSET * 3),
            scaleToUnitY(SSE, OFFSET * 2)
        )
    );
    dispatch(
        addStopDefinition({
            stationCode: 'JB 29',
            strokeColor: 'stroke-chuo-sobu',
            textAlignment: TextAlignment.WSW,
            location: selectMidpoint(getState(), 'JB 28', 'JB 30'),
        })
    );
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'JB 27',
                    newStationData: { stationCode: 'JO 24', strokeColor: 'stroke-sobu-rapid', hideText: true },
                },
            ],
            scale(ENE, OFFSET)
        )
    );
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'JB 28',
                    newStationData: { stationCode: 'S 20', strokeColor: 'stroke-shinjuku', hideText: true },
                },
                {
                    stationCode: 'JB 30',
                    newStationData: { stationCode: 'T 23', strokeColor: 'stroke-tozai', hideText: true },
                },
                {
                    stationCode: 'T 23',
                    newStationData: { stationCode: 'JM 10', strokeColor: 'stroke-musashino', hideText: true },
                },
            ],
            scale(S, OFFSET)
        )
    );
};

const fillInShinjukuToMusashino = (dispatch: AppDispatch, getState: () => RootState) => {
    const shinjukuSSEAlignment = selectMidpoint(getState(), 'JB 25', 'JB 28');

    dispatch(
        offsetSingleStop(
            'S 20',
            { stationCode: 'S 19', strokeColor: 'stroke-shinjuku', textAlignment: TextAlignment.UP },
            scaleToUnitX(W, MAJOR_LINE + OFFSET * 2)
        )
    );

    dispatch(
        addStopDefinition({
            stationCode: 'S 18',
            location: offsetCoordinates(shinjukuSSEAlignment, scaleToUnitY(SSW, MAJOR_LINE * 2)),
            strokeColor: 'stroke-shinjuku',
            textAlignment: TextAlignment.WNW,
        })
    );

    dispatch(
        spaceOutStops({
            stationPrefix: 'S',
            startCount: 18,
            endCount: 14,
            strokeColor: 'stroke-shinjuku',
            textAlignments: [TextAlignment.WNW],
            offsets: [scaleToUnitY(SSW, MAJOR_LINE * 1.5)],
        })
    );
};
const fillInTozaiToMusashino = (dispatch: AppDispatch, getState: () => RootState) => {
    const tozaiSSEAlignment = selectMidpoint(getState(), 'S 18', 'T 23');

    dispatch(
        offsetSingleStop(
            'T 23',
            { stationCode: 'T 22', strokeColor: 'stroke-tozai', textAlignment: TextAlignment.DOWN },
            scaleToUnitX(W, MAJOR_LINE + OFFSET * 2)
        )
    );

    dispatch(
        addStopDefinition({
            stationCode: 'T 21',
            location: offsetCoordinates(tozaiSSEAlignment, scaleToUnitY(SSW, MAJOR_LINE)),
            strokeColor: 'stroke-tozai',
            textAlignment: TextAlignment.WNW,
        })
    );

    dispatch(
        spaceOutStops({
            stationPrefix: 'T',
            startCount: 21,
            endCount: 15,
            strokeColor: 'stroke-tozai',
            textAlignments: [TextAlignment.WNW],
            offsets: [scaleToUnitY(SSW, MAJOR_LINE * 1.5 + OFFSET)],
        })
    );

    dispatch(
        offsetSingleStop(
            'T 13',
            { stationCode: 'T 14', strokeColor: 'stroke-tozai', textAlignment: TextAlignment.UP },
            scaleToUnitX(E, MAJOR_LINE * 2)
        )
    );
};

const fillInKeiyoToMusashino = (dispatch: AppDispatch) => {
    dispatch(
        offsetSingleStop(
            'T 13',
            { stationCode: 'JE 05 M', displayStationCode: 'JE 05', strokeColor: 'stroke-musashino', textAlignment: TextAlignment.UP },
            scaleToUnitY(SSE, MAJOR_LINE * 2)
        )
    );
    dispatch(offsetSingleStop('JE 05 M', { stationCode: 'JE 05', strokeColor: 'stroke-keiyo', hideText: true }, scale(S, OFFSET)));

    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'JE 03 M',
                    newStationData: {
                        stationCode: 'JE 04 M',
                        displayStationCode: 'JE 04',
                        strokeColor: 'stroke-musashino',
                        textAlignment: TextAlignment.ENE,
                    },
                },
                {
                    stationCode: 'JE 03',
                    newStationData: {
                        stationCode: 'JE 04',
                        strokeColor: 'stroke-keiyo',
                        hideText: true,
                    },
                },
            ],
            scaleToUnitY(SSE, MAJOR_LINE + OFFSET * 2)
        )
    );

    dispatch(
        offsetSingleStop(
            'JM 10',
            { stationCode: 'JE 09 M', displayStationCode: 'JE 09', strokeColor: 'stroke-musashino', textAlignment: TextAlignment.WNW },
            scaleToUnitY(SSW, MAJOR_LINE * 3)
        )
    );
    dispatch(
        offsetSingleStop(
            'JE 09 M',
            { stationCode: 'JE 09', strokeColor: 'stroke-keiyo', textAlignment: TextAlignment.ESE },
            scale(ESE, OFFSET)
        )
    );
    dispatch(
        spaceOutStops({
            stationPrefix: 'JE',
            startCount: 9,
            endCount: 6,
            strokeColor: 'stroke-keiyo',
            textAlignments: [TextAlignment.ESE],
            offsets: [scaleToUnitY(SSW, MAJOR_LINE * 3)],
        })
    );
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'JE 06',
                    newStationData: {
                        stationCode: 'JE 06 M',
                        displayStationCode: 'JE 06',
                        strokeColor: 'stroke-musashino',
                        hideText: true,
                    },
                },
                {
                    stationCode: 'JE 07',
                    newStationData: {
                        stationCode: 'JE 07 M',
                        displayStationCode: 'JE 07',
                        strokeColor: 'stroke-musashino',
                        hideText: true,
                    },
                },
                {
                    stationCode: 'JE 08',
                    newStationData: {
                        stationCode: 'JE 08 M',
                        displayStationCode: 'JE 08',
                        strokeColor: 'stroke-musashino',
                        hideText: true,
                    },
                },
            ],
            scale(WNW, OFFSET)
        )
    );
};

const addHokusoToMusashino = (dispatch: AppDispatch) => {
    dispatch(
        offsetSingleStop(
            'KS 10',
            { stationCode: 'KS 10 HOKUSO', displayStationCode: 'KS 10', textAlignment: TextAlignment.UP, hideText: true },
            scale(N, OFFSET)
        )
    );
    const HOKUSO_OFFSET = scaleToUnitX(E, MAJOR_LINE);
    dispatch(offsetSingleStop('KS 10 HOKUSO', { stationCode: 'HS 01', textAlignment: TextAlignment.UP }, HOKUSO_OFFSET));
    dispatch(
        spaceOutStops({
            stationPrefix: 'HS',
            startCount: 1,
            endCount: 5,
            offsets: [HOKUSO_OFFSET],
            textAlignments: [TextAlignment.UP],
            hideTexts: ['HS 05'],
        })
    );

    dispatch(
        offsetSingleStop(
            'HS 05',
            { stationCode: 'JM 13', textAlignment: TextAlignment.ENE, strokeColor: 'stroke-musashino' },
            scale(N, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop(
            'JM 10',
            { stationCode: 'JM 11', textAlignment: TextAlignment.WNW, strokeColor: 'stroke-musashino' },
            scaleToUnitY(NNE, MAJOR_LINE * 2.5)
        )
    );
    dispatch(
        offsetSingleStop(
            'JM 11',
            { stationCode: 'JM 12', textAlignment: TextAlignment.WNW, strokeColor: 'stroke-musashino' },
            scaleToUnitY(NNE, MAJOR_LINE * 1)
        )
    );
};

const addTsukubaToMusashino = (dispatch: AppDispatch, getState: () => RootState) => {
    const tsukubaIntersection = selectIntersection(getState(), 'TX 05', NNE, 'JM 13', NNW);
    dispatch(
        addStopDefinition({
            stationCode: 'TX 10',
            location: offsetCoordinates(tsukubaIntersection, scaleToUnitX(NNE, OFFSET * 0.5)),
            textAlignment: TextAlignment.ENE,
        })
    );
    dispatch(offsetSingleStop('TX 10', { stationCode: 'JM 16', hideText: true, strokeColor: 'stroke-musashino' }, scale(W, OFFSET)));

    dispatch(fillInStops({ stationPrefix: 'TX', startCount: 5, endCount: 10, textAlignments: [TextAlignment.ESE] }));
    dispatch(
        fillInStops({
            stationPrefix: 'JM',
            startCount: 13,
            endCount: 16,
            textAlignments: [TextAlignment.ENE],
            strokeColor: 'stroke-musashino',
            hideTexts: ['JM 15'],
        })
    );
    dispatch(
        offsetSingleStop(
            'JM 15',
            { stationCode: 'JL 25', strokeColor: 'stroke-joban-local', textAlignment: TextAlignment.ESE },
            scale(E, OFFSET)
        )
    );
};

const addJobanToMusashino = (dispatch: AppDispatch, getState: () => RootState) => {
    const matsudoIntersection = selectIntersection(getState(), 'JL 25', SSW, 'JM 14', W);
    const { dy = 0 } = scale(ESE, OFFSET);
    dispatch(
        addStopDefinition({
            stationCode: 'JL 22',
            strokeColor: 'stroke-joban-local',
            location: offsetCoordinates(matsudoIntersection, scaleToUnitY(NNE, dy), scaleToUnitY(SSW, OFFSET)),
            hideText: true,
        })
    );
    dispatch(offsetSingleStop('JL 22', { stationCode: 'JJ 06', strokeColor: 'stroke-joban-rapid', hideText: true }, scale(ESE, OFFSET)));
    dispatch(offsetSingleStop('JJ 06', { stationCode: 'SL 01', textAlignment: TextAlignment.DOWN }, scale(S, OFFSET)));
    dispatch(offsetSingleStop('JM 14', { stationCode: 'SL 05', textAlignment: TextAlignment.DOWN }, scale(S, OFFSET * 2)));
    dispatch(fillInStops({ stationPrefix: 'SL', startCount: 1, endCount: 5, textAlignments: [TextAlignment.DOWN, TextAlignment.UP] }));
    dispatch(
        fillInStops({
            stationPrefix: 'JL',
            startCount: 22,
            endCount: 25,
            textAlignments: [TextAlignment.WNW],
            strokeColor: 'stroke-joban-local',
        })
    );
};

const fillInJobanToMatsudo = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetSingleStop(
            'KS 10 HOKUSO',
            { stationCode: 'KS 10 KANAMACHI', displayStationCode: 'KS 10', textAlignment: TextAlignment.WNW },
            scale(N, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop(
            'JL 22',
            {
                stationCode: 'JL 21',
                strokeColor: 'stroke-joban-local',
                textAlignment: TextAlignment.WNW,
            },
            scaleToUnitY(SSW, MAJOR_LINE)
        )
    );
    dispatch(offsetSingleStop('JL 21', { stationCode: 'KS 51', textAlignment: TextAlignment.ENE }, scale(E, OFFSET * 3)));
    dispatch(
        offsetSingleStop('KS 10 KANAMACHI', { stationCode: 'KS 50', textAlignment: TextAlignment.ESE }, scaleToUnitY(NNE, OFFSET * 3))
    );

    const jobanMidpoint = selectMidpoint(getState(), 'JL 21', 'C 18');
    dispatch(
        addStopDefinition({
            stationCode: 'JL 19',
            hideText: true,
            strokeColor: 'stroke-joban-local',
            location: offsetCoordinates(jobanMidpoint, scaleToUnitX(W, OFFSET * 2)),
        })
    );
    dispatch(
        offsetSingleStop(
            'JL 19',
            { stationCode: 'JL 20', textAlignment: TextAlignment.UP, strokeColor: 'stroke-joban-local' },
            scaleToUnitY(E, MAJOR_LINE * 1.25)
        )
    );
    dispatch(
        offsetSingleStop('JL 19', { stationCode: 'C 19', textAlignment: TextAlignment.UP, strokeColor: 'stroke-chiyoda' }, scale(N, OFFSET))
    );
    dispatch(
        offsetSingleStop(
            'JL 20',
            { stationCode: 'C 20', textAlignment: TextAlignment.ESE, strokeColor: 'stroke-chiyoda' },
            scaleToUnitX(N, MAJOR_LINE * 1.5)
        )
    );
};

export const addMusashinoEast = (dispatch: AppDispatch) => {
    dispatch(addKeiseiToMusashino);
    dispatch(addJRToMusashino);
    dispatch(fillInShinjukuToMusashino);
    dispatch(fillInTozaiToMusashino);
    dispatch(fillInKeiyoToMusashino);
    dispatch(addHokusoToMusashino);
    dispatch(addTsukubaToMusashino);
    dispatch(addJobanToMusashino);
    dispatch(fillInJobanToMatsudo);
};
