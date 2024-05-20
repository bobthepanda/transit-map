import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { W, offset, scale } from '../../../utils/PathUtils';
import { NAMBU_SLOPE } from './Bubaigawara';
import { JN_07 } from './MusashiKosugi';

const JN_04 = offset(JN_07, scale(NAMBU_SLOPE, 3));
export const JO_14 = offset(JN_04, scale(W, OFFSET * 2));
export const JS_14 = offset(JO_14, scale(W, OFFSET));
export const ShinKawasaki = () => {
    return (
        <g id="shin-kawasaki">
            <Stop stationCode="JN 04" location={JN_04} strokeColor="stroke-nambu" />
            <Stop stationCode="JS 14" location={JS_14} strokeColor="stroke-shonan-shinjuku" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JO 14" location={JO_14} strokeColor="stroke-sobu-rapid" hideText />
        </g>
    );
};
