import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import {
    CHUO_OCHANOMIZU,
    CHUO_TOKYO,
    HIBIYA_GINZA,
    HIBIYA_KASUMIGASEKI,
    MARUNOUCHI_OTEMACHI,
    MITA_HIBIYA,
    OFFSET,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, ESE, offset, S, startAtLocation, W } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const SEGMENT_1 = ['M 18', 'M 19'];

const TOKYO = { x: CHUO_TOKYO.x + OFFSET * 2, y: CHUO_TOKYO.y + OFFSET };
const GINZA = { x: HIBIYA_GINZA.x - OFFSET * 0.5, y: MITA_HIBIYA.y };
const KASUMIGASEKI = {
    x: HIBIYA_KASUMIGASEKI.x - OFFSET,
    y: HIBIYA_KASUMIGASEKI.y - OFFSET * 0.5,
};

export const TOKYO_RADIUS = OFFSET * 2;

const OCHANOMIZU = offset(CHUO_OCHANOMIZU, { dy: OFFSET * -2 });

export const MarunouchiPath = () => {
    return (
        <path
            d={`${startAtLocation(OCHANOMIZU)}
                ${curveFrom({
                    start: OCHANOMIZU,
                    end: MARUNOUCHI_OTEMACHI,
                    firstDirection: ESE,
                    secondDirection: S,
                })} 
                ${curveFrom({
                    start: MARUNOUCHI_OTEMACHI,
                    end: TOKYO,
                    firstDirection: S,
                    secondDirection: E,
                })}
                ${curveFrom({
                    start: TOKYO,
                    end: GINZA,
                    firstDirection: E,
                    secondDirection: S,
                })}
                ${curveFrom({
                    start: GINZA,
                    end: KASUMIGASEKI,
                    firstDirection: S,
                    secondDirection: W,
                })}
                `}
        />
    );
};

const Marunouchi = () => {
    return (
        <g className="marunouchi">
            <MarunouchiPath />
            <LineSegmentWithStepChange stops={SEGMENT_1} origin={MARUNOUCHI_OTEMACHI} ystep={MAJOR_LINE * -1} />
            <StopFromTokyo location={TOKYO} stationCode="M 17" />
            <StopFromTokyo location={GINZA} stationCode="M 16" />
            <StopFromTokyo location={KASUMIGASEKI} stationCode="M 15" textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="M 20" location={OCHANOMIZU} textAlignment={TextAlignment.UP} />
        </g>
    );
};

export default Marunouchi;
