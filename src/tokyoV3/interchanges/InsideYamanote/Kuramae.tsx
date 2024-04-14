import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, S, SE, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { A_13 } from './Nihombashi';
import { E_09 } from './Okachimachi';

const KURAMAE_INTERSECTION = findIntersectionFromSlopes({ firstDirection: SE, start: E_09, secondDirection: NE, end: A_13 });
export const E_11 = offset(KURAMAE_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const A_17 = offset(E_11, scaleToUnitX(S, OFFSET));
export const Kuramae = () => {
    return (
        <g id="kuramae">
            <Stop stationCode="A 17" location={A_17} strokeColor="stroke-asakusa" />
            <Stop stationCode="E 11" location={E_11} strokeColor="stroke-oedo" hideText />
        </g>
    );
};
