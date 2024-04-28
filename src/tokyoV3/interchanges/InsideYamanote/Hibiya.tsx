import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, SE, SW, W, findIntersectionFromSlopes, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { C_08, M_15 } from './Kasumigaseki';
import { G_07 } from './Toranomon';

export const C_09 = offset(C_08, scaleToUnitX(SE, MAJOR_LINE * 0.5 + OFFSET * 0.25), scaleToUnitX(NE, MAJOR_LINE * 0.5));
export const H_08 = offset(C_09, scaleToUnitX(W, OFFSET));
export const I_08 = offset(C_09, scale(SE, OFFSET));
const I_07 = midPoint(
    findIntersectionFromSlopes({ start: I_08, firstDirection: SW, secondDirection: SE, end: M_15 }),
    findIntersectionFromSlopes({ start: I_08, firstDirection: SW, secondDirection: SE, end: G_07 })
);
const I_06 = offset(I_07, scaleToUnitX(SW, OFFSET * 6));
export const Hibiya = () => {
    return (
        <>
            <Stop stationCode="I 07" location={I_07} strokeColor="stroke-mita" textAlignment={TextAlignment.SE} />
            <Stop stationCode="I 06" location={I_06} strokeColor="stroke-mita" textAlignment={TextAlignment.NW} />
            <Stop
                stationCode="I 05"
                location={offset(I_06, scaleToUnitX(SW, OFFSET * 6))}
                strokeColor="stroke-mita"
                textAlignment={TextAlignment.NW}
            />

            <g id="hibiya">
                <Stop stationCode="H 08" location={H_08} strokeColor="stroke-hibiya" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="I 08" location={I_08} strokeColor="stroke-mita" hideText />
                <Stop stationCode="C 09" location={C_09} strokeColor="stroke-chiyoda" hideText />
            </g>
        </>
    );
};
