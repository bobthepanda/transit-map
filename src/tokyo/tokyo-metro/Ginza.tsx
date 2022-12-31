import { TextAlignment } from '../../symbols/BasicStop';
import {
    GINZA_MITSUKOSHIMAE,
    HIBIYA_KASUMIGASEKI,
    MITA_HIBIYA,
    NIHOMBASHI,
    OFFSET,
    YAMANOTE_KANDA,
    YAMANOTE_SHIMBASHI,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, N, startAtLocation, WNW } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { TOKYO_RADIUS } from './Marunouchi';

const SHIMBASHI = {
    x: YAMANOTE_SHIMBASHI.x + OFFSET * 1.5,
    y: YAMANOTE_SHIMBASHI.y + OFFSET,
};
const GINZA = { x: NIHOMBASHI.x, y: MITA_HIBIYA.y };
const SHIMBASHI_RADIUS = TOKYO_RADIUS + OFFSET;
const TORANOMON = { y: SHIMBASHI.y, x: HIBIYA_KASUMIGASEKI.x - OFFSET };
const KANDA = { ...YAMANOTE_KANDA, x: YAMANOTE_KANDA.x - OFFSET * 2 };

const Ginza = () => {
    return (
        <g className="ginza">
            <path
                d={`${startAtLocation(TORANOMON)}
                ${curveFrom({
                    start: TORANOMON,
                    end: NIHOMBASHI,
                    radius: SHIMBASHI_RADIUS,
                    firstDirection: E,
                    secondDirection: N,
                })}
                ${curveFrom({
                    start: NIHOMBASHI,
                    end: KANDA,
                    firstDirection: N,
                    secondDirection: WNW,
                })}
                `}
            />
            <StopFromTokyo location={NIHOMBASHI} stationCode="G 11" />
            <StopFromTokyo location={{ ...NIHOMBASHI, y: NIHOMBASHI.y + OFFSET * 4 }} stationCode="G 10" />
            <StopFromTokyo location={GINZA} stationCode="G 09" />
            <StopFromTokyo location={SHIMBASHI} stationCode="G 08" />
            <StopFromTokyo location={TORANOMON} stationCode="G 07" textAlignment={TextAlignment.UP} />
            <StopFromTokyo location={KANDA} stationCode="G 13" textAlignment={TextAlignment.LEFT} />
            <StopFromTokyo location={GINZA_MITSUKOSHIMAE} stationCode="G 12" />
        </g>
    );
};

export default Ginza;
