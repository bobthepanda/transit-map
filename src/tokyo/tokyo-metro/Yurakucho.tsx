import { MAJOR_LINE, MINOR_LINE } from "../../map/GridLines";
import { TextAlignment } from "../../symbols/BasicStop";
import {
  LineSegmentWithStepChange,
  StopMetadata,
} from "../../symbols/LineSegment";
import {
  NIHOMBASHI,
  OFFSET,
  YAMANOTE_YURAKUCHO,
} from "../../utils/CommonCoordinates";
import {
  start,
  S_TO_W,
  curveTo,
  horizontalToLocation,
} from "../../utils/PathUtils";
import { StopFromTokyo } from "../StopsFromTokyo";

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
    <g id="yurakucho">
      <path
        d={`
                ${start(THIS_YURAKUCHO)}
                ${horizontalToLocation(TSUKIJI)}
            `}
      />
      <StopFromTokyo location={THIS_YURAKUCHO} stationCode="Y 18" />
      <StopFromTokyo
        location={GINZA}
        stationCode="Y 19"
        textAlignment={TextAlignment.UP}
      />
      <StopFromTokyo
        location={TSUKIJI}
        stationCode="Y 20"
        textAlignment={TextAlignment.DOWN}
      />
    </g>
  );
};

export default Yurakucho;