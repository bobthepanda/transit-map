import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JY_20 } from './Hamamatsucho';
import { JK_21 } from './TakanawaGateway';

export const JK_20 = offset(JK_21, scaleToUnitX(S, MAJOR_LINE));
export const JY_25 = offset(JK_20, { dx: -OFFSET });
export const JT_03 = offset(JK_20, { dx: OFFSET });
export const JO_17 = offset(JT_03, { dx: OFFSET });
export const KK_01 = offset(JY_25, { dx: -OFFSET, dy: OFFSET * 0.5 });

const Shinagawa = () => {
    return (
        <g id="shinagawa">
            <Stop stationCode="JK 20" location={JK_20} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="JY 25" location={JY_25} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JT 03" location={JT_03} strokeColor="stroke-tokaido" hideText />
            <Stop stationCode="JO 17" location={JO_17} strokeColor="stroke-yokosuka" />
            <Stop stationCode="KK 01" location={KK_01} hideText />
        </g>
    );
};

export const JY_21 = offset(JY_20, scaleToUnitX(S, MAJOR_LINE * 0.5), scaleToUnitX(SE, MAJOR_LINE + OFFSET));
export const H_02 = offset(JY_21, { dy: -OFFSET });
export const JS_18 = offset(JY_21, scale(SW, OFFSET));
export const JA_09 = offset(JS_18, scale(SW, OFFSET));

const Ebisu = () => {
    return (
        <g id="ebisu">
            <Stop stationCode="JY 21" location={JY_21} strokeColor="stroke-yamanote" />
            <Stop stationCode="H 02" location={H_02} strokeColor="stroke-hibiya" />
            <Stop stationCode="JS 18" location={JS_18} strokeColor="stroke-shonan-shinjuku" hideText />
            <Stop stationCode="JA 09" location={JA_09} strokeColor="stroke-saikyo" hideText />
        </g>
    );
};

export const JY_24 = offset(JK_20, { dx: -MAJOR_LINE - OFFSET, dy: MAJOR_LINE * 0.5 });
export const JS_17 = offset(JY_24, scaleToUnitX(S, OFFSET));
export const JA_08 = offset(JS_17, scaleToUnitX(S, OFFSET));

const Osaki = () => {
    return (
        <g id="osaki">
            <Stop stationCode="JY 24" location={JY_24} strokeColor="stroke-yamanote" textAlignment={TextAlignment.UP} />
            <Stop stationCode="JS 17" location={JS_17} strokeColor="stroke-shonan-shinjuku" hideText />
            <Stop stationCode="JA 08" location={JA_08} strokeColor="stroke-saikyo" hideText />
        </g>
    );
};

export const JY_22 = offset(JY_21, scaleToUnitX(SE, MAJOR_LINE));
export const MG_01 = offset(JY_22, { dx: OFFSET });
export const N_01 = offset(MG_01, scale(NE, OFFSET), scale(NW, OFFSET * 0.5));
export const I_01 = offset(N_01, scale(SE, OFFSET));

const Meguro = () => {
    return (
        <g id="meguro">
            <Stop stationCode="JY 22" location={JY_22} strokeColor="stroke-yamanote" />
            <Stop stationCode="I 01" location={I_01} strokeColor="stroke-mita" />
            <Stop stationCode="N 01" location={N_01} strokeColor="stroke-namboku" />
            <Stop stationCode="MG 01" location={MG_01} hideText />
        </g>
    );
};

export const JY_23 = offset(JY_24, scaleToUnitX(W, MAJOR_LINE + MINOR_LINE * 0.5));
export const A_05 = offset(JY_23, { dx: OFFSET * 0.5, dy: -OFFSET });

const Gotanda = () => {
    return (
        <g id="gotanda">
            <Stop stationCode="JY 23" location={JY_23} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="A 05" location={A_05} strokeColor="stroke-asakusa" />
        </g>
    );
};

export const I_02 = offset(I_01, scaleToUnitX(NE, OFFSET * 2), scaleToUnitX(E, OFFSET * 2));
export const N_02 = offset(I_02, scale(N, OFFSET));

const Shirokanedai = () => {
    return (
        <g id="shirokanedai">
            <Stop stationCode="I 02" location={I_02} strokeColor="stroke-mita" />
            <Stop stationCode="N 02" location={N_02} strokeColor="stroke-namboku" />
        </g>
    );
};

export const I_03 = offset(I_02, scale(E, MAJOR_LINE));
export const N_03 = offset(I_03, scale(N, OFFSET));

const ShirokaneTakanawa = () => {
    return (
        <g id="shirokane-takanawa">
            <Stop stationCode="I 03" location={I_03} strokeColor="stroke-mita" />
            <Stop stationCode="N 03" location={N_03} strokeColor="stroke-namboku" />
        </g>
    );
};

export const H_03 = offset(H_02, scaleToUnitX(NE, MAJOR_LINE - OFFSET));
export const H_04 = offset(H_03, scaleToUnitX(NE, MAJOR_LINE - OFFSET));
export const E_23 = offset(H_04, { dy: OFFSET * 0.5, dx: OFFSET });

const Roppongi = () => {
    return (
        <g id="roppongi">
            <Stop stationCode="H 04" location={H_04} strokeColor="stroke-hibiya" hideText />
            <Stop stationCode="E 23" location={E_23} strokeColor="stroke-oedo" />
        </g>
    );
};

export const E_22 = offset(E_23, scaleToUnitX(E, MAJOR_LINE + OFFSET * 2), scaleToUnitX(S, MAJOR_LINE * 0.5));
export const N_04 = offset(E_22, { dx: OFFSET * 0.5, dy: OFFSET });

export const E_21 = offset(E_22, scaleToUnitX(E, OFFSET * 2), scaleToUnitX(NE, OFFSET * 2));

export const N_05 = offset(N_04, { dy: (-MAJOR_LINE * 5) / 3, dx: MAJOR_LINE * 0.5 });

const AzabuJuban = () => {
    return (
        <g id="azabu-juban">
            <Stop stationCode="E 22" location={E_22} strokeColor="stroke-oedo" hideText />
            <Stop stationCode="N 04" location={N_04} strokeColor="stroke-namboku" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

const ShinagawaGroup = () => {
    return (
        <>
            <Shinagawa />
            <Ebisu />
            <Osaki />
            <Meguro />
            <Gotanda />
            <Shirokanedai />
            <ShirokaneTakanawa />
            <Stop stationCode="H 03" location={H_03} strokeColor="stroke-hibiya" />
            <Stop stationCode="N 05" location={N_05} strokeColor="stroke-namboku" textAlignment={TextAlignment.LEFT} />
            <Roppongi />
            <AzabuJuban />
            <Stop stationCode="E 21" location={E_21} strokeColor="stroke-oedo" textAlignment={TextAlignment.UP} />
        </>
    );
};

export default ShinagawaGroup;
