import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import { ESE, N, offsetCoordinates, S, scale, scaleToUnitX, scaleToUnitY, SSE, SSW, W, WNW } from '../../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, selectMidpoint, TextAlignment } from '../../../slice/StopLocation';
import { offsetSingleStop, offsetStopGroup } from '../../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../../store';

const addIidabashi = (dispatch: AppDispatch, getState: () => RootState) => {
    const IIDABASHI_INTERSECTION = selectIntersection(getState(), 'N 11', SSW, 'JB 17', W);

    dispatch(
        addStopDefinition({
            stationCode: 'N 10',
            location: offsetCoordinates(IIDABASHI_INTERSECTION, scaleToUnitX(SSW, OFFSET)),
            strokeColor: 'stroke-namboku',
            hideText: true,
        })
    );

    dispatch(offsetSingleStop('N 10', { stationCode: 'JB 16', strokeColor: 'stroke-chuo-sobu', hideText: true }, scale(ESE, OFFSET)));

    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'N 10', newStationData: { stationCode: 'Y 13', strokeColor: 'stroke-yurakucho', hideText: true } },
                {
                    stationCode: 'Y 13',
                    newStationData: { stationCode: 'E 06', strokeColor: 'stroke-oedo', hideText: true },
                },
            ],
            scale(WNW, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop('E 06', { stationCode: 'T 06', strokeColor: 'stroke-tozai', textAlignment: TextAlignment.WNW }, scale(W, OFFSET))
    );
};

const addIchigaya = (dispatch: AppDispatch, getState: () => RootState) => {
    const ICHIGAYA_INTERSECTION = selectIntersection(getState(), 'Y 13', SSW, 'S 06', W);

    dispatch(
        addStopDefinition({
            stationCode: 'Y 14',
            location: offsetCoordinates(ICHIGAYA_INTERSECTION, scaleToUnitY(SSW, OFFSET)),
            strokeColor: 'stroke-yurakucho',
            hideText: true,
        })
    );

    dispatch(
        offsetSingleStop('Y 14', { stationCode: 'S 04', strokeColor: 'stroke-shinjuku', textAlignment: TextAlignment.UP }, scale(N, OFFSET))
    );

    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'Y 14', newStationData: { stationCode: 'N 09', strokeColor: 'stroke-namboku', hideText: true } },
                { stationCode: 'N 09', newStationData: { stationCode: 'JB 15', strokeColor: 'stroke-chuo-sobu', hideText: true } },
            ],
            scale(ESE, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop(
            'Y 14',
            { stationCode: 'Y 15', strokeColor: 'stroke-yurakucho', textAlignment: TextAlignment.ENE },
            scaleToUnitY(SSW, OFFSET * 1.5),
            scaleToUnitY(SSE, MAJOR_LINE)
        )
    );
};

const addKudanshita = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        addStopDefinition({
            stationCode: 'S 05',
            location: selectMidpoint(getState(), 'S 04', 'S 06'),
            strokeColor: 'stroke-shinjuku',
            textAlignment: TextAlignment.UP,
        })
    );

    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'S 05', newStationData: { stationCode: 'Z 06', strokeColor: 'stroke-hanzomon', hideText: true } },
                {
                    stationCode: 'Z 06',
                    newStationData: { stationCode: 'T 07', strokeColor: 'stroke-tozai', hideText: true },
                },
            ],
            scale(S, OFFSET)
        )
    );

    dispatch(
        addStopDefinition({
            stationCode: 'Z 05',
            location: selectMidpoint(getState(), 'Z 04', 'Z 06'),
            strokeColor: 'stroke-hanzomon',
        })
    );

    dispatch(
        addStopDefinition({
            stationCode: 'T 08',
            location: selectMidpoint(getState(), 'T 07', 'T 09'),
            strokeColor: 'stroke-tozai',
            textAlignment: TextAlignment.ENE,
        })
    );
};

const addYotsuya = (dispatch: AppDispatch) => {
    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'N 09', newStationData: { stationCode: 'N 08', strokeColor: 'stroke-namboku', hideText: true } },
                { stationCode: 'JB 15', newStationData: { stationCode: 'JB 14', strokeColor: 'stroke-chuo-sobu', hideText: true } },
            ],
            scaleToUnitY(SSW, OFFSET * 4)
        )
    );
    dispatch(offsetSingleStop('JB 14', { stationCode: 'JC 04', strokeColor: 'stroke-chuo-rapid', hideText: true }, scale(ESE, OFFSET)));
    dispatch(
        offsetSingleStop(
            'N 08',
            { stationCode: 'M 12', strokeColor: 'stroke-musashino', textAlignment: TextAlignment.WSW },
            scale(W, OFFSET)
        )
    );
};

export const addYotsuyaGrid = (dispatch: AppDispatch) => {
    dispatch(addIidabashi);
    dispatch(addIchigaya);
    dispatch(addKudanshita);
    dispatch(addYotsuya);
};
