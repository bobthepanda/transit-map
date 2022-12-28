import { StopFromTokyo } from '../StopsFromTokyo';
import { CHUO_TOKYO, OFFSET, OTEMACHI, YAMANOTE_SHIMBASHI, RAPID_OCHANOMIZU, YAMANOTE_YURAKUCHO } from '../../utils/CommonCoordinates';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 2 };
const YURAKUCHO = { ...TOKYO, y: YAMANOTE_YURAKUCHO.y};
const SHIMBASHI = { ...YAMANOTE_SHIMBASHI, x: YAMANOTE_SHIMBASHI.x + OFFSET };

const KeihinTohoku = () => {
    return (
        <g id="keihin-tohoku">
            <StopFromTokyo
                location={TOKYO}
                stationCode="JK 26"
                />
            <StopFromTokyo
                location={YURAKUCHO}
                stationCode="JK 25"
                />
            <StopFromTokyo
                location={SHIMBASHI}
                stationCode="JK 24"
            />
            <StopFromTokyo
                location={{x : TOKYO.x, y: RAPID_OCHANOMIZU.y}}
                stationCode="JK 28"
            />
            <StopFromTokyo
                location={{x: TOKYO.x, y: OTEMACHI.y - OFFSET * 3}}
                stationCode="JK 27"
            />
        </g>
    )
}

export default KeihinTohoku;