import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_27 } from './Kanda';
import { JK_24 } from './Shimbashi';
import { JK_26, TOKYO_VERTICAL_GRID } from './TokyoStation';

export const JK_28 = offset(JK_27, scale(TOKYO_VERTICAL_GRID, -1 / 2), scale(N, MAJOR_LINE + OFFSET * 0.5));
export const JY_03 = offset(JK_28, { dx: -OFFSET });
export const JB_19 = offset(JY_03, { dx: -OFFSET, dy: OFFSET * 0.5 });
export const H_16 = offset(JK_28, { dx: MAJOR_LINE * 0.5 });

const Akihabara = () => {
    return (
        <g>
            <Stop stationCode="JK 28" location={JK_28} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="JY 03" location={JY_03} strokeColor="stroke-yamanote" />
            <Stop stationCode="JB 19" location={JB_19} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="H 16" location={H_16} strokeColor="stroke-hibiya" />
        </g>
    );
};

export const JB_18 = { y: JB_19.y, x: JK_26.x };
export const JC_03 = offset(JB_18, { dy: OFFSET });
export const M_20 = offset(JB_18, { dx: OFFSET * 0.5, dy: -OFFSET });

const Ochanomizu = () => {
    return (
        <g id="ochanomizu">
            <Stop stationCode="JB 18" location={JB_18} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JC 03" location={JC_03} strokeColor="stroke-chuo-rapid" />
            <Stop stationCode="M 20" location={M_20} strokeColor="stroke-marunouchi" />
        </g>
    );
};

export const A_16 = offset(JK_28, { dx: MAJOR_LINE * 1.5 });
export const JB_20 = offset(A_16, { dx: -OFFSET, dy: OFFSET * 0.5 });

const Asakusabashi = () => {
    return (
        <g id="asakusabashi">
            <Stop stationCode="A 16" location={A_16} strokeColor="stroke-asakusa" />
            <Stop stationCode="JB 20" location={JB_20} strokeColor="stroke-chuo-sobu" />
        </g>
    );
};

export const JB_17 = { y: JB_18.y, x: JK_24.x + OFFSET * 2 };
export const I_11 = offset(JB_17, { dx: OFFSET * 0.5, dy: -OFFSET });

const Suidobashi = () => {
    return (
        <g id="suidobashi">
            <Stop stationCode="JB 17" location={JB_17} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="I 11" location={I_11} strokeColor="stroke-mita" />
        </g>
    );
};

export const JB_16 = offset(JB_17, { dx: -MAJOR_LINE, dy: OFFSET * 2 });
const IIDABASHI_OFFSET = scale(NW, OFFSET);
export const N_10 = offset(JB_16, IIDABASHI_OFFSET);
export const E_06 = offset(N_10, IIDABASHI_OFFSET);
export const T_06 = offset(JB_16, scaleToUnitX(NW, OFFSET, 2), { dy: -OFFSET * 0.5 });

const Iidabashi = () => {
    return (
        <g id="iidabashi">
            <Stop stationCode="JB 16" location={JB_16} strokeColor="stroke-yamanote" />
            <Stop stationCode="N 10" location={N_10} strokeColor="stroke-namboku" />
            <Stop stationCode="E 06" location={E_06} strokeColor="stroke-oedo" />
            <Stop stationCode="T 06" location={T_06} strokeColor="stroke-tozai" />
        </g>
    );
};

const AkihabaraGroup = () => {
    return (
        <>
            <Akihabara />
            <Ochanomizu />
            <Asakusabashi />
            <Suidobashi />
            <Iidabashi />
        </>
    );
};

export default AkihabaraGroup;
