import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, offset, scale } from '../../../utils/PathUtils';
import { JC_13, MITAKA_OFFSET } from './MusashiSakai';

export const JC_19 = offset(JC_13, scale(MITAKA_OFFSET, 6));
export const JN_26 = offset(JC_19, scale(S, OFFSET));
export const Tachikawa = () => {
    return (
        <g id="tachikawa">
            <Stop stationCode="JC 19" location={JC_19} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="JN 26" location={JN_26} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};
