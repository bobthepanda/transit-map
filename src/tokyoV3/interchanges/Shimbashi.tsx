import { Stop } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { SE, SW, offset, scale } from '../../utils/PathUtils';
import { TOKYO_VERTICAL_GRID } from './TokyoStation';
import { JK_25 } from './YurakuchoStation';

const HORIZONTAL_OFFSET = scale(SE, OFFSET);

export const JK_24 = offset(JK_25, scale(TOKYO_VERTICAL_GRID, 1.5));
export const JY_29 = offset(JK_24, scale(HORIZONTAL_OFFSET, -1));
export const JO_18 = offset(JK_24, scale(HORIZONTAL_OFFSET, 2));
export const G_08 = offset(JO_18, { dy: OFFSET });
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

export default Shimbashi;
