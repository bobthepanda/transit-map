import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { SW, offset, scale } from '../../../utils/PathUtils';
import { JB_05 } from './Asagaya';
import { CHUO_OFFSET } from './Okubo';

export const JB_04 = offset(JB_05, CHUO_OFFSET);
export const JC_09 = offset(JB_04, scale(SW, OFFSET));
export const Ogikubo = () => {
    return (
        <g id="ogikubo">
            <Stop stationCode="JB 04" location={JB_04} hideText strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JC 09" location={JC_09} textAlignment={TextAlignment.SW} strokeColor="stroke-chuo-rapid" />
        </g>
    );
};
