import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET, YAMANOTE_UENO } from '../../utils/CommonCoordinates';
import { E, ENE, N, offset, RADIUS, scale, SSE, SSW, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CHIYODA_MICHIYA } from '../tokyo-metro/Chiyoda';
import { HIBIYA_KITA_SENJU, H_21 } from '../tokyo-metro/Hibiya';
import { JL_21, JL_22, JL_28, JL_30, JL_32 } from './JobanLocal';
import { YAMANOTE_NIPPORI } from './Yamanote';

const UENO = offset(YAMANOTE_UENO, { dx: -OFFSET });
const NIPPORI = offset(YAMANOTE_NIPPORI, scale(SSW, OFFSET));
const JJ_03 = offset(CHIYODA_MICHIYA, { dy: MAJOR_LINE });
const JJ_05 = offset(HIBIYA_KITA_SENJU, { dx: -OFFSET });
const CURVE_POINT = { x: YAMANOTE_NIPPORI.x - OFFSET * 2, y: JJ_03.y + OFFSET * 2 };
const LOCAL_CURVE_POINT = offset(JL_21, { dy: OFFSET });
const JJ_06 = offset(JL_22, { dx: OFFSET });
const JJ_07 = offset(JL_28, scale(SSE, OFFSET));
const JJ_08 = offset(JL_30, scale(SSE, OFFSET));
const JJ_10 = offset(JL_32, scale(SSE, OFFSET));
const NIPPORI_RADIUS = MINOR_LINE * 1.5;

export const JobanRapidPath = () => {
    return (
        <SVGPath
            color="stroke-joban-rapid"
            points={[UENO, NIPPORI, CURVE_POINT, JJ_03, JJ_05, LOCAL_CURVE_POINT, JJ_06, JJ_10]}
            directions={[N, WNW, N, E, N, E, N, ENE]}
            radii={{ 2: (NIPPORI_RADIUS * 2) / 3, 3: NIPPORI_RADIUS, 6: RADIUS + OFFSET }}
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
