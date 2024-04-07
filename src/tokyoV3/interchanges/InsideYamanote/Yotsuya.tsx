import { Coordinates } from '../../../interfaces/Dimensions';
import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, SE, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { N_07 } from './AsakasaMitsukae';

export const N_08: Coordinates = offset(N_07, scaleToUnitX(NW, MAJOR_LINE + OFFSET), scale(SE, OFFSET));
export const JC_04: Coordinates = offset(N_08, scaleToUnitX(W, OFFSET));
export const JB_14: Coordinates = offset(JC_04, scale(NW, OFFSET));
export const M_12: Coordinates = offset(JB_14, scale(W, OFFSET));
export const Yotsuya = () => {
    return (
        <g id="yotsuya">
            <Stop stationCode="N 08" location={N_08} strokeColor="stroke-namboku" hideText />
            <Stop stationCode="JC 04" location={JC_04} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="JB 14" location={JB_14} strokeColor="stroke-chuo-sobu" hideText />
            <Stop stationCode="M 12" location={M_12} strokeColor="stroke-marunouchi" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};
