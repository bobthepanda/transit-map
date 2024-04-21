import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { W, offset, scale } from '../../../utils/PathUtils';
import { AKABANE_OFFSET, JK_36 } from './Oji';

export const JK_38 = offset(JK_36, scale(AKABANE_OFFSET, 2));

export const JA_15 = offset(JK_38, scale(W, OFFSET));
export const JS_22 = offset(JK_38, scale(W, OFFSET * -1));
export const JU_04 = offset(JS_22, scale(W, OFFSET * -1));
export const Akabane = () => {
    return (
        <g id="akabane">
            <Stop stationCode="JK 38" location={JK_38} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="JA 15" location={JA_15} strokeColor="stroke-saikyo" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JS 22" location={JS_22} strokeColor="stroke-shonan-shinjuku" hideText />
            <Stop stationCode="JU 04" location={JU_04} strokeColor="stroke-tokaido" hideText />
        </g>
    );
};
