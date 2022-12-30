import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import {
    ASAKUSA_NINGYOCHO,
    HIBIYA,
    HIBIYA_GINZA,
    HIBIYA_KAYABACHO,
    OFFSET,
    YAMANOTE_AKIHABARA,
    YAMANOTE_TOKYO,
    YAMANOTE_YURAKUCHO,
} from '../../utils/CommonCoordinates';
import { curveFrom, S, ESE, startAtLocation, W, midPoint } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { TOKYO_RADIUS } from './Marunouchi';

const HIBIYA_TSUKIJI = { x: HIBIYA_KAYABACHO.x, y: YAMANOTE_YURAKUCHO.y };
const AKIHABARA = { ...YAMANOTE_AKIHABARA, x: YAMANOTE_AKIHABARA.x + OFFSET * 3 };
const S_MIDPOINT = midPoint(HIBIYA_KAYABACHO, AKIHABARA);
const NIGYOCHO = { x: ASAKUSA_NINGYOCHO.x + OFFSET, y: ASAKUSA_NINGYOCHO.y - OFFSET * 0.25 };

export const HibiyaPath = () => {
    return (
        <path
            d={`
                ${startAtLocation(AKIHABARA)}
                ${curveFrom({
                    start: AKIHABARA,
                    end: S_MIDPOINT,
                    firstDirection: S,
                    secondDirection: ESE,
                })}
                ${curveFrom({
                    start: S_MIDPOINT,
                    end: HIBIYA_TSUKIJI,
                    firstDirection: ESE,
                    secondDirection: S,
                })}
                ${curveFrom({
                    start: HIBIYA_TSUKIJI,
                    end: HIBIYA,
                    radius: TOKYO_RADIUS,
                    firstDirection: S,
                    secondDirection: W,
                })}
            `}
        />
    );
};

const Hibiya = () => {
    return (
        <g id="hibiya">
            <HibiyaPath />
            <StopFromTokyo location={HIBIYA} stationCode="H 08" />
            <StopFromTokyo location={HIBIYA_GINZA} stationCode="H 09" />
            <StopFromTokyo location={{ ...HIBIYA_GINZA, x: HIBIYA_GINZA.x + MAJOR_LINE + OFFSET }} stationCode="H 10" />
            <StopFromTokyo location={{ ...HIBIYA_KAYABACHO, y: YAMANOTE_YURAKUCHO.y }} stationCode="H 11" />
            <StopFromTokyo location={{ ...HIBIYA_KAYABACHO, y: YAMANOTE_TOKYO.y + OFFSET }} stationCode="H 12" />
            <StopFromTokyo location={HIBIYA_KAYABACHO} stationCode="H 13" />
            <StopFromTokyo stationCode="H 14" location={NIGYOCHO} textAlignment={TextAlignment.UP} />
            <StopFromTokyo location={AKIHABARA} stationCode="H 16" />
        </g>
    );
};

export default Hibiya;
