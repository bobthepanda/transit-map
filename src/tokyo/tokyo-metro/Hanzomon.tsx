import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { OTEMACHI, OFFSET, NIHOMBASHI, GINZA_MITSUKOSHIMAE, ASAKUSA_NINGYOCHO } from '../../utils/CommonCoordinates';
import { curveFrom, E, ENE, midPoint, startAtLocation } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const TOZAI_OTEMACHI = {
    x: OTEMACHI.x + MAJOR_LINE * 0.5 + MINOR_LINE,
    y: NIHOMBASHI.y - OFFSET,
};
const MITSUKOSHIMAE = { ...GINZA_MITSUKOSHIMAE, y: GINZA_MITSUKOSHIMAE.y - OFFSET };
const NIGYOCHO = { x: ASAKUSA_NINGYOCHO.x + OFFSET, y: MITSUKOSHIMAE.y };
const MIDPOINT = midPoint(TOZAI_OTEMACHI, MITSUKOSHIMAE);

const Hanzomon = () => {
    return (
        <g id="hanzomon">
            <path
                d={`
                ${startAtLocation(TOZAI_OTEMACHI)}
                ${curveFrom({ start: TOZAI_OTEMACHI, end: MIDPOINT, firstDirection: E, secondDirection: ENE })}
                ${curveFrom({ start: MIDPOINT, end: NIGYOCHO, firstDirection: ENE, secondDirection: E })}
            `}
            />
            <StopFromTokyo stationCode="Z 08" location={TOZAI_OTEMACHI} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="Z 09" location={MITSUKOSHIMAE} />
            <StopFromTokyo stationCode="Z 10" location={NIGYOCHO} textAlignment={TextAlignment.DOWN} />
        </g>
    );
};

export default Hanzomon;
