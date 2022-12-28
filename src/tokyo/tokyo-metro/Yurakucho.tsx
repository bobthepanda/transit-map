import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange, StopMetadata } from '../../symbols/LineSegment';
import { NIHOMBASHI, OFFSET, YAMANOTE_YURAKUCHO } from '../../utils/CommonCoordinates';
import { start, S_TO_W, curveTo, horizontalToLocation } from '../../utils/PathUtils';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';

const THIS_YURAKUCHO = { x: YAMANOTE_YURAKUCHO.x + OFFSET * .5, y: YAMANOTE_YURAKUCHO.y + OFFSET };
const GINZA = { ...THIS_YURAKUCHO , x: NIHOMBASHI.x + MAJOR_LINE * .5};
const TSUKIJI = {y: THIS_YURAKUCHO.y, x: NIHOMBASHI.x + MAJOR_LINE * 2 + OFFSET * .5};

const Yurakucho = () => {
    const stops = useStopsFromCSV('/data/tokyo-metro/yurakucho.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    const buildSingleStop = (id) => buildTheseStops([id])[0];

    return (
        <g id="yurakucho">
            <path d={`
                ${start(THIS_YURAKUCHO)}
                ${horizontalToLocation(TSUKIJI)}
            `}/>
            <StopFromTokyo
                location={THIS_YURAKUCHO}
                stop={buildSingleStop('Y 18')}
            />
            <StopFromTokyo
                location={GINZA}
                stop={buildSingleStop('Y 19')}
                textAlignment={TextAlignment.UP}
            />
            <StopFromTokyo
                location= { TSUKIJI }
                stop={buildSingleStop('Y 20')}
                textAlignment={TextAlignment.DOWN}
            />
        </g>
    )
}

export default Yurakucho;