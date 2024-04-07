import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, S, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { JO_21 } from './Bakurocho';
import { G_13 } from './Kanda';

const MITSUKOMAE_INTERSECTION = findIntersectionFromSlopes({ start: G_13, firstDirection: S, secondDirection: W, end: JO_21 });
export const G_12 = offset(MITSUKOMAE_INTERSECTION, scaleToUnitX(S, OFFSET * 2));
export const Z_09 = offset(G_12, scaleToUnitX(E, OFFSET));
export const JO_20 = offset(MITSUKOMAE_INTERSECTION, scaleToUnitX(E, OFFSET * 2));
export const Mitsukomae = () => {
    return (
        <g id="bakurocho">
            <Stop stationCode="G 12" location={G_12} strokeColor="stroke-ginza" hideText />
            <Stop stationCode="JO 20" location={JO_20} strokeColor="stroke-sobu-rapid" textAlignment={TextAlignment.UP} />
            <Stop stationCode="Z 09" location={Z_09} strokeColor="stroke-hanzomon" textAlignment={TextAlignment.DOWN} />
        </g>
    );
};
