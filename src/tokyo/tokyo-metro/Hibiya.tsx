import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange, LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import { HIBIYA, HIBIYA_GINZA, HIBIYA_KASUMIGASEKI, NIHOMBASHI, OFFSET, YAMANOTE_YURAKUCHO, HIBIYA_KAYABACHO } from '../../utils/CommonCoordinates';
import { curveTo, S_TO_W, start } from '../../utils/PathUtils';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { TOKYO_RADIUS } from './Marunouchi';

const SEGMENT_1 = ['H 08', 'H 09'];
const SEGMENT_2 = ['H 09', 'H 10'];

const HIBIYA_YURAKUCHO = {x: HIBIYA_KAYABACHO.x, y: YAMANOTE_YURAKUCHO.y };



const Hibiya = () => {
    const stops = useStopsFromCSV('/data/tokyo-metro/hibiya.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    const buildSingleStop = (id) => buildTheseStops([id])[0];

    return (
        <g id="hibiya">
            <path d={`
                ${start(HIBIYA_YURAKUCHO)}
                ${curveTo({
                    control: {x: HIBIYA_YURAKUCHO.x, y: HIBIYA.y },
                    end: HIBIYA,
                    radius: TOKYO_RADIUS,
                    ...S_TO_W
                })}
            `}/>
            <StopFromTokyo
                location={HIBIYA}
                stop={buildSingleStop('H 08')}
            />
            <StopFromTokyo
                location={HIBIYA_GINZA}
                stop={buildSingleStop('H 09')}
            />
            <StopFromTokyo 
                location={{...HIBIYA_GINZA, x: HIBIYA_GINZA.x + MAJOR_LINE + OFFSET}}
                stop={(buildSingleStop('H 10'))}
            />
            <LineSegmentWithEndpoint
                stops={(buildTheseStops(['H 11', 'H 12', 'H 13']))}
                origin={HIBIYA_YURAKUCHO}
                endpoint={HIBIYA_KAYABACHO}
            />
        </g>
    )
}

export default Hibiya;