import { MAJOR_LINE } from '../../map/GridLines';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { curveFrom, N, offset, startAtLocation, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_31 } from '../jr-east/ChuoSobu';
import { JL_28 } from '../jr-east/JobanLocal';
import { HS_08 } from '../other/Hokuso';
import StopFromTokyo from '../StopsFromTokyo';

const TD_35 = offset(JB_31, { dy: -OFFSET * 2 });
const TD_24 = offset(JL_28, { dx: OFFSET, dy: OFFSET * 2 });
const TD_30 = offset(HS_08, { dx: OFFSET * 0.5, dy: OFFSET });

export const UrbanParkPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(TD_35)}
        ${curveFrom({ start: TD_35, end: TD_24, firstDirection: N, secondDirection: WNW })}    
    `}
        />
    );
};

const UrbanPark = () => {
    return (
        <g className="urban-park">
            <UrbanParkPath />
            <StopFromTokyo stationCode="TD 30" location={TD_30} />
            <LineSegmentWithStepChange origin={TD_35} ystep={(-MAJOR_LINE * 2) / 3} stops={generateStationCodes('TD', 35, 31)} />
            <StopFromTokyo stationCode="TD 29" location={{ x: TD_30.x, y: TD_24.y + MAJOR_LINE * 2 + OFFSET }} />
            <LineSegmentWithEndpoint
                origin={TD_24}
                endpoint={offset(TD_24, { dx: MAJOR_LINE * 3, dy: MAJOR_LINE * 1.5 })}
                stops={generateStationCodes('TD', 24, 28)}
            />
        </g>
    );
};

export default UrbanPark;
