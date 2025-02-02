import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import {
    E,
    ENE,
    ESE,
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
import { addStopDefinition, selectMidpoint, TextAlignment } from '../../../slice/StopLocation';
import { offsetSingleStop, offsetStopGroup, spaceOutStops } from '../../../slice/StopLocationActions';
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

const addJRToMusashino = (dispatch: AppDispatch) => {
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
                {
                    stationCode: 'KS 18',
                    newStationData: { stationCode: 'JB 29', strokeColor: 'stroke-chuo-sobu', textAlignment: TextAlignment.WSW },
                },
                {
                    stationCode: 'KS 20',
                    newStationData: {
                        stationCode: 'JB 30',
                        strokeColor: 'stroke-chuo-sobu',
                        textAlignment: '[text-anchor:end] -translate-x-[18pt]',
                    },
                },
            ],
            scaleToUnitX(WSW, OFFSET * 3)
        )
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
            offsets: [scaleToUnitY(SSW, MAJOR_LINE * 1.75)],
        })
    );

    dispatch(
        offsetSingleStop(
            'T 13',
            { stationCode: 'T 14', strokeColor: 'stroke-tozai', textAlignment: TextAlignment.UP },
            scaleToUnitX(E, MAJOR_LINE * 1.5)
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

export const addSobuToMusashino = (dispatch: AppDispatch) => {
    dispatch(addKeiseiToMusashino);
    dispatch(addJRToMusashino);
    dispatch(fillInShinjukuToMusashino);
    dispatch(fillInTozaiToMusashino);
    dispatch(fillInKeiyoToMusashino);
};
