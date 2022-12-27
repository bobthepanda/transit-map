import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange, StopMetadata } from '../../symbols/LineSegment';
import { OTEMACHI, CHIYODA_OTEMACHI, HIBIYA_KASUMIGASEKI, OFFSET, NIHOMBASHI, YAMANOTE_SHIMBASHI, HIBIYA_GINZA, ASAKUSA_NIHOMBASHI, MITA_HIBIYA } from '../../utils/CommonCoordinates';
import { start, S_TO_E, S_TO_W, curveTo } from '../../utils/PathUtils';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { TOKYO_RADIUS } from '../tokyo-metro/Marunouchi';

const SHIMBASHI = { x: YAMANOTE_SHIMBASHI.x + OFFSET * 1.5, y: YAMANOTE_SHIMBASHI.y + OFFSET * 2 };
const GINZA = { x: HIBIYA_GINZA.x - OFFSET + MAJOR_LINE, y: MITA_HIBIYA.y };
const SHIMBASHI_RADIUS = TOKYO_RADIUS + OFFSET * 2;
const Asakusa = () => {
    const stops = useStopsFromCSV('/data/toei/asakusa.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    const buildSingleStop = (id) => buildTheseStops([id])[0];

    return (
        <g id="asakusa">
            <path
                d={`
                ${start(ASAKUSA_NIHOMBASHI)}
                ${curveTo({
                    control: {x: ASAKUSA_NIHOMBASHI.x, y: SHIMBASHI.y},
                    end: SHIMBASHI,
                    radius: SHIMBASHI_RADIUS,
                    ...S_TO_W
                })}
            `}/>
            <StopFromTokyo
                location={ SHIMBASHI }
                stop={buildSingleStop('A 10')}
            />
            <StopFromTokyo
                location={ { ...ASAKUSA_NIHOMBASHI, y: NIHOMBASHI.y + OFFSET * 4 } }
                stop={buildSingleStop('A 12')}
            />
            <StopFromTokyo
                location={ GINZA }
                stop={buildSingleStop('A 11')}
            />
            <StopFromTokyo
                location={ ASAKUSA_NIHOMBASHI }
                stop={buildSingleStop('A 13')}
            />
        </g>
    )
}

export default Asakusa;