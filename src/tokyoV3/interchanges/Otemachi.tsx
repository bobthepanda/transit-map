import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NE, NW, SE, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_26, TOKYO_HORIZONTAL_GRID, TOKYO_VERTICAL_GRID } from './TokyoStation';

const OTEMACHI_VERTICAL_OFFSET = scale(TOKYO_VERTICAL_GRID, -1 / 2);

export const M_18 = offset(JK_26, scale(TOKYO_HORIZONTAL_GRID, -1), OTEMACHI_VERTICAL_OFFSET);
export const I_09 = offset(M_18, scaleToUnitX(NW, OFFSET * 2));
export const C_11 = offset(I_09, scale(SE, OFFSET));
export const T_09 = offset(midPoint(M_18, C_11), { dy: OFFSET * 0.5, dx: -OFFSET * 0.5 });
export const Z_08 = offset(T_09, scaleToUnitX(NE, OFFSET));

const Otemachi = () => {
    return (
        <g id="otemachi">
            <Stop stationCode="M 18" location={M_18} strokeColor="stroke-marunouchi" />
            <Stop stationCode="I 09" location={I_09} strokeColor="stroke-mita" />
            <Stop stationCode="C 11" location={C_11} strokeColor="stroke-chiyoda" />
            <Stop stationCode="T 09" location={T_09} strokeColor="stroke-tozai" />
            <Stop stationCode="Z 08" location={Z_08} strokeColor="stroke-hanzomon" />
        </g>
    );
};

export const G_11 = offset(JK_26, TOKYO_HORIZONTAL_GRID, OTEMACHI_VERTICAL_OFFSET);
export const A_13 = offset(G_11, TOKYO_HORIZONTAL_GRID);
export const T_10 = offset(midPoint(G_11, A_13), { dy: OFFSET * 0.5, dx: -OFFSET * 0.5 });

const Nihombashi = () => {
    return (
        <g id="nihombashi">
            <Stop stationCode="G 11" location={G_11} strokeColor="stroke-ginza" />
            <Stop stationCode="A 13" location={A_13} strokeColor="stroke-asakusa" />
            <Stop stationCode="T 10" location={T_10} strokeColor="stroke-tozai" />
        </g>
    );
};

export const H_13 = offset(A_13, TOKYO_HORIZONTAL_GRID);
export const T_11 = offset(H_13, { dy: OFFSET });

const Kayabacho = () => {
    return (
        <g id="kayabacho">
            <Stop stationCode="H 13" location={H_13} strokeColor="stroke-hibiya" />
            <Stop stationCode="T 11" location={T_11} strokeColor="stroke-tozai" />
        </g>
    );
};

export const G_12 = offset(G_11, OTEMACHI_VERTICAL_OFFSET);
export const Z_09 = offset(G_12, { dy: OFFSET });
export const JO_20 = offset(G_12, { dy: -OFFSET * 2 });

const Mitsukoshimae = () => {
    return (
        <g id="mitsukoshimae">
            <Stop stationCode="G 12" location={G_12} strokeColor="stroke-ginza" />
            <Stop stationCode="Z 09" location={Z_09} strokeColor="stroke-hanzomon" />
            <Stop stationCode="JO 20" location={JO_20} strokeColor="stroke-sobu-rapid" textAlignment={TextAlignment.UP} />
        </g>
    );
};

export const A_14 = offset(A_13, scale(OTEMACHI_VERTICAL_OFFSET, 2));
export const H_14 = offset(A_14, { dx: OFFSET });
export const Z_10 = offset(A_14, { dy: OFFSET * 2, dx: OFFSET * 2 });

const Ningyocho = () => {
    return (
        <g id="ningyocho">
            <Stop stationCode="A 14" location={A_14} strokeColor="stroke-asakusa" />
            <Stop stationCode="H 14" location={H_14} strokeColor="stroke-hibiya" />
            <Stop stationCode="Z 10" location={Z_10} strokeColor="stroke-hanzomon" />
        </g>
    );
};

const OtemachiGroup = () => {
    return (
        <>
            <Otemachi />
            <Nihombashi />
            <Kayabacho />
            <Mitsukoshimae />
            <Ningyocho />
        </>
    );
};

export default OtemachiGroup;
