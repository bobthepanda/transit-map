import StopFromTokyo from '../StopsFromTokyo';
import { CHUO_TOKYO, RAPID_OCHANOMIZU } from '../../utils/CommonCoordinates';

const ChuoRapid = () => {
    return (
        <g id="chuo-rapid">
            <StopFromTokyo location={CHUO_TOKYO} stationCode="JC 01" />
            <StopFromTokyo location={RAPID_OCHANOMIZU} stationCode="JC 03" />
        </g>
    );
};

export default ChuoRapid;
