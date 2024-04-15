import { MAJOR_LINE, MINOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NE, NW, SW, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { F_16 } from './Shibuya';
import { JY_18 } from './Yoyogi';

const F_15 = offset(F_16, scaleToUnitX(NE, MAJOR_LINE + MINOR_LINE));
export const F_14 = offset(F_15, scaleToUnitX(E, MAJOR_LINE * 0.5 - OFFSET), scaleToUnitX(NE, MAJOR_LINE * 0.5 - OFFSET));
export const C_03 = offset(F_15, scaleToUnitX(W, OFFSET));
const JY_19 = findIntersectionFromSlopes({ firstDirection: SW, start: JY_18, secondDirection: NW, end: F_15 });
export const Harajuku = () => {
    return (
        <>
            <Stop stationCode="F 14" location={F_14} strokeColor="stroke-fukutoshin" textAlignment={TextAlignment.UP} />
            <g id="harajuku">
                <Stop stationCode="F 15" location={F_15} strokeColor="stroke-fukutoshin" textAlignment={TextAlignment.DOWN} />
                <Stop stationCode="C 03" location={C_03} strokeColor="stroke-chiyoda" hideText />
                <Stop stationCode="JY 19" location={JY_19} strokeColor="stroke-yamanote" textAlignment={TextAlignment.SE} />
            </g>
        </>
    );
};
