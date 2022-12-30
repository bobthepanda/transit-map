import { YAMANOTE_AKIHABARA, YAMANOTE_KANDA, YAMANOTE_SHIMBASHI, YAMANOTE_TOKYO, YAMANOTE_YURAKUCHO } from '../../utils/CommonCoordinates';
import StopFromTokyo from '../StopsFromTokyo';

const Yamanote = () => {
    return (
        <g id="yamanote">
            <StopFromTokyo location={YAMANOTE_TOKYO} stationCode="JY 01" />
            <StopFromTokyo location={YAMANOTE_YURAKUCHO} stationCode="JY 30" />
            <StopFromTokyo location={YAMANOTE_SHIMBASHI} stationCode="JY 29" />
            <StopFromTokyo location={YAMANOTE_AKIHABARA} stationCode="JY 03" />
            <StopFromTokyo location={YAMANOTE_KANDA} stationCode="JY 02" />
        </g>
    );
};

export default Yamanote;
