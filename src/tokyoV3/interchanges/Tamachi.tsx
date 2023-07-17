import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { W, offset, scale } from '../../utils/PathUtils';
import { JK_23 } from './Hamamatsucho';

export const JK_22 = offset(JK_23, { dx: -MAJOR_LINE * 0.5, dy: MAJOR_LINE });
export const A_08 = offset(JK_22, { dx: -OFFSET * 3 });
export const I_04 = offset(A_08, { dx: -OFFSET });

const HORIZONTAL_OFFSET = scale(W, OFFSET);

const Tamachi = () => {
    return (
        <g>
            <Stop stationCode="JY 27" location={offset(JK_22, HORIZONTAL_OFFSET)} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JK 22" location={JK_22} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="A 08" location={A_08} strokeColor="stroke-asakusa" hideText />
            <Stop stationCode="I 04" location={I_04} strokeColor="stroke-mita" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export default Tamachi;
