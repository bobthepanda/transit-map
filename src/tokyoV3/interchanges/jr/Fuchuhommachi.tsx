import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, midPoint, offset, scale } from '../../../utils/PathUtils';
import { JN_21 } from './Bubaigawara';
import { NAMBU_KAWASAKI_SLOPE } from './Keihin';
import { NAMBU_SLOPE } from './NAMBU_SLOPE';
import { JM_33 } from './NishiKokubunji';

export const JN_20 = offset(JN_21, scale(NAMBU_SLOPE, 0.5), scale(NAMBU_KAWASAKI_SLOPE, -0.75)); // Musashino

export const JM_35 = offset(JN_20, scale(N, OFFSET));
export const JM_34 = { y: midPoint(JM_35, JM_33).y, x: JM_35.x };
export const Fuchuhommachi = () => {
    return (
        <>
            <Stop stationCode="JM 34" location={JM_34} strokeColor="stroke-musashino" />
            <g id="fucuhommachi">
                <Stop stationCode="JN 20" location={JN_20} strokeColor="stroke-nambu" textAlignment={TextAlignment.SW} />
                <Stop stationCode="JM 35" location={JM_35} hideText strokeColor="stroke-musashino" />
            </g>
        </>
    );
};
