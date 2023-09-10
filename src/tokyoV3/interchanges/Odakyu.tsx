import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NE, S, SE, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { OH_01 } from './Kanda';
import { OH_07 } from './Keio';
import { OH_18 } from './Nambu';
import { E_26 } from './Shimbashi';

export const SHINJUKU_SLOPE = scaleToUnitX(NE, OFFSET * 3);

export const OH_06 = offset(OH_07, scale(NE, MAJOR_LINE * 0.5), scale(N, MAJOR_LINE * 0.5));
export const C_01 = offset(OH_06, SHINJUKU_SLOPE, scale(SE, OFFSET));
const OH_02 = { x: OH_01.x, y: E_26.y - OFFSET };
const Odakyu = () => {
    return (
        <>
            <Stop stationCode="OH 06" location={OH_06} />
            <Stop stationCode="OH 02" location={OH_02} textAlignment={TextAlignment.LEFT} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('OH', 6, 3)}
                origin={OH_06}
                slope={SHINJUKU_SLOPE}
                skipBeginning
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange stops={generateStationCodes('OH', 16, 9)} origin={OH_18} skipBeginning slope={SHINJUKU_SLOPE} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('OH', 7, 8)}
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