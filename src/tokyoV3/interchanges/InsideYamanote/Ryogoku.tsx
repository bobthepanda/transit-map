import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NE, NW, SE, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { JB_20 } from './Asakusabashi';
import { E_16 } from './Tsukishima';

const RYOGOKU_INTERSECTION = findIntersectionFromSlopes({ start: JB_20, firstDirection: SE, end: E_16, secondDirection: NE });

export const JB_21 = offset(RYOGOKU_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const E_12 = offset(JB_21, scaleToUnitX(E, OFFSET));
export const Ryogoku = () => {
    return (
        <g id="ryogoku">
            <Stop stationCode="JB 21" location={JB_21} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="E 12" location={E_12} strokeColor="stroke-oedo" />
        </g>
    );
};
