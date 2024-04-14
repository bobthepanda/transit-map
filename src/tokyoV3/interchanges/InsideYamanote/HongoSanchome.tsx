import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, S, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { E_07 } from './Kasuga';

export const E_08 = offset(E_07, scaleToUnitX(E, MAJOR_LINE * 2));
export const M_21 = offset(E_08, scaleToUnitX(S, OFFSET));
export const HongoSanchome = () => {
    return (
        <g id="hongo-sanchome">
            <Stop stationCode="E 08" location={E_08} strokeColor="stroke-oedo" textAlignment={TextAlignment.UP} />
            <Stop stationCode="M 21" location={M_21} strokeColor="stroke-marunouchi" hideText />
        </g>
    );
};
