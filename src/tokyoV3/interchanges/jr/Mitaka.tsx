import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { SW, offset, scale } from '../../../utils/PathUtils';
import { JB_02 } from './Kichijoji';
import { CHUO_OFFSET } from './Okubo';

export const JB_01 = offset(JB_02, CHUO_OFFSET);
export const JC_12 = offset(JB_01, scale(SW, OFFSET));
export const Mitaka = () => {
    return (
        <g id="mitaka">
            <Stop stationCode="JB 01" location={JB_01} hideText strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JC 12" location={JC_12} textAlignment={TextAlignment.SW} strokeColor="stroke-chuo-rapid" />
        </g>
    );
};
