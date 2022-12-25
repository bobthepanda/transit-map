import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange, StopMetadata } from '../../symbols/LineSegment';
import { OTEMACHI, MITA_HIBIYA } from '../../utils/CommonCoordinates';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';

const SEGMENT_1 = ['I 09', 'I 08'];
const SEGMENT_2 = ['I 08', 'I 07', 'I 06', 'I 05', 'I 04'];

const stopMetadata = new Map<string, StopMetadata>();

const Mita = () => {
    const stops = useStopsFromCSV('/data/toei/mita.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops, stopMetadata});

    return (
        <g id="mita">
            <LineSegmentWithEndpoint 
                stops={buildTheseStops(SEGMENT_1)}
                origin={OTEMACHI}
                endpoint={MITA_HIBIYA}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={buildTheseStops(SEGMENT_2)}
                origin={MITA_HIBIYA}
                ystep={MAJOR_LINE}
                textAlignments={[TextAlignment.LEFT]}
            />
        </g>
    )
}

export default Mita;