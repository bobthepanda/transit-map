import { MAJOR_LINE } from '../../map/GridLines';
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
import { curveFrom, E, lineToLocation, N, offset, S, startAtLocation } from '../../utils/PathUtils';
import { JB_16, JB_17 } from '../jr-east/ChuoSobu';
import StopFromTokyo from '../StopsFromTokyo';
import { M_21 } from '../tokyo-metro/Marunouchi';

const KURAMAE = offset(ASAKUSA_KURAMAE, { dx: OFFSET * 0.5, dy: -OFFSET });
const RYOGOKU = { ...OEDO_MONZEN_NAKACHO, y: CS_RYOGOKU.y + OFFSET };
const TSUKISHIMA = { ...OEDO_MONZEN_NAKACHO, y: YAMANOTE_YURAKUCHO.y };
export const UENO_OKAMACHI = offset(YAMANOTE_OKACHIMACHI, { dx: -OFFSET * 2, dy: -OFFSET * 2 });
const E_08 = offset(M_21, { dy: -OFFSET });
export const E_07 = { y: E_08.y, x: JB_17.x };
const E_06 = offset(JB_16, { dx: -OFFSET * 3 });
const FIRST_STOP = E_06;

export const OedoPath = () => {
    return (
        <path
            className="oedo"
            d={`
        ${startAtLocation(FIRST_STOP)}
        ${curveFrom({ start: E_06, end: E_07, firstDirection: N, secondDirection: E })}
        ${curveFrom({ start: E_07, end: RYOGOKU, firstDirection: E, secondDirection: S, radius: RYOGOKU.y - KURAMAE.y - OFFSET })}
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
            <StopFromTokyo stationCode="E 10" location={offset(KURAMAE, { dx: -OFFSET * 0.5 - MAJOR_LINE })} />
            <StopFromTokyo stationCode="E 09" location={UENO_OKAMACHI} textAlignment={TextAlignment.LOWER_LEFT} />
            <StopFromTokyo stationCode="E 08" location={E_08} />
            <StopFromTokyo stationCode="E 07" location={E_07} />
            <StopFromTokyo stationCode="E 06" location={E_06} />
        </g>
    );
};

export default Oedo;
