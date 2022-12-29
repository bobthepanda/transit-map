import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { OTEMACHI, OFFSET, NIHOMBASHI } from '../../utils/CommonCoordinates';
import { startAtLocation, horizontalToLocation } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const TOZAI_OTEMACHI = {
    x: OTEMACHI.x + MAJOR_LINE * 0.5 + MINOR_LINE,
    y: NIHOMBASHI.y + OFFSET,
};
const TOZAI_NIHOMBASHI = {
    x: NIHOMBASHI.x + MAJOR_LINE * 0.5,
    y: TOZAI_OTEMACHI.y,
};
const TOZAI_KAYABACHO = {
    ...TOZAI_NIHOMBASHI,
    x: TOZAI_NIHOMBASHI.x + MAJOR_LINE * 1.5 + OFFSET * 0.5,
};

const Tozai = () => {
    return (
        <g id="tozai">
            <path
                d={`
                ${startAtLocation(TOZAI_OTEMACHI)}
                ${horizontalToLocation(TOZAI_KAYABACHO)}
            `}
            />
            <StopFromTokyo location={TOZAI_NIHOMBASHI} stationCode="T 10" />
            <StopFromTokyo location={TOZAI_OTEMACHI} stationCode="T 09" />
            <StopFromTokyo location={TOZAI_KAYABACHO} stationCode="T 11" />
        </g>
    );
};

export default Tozai;
