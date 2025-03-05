import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import { E, N, NNE, NNW, offsetCoordinates, scale, scaleToUnitX, scaleToUnitY, SSE, SSW, WSW } from '../../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, selectMidpoint, TextAlignment } from '../../../slice/StopLocation';
import { fillInStops, offsetSingleStop, offsetStopGroup, spaceOutStops } from '../../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../../store';

const addKeihinTohoku = (dispatch: AppDispatch) => {
    dispatch(
        spaceOutStops({
            stationPrefix: 'JK',
            startCount: 38,
            endCount: 47,
            strokeColor: 'stroke-keihin-tohoku',
            offsets: [scaleToUnitY(NNW, MAJOR_LINE * 1.5)],
            textAlignments: [TextAlignment.ENE],
        })
    );
    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'JK 43', newStationData: { stationCode: 'JU 05', strokeColor: 'stroke-tohoku', hideText: true } },
                { stationCode: 'JK 46', newStationData: { stationCode: 'JU 06', strokeColor: 'stroke-tohoku', hideText: true } },
                { stationCode: 'JK 47', newStationData: { stationCode: 'JU 07', strokeColor: 'stroke-tohoku', hideText: true } },
                { stationCode: 'JU 05', newStationData: { stationCode: 'JS 23', strokeColor: 'stroke-shonan-shinjuku', hideText: true } },
                { stationCode: 'JU 07', newStationData: { stationCode: 'JS 24', strokeColor: 'stroke-shonan-shinjuku', hideText: true } },
                { stationCode: 'JS 24', newStationData: { stationCode: 'JA 26', strokeColor: 'stroke-saikyo', hideText: true } },
            ],
            scale(WSW, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop(
            'JK 42',
            { stationCode: 'JM 25', strokeColor: 'stroke-musashino', textAlignment: TextAlignment.UP },
            scale(N, OFFSET)
        )
    );
};

const addSkyTree = (dispatch: AppDispatch, getState: () => RootState) => {
    const KOSHIGAYA_INTERSECTION = selectIntersection(getState(), 'JM 25', E, 'TS 09', NNW);
    dispatch(
        addStopDefinition({
            location: offsetCoordinates(KOSHIGAYA_INTERSECTION, scaleToUnitX(E, OFFSET * 1.5)),
            strokeColor: 'stroke-musashino',
            stationCode: 'JM 22',
            textAlignment: TextAlignment.UP,
        })
    );
    dispatch(
        addStopDefinition({
            location: offsetCoordinates(KOSHIGAYA_INTERSECTION, scaleToUnitX(SSE, OFFSET * 1.5)),
            stationCode: 'TS 20',
            textAlignment: TextAlignment.ENE,
        })
    );
    dispatch(
        fillInStops({
            stationPrefix: 'TS',
            startCount: 9,
            endCount: 20,
            textAlignments: [TextAlignment.ENE],
        })
    );
    dispatch(
        fillInStops({
            stationPrefix: 'JM',
            startCount: 25,
            endCount: 22,
            strokeColor: 'stroke-musashino',
            textAlignments: [TextAlignment.UP],
            hideTexts: ['JM 23'],
        })
    );

    dispatch(
        offsetSingleStop(
            'JM 23',
            { stationCode: 'SR 25', strokeColor: 'stroke-namboku', textAlignment: TextAlignment.ENE },
            scaleToUnitX(N, OFFSET)
        )
    );

    dispatch(
        addStopDefinition({
            stationCode: 'SR 22',
            strokeColor: 'stroke-namboku',
            textAlignment: TextAlignment.WNW,
            location: selectMidpoint(getState(), 'SR 19', 'SR 25'),
        })
    );

    dispatch(
        offsetSingleStop(
            'SR 25',
            { stationCode: 'SR 24', strokeColor: 'stroke-namboku', textAlignment: TextAlignment.ENE },
            scaleToUnitY(SSE, MAJOR_LINE)
        )
    );

    dispatch(
        offsetSingleStop(
            'SR 25',
            { stationCode: 'SR 26', strokeColor: 'stroke-namboku', textAlignment: TextAlignment.ENE },
            scaleToUnitY(NNW, MAJOR_LINE)
        )
    );

    dispatch(
        offsetSingleStop(
            'SR 19',
            { stationCode: 'SR 20', strokeColor: 'stroke-namboku', textAlignment: TextAlignment.ENE },
            scaleToUnitY(NNW, MAJOR_LINE * 0.75)
        )
    );

    dispatch(
        offsetSingleStop(
            'SR 22',
            { stationCode: 'SR 23', strokeColor: 'stroke-namboku', textAlignment: TextAlignment.WNW },
            scaleToUnitY(NNE, MAJOR_LINE)
        )
    );

    dispatch(
        offsetSingleStop(
            'SR 22',
            { stationCode: 'SR 21', strokeColor: 'stroke-namboku', textAlignment: TextAlignment.WNW },
            scaleToUnitY(SSW, MAJOR_LINE)
        )
    );
};

export const addMusashinoNorthEast = (dispatch: AppDispatch) => {
    dispatch(addKeihinTohoku);
    dispatch(addSkyTree);
};
