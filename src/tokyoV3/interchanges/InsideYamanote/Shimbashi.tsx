import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, SE, SW, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { G_07 } from './Toranomon';

export const G_08 = offset(G_07, scaleToUnitX(SE, MAJOR_LINE * 1.5));
export const A_10 = offset(G_08, scale(SW, OFFSET));
export const JY_29 = offset(G_08, scale(E, OFFSET));
export const JK_24 = offset(JY_29, scale(SE, OFFSET));
export const JT_02 = offset(JK_24, scale(SE, OFFSET));
export const JO_18 = offset(JT_02, scale(SE, OFFSET));
export const Shimbashi = () => {
    return (
        <g id="shimbashi">
            <Stop stationCode="G 08" location={G_08} strokeColor="stroke-ginza" hideText />
            <Stop stationCode="A 10" location={A_10} strokeColor="stroke-asakusa" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JY 29" location={JY_29} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JK 24" location={JK_24} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="JT 02" location={JT_02} strokeColor="stroke-tokaido" hideText />
            <Stop stationCode="JO 18" location={JO_18} strokeColor="stroke-sobu-rapid" hideText />
        </g>
    );
};
