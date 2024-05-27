import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NW, S, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { E_01, E_27 } from './Shinjuku';

const TOCHOMAE_INTERSECTION = findIntersectionFromSlopes({ firstDirection: NW, start: E_27, end: E_01, secondDirection: W });
export const E_28_START = offset(TOCHOMAE_INTERSECTION, scaleToUnitX(E, OFFSET));
export const E_28 = offset(E_28_START, scaleToUnitX(S, OFFSET));
export const Tochomae = () => {
    return (
        <>
            <g id="tochomae">
                <Stop stationCode="E 28" location={E_28_START} strokeColor="stroke-oedo" hideText />
                <Stop stationCode="E 28" location={E_28} strokeColor="stroke-oedo" textAlignment={TextAlignment.SW} />
            </g>
            <Stop
                stationCode="E 29"
                location={offset(E_28, scaleToUnitX(NW, OFFSET * 3))}
                strokeColor="stroke-oedo"
                textAlignment={TextAlignment.SW}
            />
        </>
    );
};
