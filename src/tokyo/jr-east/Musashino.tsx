import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { HIBIYA_KAYABACHO, MINOR_LINE, OFFSET, SOBU_KINSCHICHO, YAMANOTE_TOKYO } from '../../utils/CommonCoordinates';
import { E, ENE, NNW, offset, RADIUS, scaleToUnitX, SSE, SSW, W } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { HS_05 } from '../other/Hokuso';
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
const NISHI_FUNABASHI = offset(CS_NISHI_FUNABASHI, { dx: OFFSET, dy: OFFSET * 1.5 });
const SHIOMI = { ...TOKYO, x: SOBU_KINSCHICHO.x + OFFSET };
export const MUSASHINO_SHIN_KIBA = offset(SHIOMI, { dx: MAJOR_LINE + MINOR_LINE, dy: -OFFSET * 2 });
const JM_15 = offset(JL_25, { dx: -OFFSET });
export const JM_13 = offset(HS_05, { dx: -OFFSET, dy: OFFSET * 0.5 });
export const JM_14 = offset(JM_13, scaleToUnitX(NNW, MAJOR_LINE - MINOR_LINE * 0.5));
const JM_25 = offset(JK_42, { dy: OFFSET });
const JM_33 = offset(JC_17, { dx: OFFSET * 0.5, dy: -OFFSET });
const JM_23 = offset(SR_25, { dx: -OFFSET * 0.5, dy: -OFFSET });
const JE_05 = offset(SHIOMI, { dx: MAJOR_LINE * 2 + MINOR_LINE });
const JE_06 = offset(JE_05, { dx: MAJOR_LINE * 1.5, dy: -MAJOR_LINE * 0.5 });

export const JM_22 = offset(JM_23, { dx: MAJOR_LINE * 1.5 + OFFSET });

export const JM_16 = offset(JM_22, { dx: MAJOR_LINE * 9 - OFFSET * 1.25 });

export const MusashinoPath = () => {
    return (
        <SVGPath
            color="stroke-musashino"
            points={[TOKYO, JE_06, NISHI_FUNABASHI, JM_25, JM_33]}
            directions={[E, ENE, NNW, W, SSW]}
            radii={{ 1: RADIUS + (OFFSET * 4) / 3, 2: RADIUS * 3, 3: RADIUS * 3, 4: RADIUS * 3 }}
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
            <MusashinoStop location={offset(SHIOMI, { dx: -MAJOR_LINE * 1.5 + MINOR_LINE })} stationCode="JE 03" />
            <MusashinoStop location={SHIOMI} stationCode="JE 04" />
            <MusashinoStop stationCode="JE 05" location={JE_05} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JE', 6, 9)}
                origin={JE_06}
                slope={scaleToUnitX(ENE, MAJOR_LINE * 1.5)}
                strokeColor="stroke-musashino"
            />
            <MusashinoStop stationCode="JM 10" location={NISHI_FUNABASHI} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JM', 13, 11)}
                origin={JM_13}
                slope={scaleToUnitX(SSE, MAJOR_LINE * 0.5)}
                strokeColor="stroke-musashino"
            />
            <MusashinoStop stationCode="JM 14" location={JM_14} />
            <MusashinoStop stationCode="JM 15" location={JM_15} />
            <MusashinoStop stationCode="JM 23" location={JM_23} />
            <MusashinoStop
                stationCode="JM 24"
                location={offset(JM_23, { dx: -MAJOR_LINE * 3 + MINOR_LINE })}
                textAlignment={TextAlignment.UP}
            />
            <MusashinoStop stationCode="JM 25" location={JM_25} />
            <MusashinoStop stationCode="JM 33" location={JM_33} />
            <LineSegmentWithEndpoint
                strokeColor="stroke-musashino"
                stops={generateStationCodes('JM', 22, 16)}
                origin={JM_22}
                endpoint={JM_16}
                textAlignments={[TextAlignment.UP]}
            />
        </g>
    );
};

export default Musashino;
