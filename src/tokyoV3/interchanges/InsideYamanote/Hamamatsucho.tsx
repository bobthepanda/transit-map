import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, SE, SW, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_29 } from './Shimbashi';

export const JY_28 = offset(JY_29, scaleToUnitX(SW, MAJOR_LINE * 1.5));
export const JK_23 = offset(JY_28, scale(SE, OFFSET));
export const A_09 = offset(JY_28, scaleToUnitX(NW, OFFSET * 3));
export const E_20 = offset(A_09, scaleToUnitX(W, OFFSET));
export const Hamamatsucho = () => {
    return (
        <g id="hamamatsucho">
            <Stop stationCode="JY 28" location={JY_28} strokeColor="stroke-yamanote" textAlignment={TextAlignment.NW} />
            <Stop stationCode="JK 23" location={JK_23} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="A 09" location={A_09} strokeColor="stroke-asakusa" hideText />
            <Stop stationCode="E 20" location={E_20} strokeColor="stroke-oedo" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};
