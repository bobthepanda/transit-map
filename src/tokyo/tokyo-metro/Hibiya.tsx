import { MAJOR_LINE } from '../../map/GridLines';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import { HIBIYA, HIBIYA_GINZA, HIBIYA_KAYABACHO, OFFSET, YAMANOTE_YURAKUCHO } from '../../utils/CommonCoordinates';
import { curveTo, SOUTH, start, WEST } from '../../utils/PathUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { TOKYO_RADIUS } from './Marunouchi';

const HIBIYA_YURAKUCHO = { x: HIBIYA_KAYABACHO.x, y: YAMANOTE_YURAKUCHO.y };

const Hibiya = () => {
  return (
    <g id="hibiya">
      <path
        d={`
                ${start(HIBIYA_YURAKUCHO)}
                ${curveTo({
                  control: { x: HIBIYA_YURAKUCHO.x, y: HIBIYA.y },
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
      <LineSegmentWithEndpoint stops={['H 11', 'H 12', 'H 13']} origin={HIBIYA_YURAKUCHO} endpoint={HIBIYA_KAYABACHO} />
    </g>
  );
};

export default Hibiya;
