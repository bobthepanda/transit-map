import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, SE, SW, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_30 } from './Yurakucho';

export const JY_01 = offset(JY_30, scaleToUnitX(NE, MAJOR_LINE));
export const JK_26 = offset(JY_01, scale(SE, OFFSET));
export const JT_01 = offset(JK_26, scale(SE, OFFSET));
export const JO_19 = offset(JK_26, scale(SE, OFFSET * 2));
export const JC_01 = offset(JY_01, scale(SE, -1 * OFFSET));
export const M_17 = offset(JC_01, scale(W, OFFSET));
export const JE_01 = offset(JC_01, scaleToUnitX(SW, OFFSET * 2.5));
export const JM_01 = offset(JE_01, scale(NE, OFFSET));
export const Tokyo = () => {
    return (
        <g id="tokyo">
            <Stop stationCode="JY 01" location={JY_01} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JK 26" location={JK_26} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="JT 01" location={JT_01} strokeColor="stroke-tokaido" hideText />
            <Stop stationCode="JO 19" location={JO_19} strokeColor="stroke-sobu-rapid" hideText />
            <Stop stationCode="JC 01" location={JC_01} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="M 17" location={M_17} strokeColor="stroke-marunouchi" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JE 01" location={JE_01} strokeColor="stroke-keiyo" hideText />
            <Stop stationCode="JE 01" location={JM_01} strokeColor="stroke-musashino" hideText />
        </g>
    );
};
