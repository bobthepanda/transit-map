import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange, LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import { HIBIYA, HIBIYA_GINZA, HIBIYA_KASUMIGASEKI, OFFSET } from '../../utils/CommonCoordinates';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';

const SEGMENT_1 = ['H 08', 'H 09'];
const SEGMENT_2 = ['H 09', 'H 10'];



const Hibiya = () => {
    const stops = useStopsFromCSV('/data/tokyo-metro/hibiya.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    return (
        <g id="hibiya">
            <LineSegmentWithEndpoint
                stops={buildTheseStops(SEGMENT_1)}
                origin={HIBIYA}
                endpoint={HIBIYA_GINZA}
                textAlignments={[TextAlignment.DOWN]}
            />
            <LineSegmentWithStepChange
                stops={buildTheseStops(SEGMENT_2)}
                origin={HIBIYA_GINZA}
                xstep={MAJOR_LINE}
                textAlignments={[TextAlignment.DOWN]}
            />
        </g>
    )
}

export default Hibiya;