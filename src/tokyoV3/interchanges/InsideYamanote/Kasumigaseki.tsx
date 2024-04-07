import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, NW, SW, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { G_07 } from './Toranomon';

export const C_08 = offset(G_07, scaleToUnitX(NE, MAJOR_LINE * 0.75), scaleToUnitX(NW, OFFSET * 0.25));
export const M_15 = offset(C_08, scaleToUnitX(SW, MAJOR_LINE * 0.25));
export const H_07 = findIntersectionFromSlopes({ firstDirection: W, start: C_08, secondDirection: N, end: M_15 });
export const Kasumigaseki = () => {
    return (
        <g id="kasumigaseki">
            <Stop stationCode="M 15" location={M_15} strokeColor="stroke-marunouchi" hideText />
            <Stop stationCode="C 08" location={C_08} strokeColor="stroke-chiyoda" textAlignment={TextAlignment.UP} />
            <Stop stationCode="H 07" location={H_07} strokeColor="stroke-hibiya" hideText />
        </g>
    );
};
