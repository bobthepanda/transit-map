import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { KO_18 } from './Chofu';
import { NAMBU_SLOPE } from './NAMBU_SLOPE';
import { JN_14 } from './Noborito';

export const JN_16 = offset(JN_14, scale(NAMBU_SLOPE, -2)); // Sagamihara

export const KO_36 = offset(JN_16, scaleToUnitX(NW, OFFSET * 2));

export const KO_35 = midPoint(KO_36, KO_18);
export const Inadazutsumi = () => {
    return (
        <>
            <Stop stationCode="KO 35" location={KO_35} textAlignment={TextAlignment.SE} />
            <g id="inadazutsumi">
                <Stop stationCode="JN 16" location={JN_16} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="KO 36" location={KO_36} textAlignment={TextAlignment.NW} />
            </g>
            <Stop
                stationCode="JN 17"
                location={offset(JN_16, scale(NAMBU_SLOPE, -1))}
                strokeColor="stroke-nambu"
                textAlignment={TextAlignment.LEFT}
            />
        </>
    );
};
