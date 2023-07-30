import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_17 } from './Akihabara';
import { JC_05 } from './Kanda';

export const JB_09 = { x: JC_05.x - MAJOR_LINE, y: JB_17.y - MAJOR_LINE };

const CHUO_OFFSET = scaleToUnitX(W, MAJOR_LINE);

export const JB_01 = offset(JB_09, scale(CHUO_OFFSET, 8));
export const JC_22 = offset(JB_01, { dy: OFFSET }, scale(CHUO_OFFSET, 10));
export const JC_19 = offset(JC_22, scale(CHUO_OFFSET, -3));
export const JC_17 = offset(JC_19, scale(CHUO_OFFSET, -2));
export const JB_02 = offset(JB_01, scale(CHUO_OFFSET, -1));

const Chuo = () => {
    return (
        <>
            <LineSegmentWithStepChange
                origin={JB_09}
                slope={CHUO_OFFSET}
                stops={generateStationCodes('JB', 9, 1)}
                strokeColor="stroke-chuo-sobu"
                textAlignments={[TextAlignment.UP]}
            />
            <LineSegmentWithStepChange
                origin={offset(JB_09, { dy: OFFSET }, scale(CHUO_OFFSET, 2))}
                slope={CHUO_OFFSET}
                stops={generateStationCodes('JC', 6, 22)}
                stopsToHide={generateStationCodes('JC', 6, 12)}
                strokeColor="stroke-chuo-rapid"
                textAlignments={[TextAlignment.UP]}
            />
        </>
    );
};

export default Chuo;
