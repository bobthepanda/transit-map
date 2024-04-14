import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NE, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_05 } from './Ueno';

export const TABATA_SCALE = OFFSET * 5;
export const JY_06 = offset(JY_05, scaleToUnitX(NE, MAJOR_LINE * 0.5), scaleToUnitX(N, TABATA_SCALE - MAJOR_LINE * 0.5));
export const JK_31 = offset(JY_06, scaleToUnitX(E, OFFSET));
export const Uguisuidani = () => {
    return (
        <g id="uguisuidani">
            <Stop stationCode="JY 06" location={JY_06} strokeColor="stroke-yamanote" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JK 31" location={JK_31} strokeColor="stroke-keihin-tohoku" hideText />
        </g>
    );
};
