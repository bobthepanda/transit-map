import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange, StopMetadata } from '../../symbols/LineSegment';
import { CHUO_TOKYO, MARUNOUCHI_OTEMACHI, OFFSET, HIBIYA_GINZA, HIBIYA_KASUMIGASEKI, MITA_HIBIYA } from '../../utils/CommonCoordinates';
import { start,  curveTo, S_TO_E, E_TO_S, S_TO_W } from '../../utils/PathUtils';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';

const SEGMENT_1 = ['M 18', 'M 19'];

const TOKYO = { x: CHUO_TOKYO.x + OFFSET * 2, y: CHUO_TOKYO.y + OFFSET }; 
const GINZA = { x: HIBIYA_GINZA.x - OFFSET * .5, y: MITA_HIBIYA.y };
const KASUMIGASEKI = { x: HIBIYA_KASUMIGASEKI.x - OFFSET, y: HIBIYA_KASUMIGASEKI.y - OFFSET * .5 };

export const TOKYO_RADIUS = OFFSET * 2;

const Marunouchi = () => {
    const stops = useStopsFromCSV('/data/tokyo-metro/marunouchi.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    return (
        <g id="marunouchi">
            <path d={`${start(MARUNOUCHI_OTEMACHI)} 
                ${curveTo({
                    control: {y: TOKYO.y, x: MARUNOUCHI_OTEMACHI.x},
                    end: TOKYO,
                    ...S_TO_E,
                    radius: TOKYO_RADIUS
                })}
                ${curveTo({
                    control: { x: GINZA.x, y: TOKYO.y },
                    end: GINZA,
                    ...E_TO_S,
                    radius: TOKYO_RADIUS
                })}
                ${curveTo({
                    control: { x: GINZA.x, y: KASUMIGASEKI.y},
                    end: KASUMIGASEKI,
                    ...S_TO_W,
                    radius: TOKYO_RADIUS
                })}
                `}
            />
            <LineSegmentWithStepChange
                stops={buildTheseStops(SEGMENT_1)}
                origin={MARUNOUCHI_OTEMACHI}
                ystep={MAJOR_LINE * -1}
            />
            <StopFromTokyo 
                location={TOKYO}
                stop={buildTheseStops(['M 17'])[0]}
            />
            <StopFromTokyo 
                location={GINZA}
                stop={buildTheseStops(['M 16'])[0]}
            />
            <StopFromTokyo 
                location={KASUMIGASEKI}
                stop={buildTheseStops(['M 15'])[0]}
                textAlignment={TextAlignment.UP}
            />
        </g>
    )
}

export default Marunouchi;