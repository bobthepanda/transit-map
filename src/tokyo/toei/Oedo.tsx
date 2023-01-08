import { TextAlignment } from '../../symbols/BasicStop';
import {
    ASAKUSA_BAKUROCHO,
    ASAKUSA_NINGYOCHO,
    OEDO_MONZEN_NAKACHO,
    YAMANOTE_YURAKUCHO,
    OFFSET,
    ASAKUSA_KURAMAE,
    CS_RYOGOKU,
    YAMANOTE_OKACHIMACHI,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, lineToLocation, midPoint, offset, S, startAtLocation } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { G_15 } from '../tokyo-metro/Ginza';

const KURAMAE = offset(ASAKUSA_KURAMAE, { dx: OFFSET * 0.5, dy: -OFFSET });
const RYOGOKU = { ...OEDO_MONZEN_NAKACHO, y: CS_RYOGOKU.y + OFFSET };
const TSUKISHIMA = { ...OEDO_MONZEN_NAKACHO, y: YAMANOTE_YURAKUCHO.y };
export const UENO_OKAMACHI = midPoint(YAMANOTE_OKACHIMACHI, G_15);

const FIRST_STOP = UENO_OKAMACHI;

export const OedoPath = () => {
    return (
        <path
            className="oedo"
            d={`
        ${startAtLocation(FIRST_STOP)}
        ${curveFrom({ start: FIRST_STOP, end: RYOGOKU, firstDirection: E, secondDirection: S, radius: RYOGOKU.y - KURAMAE.y - OFFSET })}
        ${lineToLocation(TSUKISHIMA)}
    `}
        />
    );
};

const Oedo = () => {
    return (
        <g className="oedo">
            <OedoPath />
            <StopFromTokyo stationCode="E 15" location={OEDO_MONZEN_NAKACHO} />
            <StopFromTokyo stationCode="E 16" location={TSUKISHIMA} />
            <StopFromTokyo stationCode="E 14" location={{ ...OEDO_MONZEN_NAKACHO, y: ASAKUSA_NINGYOCHO.y + OFFSET * 2 }} />
            <StopFromTokyo stationCode="E 13" location={{ ...OEDO_MONZEN_NAKACHO, y: ASAKUSA_BAKUROCHO.y - OFFSET }} />
            <StopFromTokyo stationCode="E 12" location={RYOGOKU} />
            <StopFromTokyo stationCode="E 11" location={KURAMAE} />
            <StopFromTokyo stationCode="E 09" location={UENO_OKAMACHI} textAlignment={TextAlignment.LOWER_LEFT} />
        </g>
    );
};

export default Oedo;
