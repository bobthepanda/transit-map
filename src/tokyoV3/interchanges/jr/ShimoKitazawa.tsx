import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NW, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { IN_01 } from '../InsideYamanote/Shibuya';
import { OH_01 } from '../InsideYamanote/Shinjuku';
import { OH_YOYOGI_SLOPE } from './Noborito';

export const OH_07 = offset(OH_01, scale(OH_YOYOGI_SLOPE, 6));
export const IN_05 = offset(OH_07, scale(N, OFFSET));
export const IN_04 = { y: midPoint(IN_05, offset(IN_01, scaleToUnitX(NW, MAJOR_LINE, 2))).y, x: IN_05.x - OFFSET };

export const ShimoKitazawa = () => {
    return (
        <>
            <g id="shimo-kitazawa">
                <Stop stationCode="OH 07" location={OH_07} hideText />
                <Stop stationCode="IN 05" location={IN_05} textAlignment={TextAlignment.NW} />
            </g>
            <LineSegmentWithStepChange
                origin={IN_01}
                slope={scaleToUnitX(NW, MAJOR_LINE)}
                skipBeginning
                stops={generateStationCodes('IN', 1, 3)}
                textAlignments={[TextAlignment.NE]}
            />
            <Stop stationCode="IN 04" location={IN_04} />
            <Stop stationCode="OH 06" location={offset(OH_07, scale(OH_YOYOGI_SLOPE, -1))} textAlignment={TextAlignment.DOWN} />
        </>
    );
};
