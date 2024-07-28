import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, offset, scale } from '../../../utils/PathUtils';
import { CHOFU_EAST_SCALE, KO_18 } from './Chofu';

export const KO_07 = offset(KO_18, scale(CHOFU_EAST_SCALE, 11));
export const SG_10 = offset(KO_07, scale(S, OFFSET));

export const ShimoTokaido = () => {
    return (
        <g id="shimo-tokaido">
            <Stop stationCode="KO 07" location={KO_07} textAlignment={TextAlignment.UP} />
            <Stop stationCode="SG 10" location={SG_10} hideText />
        </g>
    );
};
