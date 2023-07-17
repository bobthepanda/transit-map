import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, SW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_29 } from './Okachimachi';

export const JK_30 = offset(JK_29, { dy: -MAJOR_LINE });
const HORIZONTAL_OFFSET = scaleToUnitX(E, OFFSET);
export const JY_05 = offset(JK_30, scale(HORIZONTAL_OFFSET, -1));
export const JU_02 = offset(JK_30, HORIZONTAL_OFFSET);
export const JJ_01 = offset(JU_02, HORIZONTAL_OFFSET);

const Ueno = () => {
    return (
        <g id="ueno">
            <Stop stationCode="JK 30" location={JK_30} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="JY 05" location={JY_05} strokeColor="stroke-yamanote" />
            <Stop stationCode="JU 02" location={JU_02} strokeColor="stroke-tokaido" />
            <Stop stationCode="JJ 01" location={JJ_01} strokeColor="stroke-joban-rapid" />
        </g>
    );
};

export const JK_31 = offset(JK_30, { dy: -MAJOR_LINE, dx: -MAJOR_LINE * 0.5 });
export const JY_06 = offset(JK_31, scale(SW, OFFSET));
const Uguisudani = () => {
    return (
        <g id="uguisudani">
            <Stop stationCode="JK 31" location={JK_31} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="JY 06" location={JY_06} strokeColor="stroke-yamanote" />
        </g>
    );
};

const UenoGroup = () => {
    return (
        <>
            <Ueno />
            <Uguisudani />
        </>
    );
};

export default UenoGroup;
