import { MAJOR_LINE } from '../../map/GridLines';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import { HIBIYA_KAYABACHO, MINOR_LINE, OEDO_MONZEN_NAKACHO, OFFSET, SOBU_KINSCHICHO, YAMANOTE_TOKYO } from '../../utils/CommonCoordinates';
import { curveFrom, E, ENE, ESE, generatePoint, midPoint, N, offset, startAtLocation, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { CS_NISHI_FUNABASHI } from './ChuoSobu';
import { JL_25 } from './JobanLocal';

const TOKYO = {
    x: YAMANOTE_TOKYO.x + OFFSET,
    y: YAMANOTE_TOKYO.y + OFFSET * 2,
};
const HATCHOBORI = { ...TOKYO, x: HIBIYA_KAYABACHO.x + OFFSET * 0.5 };
const NISHI_FUNABASHI = offset(CS_NISHI_FUNABASHI, { dx: OFFSET, dy: -OFFSET * 2 });
const SHIOMI = { ...TOKYO, x: SOBU_KINSCHICHO.x + OFFSET };
export const MUSASHINO_SHIN_KIBA = offset(SHIOMI, { dx: MAJOR_LINE + MINOR_LINE, dy: -OFFSET * 2 });
const JE_09 = offset(NISHI_FUNABASHI, { dy: MAJOR_LINE * 2 });
const JE_08 = offset(JE_09, { dy: MAJOR_LINE * 2 });
const JM_15 = offset(JL_25, { dx: -OFFSET * 0.5, dy: OFFSET });
export const JM_13 = generatePoint({ start: JM_15, slope: ESE, endReference: offset(NISHI_FUNABASHI, { dx: -MAJOR_LINE + OFFSET }) });
const JM_11 = offset(NISHI_FUNABASHI, { dy: -MAJOR_LINE * 2 + OFFSET * 2 });
export const JM_14 = offset(midPoint(JM_13, JM_15), { dx: OFFSET * 1.25, dy: OFFSET * 0.625 });

export const MusashinoPath = () => {
    return (
        <path
            d={`
            ${startAtLocation(TOKYO)}
            ${curveFrom({ start: TOKYO, end: MUSASHINO_SHIN_KIBA, firstDirection: E, secondDirection: ENE })}
            ${curveFrom({ start: MUSASHINO_SHIN_KIBA, end: NISHI_FUNABASHI, firstDirection: ENE, secondDirection: N })}
            ${curveFrom({ start: NISHI_FUNABASHI, end: JM_15, firstDirection: N, secondDirection: WNW })}                
        `}
        />
    );
};

const Musashino = () => {
    return (
        <g className="musashino">
            <MusashinoPath />
            <StopFromTokyo location={TOKYO} stationCode="JE 01" />
            <StopFromTokyo location={HATCHOBORI} stationCode="JE 02" />
            <StopFromTokyo stationCode="JE 03" location={{ ...TOKYO, x: OEDO_MONZEN_NAKACHO.x + MAJOR_LINE * 0.5 }} />
            <StopFromTokyo stationCode="JE 04" location={SHIOMI} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('JE', 5, 7)}
                origin={MUSASHINO_SHIN_KIBA}
                endpoint={generatePoint({
                    start: MUSASHINO_SHIN_KIBA,
                    slope: ENE,
                    endReference: offset(NISHI_FUNABASHI, { dx: -MAJOR_LINE * 0.5 }),
                })}
            />
            <StopFromTokyo stationCode="JE 08" location={JE_08} />
            <StopFromTokyo stationCode="JE 09" location={JE_09} />
            <StopFromTokyo stationCode="JM 10" location={NISHI_FUNABASHI} />
            <StopFromTokyo stationCode="JM 11" location={JM_11} />
            <StopFromTokyo stationCode="JM 12" location={offset(JM_11, { dy: -MAJOR_LINE })} />
            <StopFromTokyo stationCode="JM 13" location={JM_13} />
            <StopFromTokyo stationCode="JM 14" location={JM_14} />
            <StopFromTokyo stationCode="JM 15" location={JM_15} />
        </g>
    );
};

export default Musashino;
