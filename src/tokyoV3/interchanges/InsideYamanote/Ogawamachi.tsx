import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, SE, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { S_06 } from './Jimbocho';

export const S_07 = offset(S_06, scaleToUnitX(E, MAJOR_LINE), scaleToUnitX(SE, MAJOR_LINE));
export const C_12 = offset(S_07, scaleToUnitX(W, OFFSET * 2));
export const M_19 = offset(S_07, scaleToUnitX(E, OFFSET * 2));
export const Ogawamachi = () => {
    return (
        <g id="ogawamachi">
            <Stop stationCode="S 07" location={S_07} strokeColor="stroke-shinjuku" textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="C 12" location={C_12} strokeColor="stroke-chiyoda" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="M 19" location={M_19} strokeColor="stroke-marunouchi" />
        </g>
    );
};
