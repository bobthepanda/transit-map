import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NE, NW, SE, SW, findIntersectionFromSlopes, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JB_15 } from './Kanda';
import { TOKYO_HORIZONTAL_GRID, TOKYO_VERTICAL_GRID } from './TokyoStation';
import { JK_25, M_15 } from './YurakuchoStation';

const HORIZONTAL_OFFSET = scale(SE, OFFSET);

export const JK_24 = offset(JK_25, scale(TOKYO_VERTICAL_GRID, 1.5));
export const JY_29 = offset(JK_24, scale(HORIZONTAL_OFFSET, -1));
export const JO_18 = offset(JK_24, scale(HORIZONTAL_OFFSET, 2));
export const G_08 = offset(JY_29, { dx: -OFFSET });
export const A_10 = offset(G_08, scale(SW, OFFSET));

const Shimbashi = () => {
    return (
        <g id="shimbashi">
            <Stop stationCode="JK 24" location={JK_24} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="JY 29" location={JY_29} strokeColor="stroke-yamanote" />
            <Stop stationCode="JT 02" location={offset(JK_24, scale(HORIZONTAL_OFFSET, 1))} strokeColor="stroke-tokaido" />
            <Stop stationCode="JO 18" location={JO_18} strokeColor="stroke-sobu-rapid" />
            <Stop stationCode="G 08" location={G_08} strokeColor="stroke-ginza" />
            <Stop stationCode="A 10" location={A_10} strokeColor="stroke-asakusa" />
        </g>
    );
};

export const G_07 = findIntersectionFromSlopes({ start: G_08, firstDirection: NW, end: M_15, secondDirection: SW });
export const H_06 = offset(G_07, { dx: -OFFSET }, scaleToUnitX(SW, OFFSET * 2));

const Toranomon = () => {
    return (
        <g id="toranomon">
            <Stop stationCode="G 07" location={G_07} strokeColor="stroke-ginza" />
            <Stop stationCode="H 06" location={H_06} strokeColor="stroke-hibiya" />
        </g>
    );
};

export const G_06 = offset(G_07, scale(TOKYO_HORIZONTAL_GRID, -1));
export const N_06 = offset(G_06, { dx: -OFFSET });

const TameikeSanno = () => {
    return (
        <g id="tameike-sanno">
            <Stop stationCode="G 06" location={G_06} strokeColor="stroke-ginza" />
            <Stop stationCode="N 06" location={N_06} strokeColor="stroke-namboku" />
        </g>
    );
};

export const G_05 = offset(G_06, scale(TOKYO_HORIZONTAL_GRID, -1));
export const M_13 = offset(G_05, scale(NE, OFFSET));

const AkasakaMitsuke = () => {
    return (
        <g id="akasaka-mitsuke">
            <Stop stationCode="G 05" location={G_05} strokeColor="stroke-ginza" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="M 13" location={M_13} strokeColor="stroke-marunouchi" />
        </g>
    );
};

export const JB_14 = offset(JB_15, scaleToUnitX(SW, MAJOR_LINE));
export const JC_04 = offset(JB_14, scale(SE, OFFSET));
export const N_08 = offset(JC_04, { dx: OFFSET });
export const M_12 = offset(JB_14, { dx: -OFFSET });

const Yotsuya = () => {
    return (
        <g id="yotsuya">
            <Stop stationCode="JB 14" location={JB_14} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JC 04" location={JC_04} strokeColor="stroke-chuo-rapid" />
            <Stop stationCode="N 08" location={N_08} strokeColor="stroke-namboku" />
            <Stop stationCode="M 12" location={M_12} strokeColor="stroke-marunouchi" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export const N_07 = offset(N_06, { dy: -MAJOR_LINE + OFFSET });
export const Z_04 = offset(N_07, { dx: OFFSET * 0.5, dy: -OFFSET });
export const Y_16 = offset(Z_04, { dx: OFFSET * 0.5, dy: -OFFSET });

const Nagatacho = () => {
    return (
        <g id="nagatacho">
            <Stop stationCode="N 07" location={N_07} strokeColor="stroke-namboku" hideText />
            <Stop stationCode="Z 04" location={Z_04} strokeColor="stroke-hanzomon" hideText />
            <Stop stationCode="Y 16" location={Y_16} strokeColor="stroke-yurakucho" />
        </g>
    );
};

export const Y_17 = offset(Y_16, { dy: OFFSET * 3, dx: MAJOR_LINE + OFFSET * 2 });

export const H_05 = offset(H_06, { dx: (-MAJOR_LINE * 4) / 3, dy: OFFSET * 1.5 });

export const JB_11 = offset(JB_14, { dx: -MAJOR_LINE * 4.5 - OFFSET });
export const JY_18 = offset(JB_11, { dx: -OFFSET });
export const E_26 = offset(JB_11, { dx: OFFSET });

export const JB_13 = offset(JB_14, { dy: OFFSET * 2, dx: -MAJOR_LINE * 1.5 });
export const JB_12 = offset(JB_13, { dx: -MAJOR_LINE * 1.5 - OFFSET });

const Yoyogi = () => {
    return (
        <g id="yoyogi">
            <Stop stationCode="JB 11" location={JB_11} strokeColor="stroke-chuo-sobu" hideText />
            <Stop stationCode="JY 18" location={JY_18} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="E 26" location={E_26} strokeColor="stroke-oedo" />
        </g>
    );
};

export const E_25 = offset(JB_12, { dy: OFFSET * 4, dx: -OFFSET * 2 });

const ShimbashiGroup = () => {
    return (
        <>
            <Shimbashi />
            <Toranomon />
            <TameikeSanno />
            <AkasakaMitsuke />
            <Yotsuya />
            <Nagatacho />
            <Stop stationCode="Y 17" location={Y_17} strokeColor="stroke-yurakucho" textAlignment={TextAlignment.UP} />
            <Stop stationCode="H 05" location={H_05} strokeColor="stroke-hibiya" textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="JB 12" location={JB_12} strokeColor="stroke-chuo-sobu" textAlignment={TextAlignment.UP} />
            <Stop stationCode="JB 13" location={JB_13} strokeColor="stroke-chuo-sobu" textAlignment={TextAlignment.UP} />
            <Yoyogi />
            <Stop stationCode="E 25" location={E_25} strokeColor="stroke-oedo" textAlignment={TextAlignment.DOWN} />
        </>
    );
};

export default ShimbashiGroup;
