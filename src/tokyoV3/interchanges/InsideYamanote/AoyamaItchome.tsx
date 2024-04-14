import { Coordinates } from '../../../interfaces/Dimensions';
import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { Z_04 } from './AsakasaMitsukae';

export const Z_03: Coordinates = offset(Z_04, scale(W, MAJOR_LINE * 2));
export const G_04: Coordinates = offset(Z_03, scaleToUnitX(S, OFFSET));
export const AoyamaItchome = () => {
    return (
        <g id="aoyama-itchome">
            <Stop stationCode="G 04" location={G_04} strokeColor="stroke-ginza" textAlignment={TextAlignment.NW} />
            <Stop stationCode="Z 03" location={Z_03} strokeColor="stroke-hanzomon" hideText />
        </g>
    );
};
