import { Stop, StopDefinition } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { CHUO_OCHANOMIZU, CHUO_TOKYO, OFFSET, YAMANOTE_KANDA } from '../../utils/CommonCoordinates';
import { N, offset, RADIUS, S, W } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CHUO_SPACING, JB_07, JB_13, JB_14 } from './ChuoSobu';
import { JY_17 } from './Yamanote';

const JC_04 = offset(JB_14, { dx: OFFSET });
const JB_13_CONTROL = offset(JB_13, { dy: OFFSET });
const JC_05 = offset(JY_17, { dx: -OFFSET * 3 });
const JC_06 = offset(JB_07, { dy: OFFSET });
export const JC_17 = offset(JC_06, { dx: -CHUO_SPACING * 11 });
export const JC_19 = offset(JC_17, { dx: -CHUO_SPACING * 2 });
export const JC_22 = offset(JC_19, { dx: -CHUO_SPACING * 3 });
export const JC_24 = offset(JC_22, { dx: -CHUO_SPACING * 2 });

export const ChuoRapidPath = () => {
    return (
        <SVGPath
            color="stroke-chuo-rapid"
            points={[CHUO_TOKYO, CHUO_OCHANOMIZU, JC_04, JB_13_CONTROL, JC_05, JC_24]}
            directions={[N, W, S, W, N, W]}
            radii={{ 1: OFFSET * 4, 3: RADIUS + OFFSET, 4: RADIUS + OFFSET }}
        />
    );
};

const ChuoRapidStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-chuo-rapid" />;
};

const ChuoRapid = () => {
    return (
        <g className="chuo-rapid">
            <ChuoRapidStop location={CHUO_TOKYO} stationCode="JC 01" />
            <ChuoRapidStop location={{ x: CHUO_TOKYO.x, y: YAMANOTE_KANDA.y }} stationCode="JC 02" />
            <ChuoRapidStop location={CHUO_OCHANOMIZU} stationCode="JC 03" />
            <ChuoRapidStop stationCode="JC 04" location={JC_04} />
            <ChuoRapidStop stationCode="JC 05" location={JC_05} />
            <LineSegmentWithEndpoint
                strokeColor="stroke-chuo-rapid"
                stops={generateStationCodes('JC', 6, 24)}
                origin={JC_06}
                endpoint={JC_24}
            />
        </g>
    );
};

export default ChuoRapid;
