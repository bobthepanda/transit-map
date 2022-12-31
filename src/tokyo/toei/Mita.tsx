import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OTEMACHI, MITA_HIBIYA } from '../../utils/CommonCoordinates';

const SEGMENT_1 = ['I 09', 'I 08'];
const SEGMENT_2 = ['I 08', 'I 07', 'I 06', 'I 05', 'I 04'];

const Mita = () => {
    return (
        <g className="mita">
            <LineSegmentWithEndpoint stops={SEGMENT_1} origin={OTEMACHI} endpoint={MITA_HIBIYA} textAlignments={[TextAlignment.LEFT]} />
            <LineSegmentWithStepChange stops={SEGMENT_2} origin={MITA_HIBIYA} ystep={MAJOR_LINE} textAlignments={[TextAlignment.LEFT]} />
        </g>
    );
};

export default Mita;
