import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, SE, SW, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JK_21 } from './TakanawaGateway';

export const JK_20 = offset(JK_21, scaleToUnitX(W, MAJOR_LINE * 0.5), scaleToUnitX(SW, MAJOR_LINE));
export const JY_25 = offset(JK_20, scale(NW, OFFSET));
export const JT_03 = offset(JK_20, scale(SE, OFFSET));
export const JO_17 = offset(JT_03, scale(SE, OFFSET));
export const KK_01 = offset(JY_25, scaleToUnitX(W, OFFSET));
export const Shinagawa = () => {
    return (
        <g id="shinagawa">
            <Stop stationCode="KK 01" location={KK_01} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JY 25" location={JY_25} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JK 20" location={JK_20} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="JT 03" location={JT_03} strokeColor="stroke-tokaido" hideText />
            <Stop stationCode="JO 17" location={JO_17} strokeColor="stroke-sobu-rapid" hideText />
        </g>
    );
};
