import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET, YAMANOTE_UENO } from '../../utils/CommonCoordinates';
import { E, generatePoint, N, offset, SSE, SSW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CS_KOIWA, CS_NISHI_FUNABASHI, FUNABASHI_MIDPOINT } from '../jr-east/ChuoSobu';
import { YAMANOTE_NIPPORI } from '../jr-east/Yamanote';
import { CHIYODA_MICHIYA } from '../tokyo-metro/Chiyoda';
import { HIBIYA_KITA_SENJU } from '../tokyo-metro/Hibiya';

const UENO = offset(YAMANOTE_UENO, { dx: -OFFSET - MAJOR_LINE * 0.5, dy: -OFFSET - MAJOR_LINE * 0.5 });
const KS_02 = generatePoint({ start: YAMANOTE_NIPPORI, slope: SSW, endReference: UENO });
const KS_04 = offset(CHIYODA_MICHIYA, { dy: OFFSET });
export const KS_06 = { ...KS_04, x: HIBIYA_KITA_SENJU.x + MAJOR_LINE * 0.5 + OFFSET * 0.5 };
const KS_11 = { ...CS_KOIWA, y: KS_04.y };
const KS_20 = { y: KS_04.y, x: CS_NISHI_FUNABASHI.x };
const KS_07 = offset(KS_06, { dx: MAJOR_LINE * 0.5 + OFFSET * 2 });
export const KS_10 = offset(KS_11, { dx: -MAJOR_LINE * 0.5 });
export const KS_09 = offset(KS_10, { dx: -MAJOR_LINE * 0.5 });
const KS_22 = offset(KS_20, { dx: OFFSET + MAJOR_LINE * 1.5, dy: MAJOR_LINE - OFFSET });

export const MainPath = () => {
    return <SVGPath points={[UENO, KS_20, FUNABASHI_MIDPOINT, KS_22]} directions={[N, E, SSE, E]} />;
};

const Main = () => {
    return (
        <g className="keisei-main">
            <MainPath />
            <Stop stationCode="KS 01" location={UENO} />
            <Stop stationCode="KS 02" location={KS_02} />
            <Stop stationCode="KS 04" location={KS_04} />
            <Stop stationCode="KS 06" location={KS_06} textAlignment={TextAlignment.UP} />
            <LineSegmentWithEndpoint
                stops={['KS 07', 'KS 08', 'KS 09']}
                origin={KS_07}
                endpoint={KS_09}
                textAlignments={[TextAlignment.DOWN, TextAlignment.UP]}
            />
            <Stop stationCode="KS 10" location={KS_10} textAlignment={TextAlignment.UP} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('KS', 11, 20)}
                origin={KS_11}
                endpoint={KS_20}
                textAlignments={[TextAlignment.DOWN, TextAlignment.UP]}
            />
            <Stop stationCode="KS 21" location={offset(KS_20, { dx: OFFSET * 4 })} textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="KS 22" location={KS_22} />
        </g>
    );
};

export default Main;
