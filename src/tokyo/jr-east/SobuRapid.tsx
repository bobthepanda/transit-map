import { ASAKUSA_BAKUROCHO, CHUO_TOKYO, GINZA_MITSUKOSHIMAE, OFFSET, YAMANOTE_SHIMBASHI } from '../../utils/CommonCoordinates';
import { curveFrom, N, ENE, startAtLocation, offset } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 4 };
const SHIMBASHI = {
    ...YAMANOTE_SHIMBASHI,
    x: YAMANOTE_SHIMBASHI.x + OFFSET * 3,
};
const MITSUKOSHIMAE = offset(GINZA_MITSUKOSHIMAE, { dy: OFFSET * -3.75 });
const BAKUROCHO = { ...ASAKUSA_BAKUROCHO, y: ASAKUSA_BAKUROCHO.y - OFFSET, x: ASAKUSA_BAKUROCHO.x - OFFSET * 0.5 };

const SobuRapid = () => {
    return (
        <g id="sobu-rapid">
            <path
                d={`
                ${startAtLocation(SHIMBASHI)}
                ${curveFrom({ start: SHIMBASHI, end: BAKUROCHO, firstDirection: N, secondDirection: ENE })}}
            `}
            />
            <StopFromTokyo location={TOKYO} stationCode="JO 19" />
            <StopFromTokyo location={SHIMBASHI} stationCode="JO 18" />
            <StopFromTokyo location={MITSUKOSHIMAE} stationCode="JO 20" />
            <StopFromTokyo location={BAKUROCHO} stationCode="JO 21" />
        </g>
    );
};

export default SobuRapid;
