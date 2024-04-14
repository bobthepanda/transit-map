import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, NW, SE, SW, W, findIntersectionFromSlopes, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { S_04 } from './Ichigaya';
import { JY_15 } from './Takadanobaba';

export const S_03 = offset(S_04, scaleToUnitX(W, MAJOR_LINE * 0.5), scaleToUnitX(NW, MAJOR_LINE * 0.5));
const SHINJUKU_INTERSECTION = findIntersectionFromSlopes({ firstDirection: SW, start: JY_15, secondDirection: NW, end: S_03 });
export const JY_17 = offset(SHINJUKU_INTERSECTION, scale(NE, OFFSET));
export const JB_10 = offset(JY_17, scale(SE, OFFSET));
export const JS_20 = offset(JY_17, scale(NW, OFFSET));
export const JA_11 = offset(JS_20, scale(NW, OFFSET));
export const JC_05 = offset(JA_11, scale(NW, OFFSET));
export const S_01 = offset(JC_05, scale(NW, OFFSET * 0.5), scale(SW, OFFSET));
export const M_08 = offset(S_01, scale(SW, OFFSET));
export const E_27 = offset(M_08, scale(SW, OFFSET));
export const E_01 = offset(JC_05, scaleToUnitX(N, OFFSET * 3));
export const Shinjuku = () => {
    return (
        <>
            <Stop stationCode="S 03" location={S_03} strokeColor="stroke-shinjuku" textAlignment={TextAlignment.NE} />
            <g id="shinjuku">
                <Stop stationCode="S 01" location={S_01} strokeColor="stroke-shinjuku" hideText />
                <Stop stationCode="M 08" location={M_08} strokeColor="stroke-marunouchi" hideText />
                <Stop stationCode="E 27" location={E_27} strokeColor="stroke-oedo" hideText />
                <Stop stationCode="E 01" location={E_01} strokeColor="stroke-oedo" textAlignment={TextAlignment.UP} />
                <Stop stationCode="JY 17" location={JY_17} strokeColor="stroke-yamanote" hideText />
                <Stop stationCode="JB 10" location={JB_10} strokeColor="stroke-chuo-sobu" hideText />
                <Stop stationCode="JS 20" location={JS_20} strokeColor="stroke-shonan-shinjuku" hideText />
                <Stop stationCode="JA 11" location={JA_11} strokeColor="stroke-saikyo" hideText />
                <Stop stationCode="JC 05" location={JC_05} strokeColor="stroke-chuo-rapid" textAlignment={TextAlignment.NW} />
            </g>
        </>
    );
};
