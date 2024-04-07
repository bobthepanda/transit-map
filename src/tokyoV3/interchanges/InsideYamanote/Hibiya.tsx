import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, SE, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { C_08 } from './Kasumigaseki';

export const C_09 = offset(C_08, scaleToUnitX(SE, MAJOR_LINE * 0.5 + OFFSET * 0.25), scaleToUnitX(NE, MAJOR_LINE * 0.5));
export const H_08 = offset(C_09, scaleToUnitX(W, OFFSET));
export const I_08 = offset(C_09, scale(SE, OFFSET));
export const Hibiya = () => {
    return (
        <g id="hibiya">
            <Stop stationCode="H 08" location={H_08} strokeColor="stroke-hibiya" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="I 08" location={I_08} strokeColor="stroke-mita" hideText />
            <Stop stationCode="C 09" location={C_09} strokeColor="stroke-chiyoda" hideText />
        </g>
    );
};
