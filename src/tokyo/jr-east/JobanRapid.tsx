import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET, YAMANOTE_UENO } from '../../utils/CommonCoordinates';
import { E, ESE, N, NNE, offset, RADIUS, scale, SSW, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CHIYODA_MICHIYA } from '../tokyo-metro/Chiyoda';
import { HIBIYA_KITA_SENJU, H_21 } from '../tokyo-metro/Hibiya';
import { JL_21, JL_22, JL_28, JL_30, JL_32 } from './JobanLocal';
import { YAMANOTE_NIPPORI } from './Yamanote';

const UENO = offset(YAMANOTE_UENO, { dx: -OFFSET });
const NIPPORI = offset(YAMANOTE_NIPPORI, scale(SSW, OFFSET));
const JJ_03 = offset(CHIYODA_MICHIYA, { dy: MAJOR_LINE * 0.5 + OFFSET * 2 });
const JJ_05 = offset(HIBIYA_KITA_SENJU, { dx: -OFFSET });
const CURVE_POINT = { x: YAMANOTE_NIPPORI.x - MAJOR_LINE * 0.5, y: JJ_03.y + OFFSET * 1.5 };
const JL_22_LOCAL_OFFSET = scale(ESE, OFFSET);
const LOCAL_CURVE_POINT = offset(JL_21, { dy: OFFSET });
const JJ_06 = offset(JL_22, JL_22_LOCAL_OFFSET);
const JJ_07 = offset(JL_28, JL_22_LOCAL_OFFSET);
const JJ_08 = offset(JL_30, JL_22_LOCAL_OFFSET);
const JJ_10 = offset(JL_32, JL_22_LOCAL_OFFSET);

export const JobanRapidPath = () => {
    return (
        <SVGPath
            color="stroke-joban-rapid"
            points={[UENO, NIPPORI, CURVE_POINT, JJ_03, JJ_05, LOCAL_CURVE_POINT, JJ_10]}
            directions={[N, WNW, N, E, N, E, NNE]}
            radii={{ 2: RADIUS - OFFSET, 3: RADIUS - OFFSET, 6: RADIUS + OFFSET }}
        />
    );
};

const JobanRapidStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-joban-rapid" />;
};

const JobanRapid = () => {
    return (
        <g className="joban-rapid">
            <JobanRapidStop stationCode="JJ 01" location={UENO} />
            <JobanRapidStop stationCode="JJ 02" location={NIPPORI} />
            <JobanRapidStop stationCode="JJ 03" location={JJ_03} textAlignment={TextAlignment.UP} />
            <JobanRapidStop stationCode="JJ 04" location={offset(H_21, { dx: -OFFSET })} textAlignment={TextAlignment.LEFT} />
            <JobanRapidStop stationCode="JJ 05" location={JJ_05} />
            <JobanRapidStop stationCode="JJ 06" location={JJ_06} />
            <JobanRapidStop stationCode="JJ 07" location={JJ_07} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('JJ', 8, 10)}
                origin={JJ_08}
                endpoint={JJ_10}
                strokeColor="stroke-joban-rapid"
            />
        </g>
    );
};

export default JobanRapid;
