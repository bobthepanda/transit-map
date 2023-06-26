import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
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

const KandaGroup = () => {
    return (
        <>
            <Awajicho />
            <Kanda />
            <Bakurocho />
            <Jimbocho />
        </>
    );
};

export default KandaGroup;
