import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NW, S, SE, W, findIntersectionFromSlopes, midPoint, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { Y_16, Z_04 } from './AsakasaMitsukae';
import { S_04 } from './Ichigaya';
import { T_06 } from './Iidabashi';

export const Y_15 = offset(Y_16, scaleToUnitX(W, OFFSET * 2), scaleToUnitX(N, MAJOR_LINE));
const KudanshitaIntersection = findIntersectionFromSlopes({ start: T_06, end: S_04, firstDirection: SE, secondDirection: E });

export const T_07 = offset(KudanshitaIntersection, scaleToUnitX(NW, OFFSET));
export const S_05 = offset(T_07, scaleToUnitX(S, OFFSET));
export const Z_06 = offset(S_05, scaleToUnitX(S, OFFSET));

export const Z_05 = midPoint(Z_04, Z_06);
export const Kudanshita = () => {
    return (
        <>
            <Stop stationCode="Z 05" location={Z_05} strokeColor="stroke-hanzomon" />
            <g id="kudanshita">
                <Stop stationCode="T 07" location={T_07} strokeColor="stroke-tozai" textAlignment={TextAlignment.NE} />
                <Stop stationCode="S 05" location={S_05} strokeColor="stroke-shinjuku" hideText />
                <Stop stationCode="Z 06" location={Z_06} strokeColor="stroke-hanzomon" hideText />
            </g>
        </>
    );
};
