import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, SE, SW, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { G_09 } from './Ginza';
import { T_09 } from './Otemachi';

const NIHOMBASHI_INTERSECTION = findIntersectionFromSlopes({ start: T_09, firstDirection: SE, end: G_09, secondDirection: NE });

export const T_10 = offset(NIHOMBASHI_INTERSECTION, scaleToUnitX(SE, OFFSET * 3));
export const G_11 = offset(NIHOMBASHI_INTERSECTION, scaleToUnitX(SW, OFFSET));
export const A_13 = offset(G_11, scaleToUnitX(SE, OFFSET * 6));
export const Nihombashi = () => {
    return (
        <g id="nihombashi">
            <Stop stationCode="T 10" location={T_10} strokeColor="stroke-tozai" textAlignment={TextAlignment.NE} />
            <Stop stationCode="G 11" location={G_11} strokeColor="stroke-ginza" hideText />
            <Stop stationCode="A 13" location={A_13} strokeColor="stroke-asakusa" hideText />
        </g>
    );
};
