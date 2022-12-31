import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { CHIYODA_OTEMACHI, HIBIYA_KASUMIGASEKI, OFFSET, HIBIYA } from '../../utils/CommonCoordinates';
import { curveFrom, E, N, startAtLocation } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const KASUMIGASEKI = {
    x: HIBIYA_KASUMIGASEKI.x - OFFSET,
    y: HIBIYA_KASUMIGASEKI.y + OFFSET * 0.5,
};
const THIS_HIBIYA = { x: HIBIYA.x + OFFSET * 0.5, y: HIBIYA.y - OFFSET };
const YUSHIMA = { ...CHIYODA_OTEMACHI, y: CHIYODA_OTEMACHI.y - MAJOR_LINE * 3.5 };

export const ChiyodaPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(KASUMIGASEKI)}
        ${curveFrom({ start: KASUMIGASEKI, end: YUSHIMA, firstDirection: E, secondDirection: N })}
    `}
        />
    );
};

const Chiyoda = () => {
    return (
        <g className="chiyoda">
            <ChiyodaPath />
            <StopFromTokyo stationCode="C 13" location={YUSHIMA} textAlignment={TextAlignment.LEFT} />
            <StopFromTokyo
                stationCode="C 12"
                location={{ ...CHIYODA_OTEMACHI, y: CHIYODA_OTEMACHI.y - MAJOR_LINE }}
                textAlignment={TextAlignment.LEFT}
            />
            <StopFromTokyo stationCode="C 11" location={CHIYODA_OTEMACHI} />
            <StopFromTokyo
                stationCode="C 10"
                location={{ ...CHIYODA_OTEMACHI, y: CHIYODA_OTEMACHI.y + MAJOR_LINE + OFFSET }}
                textAlignment={TextAlignment.LEFT}
            />
            <StopFromTokyo stationCode="C 09" location={THIS_HIBIYA} textAlignment={TextAlignment.LEFT} />
            <StopFromTokyo location={KASUMIGASEKI} stationCode="C 08" />
        </g>
    );
};

export default Chiyoda;
