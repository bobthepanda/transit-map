import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import { OFFSET, YAMANOTE_UENO } from '../../utils/CommonCoordinates';
import { curveFrom, E, N, ENE, offset, RADIUS, scale, SSE, SSW, startAtLocation, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import StopFromTokyo from '../StopsFromTokyo';
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

export const JobanRapidPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(UENO)}
        ${curveFrom({ start: UENO, end: NIPPORI, firstDirection: N, secondDirection: WNW })}
        ${curveFrom({ start: NIPPORI, end: CURVE_POINT, firstDirection: WNW, secondDirection: N, radius: MINOR_LINE * 3 })}
        ${curveFrom({ start: CURVE_POINT, end: JJ_03, firstDirection: N, secondDirection: E, radius: MINOR_LINE * 3 })}
        ${curveFrom({ start: JJ_03, end: JJ_05, firstDirection: E, secondDirection: N })}
        ${curveFrom({ start: JJ_05, end: LOCAL_CURVE_POINT, firstDirection: N, secondDirection: E })}
        ${curveFrom({ start: LOCAL_CURVE_POINT, end: JJ_06, firstDirection: E, secondDirection: N, radius: RADIUS + OFFSET })}
        ${curveFrom({ start: JJ_06, end: JJ_10, firstDirection: N, secondDirection: ENE })}
    `}
        />
    );
};

const JobanRapid = () => {
    return (
        <g className="joban-rapid">
            <JobanRapidPath />
            <StopFromTokyo stationCode="JJ 01" location={UENO} />
            <StopFromTokyo stationCode="JJ 02" location={NIPPORI} />
            <StopFromTokyo stationCode="JJ 03" location={JJ_03} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="JJ 04" location={offset(H_21, { dx: -OFFSET })} textAlignment={TextAlignment.LEFT} />
            <StopFromTokyo stationCode="JJ 05" location={JJ_05} />
            <StopFromTokyo stationCode="JJ 06" location={JJ_06} />
            <StopFromTokyo stationCode="JJ 07" location={JJ_07} />
            <LineSegmentWithEndpoint stops={generateStationCodes('JJ', 8, 10)} origin={JJ_08} endpoint={JJ_10} />
        </g>
    );
};

export default JobanRapid;
