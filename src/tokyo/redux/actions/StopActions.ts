import { HEIGHT, MAJOR_LINE, OFFSET, WIDTH } from '../../../utils/CommonCoordinates';
import { E, ESE, NNE, offsetCoordinates, roundPoint, S, scale, scaleToUnitX, SSW, WNW } from '../../../utils/PathUtils';
import {
    addStopDefinition,
    offsetEquallySpacedStops,
    offsetGridOfStops,
    offsetSingleStop,
    selectMidpoint,
    StopDefinition,
    TextAlignment,
} from '../slice/StopLocation';

const YAMANOTE_ANCHOR = 'JY 01';

export const addTokyo = (dispatch) => {
    const TokyoDefinition: StopDefinition = {
        stationCode: YAMANOTE_ANCHOR,
        location: roundPoint({ x: WIDTH / 2, y: HEIGHT / 2 }, MAJOR_LINE),
        strokeColor: 'stroke-yamanote',
        hideText: true,
    };
    dispatch(addStopDefinition(TokyoDefinition));
    dispatch(
        offsetSingleStop(YAMANOTE_ANCHOR, { stationCode: 'JK 26', strokeColor: 'stroke-keihin-tohoku', hideText: true }, scale(ESE, OFFSET))
    );
    dispatch(
        offsetSingleStop(
            'JK 26',
            { stationCode: 'JU 01', strokeColor: 'stroke-tohoku', hideText: true },
            scale(ESE, OFFSET),
            scale(SSW, OFFSET * 0.5)
        )
    );
    dispatch(offsetSingleStop('JU 01', { stationCode: 'JT 01', strokeColor: 'stroke-tokaido', hideText: true }, scale(SSW, -1 * OFFSET)));
    dispatch(offsetSingleStop('JK 26', { stationCode: 'JO 17', strokeColor: 'stroke-sobu-rapid', hideText: true }, scale(ESE, OFFSET * 2)));
    dispatch(
        offsetEquallySpacedStops(
            YAMANOTE_ANCHOR,
            [
                { stationCode: 'JC 01', strokeColor: 'stroke-chuo-rapid', hideText: true },
                { stationCode: 'M 17', strokeColor: 'stroke-marunouchi', textAlignment: TextAlignment.NW },
            ],
            scale(WNW, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop(
            'JO 17',
            { stationCode: 'JE 01 M', strokeColor: 'stroke-musashino', hideText: true, displayStationCode: 'JE 01' },
            scale(ESE, OFFSET),
            scaleToUnitX(SSW, OFFSET * 0.5)
        )
    );
    dispatch(offsetSingleStop('JE 01 M', { stationCode: 'JE 01', strokeColor: 'stroke-musashino', hideText: true }, scale(S, OFFSET)));
};

export const addKyobashiGrid = (dispatch) => {
    dispatch(
        offsetSingleStop(
            YAMANOTE_ANCHOR,
            { stationCode: 'G 10', strokeColor: 'stroke-ginza' },
            scaleToUnitX(ESE, MAJOR_LINE),
            scaleToUnitX(SSW, MAJOR_LINE * 0.5)
        )
    );
    dispatch(offsetSingleStop('G 10', { stationCode: 'A 12', strokeColor: 'stroke-asakusa' }, scaleToUnitX(E, MAJOR_LINE)));
};

export const addTozaiGrid = (dispatch, getState) => {
    dispatch(
        offsetGridOfStops(
            [
                { stationCode: 'G 10', newStationData: { stationCode: 'G 11', strokeColor: 'stroke-ginza', hideText: true } },
                { stationCode: 'A 12', newStationData: { stationCode: 'A 13', strokeColor: 'stroke-asakusa' } },
            ],
            scaleToUnitX(NNE, MAJOR_LINE)
        )
    );
    dispatch(
        addStopDefinition({
            location: offsetCoordinates(selectMidpoint(getState(), 'G 11', 'A 13'), scale(NNE, OFFSET)),
            stationCode: 'T 10',
            strokeColor: 'stroke-tozai',
            hideText: true,
        })
    );
};

export const addKandaGrid = (dispatch) => {
    dispatch(
        offsetGridOfStops(
            [
                { stationCode: 'JC 01', newStationData: { stationCode: 'JC 02', strokeColor: 'stroke-chuo-rapid', hideText: true } },
                { stationCode: 'JY 01', newStationData: { stationCode: 'JY 02', strokeColor: 'stroke-yamanote', hideText: true } },
                { stationCode: 'JK 26', newStationData: { stationCode: 'JK 27', strokeColor: 'stroke-keihin-tohoku', hideText: true } },
            ],
            scaleToUnitX(NNE, MAJOR_LINE)
        )
    );
    dispatch(
        offsetSingleStop('JC 02', { stationCode: 'G 13', strokeColor: 'stroke-ginza', textAlignment: TextAlignment.NW }, scale(WNW, OFFSET))
    );
};

export const addInsideYamanote = (dispatch) => {
    dispatch(addTokyo);
    dispatch(addKyobashiGrid);
    dispatch(addTozaiGrid);
    dispatch(addKandaGrid);
};

export const addAllStops = (dispatch) => {
    dispatch(addInsideYamanote);
};
