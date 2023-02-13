import { MAJOR_LINE } from '../../map/GridLines';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, N, offset, scale, scaleToUnitX, W, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_31 } from '../jr-east/ChuoSobu';
import { JL_28 } from '../jr-east/JobanLocal';
import { JK_47 } from '../jr-east/KeihinTohoku';
import { JM_22 } from '../jr-east/Musashino';
import { HS_08 } from '../other/Hokuso';

const TD_35 = offset(JB_31, { dy: -OFFSET * 2 });
const TD_24 = offset(JL_28, { dx: OFFSET, dy: OFFSET * 2 });
const TD_30 = offset(HS_08, { dx: OFFSET * 0.5, dy: -OFFSET * 2 });
const TD_01 = offset(JK_47, { dx: OFFSET });
export const TD_10 = { y: TD_01.y, x: JM_22.x };

const TD_23_OFFSET = scale(scaleToUnitX(WNW), OFFSET * 4);
const TD_23 = offset(offset(TD_24, scale(scaleToUnitX(WNW), OFFSET * 4)), TD_23_OFFSET);
export const TD_22 = offset(TD_23, TD_23_OFFSET);
const TD_10_OFFSET = { dx: MAJOR_LINE };

export const UrbanParkPath = () => {
    return <SVGPath points={[TD_35, TD_24, TD_01]} directions={[N, WNW, W]} />;
};

const UrbanPark = () => {
    return (
        <g className="urban-park">
            <UrbanParkPath />
            <LineSegmentWithStepChange origin={TD_30} slope={{ dy: -MAJOR_LINE * 1.5 }} stops={generateStationCodes('TD', 30, 28)} />
            <LineSegmentWithStepChange origin={TD_35} slope={{ dy: (-MAJOR_LINE * 2) / 3 }} stops={generateStationCodes('TD', 35, 31)} />
            <LineSegmentWithStepChange
                origin={TD_24}
                slope={scale(scaleToUnitX(ESE), MAJOR_LINE * 1.5)}
                stops={generateStationCodes('TD', 24, 27)}
            />
            <LineSegmentWithEndpoint stops={generateStationCodes('TD', 1, 10)} origin={TD_01} endpoint={TD_10} />
            <LineSegmentWithStepChange origin={TD_23} stops={generateStationCodes('TD', 23, 16)} slope={TD_23_OFFSET} />
            <LineSegmentWithStepChange
                origin={offset(TD_10, TD_10_OFFSET)}
                stops={generateStationCodes('TD', 11, 15)}
                slope={TD_10_OFFSET}
            />
        </g>
    );
};

export default UrbanPark;
