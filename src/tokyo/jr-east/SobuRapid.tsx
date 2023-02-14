import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import {
    CHUO_TOKYO,
    GINZA_MITSUKOSHIMAE,
    OFFSET,
    SOBU_BAKUROCHO,
    SOBU_KINSCHICHO,
    YAMANOTE_SHIMBASHI,
} from '../../utils/CommonCoordinates';
import { E, ENE, ESE, generatePoint, N, NNE, offset, RADIUS, scale } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CS_KOIWA, JB_25, JB_27, JB_31, JB_33, JB_37, JB_39 } from './ChuoSobu';
import { JL_30 } from './JobanLocal';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 4 };
const SHIMBASHI = {
    ...YAMANOTE_SHIMBASHI,
    x: YAMANOTE_SHIMBASHI.x + OFFSET * 3,
};
const MITSUKOSHIMAE = offset(GINZA_MITSUKOSHIMAE, { dy: OFFSET * -3.75 });
const JO_23 = offset(JB_25, { dx: -OFFSET });
const JO_24 = offset(JB_27, scale(NNE, OFFSET));
const JO_25 = offset(JB_31, { dy: -OFFSET });
const JO_28 = offset(JB_39, scale(NNE, OFFSET));
const JO_29 = offset(JB_39, { dx: MAJOR_LINE, dy: -MAJOR_LINE + OFFSET });
const JO_35 = generatePoint({ start: JL_30, endReference: JO_29, slope: ESE });
export const JO_36 = offset(JO_35, { dx: MAJOR_LINE, dy: -MAJOR_LINE });
export const JO_37 = offset(JO_36, { dx: MAJOR_LINE * 1.5 });

export const SobuRapidPath = () => {
    return (
        <SVGPath
            color="stroke-sobu-rapid"
            points={[SHIMBASHI, SOBU_KINSCHICHO, JO_23, offset(CS_KOIWA, { dy: -OFFSET }), JO_24, JO_25, JO_28, JO_35, JO_37]}
            directions={[N, ENE, N, E, ESE, E, ESE, N, E]}
            radii={{ 3: RADIUS + OFFSET, 4: RADIUS + (OFFSET * 2) / 3, 6: RADIUS + (OFFSET * 2) / 3, 7: RADIUS * 3 }}
        />
    );
};

const SobuRapidStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-sobu-rapid" />;
};

const SobuRapid = () => {
    return (
        <g className="sobu-rapid">
            <SobuRapidPath />
            <SobuRapidStop location={TOKYO} stationCode="JO 19" />
            <SobuRapidStop location={SHIMBASHI} stationCode="JO 18" />
            <SobuRapidStop location={MITSUKOSHIMAE} stationCode="JO 20" />
            <SobuRapidStop location={SOBU_BAKUROCHO} stationCode="JO 21" />
            <SobuRapidStop location={SOBU_KINSCHICHO} stationCode="JO 22" />
            <SobuRapidStop stationCode="JO 23" location={JO_23} />
            <SobuRapidStop stationCode="JO 24" location={JO_24} />
            <SobuRapidStop stationCode="JO 25" location={JO_25} />
            <SobuRapidStop stationCode="JO 26" location={offset(JB_33, scale(NNE, OFFSET))} />
            <SobuRapidStop stationCode="JO 27" location={offset(JB_37, scale(NNE, OFFSET))} />
            <SobuRapidStop stationCode="JO 28" location={JO_28} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('JO', 29, 35)}
                origin={JO_29}
                endpoint={JO_35}
                strokeColor="stroke-sobu-rapid"
            />
            <SobuRapidStop stationCode="JO 36" location={JO_36} textAlignment={TextAlignment.DOWN} />
            <SobuRapidStop stationCode="JO 37" location={JO_37} textAlignment={TextAlignment.DOWN} />
        </g>
    );
};

export default SobuRapid;
