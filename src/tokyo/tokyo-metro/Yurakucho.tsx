import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { NIHOMBASHI, OFFSET, YAMANOTE_YURAKUCHO } from '../../utils/CommonCoordinates';
import { horizontalToLocation, startAtLocation } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const THIS_YURAKUCHO = {
    x: YAMANOTE_YURAKUCHO.x + OFFSET * 0.5,
    y: YAMANOTE_YURAKUCHO.y + OFFSET,
};
const GINZA = { ...THIS_YURAKUCHO, x: NIHOMBASHI.x + MAJOR_LINE * 0.5 };
const TSUKIJI = {
    y: THIS_YURAKUCHO.y,
    x: NIHOMBASHI.x + MAJOR_LINE * 2 + OFFSET * 0.5,
};

const Yurakucho = () => {
    return (
        <g className="yurakucho">
            <path
                d={`
                ${startAtLocation(THIS_YURAKUCHO)}
                ${horizontalToLocation(TSUKIJI)}
            `}
            />
            <StopFromTokyo location={THIS_YURAKUCHO} stationCode="Y 18" />
            <StopFromTokyo location={GINZA} stationCode="Y 19" textAlignment={TextAlignment.UP} />
            <StopFromTokyo location={TSUKIJI} stationCode="Y 20" textAlignment={TextAlignment.DOWN} />
        </g>
    );
};

export default Yurakucho;
