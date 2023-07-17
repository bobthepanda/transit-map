import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NW, SW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_32 } from './Nippori';

export const JK_33 = offset(JK_32, scaleToUnitX(NW, MAJOR_LINE * 1.5));
export const JY_08 = offset(JK_33, scale(SW, OFFSET));
export const C_16 = offset(JK_33, scaleToUnitX(SW, OFFSET * 1.5));

const NishiNippori = () => {
    return (
        <g id="nippori">
            <Stop stationCode="JK 33" location={JK_33} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="JY 08" location={JY_08} strokeColor="stroke-yamanote" />
            <Stop stationCode="C 16" location={C_16} strokeColor="stroke-chiyoda" />
        </g>
    );
};

export default NishiNippori;
