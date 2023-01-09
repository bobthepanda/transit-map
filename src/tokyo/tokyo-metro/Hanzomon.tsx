import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import {
    OTEMACHI,
    OFFSET,
    NIHOMBASHI,
    GINZA_MITSUKOSHIMAE,
    ASAKUSA_NINGYOCHO,
    OEDO_MONZEN_NAKACHO,
    SOBU_KINSCHICHO,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, ENE, midPoint, N, offset, startAtLocation, WNW } from '../../utils/PathUtils';
import { CS_KAMEIDO } from '../jr-east/ChuoSobu';
import StopFromTokyo from '../StopsFromTokyo';
import { S_13 } from '../toei/Shinjuku';

const TOZAI_OTEMACHI = {
    x: OTEMACHI.x + MAJOR_LINE * 0.5 + MINOR_LINE,
    y: NIHOMBASHI.y - OFFSET,
};
const MITSUKOSHIMAE = { ...GINZA_MITSUKOSHIMAE, y: GINZA_MITSUKOSHIMAE.y - OFFSET };
const NINGYOCHO = { x: ASAKUSA_NINGYOCHO.x + OFFSET, y: MITSUKOSHIMAE.y };
const MIDPOINT = midPoint(TOZAI_OTEMACHI, MITSUKOSHIMAE);
const Z_11 = { ...NINGYOCHO, x: OEDO_MONZEN_NAKACHO.x + OFFSET * 0.5 };
const Z_12 = offset(S_13, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const Z_13 = offset(SOBU_KINSCHICHO, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const Z_14 = { x: Z_13.x - MAJOR_LINE * 0.5 - OFFSET, y: CS_KAMEIDO.y - OFFSET * 2 };

const Hanzomon = () => {
    return (
        <g className="hanzomon">
            <path
                d={`
                ${startAtLocation(TOZAI_OTEMACHI)}
                ${curveFrom({ start: TOZAI_OTEMACHI, end: MIDPOINT, firstDirection: E, secondDirection: ENE })}
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
            <StopFromTokyo stationCode="Z 08" location={TOZAI_OTEMACHI} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="Z 09" location={MITSUKOSHIMAE} />
            <StopFromTokyo stationCode="Z 10" location={NINGYOCHO} textAlignment={TextAlignment.DOWN} />
            <StopFromTokyo stationCode="Z 11" location={Z_11} />
            <StopFromTokyo stationCode="Z 12" location={Z_12} />
            <StopFromTokyo stationCode="Z 13" location={Z_13} />
            <StopFromTokyo stationCode="Z 14" location={Z_14} />
        </g>
    );
};

export default Hanzomon;
