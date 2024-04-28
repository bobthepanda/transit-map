import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, S, W, findIntersectionFromSlopes, midPoint, offset, scale } from '../../../utils/PathUtils';
import { H_04 } from './Roppongi';
import { JY_20 } from './Shibuya';

const EBISU_INTERSECTION = findIntersectionFromSlopes({
    start: JY_20,
    firstDirection: S,
    end: H_04,
    secondDirection: W,
});

export const JY_21 = offset(EBISU_INTERSECTION, scale(N, OFFSET));
export const JS_18 = offset(JY_21, scale(W, OFFSET));
export const JA_09 = offset(JS_18, scale(W, OFFSET));

export const H_02 = offset(EBISU_INTERSECTION, scale(E, OFFSET * 0.5));
export const Ebisu = () => {
    return (
        <>
            <Stop stationCode="H 03" location={midPoint(H_02, H_04)} strokeColor="stroke-hibiya" textAlignment={TextAlignment.UP} />
            <g id="ebisu">
                <Stop stationCode="JY 21" location={JY_21} strokeColor="stroke-yamanote" />
                <Stop stationCode="JS 18" location={JS_18} strokeColor="stroke-shonan-shinjuku" hideText />
                <Stop stationCode="JA 09" location={JA_09} strokeColor="stroke-saikyo" hideText />
                <Stop stationCode="H 02" location={H_02} strokeColor="stroke-hibiya" hideText />
            </g>
        </>
    );
};
