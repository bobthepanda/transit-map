import { Coordinates } from '../../interfaces/Dimensions';
import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { HEIGHT, OFFSET, WIDTH } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, SE, SW, W, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';

export const G_06: Coordinates = { x: WIDTH / 2 - ((WIDTH / 2) % MAJOR_LINE), y: HEIGHT / 2 - ((HEIGHT / 2) % MAJOR_LINE) };
export const M_14: Coordinates = offset(G_06, scale(N, MAJOR_LINE * 0.5));
export const N_06: Coordinates = offset(G_06, scale(W, OFFSET));
export const C_07: Coordinates = offset(M_14, scale(N, OFFSET));

const TameikeSanno = () => {
    return (
        <g id="tameike-sanno">
            <Stop stationCode="G 06" location={G_06} strokeColor="stroke-ginza" hideText />
            <Stop stationCode="M 14" location={M_14} strokeColor="stroke-marunouchi" textAlignment="translate-y-vertical-double" />
            <Stop stationCode="N 06" location={N_06} strokeColor="stroke-namboku" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="C 07" location={C_07} strokeColor="stroke-chiyoda" hideText />
        </g>
    );
};

export const G_05: Coordinates = offset(G_06, scaleToUnitX(NW, MAJOR_LINE));
export const M_13: Coordinates = offset(G_05, scale(NE, OFFSET));
export const N_07: Coordinates = offset(G_05, scaleToUnitX(NE, MAJOR_LINE * 0.5));
export const Z_04: Coordinates = offset(N_07, scale(N, OFFSET));
export const Y_16: Coordinates = offset(Z_04, scaleToUnitX(N, OFFSET));

const AsakasaMitsukae = () => {
    return (
        <g id="asakasa-mitsukae">
            <Stop stationCode="G 05" location={G_05} strokeColor="stroke-ginza" textAlignment={TextAlignment.SW} />
            <Stop stationCode="M 13" location={M_13} strokeColor="stroke-marunouchi" hideText />
            <Stop stationCode="N 07" location={N_07} strokeColor="stroke-namboku" hideText />
            <Stop stationCode="Z 04" location={Z_04} strokeColor="stroke-hanzomon" hideText />
            <Stop stationCode="Y 16" location={Y_16} strokeColor="stroke-yurakucho" textAlignment={TextAlignment.UP} />
        </g>
    );
};

export const G_04: Coordinates = offset(G_05, scaleToUnitX(W, MAJOR_LINE + OFFSET * 2));
export const Z_03: Coordinates = offset(G_04, scale(SE, OFFSET));

const AoyamaItchome = () => {
    return (
        <g id="aoyama-itchome">
            <Stop stationCode="G 04" location={G_04} strokeColor="stroke-ginza" textAlignment={TextAlignment.NW} />
            <Stop stationCode="Z 03" location={Z_03} strokeColor="stroke-hanzomon" hideText />
        </g>
    );
};

export const N_08: Coordinates = offset(N_07, scaleToUnitX(NW, MAJOR_LINE + OFFSET), scale(SE, OFFSET));
export const JC_04: Coordinates = offset(N_08, scaleToUnitX(W, OFFSET));
export const JB_14: Coordinates = offset(JC_04, scale(NW, OFFSET));
export const M_12: Coordinates = offset(JB_14, scale(W, OFFSET));

