import StopFromTokyo from '../StopsFromTokyo';
import { CHUO_TOKYO, OFFSET, YAMANOTE_KANDA, CHUO_OCHANOMIZU } from '../../utils/CommonCoordinates';
import { curveFrom, N, offset, S, startAtLocation, W } from '../../utils/PathUtils';
import { JB_14 } from './ChuoSobu';

const JC_04 = offset(JB_14, { dx: OFFSET });

export const ChuoRapidPath = () => {
    return (
        <path
            d={`
                ${startAtLocation(CHUO_TOKYO)}
                ${curveFrom({
                    start: CHUO_TOKYO,
                    end: CHUO_OCHANOMIZU,
                    firstDirection: N,
                    secondDirection: W,
                    radius: OFFSET * 4,
                })}
                ${curveFrom({ start: CHUO_OCHANOMIZU, end: JC_04, firstDirection: W, secondDirection: S })}
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
        </g>
    );
};

export default ChuoRapid;
