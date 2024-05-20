import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, SE, SW, findIntersectionFromSlopes, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { JY_17 } from './Shinjuku';
import { JB_14 } from './Yotsuya';

export const JY_18 = findIntersectionFromSlopes({ start: JY_17, firstDirection: SW, end: JB_14, secondDirection: NW });
export const JB_11 = offset(JY_18, scale(SE, OFFSET));
export const E_26 = offset(JB_11, scale(SE, OFFSET));

export const JB_12 = offset(JY_18, scaleToUnitX(SW, MAJOR_LINE * 0.5), scaleToUnitX(SE, MAJOR_LINE * 0.75));
export const JB_13 = offset(JB_12, scaleToUnitX(SE, MAJOR_LINE * 1.25));
export const E_25 = offset(midPoint(JB_12, JB_13), scaleToUnitX(SW, OFFSET * 2), scaleToUnitX(SE, OFFSET));
export const OH_02 = offset(JB_11, scaleToUnitX(NW, MAJOR_LINE));
export const Yoyogi = () => {
    return (
        <>
            <Stop strokeColor="stroke-chuo-sobu" location={JB_12} stationCode="JB 12" textAlignment={TextAlignment.NE} />
            <Stop strokeColor="stroke-chuo-sobu" location={JB_13} stationCode="JB 13" textAlignment={TextAlignment.NE} />
            <Stop strokeColor="stroke-oedo" location={E_25} stationCode="E 25" textAlignment={TextAlignment.SW} />
            <LineSegmentWithStepChange
                origin={OH_02}
                stops={generateStationCodes('OH', 2, 4)}
                slope={scaleToUnitX(SW, MAJOR_LINE)}
                textAlignments={[TextAlignment.NW]}
            />
            <g id="yoyogi">
                <Stop strokeColor="stroke-yamanote" location={JY_18} stationCode="JY 18" hideText />
                <Stop strokeColor="stroke-chuo-sobu" location={JB_11} stationCode="JB 11" hideText />
                <Stop strokeColor="stroke-oedo" location={E_26} stationCode="E 26" textAlignment={TextAlignment.SE} />
            </g>
        </>
    );
};
