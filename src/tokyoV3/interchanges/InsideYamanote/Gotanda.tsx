import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, S, W, findIntersectionFromSlopes, midPoint, offset, scale } from '../../../utils/PathUtils';
import { JY_22 } from './Meguro';
import { A_07 } from './TakanawaGateway';

const GOTANDA_INTERSECTION = findIntersectionFromSlopes({
    start: JY_22,
    firstDirection: S,
    end: A_07,
    secondDirection: W,
});

export const JY_23 = offset(GOTANDA_INTERSECTION, scale(N, OFFSET));

export const A_05 = offset(GOTANDA_INTERSECTION, scale(E, OFFSET * 0.5));
export const Gotanda = () => {
    return (
        <>
            <Stop stationCode="A 06" location={midPoint(A_05, A_07)} strokeColor="stroke-asakusa" textAlignment={TextAlignment.UP} />
            <g id="gotanda">
                <Stop stationCode="JY 23" location={JY_23} strokeColor="stroke-yamanote" />
                <Stop stationCode="A 05" location={A_05} strokeColor="stroke-asakusa" hideText />
            </g>
        </>
    );
};
