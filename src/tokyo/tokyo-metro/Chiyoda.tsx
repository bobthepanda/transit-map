import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange, StopMetadata } from '../../symbols/LineSegment';
import { OTEMACHI, CHIYODA_OTEMACHI } from '../../utils/CommonCoordinates';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';

const KASUMIGASEKI = { x: OTEMACHI.x - .5 * MAJOR_LINE, y: OTEMACHI.y + 2.5 * MAJOR_LINE };

const SEGMENT_1 = ['C 11', 'C 10', 'C 09'];
const SEGMENT_2 = ['C 11', 'C 12', 'C 13'];

const Chiyoda = () => {
    const stops = useStopsFromCSV('/data/tokyo-metro/chiyoda.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    const kasumigasekiInfo = {...buildTheseStops(['C 08'])[0], textAlignment: TextAlignment.DOWN};

    return (
        <g id="chiyoda">
            <LineSegmentWithStepChange
                stops={buildTheseStops(SEGMENT_1)}
                origin={CHIYODA_OTEMACHI}
                ystep={MAJOR_LINE}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={buildTheseStops(SEGMENT_2)}
                origin={CHIYODA_OTEMACHI}
                ystep={MAJOR_LINE * -1}
                textAlignments={[TextAlignment.LEFT]}
            />
            <StopFromTokyo
                location={KASUMIGASEKI}
                stop={kasumigasekiInfo}
                />
        </g>
    )
}

export default Chiyoda;