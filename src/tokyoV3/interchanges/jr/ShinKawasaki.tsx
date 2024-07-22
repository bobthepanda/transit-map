import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { SW, offset, scale } from '../../../utils/PathUtils';
import { JN_01, NAMBU_KAWASAKI_SLOPE } from './Keihin';

const JN_04 = offset(JN_01, scale(NAMBU_KAWASAKI_SLOPE, 3));
export const JO_14 = offset(JN_04, scale(SW, OFFSET * 3));
export const JS_14 = offset(JO_14, scale(SW, OFFSET));
export const ShinKawasaki = () => {
    return (
        <g id="shin-kawasaki">
            <Stop stationCode="JN 04" location={JN_04} strokeColor="stroke-nambu" textAlignment={TextAlignment.NE} />
            <Stop stationCode="JS 14" location={JS_14} strokeColor="stroke-shonan-shinjuku" textAlignment={TextAlignment.SW} />
            <Stop stationCode="JO 14" location={JO_14} strokeColor="stroke-sobu-rapid" hideText />
        </g>
    );
};
