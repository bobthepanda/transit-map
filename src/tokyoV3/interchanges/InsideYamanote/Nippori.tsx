import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_06, TABATA_SCALE } from './Uguisuidani';

export const JY_07 = offset(JY_06, scaleToUnitX(N, TABATA_SCALE));
export const JK_32 = offset(JY_07, scaleToUnitX(E, OFFSET));
export const Nippori = () => {
    return (
        <g id="nippori">
            <Stop stationCode="JY 07" location={JY_07} strokeColor="stroke-yamanote" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JK 32" location={JK_32} strokeColor="stroke-keihin-tohoku" hideText />
        </g>
    );
};
