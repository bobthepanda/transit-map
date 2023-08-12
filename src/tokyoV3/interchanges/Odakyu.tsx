import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NE, S, SE, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { OH_07 } from './Keio';
import { OH_18 } from './Nambu';

export const SHINJUKU_SLOPE = scaleToUnitX(NE, OFFSET * 3);

export const OH_06 = offset(OH_07, scale(NE, MAJOR_LINE * 0.5), scale(N, MAJOR_LINE * 0.5));
export const C_01 = offset(OH_06, SHINJUKU_SLOPE, scale(SE, OFFSET));
const Odakyu = () => {
    return (
        <>
            <Stop stationCode="OH 06" location={OH_06} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('OH', 6, 2)}
                origin={OH_06}
                slope={SHINJUKU_SLOPE}
                skipBeginning
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange stops={generateStationCodes('OH', 16, 10)} origin={OH_18} skipBeginning slope={SHINJUKU_SLOPE} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('OH', 7, 9)}
                skipBeginning
                origin={OH_07}
                slope={scaleToUnitX(S, MAJOR_LINE - OFFSET)}
                textAlignments={[TextAlignment.LEFT]}
            />
            <Stop stationCode="C 01" location={C_01} strokeColor="stroke-chiyoda" hideText />
        </>
    );
};

export default Odakyu;
