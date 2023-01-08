import { CHUO_TOKYO, OFFSET, YAMANOTE_SHIMBASHI, YAMANOTE_UENO } from '../../utils/CommonCoordinates';
import { lineToLocation, offset, startAtLocation } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const TOKYO = { x: CHUO_TOKYO.x + OFFSET * 3, y: CHUO_TOKYO.y + OFFSET * 0.5 };
const SHIMBASHI = {
    ...YAMANOTE_SHIMBASHI,
    x: YAMANOTE_SHIMBASHI.x + OFFSET * 2,
};
const UENO = offset(YAMANOTE_UENO, { dx: OFFSET * 2 });

const TokaidoPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(SHIMBASHI)}
        ${lineToLocation(UENO)}
        `}
        />
    );
};

const Tokaido = () => {
    return (
        <g className="tokaido">
            <TokaidoPath />
            <StopFromTokyo location={UENO} stationCode="JU 02" />
            <StopFromTokyo location={offset(TOKYO, { dy: -OFFSET })} stationCode="JU 01" />
            <StopFromTokyo location={TOKYO} stationCode="JT 01" />
            <StopFromTokyo location={SHIMBASHI} stationCode="JT 02" />
        </g>
    );
};

export default Tokaido;
