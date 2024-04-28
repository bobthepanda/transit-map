import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, SW, W, findIntersectionFromSlopes, offset, roundCoordinate, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { A_09 } from './Hamamatsucho';
import { I_08 } from './Hibiya';

export const I_04 = roundCoordinate(
    findIntersectionFromSlopes({
        firstDirection: SW,
        start: offset(I_08, scaleToUnitX(W, OFFSET * 3)),
        end: offset(A_09, scaleToUnitX(SW, OFFSET * 3)),
        secondDirection: W,
    }),
    MAJOR_LINE * 0.5
);

export const A_08 = offset(I_04, scaleToUnitX(S, OFFSET));
export const JY_27 = offset(A_08, scaleToUnitX(S, OFFSET * 3));
export const JK_22 = offset(JY_27, scaleToUnitX(S, OFFSET));
export const Mita = () => {
    return (
        <g id="mita">
            <Stop stationCode="JY 27" location={JY_27} strokeColor="stroke-yamanote" textAlignment={TextAlignment.UP} />
            <Stop stationCode="JK 22" location={JK_22} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="A 08" location={A_08} strokeColor="stroke-asakusa" hideText />
            <Stop stationCode="I 04" location={I_04} strokeColor="stroke-mita" textAlignment={TextAlignment.UP} />
        </g>
    );
};
export const TAMACHI_OFFSET = offset(JK_22, scale(S, OFFSET));
