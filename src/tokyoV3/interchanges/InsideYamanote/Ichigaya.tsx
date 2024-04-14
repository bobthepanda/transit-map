import { Coordinates } from '../../../interfaces/Dimensions';
import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, NW, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JB_14 } from './Yotsuya';

export const JB_15: Coordinates = offset(JB_14, scaleToUnitX(NE, MAJOR_LINE + OFFSET * 3));
export const N_09: Coordinates = offset(JB_15, scale(NW, OFFSET));
export const Y_14: Coordinates = offset(N_09, scale(NW, OFFSET));
export const S_04: Coordinates = { x: Y_14.x, y: offset(JB_15, scaleToUnitX(N, OFFSET * 2.5)).y };
export const Ichigaya = () => {
    return (
        <g id="itchigaya">
            <Stop stationCode="N 09" location={N_09} strokeColor="stroke-namboku" hideText />
            <Stop stationCode="JB 15" location={JB_15} strokeColor="stroke-chuo-sobu" hideText />
            <Stop stationCode="Y 14" location={Y_14} strokeColor="stroke-yurakucho" hideText />
            <Stop stationCode="S 04" location={S_04} strokeColor="stroke-shinjuku" textAlignment={TextAlignment.UP} />
        </g>
    );
};
