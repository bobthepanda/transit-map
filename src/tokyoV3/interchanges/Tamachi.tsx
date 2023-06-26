import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { W, offset, scale } from '../../utils/PathUtils';
import { JK_23 } from './Hamamatsucho';

export const JK_22 = offset(JK_23, { dx: -MAJOR_LINE * 0.5, dy: MAJOR_LINE });

const HORIZONTAL_OFFSET = scale(W, OFFSET);

const Tamachi = () => {
    return (
        <g>
            <Stop stationCode="JY 27" location={offset(JK_22, HORIZONTAL_OFFSET)} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JK 22" location={JK_22} strokeColor="stroke-keihin-tohoku" />
        </g>
    );
};

export default Tamachi;
