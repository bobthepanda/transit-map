import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { S, W, offset, scale } from '../../utils/PathUtils';
import { JK_22 } from './Tamachi';

const HORIZONTAL_OFFSET = scale(W, OFFSET);
export const JK_21 = offset(JK_22, scale(S, MAJOR_LINE));
export const JY_26 = offset(JK_21, HORIZONTAL_OFFSET);

const TakanawaGateway = () => {
    return (
        <g>
            <Stop stationCode="JY 26" location={JY_26} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JK 21" location={JK_21} strokeColor="stroke-keihin-tohoku" />
        </g>
    );
};

export default TakanawaGateway;
