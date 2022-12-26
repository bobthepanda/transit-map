import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange, StopMetadata } from '../../symbols/LineSegment';
import { CHUO_TOKYO, MARUNOUCHI_OTEMACHI, OFFSET, HIBIYA_GINZA, HIBIYA_KASUMIGASEKI } from '../../utils/CommonCoordinates';
import { horizontalTo, start } from '../../utils/PathUtils';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';

const SEGMENT_1 = ['M 18', 'M 19'];

const TOKYO = { x: CHUO_TOKYO.x + OFFSET * 2, y: CHUO_TOKYO.y + OFFSET }; 
const GINZA = { x: HIBIYA_GINZA.x - OFFSET * 2, y: HIBIYA_GINZA.y + OFFSET };
const KASUMIGASEKI = { x: HIBIYA_KASUMIGASEKI.x - OFFSET, y: HIBIYA_KASUMIGASEKI.y - OFFSET * .5 };

export const TOKYO_RADIUS = OFFSET * 2;

const Marunouchi = () => {
    const stops = useStopsFromCSV('/data/tokyo-metro/marunouchi.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    return (
        <g id="marunouchi">
            <path d={`${start(MARUNOUCHI_OTEMACHI)} 
            V ${TOKYO.y - TOKYO_RADIUS} 
            q 0 ${TOKYO_RADIUS} ${TOKYO_RADIUS} ${TOKYO_RADIUS} 
            H ${GINZA.x - TOKYO_RADIUS} 
            q ${TOKYO_RADIUS} 0 ${TOKYO_RADIUS} ${TOKYO_RADIUS}
            V ${KASUMIGASEKI.y - TOKYO_RADIUS}
            q 0 ${TOKYO_RADIUS} ${-1 * TOKYO_RADIUS} ${TOKYO_RADIUS}
            ${horizontalTo(KASUMIGASEKI)}`}
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