import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, S, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { I_10 } from './Jimbocho';

export const I_11 = offset(I_10, scaleToUnitX(N, MAJOR_LINE * 1.5));
export const JB_17 = offset(I_11, scaleToUnitX(S, OFFSET), scaleToUnitX(W, OFFSET * 0.5));
export const Suidobashi = () => {
    return (
        <g id="ogawamachi">
            <Stop stationCode="JB 17" location={JB_17} strokeColor="stroke-chuo-sobu" hideText />
            <Stop stationCode="I 11" location={I_11} strokeColor="stroke-mita" />
        </g>
    );
};
