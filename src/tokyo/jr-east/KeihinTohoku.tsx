import StopFromTokyo from '../StopsFromTokyo';
import {
    CHUO_TOKYO,
    OFFSET,
    YAMANOTE_SHIMBASHI,
    YAMANOTE_YURAKUCHO,
    YAMANOTE_AKIHABARA,
    YAMANOTE_KANDA,
    YAMANOTE_UENO,
    YAMANOTE_OKACHIMACHI,
} from '../../utils/CommonCoordinates';
import { JY_06, YAMANOTE_NIPPORI, YAMANOTE_NISHI_NIPPORI } from './Yamanote';
import { NNE, offset, scale } from '../../utils/PathUtils';

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
            <StopFromTokyo location={{ x: TOKYO.x, y: YAMANOTE_UENO.y }} stationCode="JK 30" />
            <StopFromTokyo stationCode="JK 32" location={offset(YAMANOTE_NIPPORI, scale(NNE, OFFSET))} />
            <StopFromTokyo stationCode="JK 29" location={offset(YAMANOTE_OKACHIMACHI, { dx: OFFSET })} />
            <StopFromTokyo stationCode="JK 31" location={offset(JY_06, { dx: OFFSET })} />
            <StopFromTokyo stationCode="JK 33" location={offset(YAMANOTE_NISHI_NIPPORI, scale(NNE, OFFSET))} />
        </g>
    );
};

export default KeihinTohoku;
