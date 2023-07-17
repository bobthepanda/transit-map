import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NW, SE, SW, W, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { T_09 } from './Otemachi';
import { JK_26, TOKYO_VERTICAL_GRID } from './TokyoStation';

export const JK_27 = offset(JK_26, scale(TOKYO_VERTICAL_GRID, -2));

const HORIZONTAL_OFFSET = scale(NW, OFFSET);

export const JY_02 = offset(JK_27, scale(HORIZONTAL_OFFSET, 1));
export const JC_02 = offset(JY_02, scale(HORIZONTAL_OFFSET, 1));

export const G_13 = offset(JC_02, { dx: -OFFSET, dy: OFFSET * 0.5 });

const Kanda = () => {
    return (
        <g id="kanda">
            <Stop stationCode="JK 27" location={JK_27} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="JY 02" location={JY_02} strokeColor="stroke-yamanote" />
            <Stop stationCode="JC 02" location={JC_02} strokeColor="stroke-chuo-rapid" />
            <Stop stationCode="G 13" location={G_13} strokeColor="stroke-ginza" />
        </g>
    );
};

export const M_19 = offset(JK_27, { dx: -MAJOR_LINE - OFFSET, dy: -OFFSET });
export const S_07 = offset(M_19, scaleToUnitX(NW, OFFSET * 2));
export const C_12 = offset(S_07, scaleToUnitX(NW, OFFSET * 2));

const Awajicho = () => {
    return (
        <g id="awajicho">
            <Stop stationCode="M 19" location={M_19} strokeColor="stroke-marunouchi" />
            <Stop stationCode="S 07" location={S_07} strokeColor="stroke-shinjuku" />
            <Stop stationCode="C 12" location={C_12} strokeColor="stroke-chiyoda" />
        </g>
    );
};

const A_15 = offset(JK_27, { dx: MAJOR_LINE * 2 });
export const JO_21 = offset(A_15, { dx: -OFFSET * 2 });
export const S_09 = offset(JO_21, { dy: OFFSET * 2 });

const Bakurocho = () => {
    return (
        <g id="bakurocho">
            <Stop stationCode="A 15" location={A_15} strokeColor="stroke-asakusa" />
            <Stop stationCode="JO 21" location={JO_21} strokeColor="stroke-sobu-rapid" textAlignment={TextAlignment.UP} />
            <Stop stationCode="S 09" location={S_09} strokeColor="stroke-shinjuku" />
        </g>
    );
};

const S_06 = offset(S_07, { dx: -MAJOR_LINE * 1.5 - OFFSET });
const I_10 = offset(S_06, { dx: OFFSET * 0.5, dy: -OFFSET });
export const Z_07 = offset(S_06, { dy: OFFSET });

const Jimbocho = () => {
    return (
        <g id="jimbocho">
            <Stop stationCode="I 10" location={I_10} strokeColor="stroke-mita" />
            <Stop stationCode="S 06" location={S_06} strokeColor="stroke-shinjuku" />
            <Stop stationCode="Z 07" location={Z_07} strokeColor="stroke-hanzomon" />
        </g>
    );
};

export const S_05 = offset(S_06, { dx: -MAJOR_LINE });
export const Z_06 = offset(S_05, { dy: -OFFSET });
export const T_07 = offset(S_05, { dx: -OFFSET * 0.5, dy: OFFSET });

const Kudanshita = () => {
    return (
        <g id="kudanshita">
            <Stop stationCode="S 05" location={S_05} strokeColor="stroke-shinjuku" />
            <Stop stationCode="Z 06" location={Z_06} strokeColor="stroke-hanzomon" />
            <Stop stationCode="T 07" location={T_07} strokeColor="stroke-tozai" />
        </g>
    );
};

export const T_08 = midPoint(T_07, T_09);

export const S_04 = offset(S_05, { dx: -MAJOR_LINE * 2 - OFFSET });
const ICHIGAYA_OFFSET = scale(NW, OFFSET);
export const JB_15 = offset(S_04, { dy: OFFSET }, scaleToUnitX(SE, OFFSET * 1));
export const N_09 = offset(JB_15, ICHIGAYA_OFFSET);
export const Y_14 = offset(JB_15, scale(ICHIGAYA_OFFSET, -2));

