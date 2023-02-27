import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, offset, S, scaleToUnitX, SSE } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_31 } from '../jr-east/ChuoSobu';
import { JL_22 } from '../jr-east/JobanLocal';
import { KS_26 } from '../keisei/Main';
import { TR_04 } from '../tokyo-metro/Tozai';

const SL_01 = offset(JL_22, { dx: OFFSET * 2 });
const SL_05 = offset(SL_01, { dx: MAJOR_LINE * 3 - OFFSET });
export const SL_11 = { x: JB_31.x - MINOR_LINE, y: SL_05.y };
const SL_19 = offset(TR_04, { dx: OFFSET, dy: OFFSET * 0.5 });
const SL_24 = offset(KS_26, { dx: -OFFSET, dy: OFFSET * 0.5 });
const SL_12 = offset(SL_11, { dx: MAJOR_LINE + MINOR_LINE + OFFSET * 0.5, dy: OFFSET * 3 });

export const ShinKeiseiPath = () => {
    return <SVGPath points={[SL_01, SL_12, SL_24]} directions={[E, SSE, S]} />;
};

const ShinKeisei = () => {
    return (
        <g>
            <LineSegmentWithEndpoint
                origin={SL_01}
                endpoint={SL_05}
                stops={generateStationCodes('SL', 1, 5)}
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
            />
            <LineSegmentWithEndpoint
                origin={SL_05}
                endpoint={SL_11}
                stops={generateStationCodes('SL', 5, 11)}
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
            />
            <LineSegmentWithStepChange stops={generateStationCodes('SL', 12, 18)} origin={SL_12} slope={scaleToUnitX(SSE, OFFSET * 1.5)} />
            <LineSegmentWithStepChange origin={SL_19} slope={{ dy: MAJOR_LINE * 0.5 }} stops={generateStationCodes('SL', 19, 23)} />
            <Stop stationCode="SL 24" location={SL_24} />
        </g>
    );
};

export default ShinKeisei;
