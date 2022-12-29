import { HIBIYA_KAYABACHO, OFFSET, YAMANOTE_TOKYO } from '../../utils/CommonCoordinates';
import StopFromTokyo from '../StopsFromTokyo';

const TOKYO = {
    x: YAMANOTE_TOKYO.x + OFFSET,
    y: YAMANOTE_TOKYO.y + OFFSET * 3,
};
const HATCHOBORI = { ...TOKYO, x: HIBIYA_KAYABACHO.x + OFFSET * 0.5 };

const Keiyo = () => {
    return (
        <g id="keiyo">
            <StopFromTokyo location={TOKYO} stationCode="JE 01" />
            <StopFromTokyo location={HATCHOBORI} stationCode="JE 02" />
        </g>
    );
};

export default Keiyo;
