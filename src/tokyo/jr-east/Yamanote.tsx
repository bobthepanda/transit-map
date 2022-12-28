import { StopFromTokyo } from '../StopsFromTokyo';
import {
  CHUO_TOKYO,
  OFFSET,
  OTEMACHI,
  RAPID_OCHANOMIZU,
  YAMANOTE_SHIMBASHI,
  YAMANOTE_TOKYO,
  YAMANOTE_YURAKUCHO,
} from '../../utils/CommonCoordinates';
import { MAJOR_LINE } from '../../map/GridLines';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET };

const Yamanote = () => {
  return (
    <g id="yamanote">
      <StopFromTokyo location={YAMANOTE_TOKYO} stationCode="JY 01" />
      <StopFromTokyo location={YAMANOTE_YURAKUCHO} stationCode="JY 01" />
      <StopFromTokyo location={YAMANOTE_SHIMBASHI} stationCode="JY 01" />
      <StopFromTokyo location={{ x: YAMANOTE_TOKYO.x, y: RAPID_OCHANOMIZU.y }} stationCode="JY 03" />
      <StopFromTokyo location={{ x: YAMANOTE_TOKYO.x, y: OTEMACHI.y - OFFSET * 3 }} stationCode="JY 02" />
    </g>
  );
};

export default Yamanote;
