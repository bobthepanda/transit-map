import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { S, SE, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JC_19 } from './Chuo';
import { JA_10 } from './Hamamatsucho';
import { JK_16 } from './Tokaido';

export const JN_26 = offset(JC_19, { dy: OFFSET });
export const JN_01 = offset(JK_16, { dx: -OFFSET });
const TACHIKAWA_SLOPE = scaleToUnitX(S, MAJOR_LINE);

const YAGAWA_SLOPE = scaleToUnitX(SE, OFFSET * 6);
const JN_01_SLOPE = scaleToUnitX(W, OFFSET * 6);
const JN_24 = offset(JN_26, scale(TACHIKAWA_SLOPE, 2));
const JN_23 = offset(JN_24, scaleToUnitX(S, MAJOR_LINE * 0.5), scaleToUnitX(SE, MAJOR_LINE * 0.5));
export const JN_21 = offset(JN_23, scale(YAGAWA_SLOPE, 2));
export const JN_16 = offset(JN_21, scale(YAGAWA_SLOPE, 5));
export const JN_14 = offset(JN_16, scale(YAGAWA_SLOPE, 2));
export const OH_18 = offset(JN_14, { dx: OFFSET });
export const JN_10 = offset(JN_14, scale(YAGAWA_SLOPE, 4));
export const JN_07 = { y: JN_01.y, x: JA_10.x - OFFSET * 1.5 };

const Nambu = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('JN', 26, 24)}
                origin={JN_26}
                slope={TACHIKAWA_SLOPE}
                strokeColor="stroke-nambu"
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JN', 23, 10)}
                origin={JN_23}
                slope={YAGAWA_SLOPE}
                strokeColor="stroke-nambu"
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JN', 1, 6)}
                origin={JN_01}
                slope={JN_01_SLOPE}
                strokeColor="stroke-nambu"
                textAlignments={[TextAlignment.UP]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JN', 7, 9)}
                origin={JN_07}
                slope={JN_01_SLOPE}
                strokeColor="stroke-nambu"
                textAlignments={[TextAlignment.UP]}
            />
            <Stop stationCode="OH 18" location={OH_18} hideText />
        </>
    );
};

export default Nambu;
