import { MAJOR_LINE } from '../../map/GridLines';
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
} from '../../utils/CommonCoordinates';
import { curveFrom, S, startAtLocation, W } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { TOKYO_RADIUS } from '../tokyo-metro/Marunouchi';

const SHIMBASHI = { x: YAMANOTE_SHIMBASHI.x + OFFSET * 1.5, y: YAMANOTE_SHIMBASHI.y + OFFSET * 2 };
const GINZA = { x: HIBIYA_GINZA.x + OFFSET * 0.5 + MAJOR_LINE, y: MITA_HIBIYA.y };
const SHIMBASHI_RADIUS = TOKYO_RADIUS + OFFSET * 2;
const ASAKUSABASHI = { ...YAMANOTE_AKIHABARA, x: ASAKUSA_BAKUROCHO.x };
const FIRST_STOP = ASAKUSA_KURAMAE;

export const AsakusaPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(FIRST_STOP)}
        ${curveFrom({ start: FIRST_STOP, end: SHIMBASHI, radius: SHIMBASHI_RADIUS, firstDirection: S, secondDirection: W })}
    `}
        />
    );
};

const Asakusa = () => {
    return (
        <g className="asakusa">
            <AsakusaPath />
            <StopFromTokyo location={SHIMBASHI} stationCode="A 10" />
            <StopFromTokyo location={{ ...ASAKUSA_NIHOMBASHI, y: NIHOMBASHI.y + OFFSET * 4 }} stationCode="A 12" />
            <StopFromTokyo location={GINZA} stationCode="A 11" />
            <StopFromTokyo location={ASAKUSA_NIHOMBASHI} stationCode="A 13" />
            <StopFromTokyo stationCode="A 14" location={ASAKUSA_NINGYOCHO} />
            <StopFromTokyo stationCode="A 15" location={ASAKUSA_BAKUROCHO} />
            <StopFromTokyo stationCode="A 16" location={ASAKUSABASHI} />
            <StopFromTokyo stationCode="A 17" location={ASAKUSA_KURAMAE} />
        </g>
    );
};

export default Asakusa;
