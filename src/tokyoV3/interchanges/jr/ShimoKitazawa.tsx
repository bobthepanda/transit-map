import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, S, SE, W, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_20 } from '../InsideYamanote/Shibuya';
import { NOBORITO_SLOPE, OH_18 } from './Noborito';
import { C_01 } from './YoyogiUehara';

const OH_07 = offset(OH_18, scale(NOBORITO_SLOPE, 11));
export const IN_05 = offset(OH_07, scale(W, OFFSET * 0.5), scale(S, OFFSET));
const IN_04 = offset(IN_05, scaleToUnitX(SE, OFFSET * 4));
export const IN_03 = { y: midPoint(IN_05, JY_20).y, x: C_01.x };

export const ShimoKitazawa = () => {
    return (
        <>
            <g id="shimo-kitazawa">
                <Stop stationCode="OH 05" location={OH_07} hideText />
                <Stop stationCode="IN 05" location={IN_05} />
            </g>
            <Stop stationCode="IN 04" location={IN_04} textAlignment={TextAlignment.SW} />
            <Stop stationCode="IN 03" location={IN_03} textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="IN 02" location={offset(IN_03, scaleToUnitX(E, MAJOR_LINE))} textAlignment={TextAlignment.DOWN} />
        </>
    );
};
