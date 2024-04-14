import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, S, SE, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { Z_10 } from './Ningyocho';
import { E_16 } from './Tsukishima';

const KIYOSUMI_SHIRAKAWA_INTERSECTION = findIntersectionFromSlopes({ start: Z_10, firstDirection: SE, end: E_16, secondDirection: NE });

export const Z_11 = offset(KIYOSUMI_SHIRAKAWA_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const E_14 = offset(Z_11, scaleToUnitX(S, OFFSET));
export const KiyosumiShirakawa = () => {
    return (
        <g id="kiyosumi-shirakawa">
            <Stop stationCode="Z 11" location={Z_11} strokeColor="stroke-hanzomon" />
            <Stop stationCode="E 14" location={E_14} strokeColor="stroke-oedo" />
        </g>
    );
};
