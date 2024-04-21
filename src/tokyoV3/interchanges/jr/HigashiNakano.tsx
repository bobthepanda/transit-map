import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { CHUO_OFFSET, JB_09 } from './Okubo';

export const JB_08 = offset(JB_09, CHUO_OFFSET);
export const E_31 = offset(JB_08, scaleToUnitX(E, OFFSET));
export const HigashiNakano = () => {
    return (
        <g id="higashi-nakano">
            <Stop stationCode="JB 08" location={JB_08} textAlignment={TextAlignment.NE} strokeColor="stroke-chuo-sobu" />
            <Stop stationCode="E 31" location={E_31} hideText strokeColor="stroke-oedo" />
        </g>
    );
};
