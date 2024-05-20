import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, SE, W, offset, scale } from '../../../utils/PathUtils';
import { NAMBU_SLOPE } from './Bubaigawara';
import { JN_10 } from './Mizonokuchi';

export const JN_07 = offset(JN_10, scale(NAMBU_SLOPE, 3)); // Musashi-Kosugi

export const TY_11 = offset(JN_07, scale(E, OFFSET));
export const MG_11 = offset(TY_11, scale(SE, OFFSET));

export const JO_15 = offset(JN_07, scale(W, OFFSET * 2));
export const JS_15 = offset(JO_15, scale(W, OFFSET));
export const MusashiKosugi = () => {
    return (
        <g id="musashi-kosugi">
            <Stop stationCode="JN 07" location={JN_07} strokeColor="stroke-nambu" hideText />
            <Stop stationCode="JS 15" location={JS_15} strokeColor="stroke-shonan-shinjuku" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JO 15" location={JO_15} strokeColor="stroke-sobu-rapid" hideText />
            <Stop stationCode="MG 11" location={MG_11} hideText />
            <Stop stationCode="TY 11" location={TY_11} hideText />
        </g>
    );
};
