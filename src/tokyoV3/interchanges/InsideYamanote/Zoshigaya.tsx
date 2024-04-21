import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, S, SE, SW, findIntersectionFromSlopes, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { SA_25 } from './HigashiIkebukuro';
import { F_11 } from './HigashiShinjuku';
import { JY_14 } from './Takadanobaba';

const F_10 = offset(
    findIntersectionFromSlopes({ start: F_11, firstDirection: NE, end: JY_14, secondDirection: SE }),
    scaleToUnitX(SW, OFFSET)
);
export const SA_27 = offset(F_10, scale(SE, OFFSET));
export const SA_26 = midPoint(SA_25, SA_27);
export const SA_28 = offset(SA_27, scaleToUnitX(SW, OFFSET * 2));
const SA_29 = offset(SA_28, scaleToUnitX(S, OFFSET * 2));
export const SA_30 = offset(SA_29, scaleToUnitX(SE, OFFSET * 2));
export const Zoshigaya = () => {
    return (
        <>
            <Stop stationCode="SA 26" location={SA_26} textAlignment={TextAlignment.SE} />
            <Stop stationCode="SA 28" location={SA_28} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="SA 29" location={SA_29} textAlignment={TextAlignment.NE} />
            <Stop stationCode="SA 30" location={SA_30} textAlignment={TextAlignment.NE} />
            <g id="zoshigaya">
                <Stop stationCode="F 10" strokeColor="stroke-fukutoshin" location={F_10} textAlignment={TextAlignment.NW} />
                <Stop stationCode="SA 27" location={SA_27} textAlignment={TextAlignment.SE} />
            </g>
        </>
    );
};
