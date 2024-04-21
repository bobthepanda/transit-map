import { Coordinates } from '../../../interfaces/Dimensions';
import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { HEIGHT, OFFSET, WIDTH } from '../../../utils/CommonCoordinates';
import { N, W, offset, roundCoordinate, scale } from '../../../utils/PathUtils';

export const G_06: Coordinates = roundCoordinate({ x: WIDTH / 2, y: (HEIGHT * 2) / 3 }, MAJOR_LINE);
export const M_14: Coordinates = offset(G_06, scale(N, MAJOR_LINE * 0.5));
export const N_06: Coordinates = offset(G_06, scale(W, OFFSET));
export const C_07: Coordinates = offset(M_14, scale(N, OFFSET));
export const TameikeSanno = () => {
    return (
        <g id="tameike-sanno">
            <Stop stationCode="G 06" location={G_06} strokeColor="stroke-ginza" hideText />
            <Stop stationCode="M 14" location={M_14} strokeColor="stroke-marunouchi" textAlignment="translate-y-vertical-double" />
            <Stop stationCode="N 06" location={N_06} strokeColor="stroke-namboku" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="C 07" location={C_07} strokeColor="stroke-chiyoda" hideText />
        </g>
    );
};
