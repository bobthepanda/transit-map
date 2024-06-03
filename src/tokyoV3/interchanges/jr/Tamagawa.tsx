import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { offset, scale } from '../../../utils/PathUtils';
import { MG_11, MUSASHI_KOSUGI_TOKYU_SPACING_EAST, TY_11 } from './MusashiKosugi';

export const Tamagawa = () => {
    return (
        <g id="shin-maruko">
            <Stop
                stationCode="TY 09"
                location={offset(TY_11, scale(MUSASHI_KOSUGI_TOKYU_SPACING_EAST, 2))}
                textAlignment={TextAlignment.NW}
            />
            <Stop stationCode="MG 09" location={offset(MG_11, scale(MUSASHI_KOSUGI_TOKYU_SPACING_EAST, 2))} hideText />
        </g>
    );
};
