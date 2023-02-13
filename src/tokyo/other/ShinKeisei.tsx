import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ESE, offset, scale, scaleToUnitX, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JL_22 } from '../jr-east/JobanLocal';
import { JM_14 } from '../jr-east/Musashino';
import { HS_08 } from './Hokuso';

const SL_01 = offset(JL_22, { dx: OFFSET * 2 });
const SL_05 = offset(JM_14, { dy: -OFFSET });
const SL_11 = offset(HS_08, { dy: -OFFSET });

export const ShinKeiseiPath = () => {
    return <SVGPath points={[SL_01, SL_11]} directions={[E, ESE]} />;
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
            <Stop stationCode="SL 06" location={offset(SL_05, { dx: MAJOR_LINE })} textAlignment={TextAlignment.UP} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('SL', 11, 7)}
                origin={SL_11}
                slope={scale(scaleToUnitX(WNW), MAJOR_LINE - OFFSET)}
            />
        </g>
    );
};

export default ShinKeisei;
