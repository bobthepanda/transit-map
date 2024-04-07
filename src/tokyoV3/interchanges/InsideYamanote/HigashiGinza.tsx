import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, S, SE, SW, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { H_09 } from './Ginza';
import { A_13 } from './Nihombashi';
import { Y_18 } from './Yurakucho';

const HIGASHI_GINZA_INTERSECTION = findIntersectionFromSlopes({ start: H_09, end: A_13, firstDirection: SE, secondDirection: SW });

export const H_10 = offset(HIGASHI_GINZA_INTERSECTION, scaleToUnitX(NW, OFFSET * 0.5));
export const A_11 = offset(H_10, scaleToUnitX(S, OFFSET));
export const HigashiGinza = () => {
    return (
        <g id="higashi-ginza">
            <Stop stationCode="H 10" location={H_10} strokeColor="stroke-hibiya" hideText />
            <Stop stationCode="A 11" location={A_11} strokeColor="stroke-asakusa" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};
export const TSUKIJI_INTERSECTION = findIntersectionFromSlopes({
    start: offset(A_11, scaleToUnitX(SE, OFFSET * 4)),
    end: Y_18,
    firstDirection: NE,
    secondDirection: SE,
});
