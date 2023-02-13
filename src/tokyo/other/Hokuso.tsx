import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { offset } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CS_NISHI_FUNABASHI, JB_31 } from '../jr-east/ChuoSobu';
import { KS_10 } from '../keisei/Main';

const THIS_KS_10 = offset(KS_10, { dy: -OFFSET });
export const HS_05 = { x: CS_NISHI_FUNABASHI.x + MINOR_LINE - MAJOR_LINE * 2 + OFFSET * 1.75, y: THIS_KS_10.y };
export const HS_08 = { x: JB_31.x - MINOR_LINE, y: THIS_KS_10.y };

export const HokusoPath = () => {
    return <SVGPath points={[THIS_KS_10, HS_08]} />;
};

const Hokuso = () => {
    return (
        <g className="hokuso">
            <LineSegmentWithEndpoint
                origin={THIS_KS_10}
                endpoint={HS_05}
                stops={['KS 10', ...generateStationCodes('HS', 1, 5)]}
                textAlignments={[TextAlignment.UP]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('HS', 8, 6)}
                origin={HS_08}
                slope={{ dx: (-MAJOR_LINE * 4) / 3 }}
                textAlignments={[TextAlignment.UP]}
            />
        </g>
    );
};

export default Hokuso;
