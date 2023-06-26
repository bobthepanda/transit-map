import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NW, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_26, TOKYO_HORIZONTAL_GRID, TOKYO_VERTICAL_GRID } from './TokyoStation';

export const JK_25 = offset(JK_26, TOKYO_VERTICAL_GRID);
export const Y_18 = offset(JK_25, { dx: OFFSET });

const YurakuchoStation = () => {
    return (
        <g>
            <Stop stationCode="JY 30" location={offset(JK_25, scale(NW, OFFSET))} strokeColor="stroke-yamanote" />
            <Stop stationCode="JK 25" location={JK_25} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="Y 18" location={Y_18} strokeColor="stroke-yurakucho" />
        </g>
    );
};

const G_09 = offset(JK_25, TOKYO_HORIZONTAL_GRID, scale(TOKYO_VERTICAL_GRID, 1 / 2));
export const M_16 = offset(G_09, scale(NW, OFFSET));
export const H_09 = offset(G_09, { dy: OFFSET });

const GinzaStation = () => {
    return (
        <g>
            <Stop stationCode="M 16" location={M_16} strokeColor="stroke-marunouchi" />
            <Stop stationCode="G 09" location={G_09} strokeColor="stroke-ginza" />
            <Stop stationCode="H 09" location={H_09} strokeColor="stroke-hibiya" />
        </g>
    );
};

const A_11 = offset(G_09, TOKYO_HORIZONTAL_GRID);
const H_10 = offset(A_11, { dy: OFFSET });

const HigashiGinza = () => {
    return (
        <g>
            <Stop stationCode="A 11" location={A_11} strokeColor="stroke-asakusa" />
            <Stop stationCode="H 10" location={H_10} strokeColor="stroke-hibiya" />
        </g>
    );
};

export const H_11 = offset(JK_25, scale(TOKYO_HORIZONTAL_GRID, 3));
export const Y_20 = offset(H_11, { dx: OFFSET });

const Tsukiji = () => {
    return (
        <g>
            <Stop stationCode="H 11" location={H_11} strokeColor="stroke-hibiya" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="Y 20" location={Y_20} strokeColor="stroke-yurakucho" />
        </g>
    );
};

const YurakuchoStationGroup = () => {
    return (
        <g>
            <YurakuchoStation />
            <GinzaStation />
            <HigashiGinza />
            <Tsukiji />
            <Stop
                stationCode="Y 19"
                location={offset(midPoint(Y_18, Y_20), scaleToUnitX(NW, OFFSET * 0.5))}
                strokeColor="stroke-yurakucho"
            />
        </g>
    );
};

export default YurakuchoStationGroup;
