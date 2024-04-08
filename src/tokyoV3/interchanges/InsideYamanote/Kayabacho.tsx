import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, SE, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { H_12 } from './Hatchobori';
import { T_10 } from './Nihombashi';

const KAYABACHO_INTERSECTION = findIntersectionFromSlopes({ start: T_10, firstDirection: SE, secondDirection: NE, end: H_12 });

export const T_11 = offset(KAYABACHO_INTERSECTION, scaleToUnitX(NW, OFFSET));
export const H_13 = offset(T_11, scaleToUnitX(W, OFFSET));
export const Kayabacho = () => {
    return (
        <g id="kayabacho">
            <Stop stationCode="T 11" location={T_11} strokeColor="stroke-tozai" textAlignment={TextAlignment.NE} />
            <Stop stationCode="H 13" location={H_13} strokeColor="stroke-hibiya" hideText />
        </g>
    );
};
