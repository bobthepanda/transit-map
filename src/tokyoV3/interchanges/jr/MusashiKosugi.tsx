import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, SE, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { NAMBU_SLOPE } from './Bubaigawara';
import { JN_10 } from './Mizonokuchi';

export const JN_07 = offset(JN_10, scale(NAMBU_SLOPE, 3)); // Musashi-Kosugi

export const MG_11 = offset(JN_07, scale(W, OFFSET));
export const TY_11 = offset(MG_11, scale(NW, OFFSET));

export const JS_15 = offset(JN_07, scaleToUnitX(SE, OFFSET * 2));
export const JO_15 = offset(JS_15, scale(SE, OFFSET));
export const MusashiKosugi = () => {
    return (
        <g id="musashi-kosugi">
            <Stop stationCode="JN 07" location={JN_07} strokeColor="stroke-nambu" hideText />
            <Stop stationCode="JS 15" location={JS_15} strokeColor="stroke-shonan-shinjuku" hideText />
            <Stop stationCode="JO 15" location={JO_15} strokeColor="stroke-sobu-rapid" textAlignment={TextAlignment.SE} />
            <Stop stationCode="MG 11" location={MG_11} hideText />
            <Stop stationCode="TY 11" location={TY_11} hideText />
        </g>
    );
};

export const MUSASHI_KOSUGI_TOKYU_SPACING_EAST = scaleToUnitX(NE, OFFSET * 9.5);
