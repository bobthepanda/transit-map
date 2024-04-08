import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NE, NW, SE, SW, findIntersectionFromSlopes, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JB_18 } from './Ochanomizu';
import { S_07 } from './Ogawamachi';
import { JY_01 } from './TokyoStation';

const AKIHABARA_INTERSECTION = findIntersectionFromSlopes({ start: JB_18, firstDirection: SE, secondDirection: NE, end: JY_01 });
export const JB_19 = offset(AKIHABARA_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const JY_03 = offset(JB_19, scaleToUnitX(E, OFFSET));
export const JK_28 = offset(JY_03, scale(SE, OFFSET));
export const H_16 = offset(JY_03, scaleToUnitX(SE, OFFSET * 2));
export const S_08 = findIntersectionFromSlopes({ start: H_16, end: S_07, firstDirection: SW, secondDirection: SE });
export const Akihabara = () => {
    return (
        <g id="akihabara">
            <Stop stationCode="JB 19" location={JB_19} strokeColor="stroke-chuo-sobu" hideText />
            <Stop stationCode="JY 03" location={JY_03} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JK 28" location={JK_28} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="H 16" location={H_16} strokeColor="stroke-hibiya" textAlignment={TextAlignment.SE} />
            <Stop stationCode="S 08" location={S_08} strokeColor="stroke-shinjuku" textAlignment={TextAlignment.NE} />
        </g>
    );
};
