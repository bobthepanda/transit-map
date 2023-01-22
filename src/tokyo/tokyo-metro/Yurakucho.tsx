import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { NIHOMBASHI, OEDO_MONZEN_NAKACHO, OFFSET, YAMANOTE_YURAKUCHO } from '../../utils/CommonCoordinates';
import { curveFrom, E, horizontalToLocation, offset, S, ESE, startAtLocation } from '../../utils/PathUtils';
import { JB_15, JB_16 } from '../jr-east/ChuoSobu';
import StopFromTokyo from '../StopsFromTokyo';
import { E_07 } from '../toei/Oedo';

const THIS_YURAKUCHO = {
    x: YAMANOTE_YURAKUCHO.x + OFFSET * 0.5,
    y: YAMANOTE_YURAKUCHO.y + OFFSET,
};
const GINZA = { ...THIS_YURAKUCHO, x: NIHOMBASHI.x + MAJOR_LINE * 0.5 };
const TSUKIJI = {
    y: THIS_YURAKUCHO.y,
    x: NIHOMBASHI.x + MAJOR_LINE * 2 + OFFSET * 0.5,
};
const TSUKISHIMA = { ...THIS_YURAKUCHO, x: OEDO_MONZEN_NAKACHO.x + OFFSET * 0.5 };
export const Y_16 = { y: THIS_YURAKUCHO.y, x: E_07.x - OFFSET * 0.5 };
const Y_14 = offset(JB_15, { dx: -OFFSET * 2 });
const Y_13 = offset(JB_16, { dx: -OFFSET * 2 });
const Y_15 = offset(Y_16, { dx: -MAJOR_LINE * 2, dy: -MAJOR_LINE + OFFSET * 2 });
const FIRST_STOP = Y_13;

export const YurakuchoPath = () => {
    return (
        <path
            d={`
                ${startAtLocation(FIRST_STOP)}
                ${curveFrom({ start: FIRST_STOP, end: Y_15, firstDirection: S, secondDirection: ESE })}
                ${curveFrom({ start: Y_15, end: TSUKISHIMA, firstDirection: ESE, secondDirection: E })}
                ${horizontalToLocation(TSUKISHIMA)}
            `}
        />
    );
};

const Yurakucho = () => {
    return (
        <g className="yurakucho">
            <YurakuchoPath />
            <StopFromTokyo stationCode="Y 13" location={Y_13} />
            <StopFromTokyo stationCode="Y 15" location={Y_14} />
            <StopFromTokyo stationCode="Y 16" location={Y_16} />
            <StopFromTokyo location={THIS_YURAKUCHO} stationCode="Y 18" />
            <StopFromTokyo location={GINZA} stationCode="Y 19" textAlignment={TextAlignment.UP} />
            <StopFromTokyo location={TSUKIJI} stationCode="Y 20" textAlignment={TextAlignment.DOWN} />
            <StopFromTokyo stationCode="Y 21" location={TSUKISHIMA} />
        </g>
    );
};

export default Yurakucho;
