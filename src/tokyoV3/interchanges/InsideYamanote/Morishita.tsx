import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, S, SE, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { S_09 } from './Bakurocho';
import { E_16 } from './Tsukishima';

const MORISHITA_INTERSECTION = findIntersectionFromSlopes({ start: S_09, firstDirection: SE, end: E_16, secondDirection: NE });

export const S_11 = offset(MORISHITA_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
const S_10 = offset(S_11, scaleToUnitX(NW, OFFSET * 4));
export const E_13 = offset(S_11, scaleToUnitX(S, OFFSET));
export const Morishita = () => {
    return (
        <>
            <Stop stationCode="S 10" location={S_10} strokeColor="stroke-shinjuku" textAlignment={TextAlignment.NE} />
            <g id="morishita">
                <Stop stationCode="S 11" location={S_11} strokeColor="stroke-shinjuku" />
                <Stop stationCode="E 13" location={E_13} strokeColor="stroke-oedo" />
            </g>
        </>
    );
};
