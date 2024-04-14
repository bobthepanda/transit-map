import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, SW, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { E_11 } from './Kuramae';

export const E_10 = offset(E_11, scaleToUnitX(NW, OFFSET * 3));
export const TX_02 = offset(E_10, scale(SW, OFFSET));
export const ShinOkachimachi = () => {
    return (
        <g id="shin-okachimachi">
            <Stop stationCode="TX 02" location={TX_02} hideText />
            <Stop stationCode="E 10" location={E_10} strokeColor="stroke-oedo" textAlignment={TextAlignment.NE} />
        </g>
    );
};
