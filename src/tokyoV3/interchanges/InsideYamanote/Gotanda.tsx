import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, S, W, findIntersectionFromSlopes, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
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
export const IK_01 = offset(A_05, scale(N, OFFSET * 2));
export const Gotanda = () => {
    return (
        <>
            <Stop stationCode="A 06" location={midPoint(A_05, A_07)} strokeColor="stroke-asakusa" textAlignment={TextAlignment.UP} />
            <g id="gotanda">
                <Stop stationCode="JY 23" location={JY_23} strokeColor="stroke-yamanote" hideText />
                <Stop stationCode="A 05" location={A_05} strokeColor="stroke-asakusa" hideText />
                <Stop stationCode="IK 01" location={IK_01} />
            </g>
            <Stop
                stationCode="A 04"
                location={offset(A_05, scaleToUnitX(W, MAJOR_LINE * 1.5), scaleToUnitX(W, OFFSET))}
                strokeColor="stroke-asakusa"
                textAlignment={TextAlignment.DOWN}
            />
        </>
    );
};
