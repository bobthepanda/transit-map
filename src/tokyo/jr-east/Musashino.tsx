import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { HIBIYA_KAYABACHO, MINOR_LINE, OEDO_MONZEN_NAKACHO, OFFSET, SOBU_KINSCHICHO, YAMANOTE_TOKYO } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, generatePoint, midPoint, N, offset, S, W, WNW, WSW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { SR_25 } from '../tokyo-metro/Namboku';
import { JC_17 } from './ChuoRapid';
import { CS_NISHI_FUNABASHI } from './ChuoSobu';
import { JL_25 } from './JobanLocal';
import { JK_42 } from './KeihinTohoku';

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
const JM_25 = offset(JK_42, { dy: -OFFSET });
const JM_33 = offset(JC_17, { dx: OFFSET * 0.5, dy: -OFFSET });
const JM_23 = offset(SR_25, { dx: OFFSET * 0.5, dy: -OFFSET });

const NORTH_MUSASHINO_SPACING = MAJOR_LINE * 1.5 + OFFSET * 2;
const JM_22 = offset(JM_23, { dx: NORTH_MUSASHINO_SPACING });
const JM_17 = offset(JM_22, { dx: NORTH_MUSASHINO_SPACING * 5 });

export const MusashinoPath = () => {
    return (
        <SVGPath
            color="stroke-musashino"
            points={[TOKYO, MUSASHINO_SHIN_KIBA, NISHI_FUNABASHI, JM_15, JM_23, JM_25, JM_33]}
            directions={[E, ENE, N, WNW, W, WSW, S]}
        />
    );
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
            <MusashinoStop stationCode="JM 24" location={offset(JM_23, { dx: -MAJOR_LINE * 4 + MINOR_LINE })} />
            <MusashinoStop stationCode="JM 25" location={JM_25} />
            <MusashinoStop stationCode="JM 33" location={JM_33} />
            <LineSegmentWithEndpoint
                strokeColor="stroke-musashino"
                stops={generateStationCodes('JM', 23, 17)}
                origin={JM_23}
                endpoint={JM_17}
            />
        </g>
    );
};

export default Musashino;
