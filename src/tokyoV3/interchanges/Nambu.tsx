import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { SE, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JC_19 } from './Chuo';
import { JK_16 } from './KeihinTohoku';

export const JN_26 = offset(JC_19, { dy: OFFSET });
export const JN_01 = offset(JK_16, { dx: -OFFSET });

const JN_26_SLOPE = scaleToUnitX(SE, OFFSET * 5);
const JN_01_SLOPE = scaleToUnitX(W, OFFSET * 6);
export const JN_16 = offset(JN_26, scale(JN_26_SLOPE, 10));
export const JN_21 = offset(JN_26, scale(JN_26_SLOPE, 5));

const Nambu = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('JN', 26, 6)}
                origin={JN_26}
                slope={JN_26_SLOPE}
                strokeColor="stroke-nambu"
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JN', 1, 5)}
                origin={JN_01}
                slope={JN_01_SLOPE}
                strokeColor="stroke-nambu"
                textAlignments={[TextAlignment.UP]}
            />
        </>
    );
};

export default Nambu;
