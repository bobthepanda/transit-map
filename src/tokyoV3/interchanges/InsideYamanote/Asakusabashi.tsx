import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NE, NW, SE, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { JB_19 } from './Akihabara';
import { A_13 } from './Nihombashi';

const ASAKUSABASHI_INTERSECTION = findIntersectionFromSlopes({ firstDirection: SE, start: JB_19, secondDirection: NE, end: A_13 });
export const JB_20 = offset(ASAKUSABASHI_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const A_16 = offset(JB_20, scaleToUnitX(E, OFFSET));
export const Asakusabashi = () => {
    return (
        <g id="asakusabashi">
            <Stop stationCode="A 16" location={A_16} strokeColor="stroke-asakusa" />
            <Stop stationCode="JB 20" location={JB_20} strokeColor="stroke-chuo-sobu" />
        </g>
    );
};
