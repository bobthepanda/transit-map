import {
    ASAKUSA_BAKUROCHO,
    ASAKUSA_NINGYOCHO,
    OEDO_MONZEN_NAKACHO,
    YAMANOTE_YURAKUCHO,
    OFFSET,
    ASAKUSA_KURAMAE,
    CS_RYOGOKU,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, lineToLocation, offset, S, startAtLocation } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const KURAMAE = offset(ASAKUSA_KURAMAE, { dx: OFFSET * 0.5, dy: OFFSET });
const RYOGOKU = { ...OEDO_MONZEN_NAKACHO, y: CS_RYOGOKU.y + OFFSET };
const TSUKISHIMA = { ...OEDO_MONZEN_NAKACHO, y: YAMANOTE_YURAKUCHO.y };

export const OedoPath = () => {
    return (
        <path
            className="oedo"
            d={`
        ${startAtLocation(KURAMAE)}
        ${curveFrom({ start: KURAMAE, end: RYOGOKU, firstDirection: E, secondDirection: S })}
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
            <StopFromTokyo stationCode="E 14" location={{ ...OEDO_MONZEN_NAKACHO, y: ASAKUSA_NINGYOCHO.y }} />
            <StopFromTokyo stationCode="E 13" location={{ ...OEDO_MONZEN_NAKACHO, y: ASAKUSA_BAKUROCHO.y - OFFSET }} />
            <StopFromTokyo stationCode="E 12" location={RYOGOKU} />
            <StopFromTokyo stationCode="E 11" location={KURAMAE} />
        </g>
    );
};

export default Oedo;
