import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, S, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { I_11 } from './Suidobashi';

export const I_12 = offset(I_11, scaleToUnitX(N, MAJOR_LINE));
export const E_07 = offset(I_12, scaleToUnitX(E, OFFSET * 0.5), scaleToUnitX(S, OFFSET));
export const M_22 = offset(E_07, scaleToUnitX(S, OFFSET), scaleToUnitX(W, OFFSET * 3));
export const N_11 = offset(M_22, scaleToUnitX(S, OFFSET));
export const Kasuga = () => {
    return (
        <g id="kasuga">
            <Stop stationCode="I 12" location={I_12} strokeColor="stroke-mita" />
            <Stop stationCode="E 07" location={E_07} strokeColor="stroke-oedo" hideText />
            <Stop stationCode="M 22" location={M_22} strokeColor="stroke-marunouchi" hideText />
            <Stop stationCode="N 11" location={N_11} strokeColor="stroke-namboku" textAlignment={TextAlignment.DOWN} />
        </g>
    );
};
