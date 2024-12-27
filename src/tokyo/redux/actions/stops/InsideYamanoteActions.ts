import { HEIGHT, MAJOR_LINE, OFFSET, WIDTH } from '../../../../utils/CommonCoordinates';
import { ESE, roundPoint, scale, scaleToUnitX, SSW, WNW, WSW } from '../../../../utils/PathUtils';
import {
    addStopDefinition,
    offsetEquallySpacedStops,
    offsetGridOfStops,
    offsetSingleStop,
    StopDefinition,
    TextAlignment,
} from '../../slice/StopLocation';
import { AppDispatch } from '../../store';
import { addKandaGrid } from './KandaGrid';
import { addTozaiGrid } from './TozaiGrid';

export const YAMANOTE_ANCHOR = 'JY 01';

export const addTokyo = (dispatch: AppDispatch) => {
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
    dispatch(offsetSingleStop('JE 01 M', { stationCode: 'JE 01', strokeColor: 'stroke-musashino', hideText: true }, scale(WSW, OFFSET)));
};

export const addKyobashiGrid = (dispatch: AppDispatch) => {
    dispatch(
        offsetGridOfStops(
            [
                { stationCode: 'G 11', newStationData: { stationCode: 'G 10', strokeColor: 'stroke-ginza' } },
                { stationCode: 'A 13', newStationData: { stationCode: 'A 12', strokeColor: 'stroke-asakusa' } },
            ],
            scaleToUnitX(SSW, MAJOR_LINE)
        )
    );
};

export const addInsideYamanote = (dispatch: AppDispatch) => {
    dispatch(addTokyo);
    dispatch(addTozaiGrid);
    dispatch(addKyobashiGrid);
    dispatch(addKandaGrid);
};
