import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { W, offset, scale } from '../../../utils/PathUtils';
import { JC_12 } from './Mitaka';
import { CHUO_OFFSET } from './Okubo';

const JC_13 = offset(JC_12, CHUO_OFFSET);
export const SW_01 = offset(JC_13, scale(W, OFFSET));

export const MusashiSakai = () => {
    return (
        <g id="musashi-sakai">
            <Stop stationCode="JC 13" hideText location={JC_13} strokeColor="stroke-chuo-rapid" />
            <Stop stationCode="SW 01" location={SW_01} textAlignment={TextAlignment.LEFT} />
        </g>
    );
};
