import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { W, offset, scale } from '../../../utils/PathUtils';
import { JC_12 } from './Mitaka';
import { CHUO_OFFSET } from './Okubo';

export const JC_17 = offset(JC_12, scale(CHUO_OFFSET, 5));
export const JM_33 = offset(JC_17, scale(W, OFFSET));

export const NishiKokubunji = () => {
    return (
        <g id="nishi-kokubunji">
            <Stop stationCode="JC 17" location={JC_17} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="JM 33" location={JM_33} strokeColor="stroke-musashino" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};
