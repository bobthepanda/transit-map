import { Stop } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NW, offset, scale } from '../../utils/PathUtils';
import { JK_24 } from './Shimbashi';
import { TOKYO_VERTICAL_GRID } from './TokyoStation';

export const JK_23 = offset(JK_24, TOKYO_VERTICAL_GRID);

const HORIZONTAL_OFFSET = scale(NW, OFFSET);

const Hamamatsucho = () => {
    return (
        <g>
            <Stop stationCode="JY 28" location={offset(JK_23, HORIZONTAL_OFFSET)} strokeColor="stroke-yamanote" />
            <Stop stationCode="JK 23" location={JK_23} strokeColor="stroke-keihin-tohoku" />
        </g>
    );
};

export default Hamamatsucho;
