import { Coordinates } from '../../interfaces/Dimensions';
import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { HEIGHT, OFFSET, WIDTH } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, findIntersectionFromSlopes, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';

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
export const T_09 = offset(C_11, scaleToUnitX(W, OFFSET), scaleToUnitX(SE, OFFSET * 2));
export const Z_08 = offset(T_09, scaleToUnitX(NE, OFFSET));

const Otemachi = () => {
    return (
        <>
            <Stop stationCode="C 10" location={C_10} strokeColor="stroke-chiyoda" />
            <g id="otemachi">
                <Stop stationCode="C 11" location={C_11} strokeColor="stroke-chiyoda" />
                <Stop stationCode="I 09" location={I_09} strokeColor="stroke-mita" />
                <Stop stationCode="M 18" location={M_18} strokeColor="stroke-marunouchi" />
                <Stop stationCode="T 09" location={T_09} strokeColor="stroke-tozai" />
                <Stop stationCode="Z 08" location={Z_08} strokeColor="stroke-hanzomon" />
            </g>
        </>
    );
};

export const Y_15 = offset(Y_16, scaleToUnitX(W, OFFSET * 2), scaleToUnitX(N, MAJOR_LINE));

const KudanshitaIntersection = findIntersectionFromSlopes({ start: T_06, end: S_04, firstDirection: SE, secondDirection: E });

export const T_07 = offset(KudanshitaIntersection, scaleToUnitX(NW, OFFSET));
export const S_05 = offset(T_07, scaleToUnitX(S, OFFSET));
export const Z_06 = offset(S_05, scaleToUnitX(S, OFFSET));

export const Z_05 = midPoint(Z_04, Z_06);

const Kudanshita = () => {
    return (
        <>
            <Stop stationCode="Z 05" location={Z_05} strokeColor="stroke-hanzomon" />
            <g id="kudanshita">
                <Stop stationCode="T 07" location={T_07} strokeColor="stroke-tozai" />
                <Stop stationCode="S 05" location={S_05} strokeColor="stroke-shinjuku" />
                <Stop stationCode="Z 06" location={Z_06} strokeColor="stroke-hanzomon" />
            </g>
        </>
    );
};

export const S_06 = offset(S_05, scaleToUnitX(E, MAJOR_LINE * 2));
export const Z_07 = offset(S_06, scaleToUnitX(S, OFFSET));
export const I_10 = offset(S_06, scaleToUnitX(N, OFFSET));

const Jimbocho = () => {
    return (
        <g id="jimbocho">
            <Stop stationCode="I 10" location={I_10} strokeColor="stroke-mita" />
            <Stop stationCode="S 06" location={S_06} strokeColor="stroke-shinjuku" />
            <Stop stationCode="Z 07" location={Z_07} strokeColor="stroke-hanzomon" />
        </g>
    );
};

export const S_07 = offset(S_06, scaleToUnitX(E, MAJOR_LINE), scaleToUnitX(SE, MAJOR_LINE));
export const C_12 = offset(S_07, scaleToUnitX(W, OFFSET * 2));
export const M_19 = offset(S_07, scaleToUnitX(E, OFFSET * 2));

const Ogawamachi = () => {
    return (
        <g id="ogawamachi">
            <Stop stationCode="S 07" location={S_07} strokeColor="stroke-shinjuku" textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="C 12" location={C_12} strokeColor="stroke-chiyoda" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="M 19" location={M_19} strokeColor="stroke-marunouchi" />
        </g>
    );
};

export const JB_17 = offset(JB_16, scaleToUnitX(NE, MAJOR_LINE * 2), scaleToUnitX(SE, OFFSET * 2));
export const I_11 = offset(JB_17, scaleToUnitX(E, OFFSET));

const Suidobashi = () => {
    return (
        <g id="ogawamachi">
            <Stop stationCode="JB 17" location={JB_17} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="I 11" location={I_11} strokeColor="stroke-mita" />
        </g>
    );
};

export const JB_18 = offset(JB_17, scaleToUnitX(SE, MAJOR_LINE * 2));
export const JC_03 = offset(JB_18, scale(SW, OFFSET));
export const M_20 = offset(JB_18, scaleToUnitX(E, OFFSET));

const Ochanomizu = () => {
    return (
        <g id="ogawamachi">
            <Stop stationCode="JB 18" location={JB_18} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JC 03" location={JC_03} strokeColor="stroke-chuo-rapid" />
            <Stop stationCode="M 20" location={M_20} strokeColor="stroke-marunouchi" />
        </g>
    );
};

