import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, S, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { S_05 } from './Kudanshita';

export const S_06 = offset(S_05, scaleToUnitX(E, MAJOR_LINE * 2));
export const Z_07 = offset(S_06, scaleToUnitX(S, OFFSET));
export const I_10 = offset(S_06, scaleToUnitX(N, OFFSET), scaleToUnitX(W, OFFSET * 0.5));
export const Jimbocho = () => {
    return (
        <g id="jimbocho">
            <Stop stationCode="I 10" location={I_10} strokeColor="stroke-mita" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="S 06" location={S_06} strokeColor="stroke-shinjuku" hideText />
            <Stop stationCode="Z 07" location={Z_07} strokeColor="stroke-hanzomon" hideText />
        </g>
    );
};
