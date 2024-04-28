import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { A_07 } from './TakanawaGateway';

export const I_03 = offset(A_07, scaleToUnitX(N, MAJOR_LINE), scaleToUnitX(W, MAJOR_LINE * 0.5));
export const N_03 = offset(I_03, scaleToUnitX(N, OFFSET));
export const ShirokaneTakanawa = () => {
    return (
        <g id="shirokane-takanawa">
            <Stop stationCode="I 03" location={I_03} strokeColor="stroke-mita" hideText />
            <Stop stationCode="N 03" location={N_03} strokeColor="stroke-namboku" textAlignment={TextAlignment.UP} />
        </g>
    );
};
