import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, N, offset, scaleToUnitX, W, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_31 } from '../jr-east/ChuoSobu';
import { JL_28 } from '../jr-east/JobanLocal';
import { JK_47 } from '../jr-east/KeihinTohoku';
import { JM_22 } from '../jr-east/Musashino';
import { HS_08 } from '../other/Hokuso';

const TD_35 = offset(JB_31, { dy: -OFFSET * 2 });
const TD_24 = offset(JL_28, { dx: OFFSET, dy: OFFSET * 1.5 });
const TD_30 = offset(HS_08, { dx: OFFSET * 0.5, dy: -OFFSET * 2 });
const TD_01 = offset(JK_47, { dx: OFFSET });
export const TD_10 = { y: TD_01.y, x: JM_22.x - OFFSET };

const TD_23_OFFSET = scaleToUnitX(WNW, MAJOR_LINE - OFFSET);
const TD_23 = offset(offset(TD_24, scaleToUnitX(WNW, OFFSET * 2)), TD_23_OFFSET);
export const TD_22 = offset(TD_23, TD_23_OFFSET);
const TD_10_OFFSET = { dx: MAJOR_LINE - OFFSET * 0.75 };

export const UrbanParkPath = () => {
    return <SVGPath points={[TD_35, TD_24, TD_01]} directions={[N, WNW, W]} />;
};

const UrbanPark = () => {
    return (
        <g className="urban-park">
            <UrbanParkPath />
            <LineSegmentWithStepChange origin={TD_30} slope={{ dy: -MAJOR_LINE - OFFSET }} stops={generateStationCodes('TD', 30, 28)} />
            <LineSegmentWithStepChange
                origin={offset(TD_30, { dy: MAJOR_LINE })}
                slope={{ dy: MAJOR_LINE }}
                stops={generateStationCodes('TD', 31, 34)}
            />
            <Stop location={TD_35} stationCode="TD 35" />
            <LineSegmentWithStepChange
                origin={TD_24}
                slope={scaleToUnitX(ESE, MAJOR_LINE * 1.5)}
                stops={generateStationCodes('TD', 24, 27)}
            />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('TD', 1, 10)}
                origin={TD_01}
                endpoint={TD_10}
                textAlignments={[TextAlignment.UP]}
            />
            <LineSegmentWithStepChange origin={TD_23} stops={generateStationCodes('TD', 23, 20)} slope={TD_23_OFFSET} />
            <LineSegmentWithStepChange
                origin={offset(TD_10, TD_10_OFFSET)}
                stops={generateStationCodes('TD', 11, 19)}
                slope={TD_10_OFFSET}
                textAlignments={[TextAlignment.UP]}
            />
        </g>
    );
};

export default UrbanPark;
