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
    MITA_HIBIYA,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, generatePoint, N, offset, RADIUS, S, startAtLocation, W, WNW } from '../../utils/PathUtils';
import { JB_16, JB_17 } from '../jr-east/ChuoSobu';
import StopFromTokyo from '../StopsFromTokyo';

const KURAMAE = offset(ASAKUSA_KURAMAE, { dx: OFFSET * 0.5, dy: -OFFSET });
const RYOGOKU = { ...OEDO_MONZEN_NAKACHO, y: CS_RYOGOKU.y - OFFSET };
const TSUKISHIMA = { ...OEDO_MONZEN_NAKACHO, y: YAMANOTE_YURAKUCHO.y };
export const UENO_OKAMACHI = offset(YAMANOTE_OKACHIMACHI, { dx: -OFFSET * 2, dy: -OFFSET * 2 });
export const E_07 = { y: KURAMAE.y, x: JB_17.x };
export const E_08 = offset(E_07, { dx: OFFSET * 0.5 + MAJOR_LINE * 1.5 });
const E_06 = offset(JB_16, { dx: -OFFSET * 3 });
export const E_20 = offset(MITA_HIBIYA, { dx: MAJOR_LINE + OFFSET * 0.5, dy: MAJOR_LINE * 3 });
const E_18 = offset(E_20, { dx: MAJOR_LINE * 3 - OFFSET * 0.5 });
export const E_22 = offset(E_20, { dx: -OFFSET - MAJOR_LINE * 3.5 });
export const E_23 = offset(E_22, { dx: OFFSET * 0.5 - MAJOR_LINE * 1.5, dy: -MAJOR_LINE * 0.5 });
export const E_24 = generatePoint({ start: E_23, slope: WNW, endReference: offset(E_23, { dx: -MAJOR_LINE * 2 }) });
const FIRST_STOP = E_06;

export const OedoPath = () => {
    return (
        <path
            className="oedo"
            d={`
        ${startAtLocation(FIRST_STOP)}
        ${curveFrom({ start: E_06, end: E_07, firstDirection: N, secondDirection: E, radius: E_06.y - E_07.y - OFFSET * 3 })}
        ${curveFrom({ start: E_07, end: TSUKISHIMA, firstDirection: E, secondDirection: S, radius: RYOGOKU.y - KURAMAE.y - OFFSET })}
        ${curveFrom({ start: TSUKISHIMA, end: E_22, firstDirection: S, secondDirection: W, radius: RADIUS + OFFSET * 4 })}
        ${curveFrom({ start: E_22, end: E_24, firstDirection: W, secondDirection: WNW })}
    `}
        />
    );
};

const Oedo = () => {
    return (
        <g className="oedo">
            <OedoPath />
            <StopFromTokyo stationCode="E 24" location={E_24} />
            <StopFromTokyo stationCode="E 23" location={E_23} />
            <StopFromTokyo stationCode="E 22" location={E_22} />
            <StopFromTokyo stationCode="E 20" location={E_20} />
            <StopFromTokyo stationCode="E 17" location={offset(TSUKISHIMA, { dy: MAJOR_LINE * 1.5 })} />
            <StopFromTokyo stationCode="E 19" location={E_18} />
            <StopFromTokyo stationCode="E 18" location={offset(E_18, { dx: MAJOR_LINE * 1.5 })} />
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
