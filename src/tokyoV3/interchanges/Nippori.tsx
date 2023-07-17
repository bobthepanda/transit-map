import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NW, SW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_31 } from './Ueno';

export const JK_32 = offset(JK_31, scaleToUnitX(NW, MAJOR_LINE * 1.5));
export const JY_07 = offset(JK_32, scale(SW, OFFSET));

const Nippori = () => {
    return (
        <g id="nippori">
            <Stop stationCode="JK 32" location={JK_32} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="JY 07" location={JY_07} strokeColor="stroke-yamanote" />
        </g>
    );
};

export default Nippori;