const Ichigaya = () => {
    return (
        <g id="ichigaya">
            <Stop stationCode="S 04" location={S_04} strokeColor="stroke-shinjuku" />
            <Stop stationCode="JB 15" location={JB_15} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="N 09" location={N_09} strokeColor="stroke-namboku" />
            <Stop stationCode="Y 14" location={Y_14} strokeColor="stroke-yurakucho" />
        </g>
    );
};

const Y_15 = offset(Y_14, scaleToUnitX(SW, MAJOR_LINE * 0.5 - MINOR_LINE));

export const Z_05 = offset(Z_06, { dy: MAJOR_LINE + OFFSET, dx: -MAJOR_LINE });

export const S_01 = offset(S_04, scaleToUnitX(W, MAJOR_LINE * 5 + OFFSET * 1.5));
export const M_08 = offset(S_01, { dy: -OFFSET * 2 });
export const E_27 = offset(S_01, { dy: -OFFSET, dx: -OFFSET * 0.5 });
export const JB_10 = offset(E_27, { dx: -OFFSET });
export const JY_17 = offset(JB_10, { dx: -OFFSET });
export const JS_20 = offset(JY_17, { dx: -OFFSET });
export const JA_11 = offset(JS_20, { dx: -OFFSET });
export const JC_05 = offset(JA_11, { dx: -OFFSET });
export const Shinjuku = () => {
    return (
        <g id="shinjuku">
            <Stop stationCode="S 01" location={S_01} strokeColor="stroke-shinjuku" hideText />
            <Stop stationCode="JB 10" location={JB_10} strokeColor="stroke-chuo-sobu" hideText />
            <Stop stationCode="JY 17" location={JY_17} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JS 20" location={JS_20} strokeColor="stroke-shonan-shinjuku" hideText />
            <Stop stationCode="JA 11" location={JA_11} strokeColor="stroke-saikyo" hideText />
            <Stop stationCode="JC 05" location={JC_05} strokeColor="stroke-chuo-rapid" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="E 27" location={E_27} strokeColor="stroke-oedo" hideText />
            <Stop stationCode="M 08" location={M_08} strokeColor="stroke-marunouchi" hideText />
        </g>
    );
};

export const S_02 = offset(S_01, { dx: MAJOR_LINE * 1.5 });
export const F_13 = offset(S_02, { dx: -OFFSET * 0.5, dy: OFFSET });
export const M_09 = offset(F_13, { dx: OFFSET * 0.5, dy: OFFSET });

const ShinjukuSanchome = () => {
    return (
        <g id="shinjuku-sanchome">
            <Stop stationCode="S 02" location={S_02} strokeColor="stroke-shinjuku" hideText />
            <Stop stationCode="F 13" location={F_13} strokeColor="stroke-fukutoshin" hideText />
            <Stop stationCode="M 09" location={M_09} strokeColor="stroke-marunouchi" />
        </g>
    );
};

export const M_10 = offset(M_09, { dx: MAJOR_LINE - MINOR_LINE, dy: OFFSET * 2 });
export const M_11 = offset(M_10, { dx: MAJOR_LINE + OFFSET });

const KandaGroup = () => {
    return (
        <>
            <Awajicho />
            <Kanda />
            <Bakurocho />
            <Jimbocho />
            <Kudanshita />
            <Ichigaya />
            <Shinjuku />
            <Stop stationCode="T 08" location={T_08} strokeColor="stroke-tozai" />
            <Stop stationCode="Y 15" location={Y_15} strokeColor="stroke-yurakucho" />
            <Stop stationCode="Z 05" location={Z_05} strokeColor="stroke-hanzomon" />
            <ShinjukuSanchome />
            <Stop stationCode="M 10" location={M_10} strokeColor="stroke-marunouchi" textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="M 11" location={M_11} strokeColor="stroke-marunouchi" textAlignment={TextAlignment.DOWN} />
        </>
    );
};

export default KandaGroup;
