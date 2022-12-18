import { MAJOR_LINE } from '../../map/GridLines';
import { LineSegmentWithStepChange, StopMetadata } from '../../symbols/LineSegment';
import { OTEMACHI } from '../../utils/CommonCoordinates';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';

const Mita = () => {
    const stops = useStopsFromCSV('/data/toei/mita.csv');

    const stopMetadata = new Map<string, StopMetadata>();
    stopMetadata.set('I 09', { hideText: true })

    return (
        <g id="mita">
            <LineSegmentWithStepChange
                stops={buildStops({ ids: ['I 09', 'I 08', 'I 07', 'I 06', 'I 05', 'I 04'], stops, stopMetadata})}
                origin={OTEMACHI}
                ystep={MAJOR_LINE / 3 * 2}
            />
        </g>
    )
}

export default Mita;