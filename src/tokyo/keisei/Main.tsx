import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET, YAMANOTE_UENO } from '../../utils/CommonCoordinates';
import { E, ESE, generatePoint, N, NNE, offset, scale, scaleToUnitX, SSW, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CS_KOIWA, CS_NISHI_FUNABASHI, JB_31, JB_33 } from '../jr-east/ChuoSobu';
import { JO_36, JO_37 } from '../jr-east/SobuRapid';
import { YAMANOTE_NIPPORI } from '../jr-east/Yamanote';
import { CHIYODA_MICHIYA } from '../tokyo-metro/Chiyoda';
import { HIBIYA_KITA_SENJU } from '../tokyo-metro/Hibiya';

const UENO = offset(YAMANOTE_UENO, { dx: -OFFSET - MAJOR_LINE * 0.5, dy: -OFFSET - MAJOR_LINE * 0.5 });
const KS_02 = generatePoint({ start: YAMANOTE_NIPPORI, slope: SSW, endReference: UENO });
const KS_04 = offset(CHIYODA_MICHIYA, { dy: OFFSET });
export const KS_06 = { ...KS_04, x: HIBIYA_KITA_SENJU.x + MAJOR_LINE * 0.5 + OFFSET * 0.5 };
const KS_11 = { ...CS_KOIWA, y: KS_04.y };
const KS_20 = offset(CS_NISHI_FUNABASHI, { dy: -MAJOR_LINE * 0.5 - MINOR_LINE });
const KS_07 = offset(KS_06, { dx: MAJOR_LINE * 0.5 + OFFSET * 2 });
export const KS_10 = offset(KS_11, { dx: -MAJOR_LINE * 0.5 });
export const KS_09 = offset(KS_10, { dx: -MAJOR_LINE * 0.5 });
const KS_22 = offset(JB_31, { dy: MAJOR_LINE * 0.5 });
const KS_20_SLOPE = scaleToUnitX(WNW, MAJOR_LINE - OFFSET * 2);
export const KS_26 = generatePoint({ start: KS_22, slope: ESE, endReference: JB_33 });
const KS_27 = offset(KS_26, { dx: MAJOR_LINE * 1.5, dy: -MAJOR_LINE - MINOR_LINE + OFFSET });
const KS_27_SLOPE = scaleToUnitX(NNE, OFFSET * 2);
export const KS_31 = offset(KS_27, scale(KS_27_SLOPE, 4));
export const KS_40 = offset(KS_31, scale(KS_27_SLOPE, 9));
export const KS_42 = offset(JO_37, { dy: -OFFSET });

export const MainPath = () => {
    return <SVGPath points={[UENO, KS_11, KS_22, KS_40, KS_42]} directions={[N, E, ESE, NNE, E]} />;
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
            <Stop stationCode="KS 11" location={KS_11} textAlignment={TextAlignment.DOWN} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KS', 20, 12)}
                origin={KS_20}
                slope={KS_20_SLOPE}
                textAlignments={[TextAlignment.UP]}
            />
            <Stop stationCode="KS 21" location={offset(KS_20, scale(KS_20_SLOPE, -1))} textAlignment={TextAlignment.DOWN} />
            <LineSegmentWithEndpoint stops={generateStationCodes('KS', 22, 26)} origin={KS_22} endpoint={KS_26} />
            <LineSegmentWithStepChange stops={generateStationCodes('KS', 27, 40)} origin={KS_27} slope={KS_27_SLOPE} />
            <Stop stationCode="KS 41" location={offset(JO_36, { dy: -OFFSET })} />
            <Stop stationCode="KS 42" location={KS_42} />
        </g>
    );
};

export default Main;
