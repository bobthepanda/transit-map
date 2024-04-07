import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, SE, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { C_09 } from './Hibiya';

const C_10 = offset(C_09, scaleToUnitX(NE, MAJOR_LINE + OFFSET));
export const C_11 = offset(C_10, scaleToUnitX(NE, MAJOR_LINE));
export const I_09 = offset(C_11, scale(SE, OFFSET));
export const M_18 = offset(C_11, scaleToUnitX(SE, MAJOR_LINE * 0.5));
export const T_09 = offset(C_11, scaleToUnitX(W, OFFSET), scaleToUnitX(SE, OFFSET * 2.25));
export const Z_08 = offset(T_09, scaleToUnitX(NE, OFFSET));
const T_08 = offset(T_09, scaleToUnitX(NW, MAJOR_LINE * 1.5));
export const Otemachi = () => {
    return (
        <>
            <Stop stationCode="C 10" location={C_10} strokeColor="stroke-chiyoda" textAlignment={TextAlignment.NW} />
            <Stop stationCode="T 08" location={T_08} strokeColor="stroke-tozai" textAlignment={TextAlignment.SW} />
            <g id="otemachi">
                <Stop stationCode="C 11" location={C_11} strokeColor="stroke-chiyoda" textAlignment={TextAlignment.NW} />
                <Stop stationCode="I 09" location={I_09} strokeColor="stroke-mita" hideText />
                <Stop stationCode="M 18" location={M_18} strokeColor="stroke-marunouchi" hideText />
                <Stop stationCode="T 09" location={T_09} strokeColor="stroke-tozai" hideText />
                <Stop stationCode="Z 08" location={Z_08} strokeColor="stroke-hanzomon" hideText />
            </g>
        </>
    );
};
