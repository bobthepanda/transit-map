import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NE, NW, SW, W, findIntersectionFromSlopes, midPoint, offset, roundPoint, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { F_16 } from '../InsideYamanote/Shibuya';
import { OM_01 } from './Keihin';
import { TY_11 } from './MusashiKosugi';

const JIYUGAOKA_INTERSECTION = findIntersectionFromSlopes({ start: TY_11, firstDirection: NE, secondDirection: NW, end: OM_01 });
const TY_07 = offset(JIYUGAOKA_INTERSECTION, scaleToUnitX(SW, OFFSET * 0.5));
export const OM_10 = offset(TY_07, scale(E, OFFSET));
export const TY_04 = roundPoint(midPoint(TY_07, F_16));

export const Jiyugaoka = () => {
    return (
        <>
            <g id="jiyugaoka">
                <Stop stationCode="TY 07" location={TY_07} hideText />
                <Stop stationCode="OM 10" location={OM_10} />
            </g>
            <Stop stationCode="TY 06" location={offset(TY_07, scaleToUnitX(NE, OFFSET * 6))} textAlignment={TextAlignment.SE} />
            <Stop stationCode="TY 05" location={offset(TY_04, scaleToUnitX(W, MAJOR_LINE))} textAlignment={TextAlignment.UP} />
            <Stop stationCode="TY 04" location={TY_04} textAlignment={TextAlignment.UP} />
            <Stop stationCode="TY 02" location={offset(F_16, scaleToUnitX(SW, MAJOR_LINE + OFFSET))} textAlignment={TextAlignment.SE} />
        </>
    );
};
