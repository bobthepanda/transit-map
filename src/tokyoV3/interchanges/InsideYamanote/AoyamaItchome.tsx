import { Coordinates } from '../../../interfaces/Dimensions';
import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { SE, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { G_05 } from './AsakasaMitsukae';

export const G_04: Coordinates = offset(G_05, scaleToUnitX(W, MAJOR_LINE + OFFSET * 2));
export const Z_03: Coordinates = offset(G_04, scale(SE, OFFSET));
export const AoyamaItchome = () => {
    return (
        <g id="aoyama-itchome">
            <Stop stationCode="G 04" location={G_04} strokeColor="stroke-ginza" textAlignment={TextAlignment.NW} />
            <Stop stationCode="Z 03" location={Z_03} strokeColor="stroke-hanzomon" hideText />
        </g>
    );
};
