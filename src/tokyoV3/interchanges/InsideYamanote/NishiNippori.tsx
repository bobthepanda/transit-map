import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NE, S, SW, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_07 } from './Nippori';
import { C_12 } from './Ogawamachi';
import { TABATA_SCALE } from './Uguisuidani';

export const JY_08 = offset(JY_07, scaleToUnitX(N, TABATA_SCALE));
export const JK_33 = offset(JY_08, scaleToUnitX(E, OFFSET));
export const C_16 = offset(JY_08, scaleToUnitX(S, OFFSET), scaleToUnitX(W, OFFSET * 0.5));

const CHIYODA_CORNER = findIntersectionFromSlopes({ firstDirection: W, start: C_16, secondDirection: NE, end: C_12 });
export const C_15 = offset(CHIYODA_CORNER, scaleToUnitX(SW, MAJOR_LINE * 0.5));
export const C_14 = offset(C_15, scaleToUnitX(SW, MAJOR_LINE));
export const C_13 = offset(C_14, scaleToUnitX(SW, MAJOR_LINE));

export const NishiNippori = () => {
    return (
        <>
            <Stop stationCode="C 13" location={C_13} strokeColor="stroke-chiyoda" textAlignment={TextAlignment.SE} />
            <Stop stationCode="C 14" location={C_14} strokeColor="stroke-chiyoda" textAlignment={TextAlignment.SE} />
            <Stop stationCode="C 15" location={C_15} strokeColor="stroke-chiyoda" textAlignment={TextAlignment.SE} />
            <g id="nishi-nippori">
                <Stop stationCode="JY 08" location={JY_08} strokeColor="stroke-yamanote" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="JK 33" location={JK_33} strokeColor="stroke-keihin-tohoku" hideText />
                <Stop stationCode="C 16" location={C_16} strokeColor="stroke-chiyoda" hideText />
            </g>
        </>
    );
};
