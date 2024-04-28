import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, S, SW, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { C_04 } from './Omotesando';

export const JY_20 = offset(C_04, scaleToUnitX(W, MAJOR_LINE + OFFSET));
export const Z_01 = offset(JY_20, scaleToUnitX(S, OFFSET), scaleToUnitX(E, OFFSET * 0.5));
export const G_01 = offset(JY_20, scaleToUnitX(S, OFFSET * 2), scaleToUnitX(E, OFFSET * 0.5));
export const JS_19 = offset(JY_20, scaleToUnitX(W, OFFSET));
export const JA_10 = offset(JS_19, scaleToUnitX(W, OFFSET));
export const F_16 = offset(JA_10, scaleToUnitX(N, OFFSET), scaleToUnitX(W, OFFSET * 0.5));
export const TY_01 = offset(F_16, scale(SW, OFFSET));
export const DT_01 = offset(Z_01, scale(W, OFFSET));
export const Shibuya = () => {
    return (
        <g id="shibuya">
            <Stop stationCode="G 01" location={G_01} strokeColor="stroke-ginza" hideText />
            <Stop stationCode="Z 01" location={Z_01} strokeColor="stroke-hanzomon" hideText />
            <Stop stationCode="F 16" location={F_16} strokeColor="stroke-fukutoshin" hideText />
            <Stop stationCode="JY 20" location={JY_20} strokeColor="stroke-yamanote" />
            <Stop stationCode="JS 19" location={JS_19} strokeColor="stroke-shonan-shinjuku" hideText />
            <Stop stationCode="JA 10" location={JA_10} strokeColor="stroke-saikyo" hideText />
            <Stop stationCode="TY 01" location={TY_01} hideText />
            <Stop stationCode="DT 01" location={DT_01} hideText />
        </g>
    );
};
