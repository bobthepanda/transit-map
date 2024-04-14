import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, S, SE, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { T_11 } from './Kayabacho';
import { E_16 } from './Tsukishima';

const MONZEN_NAKACHO_INTERSECTION = findIntersectionFromSlopes({ start: T_11, firstDirection: SE, end: E_16, secondDirection: NE });

export const T_12 = offset(MONZEN_NAKACHO_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const E_15 = offset(T_12, scaleToUnitX(S, OFFSET));
export const MonzenNakacho = () => {
    return (
        <g id="monzen-nakacho">
            <Stop stationCode="T 12" location={T_12} strokeColor="stroke-tozai" />
            <Stop stationCode="E 15" location={E_15} strokeColor="stroke-oedo" />
        </g>
    );
};
