import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, SE, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_29 } from './Shimbashi';

export const JY_30 = offset(JY_29, scaleToUnitX(NE, MAJOR_LINE * 1.5));
export const JK_25 = offset(JY_30, scale(SE, OFFSET));
export const Y_18 = offset(JY_30, scaleToUnitX(N, OFFSET));
export const Yurakucho = () => {
    return (
        <g id="yurakucho">
            <Stop location={JY_30} stationCode="JY 30" strokeColor="stroke-yamanote" hideText />
            <Stop location={JK_25} stationCode="JK 25" strokeColor="stroke-keihin-tohoku" hideText />
            <Stop location={Y_18} stationCode="Y 18" strokeColor="stroke-yurakucho" textAlignment={TextAlignment.UP} />
        </g>
    );
};
