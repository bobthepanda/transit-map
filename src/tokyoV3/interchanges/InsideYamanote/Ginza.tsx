import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NW, SE, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { C_09 } from './Hibiya';

export const G_09 = offset(C_09, scaleToUnitX(SE, MAJOR_LINE * 2));
export const M_16 = offset(G_09, scale(NW, OFFSET));
export const H_09 = offset(M_16, scale(N, OFFSET));
export const Ginza = () => {
    return (
        <g id="ginza">
            <Stop stationCode="G 09" location={G_09} strokeColor="stroke-ginza" />
            <Stop stationCode="M 16" location={M_16} strokeColor="stroke-marunouchi" />
            <Stop stationCode="H 09" location={H_09} strokeColor="stroke-hibiya" />
        </g>
    );
};
