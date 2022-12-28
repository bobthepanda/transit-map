import { StopFromTokyo } from '../StopsFromTokyo';
import { CHUO_TOKYO, OFFSET, OTEMACHI, YAMANOTE_SHIMBASHI } from '../../utils/CommonCoordinates';
import { MAJOR_LINE } from '../../map/GridLines';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 4 };
const SHIMBASHI = { ...YAMANOTE_SHIMBASHI, x: YAMANOTE_SHIMBASHI.x + OFFSET * 3 };

const SobuRapid = () => {
    return (
        <g id="sobu-rapid">
            <StopFromTokyo
                location={TOKYO}
                stationCode="JO 19"
                />
            <StopFromTokyo
                location={SHIMBASHI}
                stationCode="JO 18"
            />
        </g>
    )
}

export default SobuRapid;