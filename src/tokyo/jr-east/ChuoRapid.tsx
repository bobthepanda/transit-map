import StopFromTokyo from '../StopsFromTokyo';
import { CHUO_TOKYO, OFFSET, YAMANOTE_KANDA, CHUO_OCHANOMIZU } from '../../utils/CommonCoordinates';
import { curveFrom, N, startAtLocation, W } from '../../utils/PathUtils';

const ChuoRapid = () => {
    return (
        <g id="chuo-rapid">
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
            `}
            />
            <StopFromTokyo location={CHUO_TOKYO} stationCode="JC 01" />
            <StopFromTokyo location={{ x: CHUO_TOKYO.x, y: YAMANOTE_KANDA.y }} stationCode="JC 02" />
            <StopFromTokyo location={CHUO_OCHANOMIZU} stationCode="JC 03" />
        </g>
    );
};

export default ChuoRapid;
