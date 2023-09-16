import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { S, SW, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_17 } from './Akihabara';
import { JC_05 } from './Kanda';

export const JB_09 = { x: JC_05.x - MAJOR_LINE, y: JB_17.y - MAJOR_LINE };

const CHUO_OFFSET = scaleToUnitX(W, MAJOR_LINE + MINOR_LINE);

export const JB_01 = offset(JB_09, scale(CHUO_OFFSET, 8));
const JC_06 = offset(JB_09, { dy: OFFSET }, scale(CHUO_OFFSET, 2));
export const JC_19 = offset(JC_06, scale(CHUO_OFFSET, 13));
export const JC_17 = offset(JC_19, scale(CHUO_OFFSET, -2));
export const JB_02 = offset(JB_01, scale(CHUO_OFFSET, -1));
export const JB_04 = offset(JB_02, scale(CHUO_OFFSET, -2));
export const JB_07 = offset(JB_04, scale(CHUO_OFFSET, -3));
export const JB_08 = offset(JB_07, scale(CHUO_OFFSET, -1));

const TACHIKAWA_SLOPE = scaleToUnitX(SW, OFFSET * 4);

export const JC_20 = offset(JC_19, CHUO_OFFSET, scaleToUnitX(S, MAJOR_LINE * 0.5));
export const JC_22 = offset(JC_20, scale(TACHIKAWA_SLOPE, 2));

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
                origin={JC_06}
                slope={CHUO_OFFSET}
                stops={generateStationCodes('JC', 6, 19)}
                stopsToHide={generateStationCodes('JC', 6, 12)}
                strokeColor="stroke-chuo-rapid"
                textAlignments={[TextAlignment.UP]}
            />
            <LineSegmentWithStepChange
                origin={JC_20}
                slope={TACHIKAWA_SLOPE}
                stops={generateStationCodes('JC', 20, 22)}
                strokeColor="stroke-chuo-rapid"
                textAlignments={[TextAlignment.UP]}
            />
        </>
    );
};

export default Chuo;
