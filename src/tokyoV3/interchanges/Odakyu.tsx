import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, NE, SE, SW, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { OH_01 } from './Kanda';
import { OH_07 } from './Keio';
import { OH_18 } from './Nambu';
import { E_26 } from './Shimbashi';
import { OH_27 } from './Yokohama';

export const SHINJUKU_SLOPE = scaleToUnitX(NE, OFFSET * 3);
export const GOTOKUJI_SLOPE = scaleToUnitX(NE, OFFSET * 3);

export const OH_06 = offset(OH_07, SHINJUKU_SLOPE);
export const C_01 = offset(OH_06, SHINJUKU_SLOPE, scale(SE, OFFSET));
const OH_02 = { x: OH_01.x, y: E_26.y - OFFSET };
export const OH_10 = offset(OH_07, scale(GOTOKUJI_SLOPE, -3));
const NOBORITO_SLOPE = scaleToUnitX(SW, OFFSET * 3);

const OH_16 = offset(OH_07, scale(GOTOKUJI_SLOPE, -9));

export const OH_17 = midPoint(OH_16, OH_18);

const Odakyu = () => {
    return (
        <>
            <Stop stationCode="OH 06" location={OH_06} />
            <Stop stationCode="OH 02" location={OH_02} textAlignment={TextAlignment.LEFT} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('OH', 7, 3)}
                origin={OH_07}
                slope={SHINJUKU_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('OH', 7, 16)}
                origin={OH_07}
                skipBeginning
                slope={scale(GOTOKUJI_SLOPE, -1)}
            />
            <LineSegmentWithStepChange stops={generateStationCodes('OH', 18, 25)} origin={OH_18} skipBeginning slope={NOBORITO_SLOPE} />
            <Stop stationCode="OH 07" location={OH_07} />
            <Stop stationCode="OH 17" location={OH_17} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('C', 1, 2)}
                origin={C_01}
                strokeColor="stroke-chiyoda"
                stopsToHide={['C 01']}
                textAlignments={[TextAlignment.UP]}
                slope={scaleToUnitX(E, MAJOR_LINE - MINOR_LINE * 0.5)}
            />
            <Stop location={OH_27} stationCode="OH 27" />
            <Stop location={offset(OH_27, scaleToUnitX(E, MAJOR_LINE))} stationCode="OH 26" textAlignment={TextAlignment.DOWN} />
        </>
    );
};

export default Odakyu;
