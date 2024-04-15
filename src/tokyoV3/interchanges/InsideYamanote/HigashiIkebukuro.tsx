import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, S, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { Y_09 } from './Ikebukuro';

const Y_10 = offset(Y_09, scaleToUnitX(S, MAJOR_LINE + OFFSET));
export const SA_25 = offset(Y_10, scaleToUnitX(N, OFFSET), scaleToUnitX(W, OFFSET * 0.5));
const SA_24 = offset(SA_25, scaleToUnitX(E, OFFSET * 4.5));
export const HigashiIkebukuro = () => {
    return (
        <>
            <Stop stationCode="SA 24" location={SA_24} textAlignment={TextAlignment.UP} />
            <g id="higashi-ikebukuro">
                <Stop stationCode="Y 10" location={Y_10} strokeColor="stroke-yurakucho" textAlignment={TextAlignment.SE} />
                <Stop stationCode="SA 25" location={SA_25} textAlignment={TextAlignment.NW} />
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
