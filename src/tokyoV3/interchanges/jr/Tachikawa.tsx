import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { W, offset, scale } from '../../../utils/PathUtils';
import { JC_12 } from './Mitaka';
import { CHUO_OFFSET } from './Okubo';

export const JC_19 = offset(JC_12, scale(CHUO_OFFSET, 7));
export const JN_26 = offset(JC_19, scale(W, OFFSET));
export const Tachikawa = () => {
    return (
        <g id="tachikawa">
            <Stop stationCode="JC 19" location={JC_19} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="JN 26" location={JN_26} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};
