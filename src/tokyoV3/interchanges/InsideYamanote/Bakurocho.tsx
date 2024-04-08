import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, SE, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { A_13 } from './Nihombashi';
import { S_07 } from './Ogawamachi';

const BAKUROCHO_INTERSECTION = findIntersectionFromSlopes({ start: S_07, firstDirection: SE, secondDirection: NE, end: A_13 });
export const A_15 = offset(BAKUROCHO_INTERSECTION, scaleToUnitX(NE, OFFSET));
export const S_09 = offset(A_15, scaleToUnitX(W, OFFSET * 2));
export const JO_21 = offset(S_09, scaleToUnitX(N, OFFSET * 2));
export const Bakurocho = () => {
    return (
        <g id="bakurocho">
            <Stop stationCode="A 15" location={A_15} strokeColor="stroke-asakusa" textAlignment={TextAlignment.SE} />
            <Stop stationCode="JO 21" location={JO_21} strokeColor="stroke-sobu-rapid" textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="S 09" location={S_09} strokeColor="stroke-shinjuku" textAlignment={TextAlignment.SW} />
        </g>
    );
};
