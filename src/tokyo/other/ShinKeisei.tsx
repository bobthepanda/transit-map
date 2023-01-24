import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, NNE, offset } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JL_22 } from '../jr-east/JobanLocal';
import { JM_14 } from '../jr-east/Musashino';
import { HS_08 } from './Hokuso';

const SL_01 = offset(JL_22, { dx: OFFSET * 2 });
const SL_05 = offset(JM_14, { dy: -OFFSET });
const SL_11 = offset(HS_08, { dy: -OFFSET });

export const ShinKeiseiPath = () => {
    return <SVGPath points={[SL_01, SL_11]} directions={[NNE, E]} />;
};

const ShinKeisei = () => {
    return (
        <g>
            <ShinKeiseiPath />
            <LineSegmentWithStepChange
                ystep={(-MAJOR_LINE / 3) * 1.5}
                xstep={(MAJOR_LINE / 6) * 1.5}
                origin={SL_01}
                stops={generateStationCodes('SL', 1, 4)}
            />
            <LineSegmentWithEndpoint
                origin={SL_05}
                endpoint={SL_11}
                stops={generateStationCodes('SL', 5, 11)}
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
            />
        </g>
    );
};

export default ShinKeisei;
