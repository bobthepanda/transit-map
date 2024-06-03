import { Coordinates } from '../../../interfaces/Dimensions';
import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { HEIGHT, OFFSET, WIDTH } from '../../../utils/CommonCoordinates';
import { N, SW, W, offset, roundPoint, scale, scaleToUnitX } from '../../../utils/PathUtils';

export const G_06: Coordinates = roundPoint({ x: WIDTH / 2, y: (HEIGHT * 3) / 4 }, MAJOR_LINE);
export const C_07: Coordinates = offset(G_06, scale(N, MAJOR_LINE * 0.5));
export const N_06: Coordinates = offset(G_06, scale(W, OFFSET));
export const M_14: Coordinates = offset(C_07, scale(N, OFFSET));
export const TameikeSanno = () => {
    return (
        <>
            <Stop
                stationCode="N 05"
                location={offset(N_06, scaleToUnitX(SW, OFFSET * 3.5))}
                strokeColor="stroke-namboku"
                textAlignment={TextAlignment.NW}
            />
            <g id="tameike-sanno">
                <Stop stationCode="G 06" location={G_06} strokeColor="stroke-ginza" hideText />
                <Stop stationCode="M 14" location={M_14} strokeColor="stroke-marunouchi" textAlignment={TextAlignment.UP} />
                <Stop stationCode="N 06" location={N_06} strokeColor="stroke-namboku" textAlignment={TextAlignment.NW} />
                <Stop stationCode="C 07" location={C_07} strokeColor="stroke-chiyoda" hideText />
            </g>
        </>
    );
};
