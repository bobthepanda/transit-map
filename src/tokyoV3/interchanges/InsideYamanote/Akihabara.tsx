import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NE, NW, SE, findIntersectionFromSlopes, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JB_18 } from './Ochanomizu';
import { JY_01 } from './Tokyo';

const AKIHABARA_INTERSECTION = findIntersectionFromSlopes({ start: JB_18, firstDirection: SE, secondDirection: NE, end: JY_01 });
export const JB_19 = offset(AKIHABARA_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const JY_03 = offset(JB_19, scaleToUnitX(E, OFFSET));
export const JK_28 = offset(JY_03, scale(SE, OFFSET));
export const Akihabara = () => {
    return (
        <g id="akihabara">
            <Stop stationCode="JB 19" location={JB_19} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="JY 03" location={JY_03} strokeColor="stroke-yamanote" />
            <Stop stationCode="JK 28" location={JK_28} strokeColor="stroke-keihin-tohoku" />
        </g>
    );
};
