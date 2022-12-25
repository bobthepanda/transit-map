import { MAJOR_LINE } from '../../map/GridLines';
import { LineSegmentWithStepChange, StopMetadata } from '../../symbols/LineSegment';
import { CHUO_TOKYO, MARUNOUCHI_OTEMACHI, OFFSET, HIBIYA_GINZA } from '../../utils/CommonCoordinates';
import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';

const SEGMENT_1 = ['M 18', 'M 19'];

const TOKYO = { x: CHUO_TOKYO.x + OFFSET * 2, y: CHUO_TOKYO.y + OFFSET }; 
const GINZA = { x: HIBIYA_GINZA.x - OFFSET, y: HIBIYA_GINZA.y + OFFSET };


const Marunouchi = () => {
    const stops = useStopsFromCSV('/data/tokyo-metro/marunouchi.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});


    return (
        <g id="marunouchi">
            <path d={`M ${MARUNOUCHI_OTEMACHI.x} ${MARUNOUCHI_OTEMACHI.y} 
            V ${TOKYO.y - OFFSET} 
            q 0 ${OFFSET} ${OFFSET} ${OFFSET} 
            H ${GINZA.x - OFFSET} 
            q ${OFFSET} 0 ${OFFSET} ${OFFSET}
            V ${GINZA.y}`}
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
        </g>
    )
}

export default Marunouchi;