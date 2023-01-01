import {
    CHUO_TOKYO,
    GINZA_MITSUKOSHIMAE,
    OFFSET,
    SOBU_BAKUROCHO,
    SOBU_KINSCHICHO,
    YAMANOTE_SHIMBASHI,
} from '../../utils/CommonCoordinates';
import { curveFrom, N, ENE, startAtLocation, offset, E, RADIUS } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { CS_KAMEIDO, CS_MOTOYAWATA } from './ChuoSobu';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 4 };
const SHIMBASHI = {
    ...YAMANOTE_SHIMBASHI,
    x: YAMANOTE_SHIMBASHI.x + OFFSET * 3,
};
const MITSUKOSHIMAE = offset(GINZA_MITSUKOSHIMAE, { dy: OFFSET * -3.75 });
const KAMEIDO = offset(CS_KAMEIDO, { dx: -OFFSET });
const MOTOYAWATA = offset(CS_MOTOYAWATA, { dy: -OFFSET });

export const SobuRapidPath = () => {
    return (
        <path
            d={`
                ${startAtLocation(SHIMBASHI)}
                ${curveFrom({ start: SHIMBASHI, end: SOBU_KINSCHICHO, firstDirection: N, secondDirection: ENE })}
                ${curveFrom({ start: SOBU_KINSCHICHO, end: KAMEIDO, firstDirection: ENE, secondDirection: N })}
                ${curveFrom({ start: KAMEIDO, end: MOTOYAWATA, firstDirection: N, secondDirection: E, radius: RADIUS + OFFSET })}
        `}
        />
    );
};

const SobuRapid = () => {
    return (
        <g className="sobu-rapid">
            <SobuRapidPath />
            <StopFromTokyo location={TOKYO} stationCode="JO 19" />
            <StopFromTokyo location={SHIMBASHI} stationCode="JO 18" />
            <StopFromTokyo location={MITSUKOSHIMAE} stationCode="JO 20" />
            <StopFromTokyo location={SOBU_BAKUROCHO} stationCode="JO 21" />
            <StopFromTokyo location={SOBU_KINSCHICHO} stationCode="JO 22" />
        </g>
    );
};

export default SobuRapid;
