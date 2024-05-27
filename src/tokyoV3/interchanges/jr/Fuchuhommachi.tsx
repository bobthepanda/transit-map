import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, midPoint, offset, scale } from '../../../utils/PathUtils';
import { JN_21, NAMBU_SLOPE } from './Bubaigawara';
import { JM_33 } from './NishiKokubunji';

export const JN_20 = offset(JN_21, NAMBU_SLOPE); // Musashino

export const JM_35 = offset(JN_20, scale(E, OFFSET));
export const JM_34 = midPoint(JM_35, JM_33);
export const Fuchuhommachi = () => {
    return (
        <>
            <Stop stationCode="JM 34" location={JM_34} strokeColor="stroke-musashino" />
            <g id="fucuhommachi">
                <Stop stationCode="JN 20" location={JN_20} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="JM 35" location={JM_35} hideText strokeColor="stroke-musashino" />
            </g>
        </>
    );
};
