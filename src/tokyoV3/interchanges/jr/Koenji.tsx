import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { SW, offset, scale } from '../../../utils/PathUtils';
import { JB_07 } from './Nakano';
import { CHUO_OFFSET } from './Okubo';

export const JB_06 = offset(JB_07, CHUO_OFFSET);
export const JC_07 = offset(JB_06, scale(SW, OFFSET));
export const Koenji = () => {
    return (
        <g id="koenji">
            <Stop stationCode="JB 06" location={JB_06} hideText strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JC 07" location={JC_07} textAlignment={TextAlignment.SW} strokeColor="stroke-chuo-rapid" />
        </g>
    );
};
