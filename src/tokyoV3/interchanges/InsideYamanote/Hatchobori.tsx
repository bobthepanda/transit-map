import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NE, NW, SE, findIntersectionFromSlopes, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JE_01 } from './TokyoStation';
import { H_11 } from './Tsukiji';

const HATCHOBORI_INTERSECTION = findIntersectionFromSlopes({ firstDirection: SE, start: JE_01, secondDirection: NE, end: H_11 });
export const JE_02 = offset(HATCHOBORI_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const JM_02 = offset(JE_02, scale(NE, OFFSET));
export const H_12 = offset(JM_02, scaleToUnitX(E, OFFSET));

export const Hatchobori = () => {
    return (
        <g id="hatchobori">
            <Stop stationCode="JE 02" location={JE_02} strokeColor="stroke-keiyo" hideText />
            <Stop stationCode="JE 02" location={JM_02} strokeColor="stroke-musashino" hideText />
            <Stop stationCode="H 12" location={H_12} strokeColor="stroke-hibiya" />
        </g>
    );
};
