import StopFromTokyo from '../StopsFromTokyo';
import {
    CHUO_TOKYO,
    OFFSET,
    YAMANOTE_SHIMBASHI,
    YAMANOTE_YURAKUCHO,
    YAMANOTE_AKIHABARA,
    YAMANOTE_KANDA,
} from '../../utils/CommonCoordinates';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 2 };
const YURAKUCHO = { ...TOKYO, y: YAMANOTE_YURAKUCHO.y };
const SHIMBASHI = { ...YAMANOTE_SHIMBASHI, x: YAMANOTE_SHIMBASHI.x + OFFSET };

const KeihinTohoku = () => {
    return (
        <g className="keihin-tohoku">
            <StopFromTokyo location={TOKYO} stationCode="JK 26" />
            <StopFromTokyo location={YURAKUCHO} stationCode="JK 25" />
            <StopFromTokyo location={SHIMBASHI} stationCode="JK 24" />
            <StopFromTokyo location={{ x: TOKYO.x, y: YAMANOTE_AKIHABARA.y }} stationCode="JK 28" />
            <StopFromTokyo location={{ x: TOKYO.x, y: YAMANOTE_KANDA.y }} stationCode="JK 27" />
        </g>
    );
};

export default KeihinTohoku;
