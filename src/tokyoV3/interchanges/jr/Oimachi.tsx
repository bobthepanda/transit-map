import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, S, SW, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { R_08 } from '../InsideYamanote/Osaki';
import { JK_20 } from '../InsideYamanote/Shinagawa.tsx';

const OIMACHI_INTERSECTION = findIntersectionFromSlopes({ start: R_08, firstDirection: S, secondDirection: SW, end: JK_20 });

export const R_07 = offset(OIMACHI_INTERSECTION, scaleToUnitX(N, OFFSET));
export const JK_19 = offset(OIMACHI_INTERSECTION, scaleToUnitX(NE, OFFSET));
export const Oimachi = () => {
    return (
        <g id="oimachi">
            <Stop stationCode="R 07" location={R_07} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JK 19" location={JK_19} hideText strokeColor="stroke-keihin-tohoku" />
        </g>
    );
};
