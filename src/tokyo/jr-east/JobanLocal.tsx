import { MAJOR_LINE } from '../../map/GridLines';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { curveFrom, E, ENE, midPoint, N, offset, RADIUS, scale, startAtLocation } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { KS_10 } from '../keisei/Main';
import StopFromTokyo from '../StopsFromTokyo';
import { C_19 } from '../tokyo-metro/Chiyoda';

const JL_19 = offset(C_19, { dx: OFFSET });
export const JL_21 = { y: JL_19.y, x: KS_10.x + OFFSET };
export const JL_22 = offset(JL_21, { dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 });
export const JL_25 = offset(JL_22, { dy: -MAJOR_LINE * 3 });
const JL_26 = offset(JL_25, { dx: (MAJOR_LINE * 2) / 3, dy: -MAJOR_LINE });
export const JL_28 = offset(JL_26, scale({ dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 }, 2));
export const JL_30 = offset(JL_28, scale({ dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 }, 2));
export const JL_32 = offset(JL_30, scale({ dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 }, 2));

export const JobanLocalPath = () => {
    return (
        <path
            d={`
    ${startAtLocation(C_19)}
    ${curveFrom({ start: JL_19, end: JL_25, firstDirection: E, secondDirection: N })}
    ${curveFrom({ start: JL_25, end: JL_32, firstDirection: N, secondDirection: ENE, radius: RADIUS + (OFFSET * 2) / 3 })}
    `}
        />
    );
};

const JobanLocal = () => {
    return (
        <g className="joban-local">
            <JobanLocalPath />
            <StopFromTokyo stationCode="JL 19" location={JL_19} />
            <StopFromTokyo stationCode="JL 20" location={midPoint(JL_19, JL_21)} />
            <StopFromTokyo stationCode="JL 21" location={JL_21} />
            <LineSegmentWithEndpoint origin={JL_22} endpoint={JL_25} stops={generateStationCodes('JL', 22, 25)} />
            <LineSegmentWithEndpoint origin={JL_26} endpoint={JL_32} stops={generateStationCodes('JL', 26, 32)} />
        </g>
    );
};

export default JobanLocal;
