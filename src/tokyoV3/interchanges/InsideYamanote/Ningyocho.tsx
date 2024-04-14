import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NE, SE, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { H_13 } from './Kayabacho';
import { Z_09 } from './Mitsukoshimae';
import { A_13 } from './Nihombashi';

const NINGYOCHO_INTERSECTION = findIntersectionFromSlopes({ firstDirection: N, secondDirection: NE, start: H_13, end: A_13 });
export const A_14 = offset(NINGYOCHO_INTERSECTION, scaleToUnitX(NE, OFFSET));
export const H_14 = offset(A_14, scaleToUnitX(W, OFFSET));
export const Z_10 = findIntersectionFromSlopes({ start: Z_09, end: A_14, firstDirection: SE, secondDirection: E });
const H_15 = offset(H_14, scaleToUnitX(N, MAJOR_LINE + OFFSET * 4));
export const Ningyocho = () => {
    return (
        <>
            <Stop stationCode="H 15" location={H_15} strokeColor="stroke-hibiya" textAlignment={TextAlignment.LEFT} />
            <g id="ningyocho">
                <Stop stationCode="H 14" location={H_14} strokeColor="stroke-hibiya" hideText />
                <Stop stationCode="A 14" location={A_14} strokeColor="stroke-asakusa" textAlignment={TextAlignment.SE} />
                <Stop stationCode="Z 10" location={Z_10} strokeColor="stroke-hanzomon" textAlignment={TextAlignment.NE} />
            </g>
        </>
    );
};
