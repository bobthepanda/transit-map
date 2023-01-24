import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import {
    CHUO_TOKYO,
    GINZA_MITSUKOSHIMAE,
    OFFSET,
    SOBU_BAKUROCHO,
    SOBU_KINSCHICHO,
    YAMANOTE_SHIMBASHI,
} from '../../utils/CommonCoordinates';
import { E, ENE, N, offset, RADIUS } from '../../utils/PathUtils';
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
        <SVGPath
            color="stroke-sobu-rapid"
            points={[SHIMBASHI, SOBU_KINSCHICHO, KAMEIDO, MOTOYAWATA]}
            directions={[N, ENE, N, E]}
            radii={{ 3: RADIUS + OFFSET }}
        />
    );
};

const SobuRapidStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-musashino" />;
};

const SobuRapid = () => {
    return (
        <g className="sobu-rapid">
            <SobuRapidPath />
            <SobuRapidStop location={TOKYO} stationCode="JO 19" />
            <SobuRapidStop location={SHIMBASHI} stationCode="JO 18" />
            <SobuRapidStop location={MITSUKOSHIMAE} stationCode="JO 20" />
            <SobuRapidStop location={SOBU_BAKUROCHO} stationCode="JO 21" />
            <SobuRapidStop location={SOBU_KINSCHICHO} stationCode="JO 22" />
        </g>
    );
};

export default SobuRapid;
