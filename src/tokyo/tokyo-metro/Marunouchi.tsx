import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import {
    CHUO_OCHANOMIZU,
    HIBIYA_GINZA,
    HIBIYA_KASUMIGASEKI,
    MARUNOUCHI_OTEMACHI,
    MITA_HIBIYA,
    OFFSET,
    YAMANOTE_TOKYO,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, ESE, offset, S, startAtLocation, W } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const SEGMENT_1 = ['M 18', 'M 19'];

const TOKYO = offset(YAMANOTE_TOKYO, { dx: OFFSET, dy: OFFSET });
const GINZA = { x: HIBIYA_GINZA.x - OFFSET * 0.5, y: MITA_HIBIYA.y };
const KASUMIGASEKI = offset(HIBIYA_KASUMIGASEKI, { dx: -OFFSET, dy: -OFFSET * 0.5 });

const OCHANOMIZU = offset(CHUO_OCHANOMIZU, { dy: OFFSET * -2 });
export const M_21 = offset(OCHANOMIZU, { dy: -OFFSET * 4, dx: -OFFSET * 8 });
export const M_22 = offset(M_21, { dx: -MAJOR_LINE * 2 - OFFSET, dy: -MAJOR_LINE - OFFSET * 0.5 });

export const MarunouchiPath = () => {
    return (
        <path
            d={`${startAtLocation(M_22)}
                ${curveFrom({
                    start: M_22,
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
            <StopFromTokyo stationCode="M 21" location={M_21} />
            <StopFromTokyo stationCode="M 22" location={M_22} />
        </g>
    );
};

export default Marunouchi;
