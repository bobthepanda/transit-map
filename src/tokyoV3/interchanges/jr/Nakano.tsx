import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, SW, offset, scale } from '../../../utils/PathUtils';
import { JB_08 } from './HigashiNakano';
import { CHUO_OFFSET } from './Okubo';

export const JB_07 = offset(JB_08, CHUO_OFFSET);
export const JC_06 = offset(JB_07, scale(SW, OFFSET));
export const T_01 = offset(JB_07, scale(NE, OFFSET));
export const Nakano = () => {
    return (
        <g id="nakano">
            <Stop stationCode="JB 07" location={JB_07} hideText strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JC 06" location={JC_06} textAlignment={TextAlignment.SW} strokeColor="stroke-chuo-rapid" />
            <Stop stationCode="T 01" location={T_01} hideText strokeColor="stroke-tozai" />
        </g>
    );
};
