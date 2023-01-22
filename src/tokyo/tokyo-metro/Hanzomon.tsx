import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import {
    OTEMACHI,
    OFFSET,
    GINZA_MITSUKOSHIMAE,
    ASAKUSA_NINGYOCHO,
    OEDO_MONZEN_NAKACHO,
    SOBU_KINSCHICHO,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, ENE, midPoint, N, NNW, offset, S, scale, SSE, startAtLocation, WNW } from '../../utils/PathUtils';
import { CS_KAMEIDO } from '../jr-east/ChuoSobu';
import StopFromTokyo from '../StopsFromTokyo';
import { I_10 } from '../toei/Mita';
import { S_05, S_13 } from '../toei/Shinjuku';
import { G_04 } from './Ginza';
import { Y_16 } from './Yurakucho';

const Z_08 = {
    x: OTEMACHI.x + MAJOR_LINE * 0.5 + MINOR_LINE,
    y: OTEMACHI.y - OFFSET,
};
const MITSUKOSHIMAE = { ...GINZA_MITSUKOSHIMAE, y: GINZA_MITSUKOSHIMAE.y - OFFSET };
const NINGYOCHO = { x: ASAKUSA_NINGYOCHO.x + OFFSET, y: MITSUKOSHIMAE.y };
const MIDPOINT = midPoint(Z_08, MITSUKOSHIMAE);
const Z_11 = { ...NINGYOCHO, x: OEDO_MONZEN_NAKACHO.x + OFFSET * 0.5 };
const Z_12 = offset(S_13, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const Z_13 = offset(SOBU_KINSCHICHO, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const Z_14 = { x: Z_13.x - MAJOR_LINE * 0.5 - OFFSET, y: CS_KAMEIDO.y - OFFSET * 2 };
const Z_07 = offset(I_10, { dy: -OFFSET });
const OTEMACHI_MIDPOINT = offset(OTEMACHI, { dx: -OFFSET, dy: -MAJOR_LINE });
const Z_06 = offset(S_05, scale(SSE, OFFSET));
const Z_04 = offset(Y_16, { dx: -OFFSET * 0.5, dy: -OFFSET });
const Z_03 = offset(G_04, scale(NNW, OFFSET));

export const HanzomonPath = () => {
    return (
        <path
            d={`
    ${startAtLocation(Z_03)}
    ${curveFrom({ start: Z_03, end: Z_04, firstDirection: ENE, secondDirection: N })}
    ${curveFrom({ start: Z_04, end: Z_06, firstDirection: N, secondDirection: ENE })}
    ${curveFrom({ start: Z_06, end: Z_07, firstDirection: ENE, secondDirection: E })}
    ${curveFrom({ start: Z_07, end: OTEMACHI_MIDPOINT, firstDirection: E, secondDirection: S })}
    ${curveFrom({ start: OTEMACHI_MIDPOINT, end: Z_08, firstDirection: S, secondDirection: E })}
    ${curveFrom({ start: Z_08, end: MIDPOINT, firstDirection: E, secondDirection: ENE })}
    ${curveFrom({ start: MIDPOINT, end: NINGYOCHO, firstDirection: ENE, secondDirection: E })}
    ${curveFrom({
        start: Z_11,
        end: Z_13,
        firstDirection: E,
        secondDirection: N,
        radius: Z_12.x - Z_11.x - OFFSET,
    })}
    ${curveFrom({
        start: Z_13,
        end: Z_14,
        firstDirection: N,
        secondDirection: WNW,
    })}
`}
        />
    );
};
const Hanzomon = () => {
    return (
        <g className="hanzomon">
            <HanzomonPath />
            <StopFromTokyo stationCode="Z 06" location={Z_06} />
            <StopFromTokyo stationCode="Z 07" location={Z_07} />
            <StopFromTokyo stationCode="Z 08" location={Z_08} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="Z 09" location={MITSUKOSHIMAE} />
            <StopFromTokyo stationCode="Z 10" location={NINGYOCHO} textAlignment={TextAlignment.DOWN} />
            <StopFromTokyo stationCode="Z 11" location={Z_11} />
            <StopFromTokyo stationCode="Z 12" location={Z_12} />
            <StopFromTokyo stationCode="Z 13" location={Z_13} />
            <StopFromTokyo stationCode="Z 14" location={Z_14} />
            <StopFromTokyo stationCode="Z 04" location={Z_04} />
            <StopFromTokyo stationCode="Z 03" location={Z_03} />
        </g>
    );
};

export default Hanzomon;
