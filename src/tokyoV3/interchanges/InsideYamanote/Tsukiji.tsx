import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, SE, SW, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { M_16 } from './Ginza';
import { TSUKIJI_INTERSECTION } from './HigashiGinza';
import { Y_18 } from './Yurakucho';

export const H_11 = offset(TSUKIJI_INTERSECTION, scaleToUnitX(SW, OFFSET));
export const Y_20 = offset(H_11, scaleToUnitX(N, OFFSET * 2));
const Y_19 = findIntersectionFromSlopes({ start: Y_18, end: M_16, firstDirection: SE, secondDirection: NE });
export const Tsukiji = () => {
    return (
        <>
            <Stop stationCode="Y 19" location={Y_19} strokeColor="stroke-yurakucho" textAlignment={TextAlignment.NE} />
            <g id="tsukiji">
                <Stop stationCode="H 11" location={H_11} strokeColor="stroke-hibiya" textAlignment={TextAlignment.SE} />
                <Stop stationCode="Y 20" location={Y_20} strokeColor="stroke-yurakucho" textAlignment={TextAlignment.NE} />
            </g>
        </>
    );
};
