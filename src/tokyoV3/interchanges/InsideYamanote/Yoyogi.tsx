import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, SE, SW, findIntersectionFromSlopes, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_17 } from './Shinjuku';
import { JB_14 } from './Yotsuya';

export const JY_18 = findIntersectionFromSlopes({ start: JY_17, firstDirection: SW, end: JB_14, secondDirection: NW });
export const JB_11 = offset(JY_18, scale(SE, OFFSET));
export const E_26 = offset(JB_11, scale(SE, OFFSET));

export const JB_12 = offset(JY_18, scaleToUnitX(SW, MAJOR_LINE * 0.5), scaleToUnitX(SE, MAJOR_LINE));
export const JB_13 = offset(JB_12, scaleToUnitX(SE, MAJOR_LINE * 0.75));
export const E_25 = offset(midPoint(JB_12, JB_13), scaleToUnitX(SW, OFFSET * 2));
export const Yoyogi = () => {
    return (
        <>
            <Stop strokeColor="stroke-chuo-sobu" location={JB_12} stationCode="JB 12" textAlignment={TextAlignment.NE} />
            <Stop strokeColor="stroke-chuo-sobu" location={JB_13} stationCode="JB 13" textAlignment={TextAlignment.NE} />
            <Stop strokeColor="stroke-oedo" location={E_25} stationCode="E 25" textAlignment={TextAlignment.SW} />
            <g id="yoyogi">
                <Stop strokeColor="stroke-yamanote" location={JY_18} stationCode="JY 18" hideText />
                <Stop strokeColor="stroke-chuo-sobu" location={JB_11} stationCode="JB 11" hideText />
                <Stop strokeColor="stroke-oedo" location={E_26} stationCode="E 26" textAlignment={TextAlignment.SE} />
            </g>
        </>
    );
};
