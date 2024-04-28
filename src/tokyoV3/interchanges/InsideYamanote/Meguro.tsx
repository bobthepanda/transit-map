import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, S, W, findIntersectionFromSlopes, midPoint, offset, scale } from '../../../utils/PathUtils';
import { JY_21 } from './Ebisu';
import { I_03, N_03 } from './ShirokaneTakanawa';

const MEGURO_INTERSECTION = findIntersectionFromSlopes({
    start: JY_21,
    firstDirection: S,
    end: N_03,
    secondDirection: W,
});

export const JY_22 = offset(MEGURO_INTERSECTION, scale(N, OFFSET));

export const N_01 = offset(MEGURO_INTERSECTION, scale(E, OFFSET * 0.5));
export const I_01 = offset(N_01, scale(S, OFFSET));
const Shirokanedai = () => {
    return (
        <g id="shirokanedai">
            <Stop stationCode="N 02" location={midPoint(N_01, N_03)} strokeColor="stroke-namboku" textAlignment={TextAlignment.UP} />
            <Stop stationCode="I 02" location={midPoint(I_01, I_03)} strokeColor="stroke-mita" hideText />
        </g>
    );
};
export const Meguro = () => {
    return (
        <>
            <Shirokanedai />
            <g id="meguro">
                <Stop stationCode="JY 22" location={JY_22} strokeColor="stroke-yamanote" />
                <Stop stationCode="N 01" location={N_01} strokeColor="stroke-namboku" hideText />
                <Stop stationCode="I 01" location={I_01} strokeColor="stroke-mita" hideText />
            </g>
        </>
    );
};
