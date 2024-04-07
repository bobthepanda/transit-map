import { Coordinates } from '../../../interfaces/Dimensions';
import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, NW, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { G_06 } from './TameikeSanno';

export const G_05: Coordinates = offset(G_06, scaleToUnitX(NW, MAJOR_LINE));
export const M_13: Coordinates = offset(G_05, scale(NE, OFFSET));
export const N_07: Coordinates = offset(G_05, scaleToUnitX(NE, MAJOR_LINE * 0.5));
export const Z_04: Coordinates = offset(N_07, scale(N, OFFSET));
export const Y_16: Coordinates = offset(Z_04, scaleToUnitX(N, OFFSET));
export const AsakasaMitsukae = () => {
    return (
        <g id="asakasa-mitsukae">
            <Stop stationCode="G 05" location={G_05} strokeColor="stroke-ginza" textAlignment={TextAlignment.SW} />
            <Stop stationCode="M 13" location={M_13} strokeColor="stroke-marunouchi" hideText />
            <Stop stationCode="N 07" location={N_07} strokeColor="stroke-namboku" hideText />
            <Stop stationCode="Z 04" location={Z_04} strokeColor="stroke-hanzomon" hideText />
            <Stop stationCode="Y 16" location={Y_16} strokeColor="stroke-yurakucho" textAlignment={TextAlignment.UP} />
        </g>
    );
};
