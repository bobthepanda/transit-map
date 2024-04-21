import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { SW, offset, scale } from '../../../utils/PathUtils';
import { JB_06 } from './Koenji';
import { CHUO_OFFSET } from './Okubo';

export const JB_05 = offset(JB_06, CHUO_OFFSET);
export const JC_08 = offset(JB_05, scale(SW, OFFSET));
export const Asagaya = () => {
    return (
        <g id="asagaya">
            <Stop stationCode="JB 05" location={JB_05} hideText strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JC 08" location={JC_08} textAlignment={TextAlignment.SW} strokeColor="stroke-chuo-rapid" />
        </g>
    );
};
