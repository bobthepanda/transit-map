import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { HEIGHT, OFFSET, WIDTH, alignToGrid } from '../../utils/CommonCoordinates';
import { SE, SW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';

export const JK_26 = alignToGrid({ x: WIDTH / 2, y: HEIGHT / 2 });
const HORIZONTAL_OFFSET = scale(SE, OFFSET);
const VERTICAL_OFFSET = scale(SW, OFFSET);
export const TOKYO_HORIZONTAL_GRID = scaleToUnitX(SE, (MAJOR_LINE / 3) * 2);
export const TOKYO_VERTICAL_GRID = scaleToUnitX(SW, MAJOR_LINE);
export const JO_19 = offset(JK_26, scale(HORIZONTAL_OFFSET, 2));
export const M_17 = offset(JO_19, { dy: OFFSET });
export const JE_01_M = offset(M_17, VERTICAL_OFFSET);
export const JE_01 = offset(JE_01_M, VERTICAL_OFFSET);
export const JY_01 = offset(JK_26, scale(HORIZONTAL_OFFSET, -1));
export const JC_01 = offset(JY_01, scale(HORIZONTAL_OFFSET, -1));

const TokyoStation = () => {
    return (
        <g id="tokyo-station">
            <Stop location={JC_01} stationCode="JC 01" strokeColor="stroke-chuo-rapid" />
            <Stop location={JY_01} stationCode="JY 01" strokeColor="stroke-yamanote" />
            <Stop location={JK_26} stationCode="JK 26" strokeColor="stroke-keihin-tohoku" />
            <Stop
                location={offset(JK_26, scale(HORIZONTAL_OFFSET, 1), scale(VERTICAL_OFFSET, 0.5))}
                stationCode="JT 01"
                strokeColor="stroke-tokaido"
            />
            <Stop
                location={offset(JK_26, scale(HORIZONTAL_OFFSET, 1), scale(VERTICAL_OFFSET, -0.5))}
                stationCode="JU 01"
                strokeColor="stroke-tokaido"
                hideText
            />
            <Stop location={JO_19} stationCode="JO 19" strokeColor="stroke-sobu-rapid" />
            <Stop location={M_17} stationCode="M 17" strokeColor="stroke-marunouchi" />
            <Stop location={JE_01_M} stationCode="JE 01" strokeColor="stroke-musashino" />
            <Stop location={JE_01} stationCode="JE 01" strokeColor="stroke-keiyo" />
        </g>
    );
};

export const G_10 = offset(JK_26, scale(TOKYO_HORIZONTAL_GRID));
export const A_12 = offset(G_10, scale(TOKYO_HORIZONTAL_GRID, 1));

const H_12 = offset(JK_26, scale(TOKYO_HORIZONTAL_GRID, 3), VERTICAL_OFFSET);
const JE_02_M = offset(H_12, { dy: OFFSET });
const JE_02 = offset(JE_02_M, VERTICAL_OFFSET);

const Hatchobori = () => {
    return (
        <g id="hatchobori">
            <Stop stationCode="H 12" location={H_12} strokeColor="stroke-hibiya" />
            <Stop stationCode="JE 02" location={JE_02_M} strokeColor="stroke-musashino" />
            <Stop stationCode="JE 02" location={JE_02} strokeColor="stroke-keiyo" />
        </g>
    );
};

const TokyoStationGroup = () => {
    return (
        <>
            <TokyoStation />
            <Stop stationCode="G 10" location={G_10} strokeColor="stroke-ginza" />
            <Stop stationCode="A 12" location={A_12} strokeColor="stroke-asakusa" />
            <Hatchobori />
        </>
    );
};

export default TokyoStationGroup;
