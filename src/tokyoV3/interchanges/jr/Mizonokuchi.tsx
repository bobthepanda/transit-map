import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, SE, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { NAMBU_SLOPE } from './Bubaigawara';
import { JN_14 } from './Noborito';

export const JN_10 = offset(JN_14, scale(NAMBU_SLOPE, 4)); // Den-en-toshi/Oimachi\

export const DT_10 = offset(JN_10, scaleToUnitX(NW, OFFSET * 2));
export const OM_16 = offset(DT_10, scale(SE, OFFSET));
export const Mizonokuchi = () => {
    return (
        <g id="mizonokuchi">
            <Stop stationCode="JN 10" location={JN_10} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="DT 10" location={DT_10} hideText />
            <Stop stationCode="OM 16" location={OM_16} hideText />
        </g>
    );
};
