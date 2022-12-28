import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange, StopMetadata } from '../../symbols/LineSegment';
import { HIBIYA_KAYABACHO, NIHOMBASHI, OFFSET, YAMANOTE_TOKYO, YAMANOTE_YURAKUCHO } from '../../utils/CommonCoordinates';
import { start, S_TO_W, curveTo, horizontalToLocation } from '../../utils/PathUtils';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';

const TOKYO = { x: YAMANOTE_TOKYO.x + OFFSET, y: YAMANOTE_TOKYO.y + OFFSET * 3}
const HATCHOBORI = { ...TOKYO, x: HIBIYA_KAYABACHO.x + OFFSET * .5};

const Keiyo = () => {
    const stops = useStopsFromCSV('/data/jr-east/keiyo.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    const buildSingleStop = (id) => buildTheseStops([id])[0];

    return (
        <g id="keiyo">
            <StopFromTokyo
                location={TOKYO}
                stop={buildSingleStop('JE 01')}
            />
            <StopFromTokyo
                location={HATCHOBORI}
                stop={buildSingleStop('JE 02')}
            />
        </g>
    )
}

export default Keiyo;