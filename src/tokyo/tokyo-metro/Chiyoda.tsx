import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import {
    CHIYODA_OTEMACHI,
    HIBIYA_KASUMIGASEKI,
    OFFSET,
    HIBIYA,
    CHIYODA_NISHI_NIPPORI,
    CHIYODA_YUSHIMA,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, N, startAtLocation, offset, midPoint } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { HIBIYA_KITA_SENJU } from './Hibiya';

const KASUMIGASEKI = {
    x: HIBIYA_KASUMIGASEKI.x - OFFSET,
    y: HIBIYA_KASUMIGASEKI.y + OFFSET * 0.5,
};
const THIS_HIBIYA = { x: HIBIYA.x + OFFSET * 0.5, y: HIBIYA.y - OFFSET };
const KITA_SENJU = offset(HIBIYA_KITA_SENJU, { dx: -OFFSET * 2 });
export const CHIYODA_MICHIYA = { x: midPoint(CHIYODA_NISHI_NIPPORI, KITA_SENJU).x, y: KITA_SENJU.y + MAJOR_LINE * 0.5 };

export const ChiyodaPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(KASUMIGASEKI)}
        ${curveFrom({ start: KASUMIGASEKI, end: CHIYODA_YUSHIMA, firstDirection: E, secondDirection: N })}
        ${curveFrom({ start: CHIYODA_NISHI_NIPPORI, end: CHIYODA_MICHIYA, firstDirection: N, secondDirection: E })}
        ${curveFrom({ start: CHIYODA_MICHIYA, end: KITA_SENJU, firstDirection: E, secondDirection: N })}

    `}
        />
    );
};

const Chiyoda = () => {
    return (
        <g className="chiyoda">
            <ChiyodaPath />
            <StopFromTokyo stationCode="C 18" location={KITA_SENJU} />
            <StopFromTokyo stationCode="C 17" location={CHIYODA_MICHIYA} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('C', 13, 16)}
                origin={CHIYODA_YUSHIMA}
                endpoint={CHIYODA_NISHI_NIPPORI}
                textAlignments={[TextAlignment.LEFT]}
            />
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
