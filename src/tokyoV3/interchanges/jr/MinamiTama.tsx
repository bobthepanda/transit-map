import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { NAMBU_SLOPE } from './Bubaigawara';
import { JN_20 } from './Fuchuhommachi';

export const JN_19 = offset(JN_20, NAMBU_SLOPE); // Seibu Tamagawa

export const SW_06 = offset(JN_19, scaleToUnitX(NE, OFFSET * 3));
export const MinamiTama = () => {
    return (
        <>
            <Stop stationCode="JN 19" location={JN_19} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="SW 06" location={SW_06} />
        </>
    );
};
