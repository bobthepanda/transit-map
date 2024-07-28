import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, offset, scale } from '../../../utils/PathUtils';
import { JC_13, MITAKA_OFFSET } from './MusashiSakai';

export const JC_17 = offset(JC_13, scale(MITAKA_OFFSET, 4));
export const JM_33 = offset(JC_17, scale(S, OFFSET));

export const NishiKokubunji = () => {
    return (
        <g id="nishi-kokubunji">
            <Stop stationCode="JC 17" location={JC_17} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="JM 33" location={JM_33} strokeColor="stroke-musashino" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};
