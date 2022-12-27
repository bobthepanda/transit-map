import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange, StopMetadata } from '../../symbols/LineSegment';
import { OTEMACHI, CHIYODA_OTEMACHI, HIBIYA_KASUMIGASEKI, OFFSET, NIHOMBASHI, YAMANOTE_SHIMBASHI, HIBIYA_GINZA } from '../../utils/CommonCoordinates';
import { start, S_TO_W, curveTo } from '../../utils/PathUtils';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { TOKYO_RADIUS } from './Marunouchi';

const SHIMBASHI = { x: YAMANOTE_SHIMBASHI.x + OFFSET * 1.5, y: YAMANOTE_SHIMBASHI.y + OFFSET };
const GINZA = { x: HIBIYA_GINZA.x - OFFSET, y: HIBIYA_GINZA.y + OFFSET };
const SHIMBASHI_RADIUS = TOKYO_RADIUS + OFFSET;
const TORANOMON = {y: SHIMBASHI.y, x: HIBIYA_KASUMIGASEKI.x - OFFSET};

const Ginza = () => {
    const stops = useStopsFromCSV('/data/tokyo-metro/ginza.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    const buildSingleStop = (id) => buildTheseStops([id])[0];

    return (
        <g id="ginza">
            <path 
                d={`${start(NIHOMBASHI)}
                ${curveTo({
                    control: { x: NIHOMBASHI.x, y: SHIMBASHI.y},
                    end: TORANOMON,
                    radius:SHIMBASHI_RADIUS,
                    ...S_TO_W
                })}
                `
            }
            />
            <StopFromTokyo
                location={NIHOMBASHI}
                stop={buildSingleStop('G 11')}
            />
            <StopFromTokyo
                location={ { ...NIHOMBASHI, y: NIHOMBASHI.y + OFFSET * 4 } }
                stop={buildSingleStop('G 10')}
            />
            <StopFromTokyo
                location={ GINZA }
                stop={buildSingleStop('G 09')}
            />
            <StopFromTokyo
                location={ SHIMBASHI }
                stop={buildSingleStop('G 08')}
            />
            <StopFromTokyo
                location={ TORANOMON }
                stop={buildSingleStop('G 07')}
                textAlignment={TextAlignment.UP}
            />
        </g>
    )
}

export default Ginza;