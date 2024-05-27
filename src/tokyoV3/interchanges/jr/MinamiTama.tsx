import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NE, S, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { NAMBU_SLOPE } from './Bubaigawara';
import { JN_20 } from './Fuchuhommachi';

export const JN_19 = offset(JN_20, NAMBU_SLOPE); // Seibu Tamagawa

export const SW_06 = offset(JN_19, scaleToUnitX(NE, OFFSET * 3.5), scaleToUnitX(N, OFFSET));
const SW_05 = offset(SW_06, scaleToUnitX(S, MAJOR_LINE * 0.5));
export const SW_04 = offset(SW_05, scaleToUnitX(S, MAJOR_LINE * 0.5 + OFFSET * 0.5), scaleToUnitX(E, MAJOR_LINE));
export const SW_03 = offset(SW_04, scaleToUnitX(E, OFFSET * 2), scaleToUnitX(NE, MAJOR_LINE * 1.75));
const SW_02 = offset(SW_03, scaleToUnitX(NE, MAJOR_LINE * 1.75));
export const MinamiTama = () => {
    return (
        <>
            <Stop stationCode="JN 19" location={JN_19} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="SW 06" location={SW_06} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="SW 05" location={SW_05} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="SW 04" location={SW_04} textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="SW 03" location={SW_03} textAlignment={TextAlignment.SE} />
            <Stop stationCode="SW 02" location={SW_02} textAlignment={TextAlignment.SE} />
        </>
    );
};
