import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { S, SW, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_22 } from './Tamachi';

const HORIZONTAL_OFFSET = scale(W, OFFSET);
export const JK_21 = offset(JK_22, scale(S, MAJOR_LINE));
export const JY_26 = offset(JK_21, HORIZONTAL_OFFSET);
export const A_07 = offset(JY_26, { dx: -OFFSET * 2 });
export const A_06 = offset(A_07, scaleToUnitX(SW, (MAJOR_LINE * 2) / 3));

const TakanawaGateway = () => {
    return (
        <g>
            <Stop stationCode="JY 26" location={JY_26} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JK 21" location={JK_21} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="A 07" location={A_07} strokeColor="stroke-asakusa" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="A 06" location={A_06} strokeColor="stroke-asakusa" textAlignment={TextAlignment.DOWN} />
        </g>
    );
};

export default TakanawaGateway;
