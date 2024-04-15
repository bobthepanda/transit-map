import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NW, SW, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { S_03 } from './Shinjuku';

const S_02 = offset(S_03, scaleToUnitX(NW, OFFSET * 4));
export const M_09 = offset(S_02, scale(SW, OFFSET));
export const F_13 = offset(S_02, scale(N, OFFSET));
export const ShinjukuSanchome = () => {
    return (
        <g id="shinjuku-sanchome">
            <Stop stationCode="S 02" location={S_02} strokeColor="stroke-shinjuku" />
            <Stop stationCode="M 09" location={M_09} strokeColor="stroke-marunouchi" hideText />
            <Stop stationCode="F 13" location={F_13} strokeColor="stroke-fukutoshin" hideText />
        </g>
    );
};
