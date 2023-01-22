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
import { curveFrom, E, N, startAtLocation, offset, midPoint, ENE } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { HIBIYA_KITA_SENJU } from './Hibiya';
import { M_14 } from './Marunouchi';

const KASUMIGASEKI = {
    x: HIBIYA_KASUMIGASEKI.x - OFFSET,
    y: HIBIYA_KASUMIGASEKI.y + OFFSET * 0.5,
};
const THIS_HIBIYA = { x: HIBIYA.x + OFFSET * 0.5, y: HIBIYA.y - OFFSET };
const KITA_SENJU = offset(HIBIYA_KITA_SENJU, { dx: -OFFSET * 2 });
export const CHIYODA_MICHIYA = { x: midPoint(CHIYODA_NISHI_NIPPORI, KITA_SENJU).x, y: KITA_SENJU.y + MAJOR_LINE * 0.5 };
export const C_19 = offset(KITA_SENJU, { dy: -MAJOR_LINE, dx: OFFSET * 2 });
const C_20 = offset(C_19, { dy: -MAJOR_LINE * 0.5, dx: MAJOR_LINE });
const C_07 = offset(M_14, { dy: OFFSET });

export const ChiyodaPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(C_07)}
        ${curveFrom({ start: C_07, end: CHIYODA_YUSHIMA, firstDirection: E, secondDirection: N })}
        ${curveFrom({ start: CHIYODA_NISHI_NIPPORI, end: CHIYODA_MICHIYA, firstDirection: N, secondDirection: E })}
        ${curveFrom({ start: CHIYODA_MICHIYA, end: KITA_SENJU, firstDirection: E, secondDirection: N })}
        ${curveFrom({ start: KITA_SENJU, end: C_20, firstDirection: N, secondDirection: ENE })}

    `}
        />
    );
};

const Chiyoda = () => {
    return (
        <g className="chiyoda">
            <ChiyodaPath />
            <StopFromTokyo stationCode="C 07" location={C_07} />
            <StopFromTokyo stationCode="C 20" location={C_20} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="C 19" location={C_19} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="C 18" location={KITA_SENJU} textAlignment={TextAlignment.LEFT} />
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
