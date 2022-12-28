import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange, LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import { OTEMACHI, CHIYODA_OTEMACHI, HIBIYA_KASUMIGASEKI, OFFSET, HIBIYA } from '../../utils/CommonCoordinates';
import { StopFromTokyo } from '../StopsFromTokyo';

const KASUMIGASEKI = { x: HIBIYA_KASUMIGASEKI.x - OFFSET, y: HIBIYA_KASUMIGASEKI.y + OFFSET * .5 };
const THIS_HIBIYA = { x: HIBIYA.x + OFFSET * .5, y: HIBIYA.y - OFFSET};

const SEGMENT_1 = ['C 11', 'C 10', 'C 09'];
const SEGMENT_2 = ['C 11', 'C 12', 'C 13'];

const Chiyoda = () => {
    return (
        <g id="chiyoda">
            <LineSegmentWithEndpoint
                stops={(SEGMENT_1)}
                origin={CHIYODA_OTEMACHI}
                endpoint={THIS_HIBIYA}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={(SEGMENT_2)}
                origin={CHIYODA_OTEMACHI}
                ystep={MAJOR_LINE * -1}
                textAlignments={[TextAlignment.LEFT]}
            />
            <StopFromTokyo
                location={KASUMIGASEKI}
                stationCode="C 08"
                />
        </g>
    )
}

export default Chiyoda;