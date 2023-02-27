import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, generatePointY, offset, scale, scaleToUnitX, WSW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CS_NISHI_FUNABASHI } from '../jr-east/ChuoSobu';
import { JL_30 } from '../jr-east/JobanLocal';
import { KS_10, KS_42 } from '../keisei/Main';
import { SL_11 } from './ShinKeisei';

const THIS_KS_10 = offset(KS_10, { dy: -OFFSET });
export const HS_05 = { x: CS_NISHI_FUNABASHI.x + MINOR_LINE - MAJOR_LINE * 2 + OFFSET * 1.75, y: THIS_KS_10.y };
export const HS_08 = offset(SL_11, { dy: OFFSET });
const KS_43 = offset(generatePointY({ start: JL_30, endReference: KS_42, slope: ESE }), { dx: -OFFSET * 2 });
const HS_08_SLOPE = scaleToUnitX(WSW, MAJOR_LINE + OFFSET * 2);

export const HokusoPath = () => {
    return <SVGPath points={[THIS_KS_10, HS_08, KS_42]} directions={[E, ENE, E]} />;
};

const Hokuso = () => {
    return (
        <g className="hokuso">
            <LineSegmentWithEndpoint
                origin={THIS_KS_10}
                endpoint={HS_05}
                stops={['KS 10', ...generateStationCodes('HS', 1, 5)]}
                textAlignments={[TextAlignment.UP]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('HS', 8, 6)}
                origin={HS_08}
                slope={HS_08_SLOPE}
                textAlignments={[TextAlignment.UP]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('HS', 9, 11)}
                origin={offset(HS_08, scale(HS_08_SLOPE, -1))}
                slope={scaleToUnitX(ENE, MAJOR_LINE)}
                textAlignments={[TextAlignment.UP]}
            />
            <LineSegmentWithStepChange
                stops={['KS 43', ...generateStationCodes('HS', 14, 12)]}
                origin={KS_43}
                textAlignments={[TextAlignment.UP]}
                slope={{ dx: -MAJOR_LINE - MINOR_LINE }}
            />
        </g>
    );
};

export default Hokuso;
