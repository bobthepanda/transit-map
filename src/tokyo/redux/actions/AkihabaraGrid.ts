import { MAJOR_LINE } from '../../../map/GridLines';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { ESE, N, NNE, NNW, offsetCoordinates, S, scale, scaleToUnitX, scaleToUnitY, W } from '../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, TextAlignment } from '../slice/StopLocation';
import { offsetEquallySpacedStops, offsetSingleStop, offsetStopGroup } from '../slice/StopLocationActions';
import { AppDispatch } from '../store';

const addAkihabara = (dispatch: AppDispatch) => {
    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'JY 02', newStationData: { stationCode: 'JY 03', strokeColor: 'stroke-yamanote' } },
                { stationCode: 'JK 27', newStationData: { stationCode: 'JK 28', strokeColor: 'stroke-keihin-tohoku' } },
            ],
            scaleToUnitY(NNE, MAJOR_LINE * 2)
        )
    );
    dispatch(
        offsetSingleStop(
            'JY 03',
            { stationCode: 'JB 19', strokeColor: 'stroke-chuo-sobu', textAlignment: TextAlignment.UP },
            scale(N, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop(
            'JY 03',
            { stationCode: 'H 16', strokeColor: 'stroke-hibiya', textAlignment: TextAlignment.ESE },
            scaleToUnitX(ESE, OFFSET * 3)
        )
    );

    dispatch(
        offsetSingleStop(
            'H 16',
            { stationCode: 'S 08', strokeColor: 'stroke-shinjuku', textAlignment: TextAlignment.DOWN },
            scaleToUnitX(S, OFFSET * 3)
        )
    );
};

const addJimbocho = (dispatch: AppDispatch, getState) => {
    const jimbochoIntersection = selectIntersection(getState(), 'S 08', W, 'Z 08', NNW);

    dispatch(
        addStopDefinition({
            stationCode: 'S 06',
            strokeColor: 'stroke-shinjuku',
            textAlignment: TextAlignment.UP,
            location: offsetCoordinates(jimbochoIntersection, scaleToUnitX(W, OFFSET)),
        })
    );
    dispatch(
        offsetEquallySpacedStops(
            'S 06',
            [
                { stationCode: 'Z 07', strokeColor: 'stroke-hanzomon', hideText: true },
                { stationCode: 'I 10', strokeColor: 'stroke-mita', hideText: true },
            ],
            scale(S, OFFSET)
        )
    );
};

const addSuidobashi = (dispatch: AppDispatch, getState) => {
    const suidobashiIntersection = selectIntersection(getState(), 'JB 19', W, 'I 10', NNW);

    dispatch(
        addStopDefinition({
            stationCode: 'I 11',
            strokeColor: 'stroke-mita',
            location: offsetCoordinates(suidobashiIntersection, scaleToUnitY(NNW, OFFSET)),
            textAlignment: TextAlignment.ENE,
        })
    );
    dispatch(offsetSingleStop('I 11', { stationCode: 'JB 17', strokeColor: 'stroke-chuo-sobu', hideText: true }, scale(S, OFFSET)));
};

const addOgawamachi = (dispatch: AppDispatch, getState) => {
    const ogawamachiIntersection = selectIntersection(getState(), 'S 08', W, 'C 11', NNE);

    const transferDistance = OFFSET * 2.5;

    dispatch(
        addStopDefinition({
            stationCode: 'C 12',
            strokeColor: 'stroke-chiyoda',
            location: offsetCoordinates(ogawamachiIntersection, scaleToUnitY(NNE, transferDistance)),
            textAlignment: TextAlignment.WNW,
        })
    );
    dispatch(
        offsetEquallySpacedStops(
            'C 12',
            [
                { stationCode: 'S 07', strokeColor: 'stroke-shinjuku', textAlignment: '-translate-y-[18pt] translate-x-[15pt]' },
                { stationCode: 'M 19', strokeColor: 'stroke-marunouchi', textAlignment: TextAlignment.WSW },
            ],
            scale(S, transferDistance)
        )
    );
};

const addOchanomizu = (dispatch: AppDispatch, getState) => {
    const ochanomizuIntersection = selectIntersection(getState(), 'JB 19', W, 'M 19', NNW);

    dispatch(
        addStopDefinition({
            stationCode: 'M 20',
            strokeColor: 'stroke-marunouchi',
            location: offsetCoordinates(ochanomizuIntersection, scaleToUnitY(NNW, OFFSET)),
            textAlignment: TextAlignment.ENE,
        })
    );
    dispatch(
        offsetEquallySpacedStops(
            'M 20',
            [
                { stationCode: 'JB 18', strokeColor: 'stroke-chuo-sobu', hideText: true },
                { stationCode: 'JC 03', strokeColor: 'stroke-chuo-rapid', hideText: true },
            ],
            scale(S, OFFSET)
        )
    );
};

export const addAkihabaraGrid = (dispatch: AppDispatch) => {
    dispatch(addAkihabara);
    dispatch(addJimbocho);
    dispatch(addSuidobashi);
    dispatch(addOgawamachi);
    dispatch(addOchanomizu);
};
