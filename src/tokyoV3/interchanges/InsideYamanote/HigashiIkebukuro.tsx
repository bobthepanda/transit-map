import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, S, SW, findIntersectionFromSlopes, midPoint, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { Y_09 } from './Ikebukuro';
import { SA_23 } from './Otsuka';

const HIGASHI_IKEBUKURO_INTERSECTION = findIntersectionFromSlopes({
    start: Y_09,
    end: SA_23,
    firstDirection: S,
    secondDirection: SW,
});
const Y_10 = offset(HIGASHI_IKEBUKURO_INTERSECTION, scaleToUnitX(N, OFFSET));
export const SA_25 = offset(Y_10, scaleToUnitX(E, OFFSET));
const SA_24 = midPoint(SA_23, SA_25);
export const HigashiIkebukuro = () => {
    return (
        <>
            <Stop stationCode="SA 24" location={SA_24} textAlignment={TextAlignment.UP} />
            <g id="higashi-ikebukuro">
                <Stop stationCode="Y 10" location={Y_10} strokeColor="stroke-yurakucho" textAlignment={TextAlignment.NW} />
                <Stop stationCode="SA 25" location={SA_25} textAlignment={TextAlignment.NE} />
            </g>
            <LineSegmentWithStepChange
                stops={generateStationCodes('Y', 10, 12)}
                origin={Y_10}
                slope={scaleToUnitX(S, OFFSET * 4.5)}
                strokeColor="stroke-yurakucho"
                skipBeginning
            />
        </>
    );
};
