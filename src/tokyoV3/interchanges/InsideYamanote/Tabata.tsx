import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_08 } from './NishiNippori';
import { TABATA_SCALE } from './Uguisuidani';

export const JY_09 = offset(JY_08, scaleToUnitX(NW, TABATA_SCALE));
export const JK_34 = offset(JY_09, scale(NE, OFFSET));
export const Tabata = () => {
    return (
        <g id="tabata">
            <Stop stationCode="JY 09" location={JY_09} strokeColor="stroke-yamanote" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JK 34" location={JK_34} strokeColor="stroke-keihin-tohoku" hideText />
        </g>
    );
};
