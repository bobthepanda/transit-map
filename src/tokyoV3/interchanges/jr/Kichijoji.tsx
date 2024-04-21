import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { SW, offset, scale } from '../../../utils/PathUtils';
import { JB_03 } from './NishiOgikubo';
import { CHUO_OFFSET } from './Okubo';

export const JB_02 = offset(JB_03, CHUO_OFFSET);
export const JC_11 = offset(JB_02, scale(SW, OFFSET));
export const Kichijoji = () => {
    return (
        <g id="kichijoji">
            <Stop stationCode="JB 02" location={JB_02} hideText strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JC 11" location={JC_11} textAlignment={TextAlignment.SW} strokeColor="stroke-chuo-rapid" />
        </g>
    );
};
