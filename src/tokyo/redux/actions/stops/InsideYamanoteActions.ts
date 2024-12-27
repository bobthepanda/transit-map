import { Coordinates } from '../../../../interfaces/Dimensions';
import { HEIGHT, MAJOR_LINE, OFFSET, WIDTH } from '../../../../utils/CommonCoordinates';
import { ENE, ESE, NNE, NNW, offsetCoordinates, roundPoint, scale, scaleToUnitX, SSE, SSW, WNW, WSW } from '../../../../utils/PathUtils';
import {
    addStopDefinition,
    offsetEquallySpacedStops,
    offsetGridOfStops,
    offsetSingleStop,
    selectIntersection,
    selectMidpoint,
    StopDefinition,
    TextAlignment,
} from '../../slice/StopLocation';
import { AppDispatch, RootState } from '../../store';

const YAMANOTE_ANCHOR = 'JY 01';

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

export const addOtemachi = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetSingleStop(
            YAMANOTE_ANCHOR,
            { stationCode: 'M 18', strokeColor: 'stroke-marunouchi', hideText: true },
            scaleToUnitX(NNW, MAJOR_LINE * 0.5),
            scaleToUnitX(NNE, MAJOR_LINE * 0.25)
        )
    );
    dispatch(
        offsetSingleStop(
            'M 18',
            { stationCode: 'C 11', strokeColor: 'stroke-chiyoda', hideText: true },
            scaleToUnitX(NNW, MAJOR_LINE * 0.5)
        )
    );
    dispatch(offsetSingleStop('C 11', { stationCode: 'I 09', strokeColor: 'stroke-marunouchi', hideText: true }, scale(WNW, OFFSET)));

    const T_09 = selectMidpoint(getState(), 'M 18', 'C 11');
    dispatch(
        addStopDefinition({
            stationCode: 'T 09',
            strokeColor: 'stroke-tozai',
            location: offsetCoordinates(T_09, scaleToUnitX(WSW, OFFSET)),
            textAlignment: TextAlignment.DOWN,
        })
    );
    dispatch(
        offsetSingleStop('T 09', { stationCode: 'Z 08', strokeColor: 'stroke-hanzomon', hideText: true }, scaleToUnitX(ENE, OFFSET * 2))
    );
};

export const addNihombashi = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetSingleStop(
            YAMANOTE_ANCHOR,
            { stationCode: 'G 11', strokeColor: 'stroke-ginza' },
            scaleToUnitX(SSE, MAJOR_LINE * 0.75),
            scaleToUnitX(NNE, MAJOR_LINE * 0.5)
        )
    );
    dispatch(offsetSingleStop('G 11', { stationCode: 'A 13', strokeColor: 'stroke-asakusa' }, scaleToUnitX(SSE, MAJOR_LINE * 0.5)));
    dispatch(
        addStopDefinition({
            location: offsetCoordinates(selectMidpoint(getState(), 'G 11', 'A 13'), scale(WSW, OFFSET)),
            stationCode: 'T 10',
            strokeColor: 'stroke-tozai',
            hideText: true,
        })
    );
};

const addHatchobori = (dispatch: AppDispatch, getState) => {
    const hatchoboriIntersection: Coordinates = selectIntersection(getState(), 'JE 01', SSE, 'H 13', SSW);
    dispatch(
        addStopDefinition({
            stationCode: 'H 12',
            location: offsetCoordinates(hatchoboriIntersection, scaleToUnitX(SSW, OFFSET * 0.5)),
            strokeColor: 'stroke-hibiya',
            hideText: true,
        })
    );
    dispatch(
        addStopDefinition({
            stationCode: 'JE 02',
            location: offsetCoordinates(hatchoboriIntersection, scaleToUnitX(SSE, OFFSET * 0.5)),
            strokeColor: 'stroke-keiyo',
            hideText: true,
        })
    );
    dispatch(
        offsetSingleStop(
            'JE 02',
            { stationCode: 'JE 02 M', strokeColor: 'stroke-musashino', displayStationCode: 'JE 02' },
            scale(ENE, OFFSET)
        )
    );
};

export const addTozaiGrid = (dispatch: AppDispatch) => {
    dispatch(addNihombashi);
    dispatch(addOtemachi);
    dispatch(offsetSingleStop('A 13', { stationCode: 'H 13', strokeColor: 'stroke-hibiya' }, scaleToUnitX(SSE, MAJOR_LINE * 0.5)));

    dispatch(offsetSingleStop('H 13', { stationCode: 'T 11', strokeColor: 'stroke-tozai' }, scale(WSW, OFFSET)));
    dispatch(addHatchobori);
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

export const addKandaGrid = (dispatch: AppDispatch) => {
    dispatch(
        offsetGridOfStops(
            [
                { stationCode: 'JC 01', newStationData: { stationCode: 'JC 02', strokeColor: 'stroke-chuo-rapid', hideText: true } },
                { stationCode: 'JY 01', newStationData: { stationCode: 'JY 02', strokeColor: 'stroke-yamanote', hideText: true } },
                { stationCode: 'JK 26', newStationData: { stationCode: 'JK 27', strokeColor: 'stroke-keihin-tohoku', hideText: true } },
            ],
            scaleToUnitX(NNE, MAJOR_LINE * 1.5)
        )
    );
    dispatch(
        offsetSingleStop('JC 02', { stationCode: 'G 13', strokeColor: 'stroke-ginza', textAlignment: TextAlignment.NW }, scale(WNW, OFFSET))
    );
    dispatch(
        offsetSingleStop(
            'JY 02',
            { stationCode: 'H 15', strokeColor: 'stroke-hibiya' },
            scaleToUnitX(SSE, MAJOR_LINE * 0.75),
            scaleToUnitX(NNE, MAJOR_LINE * 0.25)
        )
    );
};

export const addInsideYamanote = (dispatch: AppDispatch) => {
    dispatch(addTokyo);
    dispatch(addTozaiGrid);
    dispatch(addKyobashiGrid);
    dispatch(addKandaGrid);
};
