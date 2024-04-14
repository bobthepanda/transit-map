import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, S, W, midPoint, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { M_22 } from './Kasuga';
import { JY_11 } from './Sugamo';

export const JY_12 = offset(JY_11, scaleToUnitX(W, MAJOR_LINE + OFFSET * 1.5));
export const JY_13 = offset(JY_12, scaleToUnitX(W, MAJOR_LINE + OFFSET * 1.5));
export const JS_21 = offset(JY_13, scaleToUnitX(N, OFFSET));
export const JA_12 = offset(JS_21, scaleToUnitX(N, OFFSET));
export const Y_09 = offset(JA_12, scaleToUnitX(N, OFFSET), scaleToUnitX(W, OFFSET));
export const F_09 = offset(Y_09, scaleToUnitX(W, OFFSET));
export const M_25 = offset(JY_13, scaleToUnitX(S, OFFSET));
export const MARUNOUCHI_MIDPOINT = midPoint(M_25, M_22);
export const M_24 = offset(MARUNOUCHI_MIDPOINT, scaleToUnitX(N, OFFSET * 2.5));
export const M_23 = offset(MARUNOUCHI_MIDPOINT, scaleToUnitX(S, OFFSET * 2.5));

export const Ikebukuro = () => {
    return (
        <>
            <Stop stationCode="JY 12" location={JY_12} strokeColor="stroke-yamanote" textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="M 24" location={M_24} strokeColor="stroke-marunouchi" />
            <Stop stationCode="M 23" location={M_23} strokeColor="stroke-marunouchi" />
            <g id="ikebukuro">
                <Stop stationCode="JY 13" location={JY_13} strokeColor="stroke-yamanote" hideText />
                <Stop stationCode="JS 21" location={JS_21} strokeColor="stroke-shonan-shinjuku" hideText />
                <Stop stationCode="JA 12" location={JA_12} strokeColor="stroke-saikyo" hideText />
                <Stop stationCode="Y 09" location={Y_09} strokeColor="stroke-yurakucho" />
                <Stop stationCode="F 09" location={F_09} strokeColor="stroke-fukutoshin" hideText />
                <Stop stationCode="M 25" location={M_25} strokeColor="stroke-marunouchi" hideText />
            </g>
            <LineSegmentWithStepChange
                stops={generateStationCodes('Y', 10, 12)}
                origin={offset(Y_09, scaleToUnitX(S, MAJOR_LINE + OFFSET))}
                slope={scaleToUnitX(S, OFFSET * 5)}
                strokeColor="stroke-yurakucho"
            />
        </>
    );
};
