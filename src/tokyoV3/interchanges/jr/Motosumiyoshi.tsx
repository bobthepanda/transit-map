import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { offset, scale } from '../../../utils/PathUtils';
import { MG_11, TY_11, TY_MUSASHI_KOSUGI_SLOPE } from './MusashiKosugi';

export const Motosumiyoshi = () => {
    return (
        <g id="motosumiyoshi">
            <Stop stationCode="TY 12" location={offset(TY_11, scale(TY_MUSASHI_KOSUGI_SLOPE, 1))} textAlignment={TextAlignment.NW} />
            <Stop stationCode="MG 12" location={offset(MG_11, scale(TY_MUSASHI_KOSUGI_SLOPE, 1))} hideText />
        </g>
    );
};
