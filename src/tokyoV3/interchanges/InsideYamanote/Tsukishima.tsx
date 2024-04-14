import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, S, SE, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { H_11, Y_20 } from './Tsukiji';

const TSUKISHIMA_INTERSECTION = offset(
    findIntersectionFromSlopes({ start: Y_20, firstDirection: SE, secondDirection: NE, end: H_11 }),
    scaleToUnitX(SE, OFFSET * 4)
);

export const Y_21 = offset(TSUKISHIMA_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const E_16 = offset(Y_21, scaleToUnitX(S, OFFSET));
export const Tsukishima = () => {
    return (
        <g id="tsukishima">
            <Stop stationCode="Y 21" location={Y_21} strokeColor="stroke-yurakucho" />
            <Stop stationCode="E 16" location={E_16} strokeColor="stroke-oedo" />
        </g>
    );
};
