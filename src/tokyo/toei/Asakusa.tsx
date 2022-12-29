import { MAJOR_LINE } from '../../map/GridLines';
import { ASAKUSA_NIHOMBASHI, HIBIYA_GINZA, MITA_HIBIYA, NIHOMBASHI, OFFSET, YAMANOTE_SHIMBASHI } from '../../utils/CommonCoordinates';
import { curveTo, SOUTH, start, WEST } from '../../utils/PathUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { TOKYO_RADIUS } from '../tokyo-metro/Marunouchi';

const SHIMBASHI = { x: YAMANOTE_SHIMBASHI.x + OFFSET * 1.5, y: YAMANOTE_SHIMBASHI.y + OFFSET * 2 };
const GINZA = { x: HIBIYA_GINZA.x + OFFSET * 0.5 + MAJOR_LINE, y: MITA_HIBIYA.y };
const SHIMBASHI_RADIUS = TOKYO_RADIUS + OFFSET * 2;
const Asakusa = () => {
  return (
    <g id="asakusa">
      <path
        d={`
                ${start(ASAKUSA_NIHOMBASHI)}
                ${curveTo({
                  control: { x: ASAKUSA_NIHOMBASHI.x, y: SHIMBASHI.y },
                  end: SHIMBASHI,
                  radius: SHIMBASHI_RADIUS,
                  firstDirection: SOUTH,
                  secondDirection: WEST,
                })}
            `}
      />
      <StopFromTokyo location={SHIMBASHI} stationCode="A 10" />
      <StopFromTokyo location={{ ...ASAKUSA_NIHOMBASHI, y: NIHOMBASHI.y + OFFSET * 4 }} stationCode="A 12" />
      <StopFromTokyo location={GINZA} stationCode="A 11" />
      <StopFromTokyo location={ASAKUSA_NIHOMBASHI} stationCode="A 13" />
    </g>
  );
};

export default Asakusa;
