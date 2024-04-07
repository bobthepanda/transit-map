import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NE, NW, SE, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { JB_16 } from './Iidabashi';
import { I_10 } from './Jimbocho';

const SUIDOBASHI_START = offset(JB_16, scaleToUnitX(NE, MAJOR_LINE * 2), scaleToUnitX(SE, OFFSET * 2));
const SUIDOBASHI_INTERSECTION = findIntersectionFromSlopes({ start: SUIDOBASHI_START, end: I_10, firstDirection: SE, secondDirection: N });
export const JB_17 = offset(SUIDOBASHI_INTERSECTION, scaleToUnitX(NW, OFFSET));
export const I_11 = offset(JB_17, scaleToUnitX(E, OFFSET));
export const Suidobashi = () => {
    return (
        <g id="ogawamachi">
            <Stop stationCode="JB 17" location={JB_17} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="I 11" location={I_11} strokeColor="stroke-mita" />
        </g>
    );
};
