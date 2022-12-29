import { CHUO_TOKYO, OFFSET, YAMANOTE_SHIMBASHI } from '../../utils/CommonCoordinates';
import StopFromTokyo from '../StopsFromTokyo';

const TOKYO = { x: CHUO_TOKYO.x + OFFSET * 3, y: CHUO_TOKYO.y + OFFSET * 0.5 };
const SHIMBASHI = {
    ...YAMANOTE_SHIMBASHI,
    x: YAMANOTE_SHIMBASHI.x + OFFSET * 2,
};

const Tokaido = () => {
    return (
        <g id="tokaido">
            <StopFromTokyo location={TOKYO} stationCode="JT 01" />
            <StopFromTokyo location={SHIMBASHI} stationCode="JT 02" />
        </g>
    );
};

export default Tokaido;
