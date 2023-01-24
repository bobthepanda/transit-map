import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { HIBIYA_KAYABACHO, MINOR_LINE, OEDO_MONZEN_NAKACHO, OFFSET, SOBU_KINSCHICHO, YAMANOTE_TOKYO } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, generatePoint, midPoint, N, offset, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
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
    return <SVGPath color="stroke-musashino" points={[TOKYO, MUSASHINO_SHIN_KIBA, NISHI_FUNABASHI, JM_15]} directions={[E, ENE, N, WNW]} />;
};

const MusashinoStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-musashino" />;
};

const Musashino = () => {
    return (
        <g className="musashino">
            <MusashinoStop location={TOKYO} stationCode="JE 01" />
            <MusashinoStop location={HATCHOBORI} stationCode="JE 02" />
            <MusashinoStop stationCode="JE 03" location={{ ...TOKYO, x: OEDO_MONZEN_NAKACHO.x + MAJOR_LINE * 0.5 }} />
            <MusashinoStop stationCode="JE 04" location={SHIOMI} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('JE', 5, 7)}
                origin={MUSASHINO_SHIN_KIBA}
                endpoint={generatePoint({
                    start: MUSASHINO_SHIN_KIBA,
                    slope: ENE,
                    endReference: offset(NISHI_FUNABASHI, { dx: -MAJOR_LINE * 0.5 }),
                })}
                strokeColor="stroke-musashino"
            />
            <MusashinoStop stationCode="JE 08" location={JE_08} />
            <MusashinoStop stationCode="JE 09" location={JE_09} />
            <MusashinoStop stationCode="JM 10" location={NISHI_FUNABASHI} />
            <MusashinoStop stationCode="JM 11" location={JM_11} />
            <MusashinoStop stationCode="JM 12" location={offset(JM_11, { dy: -MAJOR_LINE })} />
            <MusashinoStop stationCode="JM 13" location={JM_13} />
            <MusashinoStop stationCode="JM 14" location={JM_14} />
            <MusashinoStop stationCode="JM 15" location={JM_15} />
        </g>
    );
};

export default Musashino;