const AKIHABARA_INTERSECTION = findIntersectionFromSlopes({ start: JB_18, firstDirection: SE, secondDirection: NE, end: JY_01 });
export const JB_19 = offset(AKIHABARA_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const JY_03 = offset(JB_19, scaleToUnitX(E, OFFSET));
export const JK_28 = offset(JY_03, scale(SE, OFFSET));

const Akihabara = () => {
    return (
        <g id="akihabara">
            <Stop stationCode="JB 19" location={JB_19} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JY 03" location={JY_03} strokeColor="stroke-yamanote" />
            <Stop stationCode="JK 28" location={JK_28} strokeColor="stroke-keihin-tohoku" />
        </g>
    );
};

export const JY_02 = offset(JY_01, scaleToUnitX(NE, MAJOR_LINE * 2));
export const JC_02 = offset(JY_02, scale(NW, OFFSET));
export const G_13 = offset(JY_02, scaleToUnitX(NW, OFFSET * 1.5));
export const JK_27 = offset(JY_02, scale(SE, OFFSET));

const Kanda = () => {
    return (
        <g id="kanda">
            <Stop stationCode="JY 02" location={JY_02} strokeColor="stroke-yamanote" />
            <Stop stationCode="JK 27" location={JK_27} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="JC 02" location={JC_02} strokeColor="stroke-chuo-rapid" />
            <Stop stationCode="G 13" location={G_13} strokeColor="stroke-ginza" />
        </g>
    );
};

const NIHOMBASHI_INTERSECTION = findIntersectionFromSlopes({ start: T_09, firstDirection: SE, end: G_09, secondDirection: NE });

export const T_10 = offset(NIHOMBASHI_INTERSECTION, scaleToUnitX(SE, OFFSET * 2));
export const G_11 = offset(NIHOMBASHI_INTERSECTION, scaleToUnitX(SW, OFFSET));
export const A_13 = offset(T_10, scaleToUnitX(SE, OFFSET * 2), scaleToUnitX(NE, OFFSET));

const Nihombashi = () => {
    return (
        <g id="nihombashi">
            <Stop stationCode="T 10" location={T_10} strokeColor="stroke-tozai" />
            <Stop stationCode="G 11" location={G_11} strokeColor="stroke-ginza" />
            <Stop stationCode="A 13" location={A_13} strokeColor="stroke-asakusa" />
        </g>
    );
};

const ASAKUSABASHI_INTERSECTION = findIntersectionFromSlopes({ firstDirection: SE, start: JB_19, secondDirection: NE, end: A_13 });
export const JB_20 = offset(ASAKUSABASHI_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const A_16 = offset(JB_20, scaleToUnitX(E, OFFSET));

const Asakusabashi = () => {
    return (
        <g id="asakusabashi">
            <Stop stationCode="A 16" location={A_16} strokeColor="stroke-asakusa" />
            <Stop stationCode="JB 20" location={JB_20} strokeColor="stroke-chuo-sobu" />
        </g>
    );
};

const BAKUROCHO_INTERSECTION = findIntersectionFromSlopes({ start: S_07, firstDirection: SE, secondDirection: NE, end: A_13 });
export const A_15 = offset(BAKUROCHO_INTERSECTION, scaleToUnitX(NE, OFFSET));
export const S_09 = offset(A_15, scaleToUnitX(W, OFFSET * 2));
export const JO_21 = offset(S_09, scaleToUnitX(N, OFFSET * 2));

const Bakurocho = () => {
    return (
        <g id="bakurocho">
            <Stop stationCode="A 15" location={A_15} strokeColor="stroke-asakusa" textAlignment={TextAlignment.SE} />
            <Stop stationCode="JO 21" location={JO_21} strokeColor="stroke-sobu-rapid" textAlignment={TextAlignment.UP} />
            <Stop stationCode="S 09" location={S_09} strokeColor="stroke-shinjuku" textAlignment={TextAlignment.SW} />
        </g>
    );
};

const MITSUKOMAE_INTERSECTION = findIntersectionFromSlopes({ start: G_13, firstDirection: S, secondDirection: W, end: JO_21 });
export const G_12 = offset(MITSUKOMAE_INTERSECTION, scaleToUnitX(S, OFFSET * 2));
export const Z_09 = offset(G_12, scaleToUnitX(E, OFFSET));
export const JO_20 = offset(MITSUKOMAE_INTERSECTION, scaleToUnitX(E, OFFSET * 2));

const Mitsukomae = () => {
    return (
        <g id="bakurocho">
            <Stop stationCode="G 12" location={G_12} strokeColor="stroke-ginza" hideText />
            <Stop stationCode="JO 20" location={JO_20} strokeColor="stroke-sobu-rapid" textAlignment={TextAlignment.UP} />
            <Stop stationCode="Z 09" location={Z_09} strokeColor="stroke-hanzomon" textAlignment={TextAlignment.DOWN} />
        </g>
    );
};

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
            <Kudanshita />
            <Jimbocho />
            <Ogawamachi />
            <Suidobashi />
            <Ochanomizu />
            <Akihabara />
            <Kanda />
            <Nihombashi />
            <Asakusabashi />
            <Bakurocho />
            <Mitsukomae />
        </g>
    );
};

export default InsideYamanote;