const Yotsuya = () => {
    return (
        <g id="yotsuya">
            <Stop stationCode="N 08" location={N_08} strokeColor="stroke-namboku" hideText />
            <Stop stationCode="JC 04" location={JC_04} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="JB 14" location={JB_14} strokeColor="stroke-chuo-sobu" hideText />
            <Stop stationCode="M 12" location={M_12} strokeColor="stroke-marunouchi" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export const JB_15: Coordinates = offset(JB_14, scaleToUnitX(NE, MAJOR_LINE + OFFSET * 3));
export const N_09: Coordinates = offset(JB_15, scale(NW, OFFSET));
export const Y_14: Coordinates = offset(N_09, scale(NW, OFFSET));
export const S_04: Coordinates = { x: Y_14.x, y: offset(JB_15, scaleToUnitX(N, OFFSET * 2.5)).y };

const Ichigaya = () => {
    return (
        <g id="itchigaya">
            <Stop stationCode="N 09" location={N_09} strokeColor="stroke-namboku" hideText />
            <Stop stationCode="JB 15" location={JB_15} strokeColor="stroke-chuo-sobu" hideText />
            <Stop stationCode="Y 14" location={Y_14} strokeColor="stroke-yurakucho" textAlignment={TextAlignment.NW} />
            <Stop stationCode="S 04" location={S_04} strokeColor="stroke-shinjuku" hideText />
        </g>
    );
};

export const JB_16: Coordinates = offset(JB_15, scaleToUnitX(NE, MAJOR_LINE + OFFSET * 3));
export const N_10: Coordinates = offset(JB_16, scale(NW, OFFSET));
export const Y_13: Coordinates = offset(N_10, scale(NW, OFFSET));
export const T_06: Coordinates = offset(Y_13, scale(W, OFFSET));

const Iidabashi = () => {
    return (
        <g id="iidabashi">
            <Stop stationCode="N 10" location={N_10} strokeColor="stroke-namboku" hideText />
            <Stop stationCode="JB 16" location={JB_16} strokeColor="stroke-chuo-sobu" hideText />
            <Stop stationCode="Y 13" location={Y_13} strokeColor="stroke-yurakucho" textAlignment={TextAlignment.NW} />
            <Stop stationCode="T 06" location={T_06} strokeColor="stroke-tozai" hideText />
        </g>
    );
};

export const G_07 = offset(G_06, scaleToUnitX(SE, MAJOR_LINE));
export const H_06 = offset(G_07, scaleToUnitX(NW, OFFSET), scaleToUnitX(SW, OFFSET));

const Toranomon = () => {
    return (
        <g id="toranomon">
            <Stop stationCode="G 07" location={G_07} strokeColor="stroke-ginza" />
            <Stop stationCode="H 06" location={H_06} strokeColor="stroke-hibiya" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export const C_08 = offset(G_07, scaleToUnitX(NE, MAJOR_LINE * 0.75));
export const M_15 = offset(C_08, scaleToUnitX(SW, MAJOR_LINE * 0.25));
export const H_07 = offset(midPoint(M_15, C_08), scaleToUnitX(NW, OFFSET));

const Kasumigaseki = () => {
    return (
        <g id="kasumigaseki">
            <Stop stationCode="M 15" location={M_15} strokeColor="stroke-marunouchi" hideText />
            <Stop stationCode="C 08" location={C_08} strokeColor="stroke-chiyoda" textAlignment={TextAlignment.UP} />
            <Stop stationCode="H 07" location={H_07} strokeColor="stroke-hibiya" hideText />
        </g>
    );
};

export const G_08 = offset(G_07, scaleToUnitX(SE, MAJOR_LINE * 1.5));
export const A_10 = offset(G_08, scale(SW, OFFSET));
export const JY_29 = offset(G_08, scale(E, OFFSET));
export const JK_24 = offset(JY_29, scale(SE, OFFSET));
export const JT_02 = offset(JK_24, scale(SE, OFFSET));
export const JO_18 = offset(JT_02, scale(SE, OFFSET));

const Shimbashi = () => {
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

export const C_09 = offset(C_08, scaleToUnitX(SE, MAJOR_LINE * 0.5), scaleToUnitX(NE, MAJOR_LINE * 0.5));
export const H_08 = offset(C_09, scaleToUnitX(N, OFFSET));
export const I_08 = offset(C_09, scale(SE, OFFSET));

const Hibiya = () => {
    return (
        <g id="hibiya">
            <Stop stationCode="H 08" location={H_08} strokeColor="stroke-hibiya" />
            <Stop stationCode="I 08" location={I_08} strokeColor="stroke-mita" />
            <Stop stationCode="C 09" location={C_09} strokeColor="stroke-chiyoda" />
        </g>
    );
};

export const JY_30 = offset(JY_29, scaleToUnitX(NE, MAJOR_LINE * 1.5));
export const JK_25 = offset(JY_30, scale(SE, OFFSET));
export const Y_18 = offset(JY_30, scaleToUnitX(W, OFFSET));

const Yurakucho = () => {
    return (
        <g id="yurakucho">
            <Stop location={JY_30} stationCode="JY 30" strokeColor="stroke-yamanote" hideText />
            <Stop location={JK_25} stationCode="JK 25" strokeColor="stroke-keihin-tohoku" hideText />
            <Stop location={Y_18} stationCode="Y 18" strokeColor="stroke-yurakucho" textAlignment={TextAlignment.UP} />
        </g>
    );
};

export const G_09 = offset(C_09, scaleToUnitX(SE, MAJOR_LINE * 2));
export const M_16 = offset(G_09, scale(NW, OFFSET));
export const H_09 = offset(M_16, scale(N, OFFSET));

const Ginza = () => {
    return (
        <g id="ginza">
            <Stop stationCode="G 09" location={G_09} strokeColor="stroke-ginza" />
            <Stop stationCode="M 16" location={M_16} strokeColor="stroke-marunouchi" />
            <Stop stationCode="H 09" location={H_09} strokeColor="stroke-hibiya" />
        </g>
    );
};

export const JY_01 = offset(JY_30, scaleToUnitX(NE, MAJOR_LINE));
export const JK_26 = offset(JY_01, scale(SE, OFFSET));
export const JT_01 = offset(JK_26, scale(SE, OFFSET));
export const JO_19 = offset(JK_26, scale(SE, OFFSET * 2));
export const JC_01 = offset(JY_01, scale(SE, -1 * OFFSET));
export const M_17 = offset(JC_01, scale(W, OFFSET));

const Tokyo = () => {
    return (
        <g id="tokyo">
            <Stop stationCode="JY 01" location={JY_01} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JK 26" location={JK_26} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="JT 01" location={JT_01} strokeColor="stroke-tokaido" hideText />
            <Stop stationCode="JO 19" location={JO_19} strokeColor="stroke-sobu-rapid" hideText />
            <Stop stationCode="JC 01" location={JC_01} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="M 17" location={M_17} strokeColor="stroke-marunouchi" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

const C_10 = offset(C_09, scaleToUnitX(NE, MAJOR_LINE + OFFSET));
export const C_11 = offset(C_10, scaleToUnitX(NE, MAJOR_LINE));
export const I_09 = offset(C_11, scale(SE, OFFSET));
export const M_18 = offset(C_11, scaleToUnitX(SE, MAJOR_LINE * 0.5));
export const T_09 = offset(C_11, scaleToUnitX(W, OFFSET));

const Otemachi = () => {
    return (
        <>
            <Stop stationCode="C 10" location={C_10} strokeColor="stroke-chiyoda" />
            <g id="otemachi">
                <Stop stationCode="C 11" location={C_11} strokeColor="stroke-chiyoda" />
                <Stop stationCode="I 09" location={I_09} strokeColor="stroke-mita" />
                <Stop stationCode="M 18" location={M_18} strokeColor="stroke-marunouchi" />
                <Stop stationCode="T 09" location={T_09} strokeColor="stroke-tozai" />
            </g>
        </>
    );
};

export const Y_15 = offset(Y_16, scaleToUnitX(W, OFFSET * 2), scaleToUnitX(N, MAJOR_LINE));

const InsideYamanote = () => {
    return (
        <g id="inside-yamanote">
            <TameikeSanno />
            <AsakasaMitsukae />
            <AoyamaItchome />
            <Yotsuya />
            <Ichigaya />
            <Iidabashi />
            <Stop stationCode="Y 15" location={Y_15} strokeColor="stroke-yurakucho" />
            <Toranomon />
            <Kasumigaseki />
            <Shimbashi />
            <Hibiya />
            <Yurakucho />
            <Ginza />
            <Tokyo />
            <Otemachi />
        </g>
    );
};

export default InsideYamanote;
