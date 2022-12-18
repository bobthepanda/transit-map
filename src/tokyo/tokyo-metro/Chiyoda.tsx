import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { LineSegmentWithStepChange, StopMetadata } from '../../symbols/LineSegment';
import { OTEMACHI } from '../../utils/CommonCoordinates';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';

const STOPS_TO_HIDE = ['C 11', 'C 09'];

const stopMetadata = new Map<string, StopMetadata>();
STOPS_TO_HIDE.forEach((id) => {
    stopMetadata.set(id, { ...stopMetadata.get(id), hideText: true});
})

const MODIFIED_OTEMACHI = { x: OTEMACHI.x + 2 * MINOR_LINE, y: OTEMACHI.y}

const SEGMENT_1 = ['C 11', 'C 10', 'C 09'];
const SEGMENT_2 = ['C 11', 'C 12', 'C 13'];

const Chiyoda = () => {
    const stops = useStopsFromCSV('/data/tokyo-metro/chiyoda.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops, stopMetadata});

    return (
        <g id="chiyoda">
            <LineSegmentWithStepChange
                stops={buildTheseStops(SEGMENT_1)}
                origin={MODIFIED_OTEMACHI}
                ystep={MAJOR_LINE / 3 * 2}
            />
            <LineSegmentWithStepChange
                stops={buildTheseStops(SEGMENT_2)}
                origin={MODIFIED_OTEMACHI}
                ystep={MAJOR_LINE / 3 * -2}
            />
        </g>
    )
}

export default Chiyoda;