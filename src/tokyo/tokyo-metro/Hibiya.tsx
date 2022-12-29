import { MAJOR_LINE } from '../../map/GridLines';
import { HIBIYA, HIBIYA_GINZA, HIBIYA_KAYABACHO, OFFSET, YAMANOTE_TOKYO, YAMANOTE_YURAKUCHO } from '../../utils/CommonCoordinates';
import { curveFrom, SOUTH, startAtLocation, WEST } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { TOKYO_RADIUS } from './Marunouchi';

const HIBIYA_YURAKUCHO = { x: HIBIYA_KAYABACHO.x, y: YAMANOTE_YURAKUCHO.y };

const Hibiya = () => {
    return (
        <g id="hibiya">
            <path
                d={`
                ${startAtLocation(HIBIYA_KAYABACHO)}
                ${curveFrom({
                    start: HIBIYA_YURAKUCHO,
                    end: HIBIYA,
                    radius: TOKYO_RADIUS,
                    firstDirection: SOUTH,
                    secondDirection: WEST,
                })}
            `}
            />
            <StopFromTokyo location={HIBIYA} stationCode="H 08" />
            <StopFromTokyo location={HIBIYA_GINZA} stationCode="H 09" />
            <StopFromTokyo location={{ ...HIBIYA_GINZA, x: HIBIYA_GINZA.x + MAJOR_LINE + OFFSET }} stationCode="H 10" />
            <StopFromTokyo location={{ ...HIBIYA_KAYABACHO, y: YAMANOTE_YURAKUCHO.y }} stationCode="H 11" />
            <StopFromTokyo location={{ ...HIBIYA_KAYABACHO, y: YAMANOTE_TOKYO.y + OFFSET }} stationCode="H 12" />
            <StopFromTokyo location={HIBIYA_KAYABACHO} stationCode="H 13" />
        </g>
    );
};

export default Hibiya;
