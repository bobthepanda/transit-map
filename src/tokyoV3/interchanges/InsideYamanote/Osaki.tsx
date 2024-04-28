import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, SW, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_23 } from './Gotanda';
import { JK_20 } from './Shinagawa';

export const JY_24 = offset(JY_23, scaleToUnitX(S, MAJOR_LINE + OFFSET));
export const JS_17 = offset(JY_24, scale(W, OFFSET));
export const JA_08 = offset(JS_17, scale(W, OFFSET));
export const R_08 = offset(JA_08, scale(W, OFFSET));
export const Osaki = () => {
    return (
        <g id="osaki">
            <Stop stationCode="JY 24" location={JY_24} strokeColor="stroke-yamanote" />
            <Stop stationCode="JS 17" location={JS_17} strokeColor="stroke-shonan-shinjuku" hideText />
            <Stop stationCode="JA 08" location={JA_08} strokeColor="stroke-saikyo" hideText />
            <Stop stationCode="R 08" location={R_08} hideText />
        </g>
    );
};
export const OSAKI_CORNER = offset(JK_20, scaleToUnitX(SW, OFFSET * 3), scaleToUnitX(W, OFFSET * 4));
export const SOBU_OSAKI_CORNER = offset(OSAKI_CORNER, scale(S, OFFSET));
