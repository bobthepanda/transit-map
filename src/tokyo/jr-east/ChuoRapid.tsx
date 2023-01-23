import StopFromTokyo from '../StopsFromTokyo';
import { CHUO_TOKYO, OFFSET, YAMANOTE_KANDA, CHUO_OCHANOMIZU } from '../../utils/CommonCoordinates';
import { curveFrom, N, offset, RADIUS, S, startAtLocation, W } from '../../utils/PathUtils';
import { JB_13, JB_14 } from './ChuoSobu';
import { JY_17 } from './Yamanote';

const JC_04 = offset(JB_14, { dx: OFFSET });
const JB_13_CONTROL = offset(JB_13, { dy: OFFSET });
const JC_05 = offset(JY_17, { dx: -OFFSET * 3 });

export const ChuoRapidPath = () => {
    return (
        <path
            d={`
                ${startAtLocation(CHUO_TOKYO)}
                ${curveFrom({ start: CHUO_TOKYO, end: CHUO_OCHANOMIZU, firstDirection: N, secondDirection: W, radius: OFFSET * 4 })}
                ${curveFrom({ start: CHUO_OCHANOMIZU, end: JC_04, firstDirection: W, secondDirection: S })}
                ${curveFrom({ start: JC_04, end: JB_13_CONTROL, firstDirection: S, secondDirection: W, radius: RADIUS + OFFSET })}
                ${curveFrom({ start: JB_13_CONTROL, end: JC_05, firstDirection: W, secondDirection: N, radius: RADIUS + OFFSET })}
            `}
        />
    );
};

const ChuoRapid = () => {
    return (
        <g className="chuo-rapid">
            <ChuoRapidPath />
            <StopFromTokyo location={CHUO_TOKYO} stationCode="JC 01" />
            <StopFromTokyo location={{ x: CHUO_TOKYO.x, y: YAMANOTE_KANDA.y }} stationCode="JC 02" />
            <StopFromTokyo location={CHUO_OCHANOMIZU} stationCode="JC 03" />
            <StopFromTokyo stationCode="JC 04" location={JC_04} />
            <StopFromTokyo stationCode="JC 05" location={JC_05} />
        </g>
    );
};

export default ChuoRapid;
