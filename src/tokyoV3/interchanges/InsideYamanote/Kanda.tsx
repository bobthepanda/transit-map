import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, SE, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_01 } from './Tokyo';

export const JY_02 = offset(JY_01, scaleToUnitX(NE, MAJOR_LINE * 2));
export const JC_02 = offset(JY_02, scale(NW, OFFSET));
export const G_13 = offset(JY_02, scaleToUnitX(NW, OFFSET * 1.5));
export const JK_27 = offset(JY_02, scale(SE, OFFSET));
export const Kanda = () => {
    return (
        <g id="kanda">
            <Stop stationCode="JY 02" location={JY_02} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JK 27" location={JK_27} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="JC 02" location={JC_02} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="G 13" location={G_13} strokeColor="stroke-ginza" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};
