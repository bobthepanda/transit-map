import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NW, S, SW, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { E_20 } from './Hamamatsucho';
import { H_06 } from './Toranomon';

const ROPPONGI_INTERSECTION = findIntersectionFromSlopes({
    start: offset(H_06, scaleToUnitX(SW, OFFSET * 2)),
    firstDirection: W,
    end: E_20,
    secondDirection: NW,
});

export const E_23 = offset(ROPPONGI_INTERSECTION, scaleToUnitX(NW, OFFSET));
export const H_04 = offset(E_23, scaleToUnitX(S, OFFSET));
export const Roppongi = () => {
    return (
        <>
            <Stop
                stationCode="H 05"
                location={offset(H_04, scaleToUnitX(E, MAJOR_LINE * 1.5))}
                strokeColor="stroke-hibiya"
                textAlignment={TextAlignment.DOWN}
            />
            <g id="roppongi">
                <Stop stationCode="H 04" location={H_04} strokeColor="stroke-hibiya" hideText />
                <Stop stationCode="E 23" location={E_23} strokeColor="stroke-oedo" textAlignment={TextAlignment.NE} />
            </g>
        </>
    );
};
