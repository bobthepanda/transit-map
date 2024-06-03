import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { offset, scale } from '../../../utils/PathUtils';
import { MG_11, MUSASHI_KOSUGI_TOKYU_SPACING_EAST, TY_11 } from './MusashiKosugi';

export const DenEnChofu = () => {
    return (
        <g id="shin-maruko">
            <Stop
                stationCode="TY 08"
                location={offset(TY_11, scale(MUSASHI_KOSUGI_TOKYU_SPACING_EAST, 3))}
                textAlignment={TextAlignment.NW}
            />
            <Stop stationCode="MG 08" location={offset(MG_11, scale(MUSASHI_KOSUGI_TOKYU_SPACING_EAST, 3))} hideText />
        </g>
    );
};
