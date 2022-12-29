import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { CHUO_TOKYO, HIBIYA_GINZA, HIBIYA_KASUMIGASEKI, MARUNOUCHI_OTEMACHI, MITA_HIBIYA, OFFSET } from '../../utils/CommonCoordinates';
import { curveFrom, EAST, SOUTH, startAtLocation, WEST } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const SEGMENT_1 = ['M 18', 'M 19'];

const TOKYO = { x: CHUO_TOKYO.x + OFFSET * 2, y: CHUO_TOKYO.y + OFFSET };
const GINZA = { x: HIBIYA_GINZA.x - OFFSET * 0.5, y: MITA_HIBIYA.y };
const KASUMIGASEKI = {
    x: HIBIYA_KASUMIGASEKI.x - OFFSET,
    y: HIBIYA_KASUMIGASEKI.y - OFFSET * 0.5,
};

export const TOKYO_RADIUS = OFFSET * 2;

const Marunouchi = () => {
    return (
        <g id="marunouchi">
            <path
                d={`${startAtLocation(MARUNOUCHI_OTEMACHI)} 
                ${curveFrom({
                    start: MARUNOUCHI_OTEMACHI,
                    end: TOKYO,
                    firstDirection: SOUTH,
                    secondDirection: EAST,
                })}
                ${curveFrom({
                    start: TOKYO,
                    end: GINZA,
                    firstDirection: EAST,
                    secondDirection: SOUTH,
                })}
                ${curveFrom({
                    start: GINZA,
                    end: KASUMIGASEKI,
                    firstDirection: SOUTH,
                    secondDirection: WEST,
                })}
                `}
            />
            <LineSegmentWithStepChange stops={SEGMENT_1} origin={MARUNOUCHI_OTEMACHI} ystep={MAJOR_LINE * -1} />
            <StopFromTokyo location={TOKYO} stationCode="M 17" />
            <StopFromTokyo location={GINZA} stationCode="M 16" />
            <StopFromTokyo location={KASUMIGASEKI} stationCode="M 15" textAlignment={TextAlignment.UP} />
        </g>
    );
};

export default Marunouchi;
