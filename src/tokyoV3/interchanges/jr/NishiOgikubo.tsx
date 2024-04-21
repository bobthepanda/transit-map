import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { SW, offset, scale } from '../../../utils/PathUtils';
import { JB_04 } from './Ogikubo';
import { CHUO_OFFSET } from './Okubo';

export const JB_03 = offset(JB_04, CHUO_OFFSET);
export const JC_10 = offset(JB_03, scale(SW, OFFSET));
export const NishiOgikubo = () => {
    return (
        <g id="nishi-ogikubo">
            <Stop stationCode="JB 03" location={JB_03} hideText strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JC 10" location={JC_10} textAlignment={TextAlignment.SW} strokeColor="stroke-chuo-rapid" />
        </g>
    );
};
