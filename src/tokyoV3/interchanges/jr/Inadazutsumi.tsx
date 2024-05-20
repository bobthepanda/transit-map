import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { NAMBU_SLOPE } from './Bubaigawara';
import { JN_19 } from './MinamiTama';

export const JN_16 = offset(JN_19, scale(NAMBU_SLOPE, 3)); // Sagamihara

export const KO_36 = offset(JN_16, scaleToUnitX(NW, OFFSET * 2));

export const KO_35 = offset(KO_36, scaleToUnitX(NE, OFFSET * 6));
export const Inadazutsumi = () => {
    return (
        <>
            <Stop stationCode="KO 35" location={KO_35} textAlignment={TextAlignment.SE} />
            <g id="inadazutsumi">
                <Stop stationCode="JN 16" location={JN_16} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="KO 36" location={KO_36} textAlignment={TextAlignment.NW} />
            </g>
        </>
    );
};
