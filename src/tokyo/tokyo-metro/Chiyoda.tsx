import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import {
    CHIYODA_NISHI_NIPPORI,
    CHIYODA_OTEMACHI,
    CHIYODA_YUSHIMA,
    HIBIYA,
    HIBIYA_KASUMIGASEKI,
    OFFSET,
} from '../../utils/CommonCoordinates';
import { E, ENE, midPoint, N, offset } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { HIBIYA_KITA_SENJU } from './Hibiya';
import { M_14 } from './Marunouchi';

const KASUMIGASEKI = {
    x: HIBIYA_KASUMIGASEKI.x - OFFSET,
    y: HIBIYA_KASUMIGASEKI.y + OFFSET * 0.5,
};
const THIS_HIBIYA = { x: HIBIYA.x + OFFSET * 0.5, y: HIBIYA.y - OFFSET };
const KITA_SENJU = offset(HIBIYA_KITA_SENJU, { dx: -OFFSET * 3 });
export const CHIYODA_MICHIYA = { x: midPoint(CHIYODA_NISHI_NIPPORI, KITA_SENJU).x, y: KITA_SENJU.y + MAJOR_LINE * 0.5 };
export const C_19 = offset(KITA_SENJU, { dy: -MAJOR_LINE, dx: OFFSET * 3 });
const C_20 = offset(C_19, { dy: -MAJOR_LINE * 0.5, dx: MAJOR_LINE });
const C_07 = offset(M_14, { dy: OFFSET });

export const ChiyodaPath = () => {
    return (
        <SVGPath
            color="stroke-chiyoda"
            points={[C_07, CHIYODA_YUSHIMA, CHIYODA_MICHIYA, KITA_SENJU, C_20]}
            directions={[E, N, E, N, ENE]}
        />
    );
};

const ChiyodaStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-chiyoda" />;
};

const Chiyoda = () => {
    return (
        <g className="chiyoda">
            <ChiyodaPath />
            <ChiyodaStop stationCode="C 07" location={C_07} />
            <ChiyodaStop stationCode="C 20" location={C_20} textAlignment={TextAlignment.UP} />
            <ChiyodaStop stationCode="C 19" location={C_19} textAlignment={TextAlignment.UP} />
            <ChiyodaStop stationCode="C 18" location={KITA_SENJU} textAlignment={TextAlignment.LEFT} />
            <ChiyodaStop stationCode="C 17" location={CHIYODA_MICHIYA} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('C', 13, 16)}
                origin={CHIYODA_YUSHIMA}
                endpoint={CHIYODA_NISHI_NIPPORI}
                textAlignments={[TextAlignment.LEFT]}
                strokeColor="stroke-chiyoda"
            />
            <ChiyodaStop
                stationCode="C 12"
                location={{ ...CHIYODA_OTEMACHI, y: CHIYODA_OTEMACHI.y - MAJOR_LINE * 2.25 }}
                textAlignment={TextAlignment.LEFT}
            />
            <ChiyodaStop stationCode="C 11" location={CHIYODA_OTEMACHI} />
            <ChiyodaStop
                stationCode="C 10"
                location={{ ...CHIYODA_OTEMACHI, y: CHIYODA_OTEMACHI.y + MAJOR_LINE + OFFSET }}
                textAlignment={TextAlignment.LEFT}
            />
            <ChiyodaStop stationCode="C 09" location={THIS_HIBIYA} textAlignment={TextAlignment.LEFT} />
            <ChiyodaStop location={KASUMIGASEKI} stationCode="C 08" />
        </g>
    );
};

export default Chiyoda;
