import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NW, SE, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_24 } from './Shimbashi';
import { TOKYO_HORIZONTAL_GRID, TOKYO_VERTICAL_GRID } from './TokyoStation';

export const JK_23 = offset(JK_24, TOKYO_VERTICAL_GRID);

const HORIZONTAL_OFFSET = scale(NW, OFFSET);
const HANZOMON_OFFSET = scale(SE, OFFSET);

const Hamamatsucho = () => {
    return (
        <g>
            <Stop stationCode="JY 28" location={offset(JK_23, HORIZONTAL_OFFSET)} strokeColor="stroke-yamanote" />
            <Stop stationCode="JK 23" location={JK_23} strokeColor="stroke-keihin-tohoku" />
        </g>
    );
};

export const G_04 = offset(JK_23, scale(TOKYO_HORIZONTAL_GRID, -5));
export const Z_03 = offset(G_04, HANZOMON_OFFSET);
export const E_24 = offset(G_04, { dx: -OFFSET });

const AoyamaItchome = () => {
    return (
        <g id="aoyama-itchome">
            <Stop stationCode="G 04" location={G_04} strokeColor="stroke-ginza" hideText />
            <Stop stationCode="Z 03" location={Z_03} strokeColor="stroke-hanzomon" hideText />
            <Stop stationCode="E 24" location={E_24} strokeColor="stroke-oedo" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export const G_03 = offset(G_04, TOKYO_VERTICAL_GRID);

const Gaiemmae = () => {
    return (
        <g id="gaiemmae">
            <Stop stationCode="G 03" location={G_03} strokeColor="stroke-ginza" />
        </g>
    );
};

export const G_02 = offset(G_03, TOKYO_VERTICAL_GRID);
export const Z_02 = offset(G_02, HANZOMON_OFFSET);
export const C_04 = offset(G_02, { dy: -OFFSET });

const Omotesando = () => {
    return (
        <g id="omotesando">
            <Stop stationCode="G 02" location={G_02} strokeColor="stroke-ginza" />
            <Stop stationCode="Z 02" location={Z_02} strokeColor="stroke-hanzomon" />
            <Stop stationCode="C 04" location={C_04} strokeColor="stroke-chiyoda" />
        </g>
    );
};

export const G_01 = offset(G_02, TOKYO_VERTICAL_GRID);
export const Z_01 = offset(G_01, HANZOMON_OFFSET);
export const JY_20 = offset(G_01, { dx: -OFFSET, dy: -OFFSET * 0.5 });
export const IN_01 = offset(JY_20, { dx: -OFFSET * 3 });

const Shibuya = () => {
    return (
        <g id="shibuya">
            <Stop stationCode="G 01" location={G_01} strokeColor="stroke-ginza" />
            <Stop stationCode="Z 01" location={Z_01} strokeColor="stroke-hanzomon" />
            <Stop stationCode="JY 20" location={JY_20} strokeColor="stroke-yamanote" />
            <Stop stationCode="IN 01" location={IN_01} hideText />
        </g>
    );
};

export const JY_19 = offset(JY_20, { dy: -MAJOR_LINE * 2 });
export const C_03 = offset(JY_19, { dx: OFFSET * 2, dy: OFFSET * 2 });

const Harajuku = () => {
    return (
        <g id="harajuku">
            <Stop stationCode="JY 19" location={JY_19} strokeColor="stroke-yamanote" />
            <Stop stationCode="C 03" location={C_03} strokeColor="stroke-chiyoda" />
        </g>
    );
};

export const A_09 = offset(JK_23, scale(TOKYO_HORIZONTAL_GRID, -1 / 2), scaleToUnitX(NW, OFFSET));
export const E_20 = offset(A_09, { dx: -OFFSET });

const Daimon = () => {
    return (
        <g id="daimon">
            <Stop stationCode="A 09" location={A_09} strokeColor="stroke-asakusa" />
            <Stop stationCode="E 20" location={E_20} strokeColor="stroke-oedo" />
        </g>
    );
};

export const C_05 = offset(G_03, scaleToUnitX(SE, OFFSET * 3));

const HamamatsuchoGroup = () => {
    return (
        <>
            <Hamamatsucho />
            <AoyamaItchome />
            <Gaiemmae />
            <Omotesando />
            <Shibuya />
            <Daimon />
            <Harajuku />
            <Stop stationCode="C 05" location={C_05} strokeColor="stroke-chiyoda" />
        </>
    );
};

export default HamamatsuchoGroup;
