import { MAJOR_LINE } from '../../map/GridLines';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import { HIBIYA_KAYABACHO, MINOR_LINE, OEDO_MONZEN_NAKACHO, OFFSET, SOBU_KINSCHICHO, YAMANOTE_TOKYO } from '../../utils/CommonCoordinates';
import { curveFrom, E, ENE, generatePoint, N, offset, startAtLocation } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { CS_NISHI_FUNABASHI } from './ChuoSobu';

const TOKYO = {
    x: YAMANOTE_TOKYO.x + OFFSET,
    y: YAMANOTE_TOKYO.y + OFFSET * 2,
};
const HATCHOBORI = { ...TOKYO, x: HIBIYA_KAYABACHO.x + OFFSET * 0.5 };
const NISHI_FUNABASHI = offset(CS_NISHI_FUNABASHI, { dx: OFFSET, dy: OFFSET * 2 });
const SHIOMI = { ...TOKYO, x: SOBU_KINSCHICHO.x + OFFSET };
export const MUSASHINO_SHIN_KIBA = offset(SHIOMI, { dx: MAJOR_LINE + MINOR_LINE, dy: -OFFSET * 2 });
const JE_09 = offset(NISHI_FUNABASHI, { dy: MAJOR_LINE * 2 - OFFSET * 2 });
const JE_08 = offset(JE_09, { dy: MAJOR_LINE * 2 });

export const MusashinoPath = () => {
    return (
        <path
            d={`
            ${startAtLocation(TOKYO)}
            ${curveFrom({ start: TOKYO, end: MUSASHINO_SHIN_KIBA, firstDirection: E, secondDirection: ENE })}
            ${curveFrom({ start: MUSASHINO_SHIN_KIBA, end: NISHI_FUNABASHI, firstDirection: ENE, secondDirection: N })}                
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
                stops={['JE 05', 'JE 06', 'JE 07']}
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
        </g>
    );
};

export default Musashino;
