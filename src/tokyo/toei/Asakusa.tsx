import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import {
    ASAKUSA_BAKUROCHO,
    ASAKUSA_KURAMAE,
    ASAKUSA_NIHOMBASHI,
    ASAKUSA_NINGYOCHO,
    HIBIYA_GINZA,
    MITA_HIBIYA,
    NIHOMBASHI,
    OFFSET,
    YAMANOTE_AKIHABARA,
    YAMANOTE_SHIMBASHI,
    YAMANOTE_UENO,
} from '../../utils/CommonCoordinates';
import { curveFrom, offset, RADIUS, S, startAtLocation, W, WSW } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const SHIMBASHI = { x: YAMANOTE_SHIMBASHI.x + OFFSET * 1.5, y: YAMANOTE_SHIMBASHI.y + OFFSET * 2 };
const GINZA = { x: HIBIYA_GINZA.x + OFFSET * 0.5 + MAJOR_LINE, y: MITA_HIBIYA.y };
const SHIMBASHI_RADIUS = RADIUS + OFFSET * 2;
const ASAKUSABASHI = { ...YAMANOTE_AKIHABARA, x: ASAKUSA_BAKUROCHO.x };
export const A_18 = { x: ASAKUSA_KURAMAE.x + MAJOR_LINE, y: YAMANOTE_UENO.y };
const OSHIAGE = offset(A_18, { dx: MAJOR_LINE * 2 - OFFSET, dy: -MAJOR_LINE + OFFSET });
export const A_09 = offset(MITA_HIBIYA, { dx: MAJOR_LINE, dy: MAJOR_LINE * 3 - OFFSET });

export const AsakusaPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(OSHIAGE)}
        ${curveFrom({ start: OSHIAGE, end: A_18, firstDirection: W, secondDirection: WSW })}
        ${curveFrom({ start: A_18, end: ASAKUSA_KURAMAE, firstDirection: WSW, secondDirection: S })}
        ${curveFrom({ start: ASAKUSA_KURAMAE, end: SHIMBASHI, radius: SHIMBASHI_RADIUS, firstDirection: S, secondDirection: W })}
        ${curveFrom({ start: SHIMBASHI, end: A_09, firstDirection: W, secondDirection: S })}
    `}
        />
    );
};

const Asakusa = () => {
    return (
        <g className="asakusa">
            <AsakusaPath />
            <StopFromTokyo location={A_09} stationCode="A 09" />
            <StopFromTokyo location={SHIMBASHI} stationCode="A 10" />
            <StopFromTokyo location={{ ...ASAKUSA_NIHOMBASHI, y: NIHOMBASHI.y + OFFSET * 4 }} stationCode="A 12" />
            <StopFromTokyo location={GINZA} stationCode="A 11" />
            <StopFromTokyo location={ASAKUSA_NIHOMBASHI} stationCode="A 13" />
            <StopFromTokyo stationCode="A 14" location={ASAKUSA_NINGYOCHO} />
            <StopFromTokyo stationCode="A 15" location={ASAKUSA_BAKUROCHO} />
            <StopFromTokyo stationCode="A 16" location={ASAKUSABASHI} />
            <StopFromTokyo stationCode="A 17" location={ASAKUSA_KURAMAE} />
            <StopFromTokyo stationCode="A 18" location={A_18} textAlignment={TextAlignment.DOWN} />
            <StopFromTokyo
                stationCode="A 19"
                location={offset(A_18, { dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 })}
                textAlignment={TextAlignment.DOWN}
            />
            <StopFromTokyo stationCode="A 20" location={OSHIAGE} textAlignment={TextAlignment.DOWN} />
        </g>
    );
};

export default Asakusa;
