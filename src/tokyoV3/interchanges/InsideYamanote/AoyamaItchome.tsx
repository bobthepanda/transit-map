import { Coordinates } from '../../../interfaces/Dimensions';
import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, S, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { Z_04 } from './AsakasaMitsukae';

export const Z_03: Coordinates = offset(Z_04, scale(W, MAJOR_LINE * 3 - OFFSET * 2));
export const G_04: Coordinates = offset(Z_03, scaleToUnitX(S, OFFSET));
export const E_24: Coordinates = offset(Z_03, scaleToUnitX(N, OFFSET), scaleToUnitX(W, OFFSET * 0.5));
export const AoyamaItchome = () => {
    return (
        <g id="aoyama-itchome">
            <Stop stationCode="G 04" location={G_04} strokeColor="stroke-ginza" hideText />
            <Stop stationCode="Z 03" location={Z_03} strokeColor="stroke-hanzomon" hideText />
            <Stop stationCode="E 24" location={E_24} strokeColor="stroke-oedo" />
        </g>
    );
};
