import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { MAJOR_LINE, OFFSET } from '../../../utils/CommonCoordinates';
import { S, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JC_12 } from './Mitaka';
import { CHUO_OFFSET } from './Okubo';

export const MITAKA_OFFSET = scaleToUnitX(W, MAJOR_LINE * 1.5);

export const JC_13 = offset(JC_12, scale(CHUO_OFFSET, 0.5), scale(MITAKA_OFFSET, 0.5));

export const SW_01 = offset(JC_13, scale(S, OFFSET));

export const MusashiSakai = () => {
    return (
        <g id="musashi-sakai">
            <Stop stationCode="JC 13" hideText location={JC_13} strokeColor="stroke-chuo-rapid" />
            <Stop stationCode="SW 01" location={SW_01} textAlignment={TextAlignment.LEFT} />
        </g>
    );
};
