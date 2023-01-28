import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, offset, W, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_31 } from '../jr-east/ChuoSobu';
import { JL_28 } from '../jr-east/JobanLocal';
import { JK_47 } from '../jr-east/KeihinTohoku';
import { JM_22 } from '../jr-east/Musashino';
import { HS_08 } from '../other/Hokuso';

const TD_35 = offset(JB_31, { dy: -OFFSET * 2 });
const TD_24 = offset(JL_28, { dx: OFFSET, dy: OFFSET * 2 });
const TD_30 = offset(HS_08, { dx: OFFSET * 0.5, dy: OFFSET });
const TD_01 = offset(JK_47, { dx: OFFSET });
export const TD_10 = { y: TD_01.y, x: JM_22.x };

export const UrbanParkPath = () => {
    return <SVGPath points={[TD_35, TD_24, TD_01]} directions={[N, WNW, W]} />;
};

const UrbanPark = () => {
    return (
        <g className="urban-park">
            <UrbanParkPath />
            <Stop stationCode="TD 30" location={TD_30} />
            <LineSegmentWithStepChange origin={TD_35} slope={{ dy: (-MAJOR_LINE * 2) / 3 }} stops={generateStationCodes('TD', 35, 31)} />
            <Stop stationCode="TD 29" location={{ x: TD_30.x, y: TD_24.y + MAJOR_LINE * 2 + OFFSET }} />
            <LineSegmentWithEndpoint
                origin={TD_24}
                endpoint={offset(TD_24, { dx: MAJOR_LINE * 3, dy: MAJOR_LINE * 1.5 })}
                stops={generateStationCodes('TD', 24, 28)}
            />
            <LineSegmentWithEndpoint stops={generateStationCodes('TD', 1, 10)} origin={TD_01} endpoint={TD_10} />
        </g>
    );
};

export default UrbanPark;
