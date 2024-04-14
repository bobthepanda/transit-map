import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NW, SE, SW, findIntersectionFromSlopes, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { M_19 } from './Ogawamachi';
import { JB_17 } from './Suidobashi';

const OCHANOMIZU_INTERSECTION = findIntersectionFromSlopes({
    start: offset(JB_17, scaleToUnitX(E, MAJOR_LINE * 2)),
    end: M_19,
    firstDirection: SE,
    secondDirection: N,
});
export const JB_18 = offset(OCHANOMIZU_INTERSECTION, scaleToUnitX(NW, OFFSET));
export const JC_03 = offset(JB_18, scale(SW, OFFSET));
export const M_20 = offset(JB_18, scaleToUnitX(E, OFFSET));
export const Ochanomizu = () => {
    return (
        <g id="ogawamachi">
            <Stop stationCode="JB 18" location={JB_18} strokeColor="stroke-chuo-sobu" hideText />
            <Stop stationCode="JC 03" location={JC_03} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="M 20" location={M_20} strokeColor="stroke-marunouchi" />
        </g>
    );
};
