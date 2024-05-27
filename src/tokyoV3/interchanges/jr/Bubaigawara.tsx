import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, S, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JN_26 } from './Tachikawa';

export const NAMBU_SLOPE = scaleToUnitX(S, MAJOR_LINE + OFFSET * 4);
export const JN_21 = offset(JN_26, scale(NAMBU_SLOPE, 5)); // Keio

export const KO_25 = offset(JN_21, scale(E, OFFSET));
export const Bubaigawara = () => {
    return (
        <g id="bubaigawara">
            <Stop stationCode="JN 21" location={JN_21} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="KO 25" location={KO_25} hideText />
        </g>
    );
};
