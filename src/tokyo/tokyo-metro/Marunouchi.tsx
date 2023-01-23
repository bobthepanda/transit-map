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
import { curveFrom, E, ESE, generatePoint, offset, S, startAtLocation, W, WNW } from '../../utils/PathUtils';
import { JB_14 } from '../jr-east/ChuoSobu';
import { JY_13, JY_17 } from '../jr-east/Yamanote';
import StopFromTokyo from '../StopsFromTokyo';
import { E_07, E_08 } from '../toei/Oedo';
import { F_13 } from './Fukutoshin';

const SEGMENT_1 = ['M 18', 'M 19'];

const TOKYO = offset(YAMANOTE_TOKYO, { dx: OFFSET, dy: OFFSET });
const GINZA = { x: HIBIYA_GINZA.x - OFFSET * 0.5, y: MITA_HIBIYA.y };
const KASUMIGASEKI = offset(HIBIYA_KASUMIGASEKI, { dx: -OFFSET, dy: -OFFSET * 0.5 });

const OCHANOMIZU = offset(CHUO_OCHANOMIZU, { dy: OFFSET * -2 });
export const M_21 = generatePoint({ start: OCHANOMIZU, slope: WNW, endReference: E_08 });
export const M_22 = offset(M_21, { dx: -MAJOR_LINE * 2 - OFFSET, dy: -MAJOR_LINE - OFFSET * 0.5 });
const M_12 = offset(JB_14, { dx: -OFFSET * 2 });
export const M_14 = offset(KASUMIGASEKI, { dx: -MAJOR_LINE });
export const M_13 = generatePoint({ start: M_12, slope: ESE, endReference: offset(E_07, { dx: OFFSET * -2 }) });
const M_09 = offset(F_13, { dx: OFFSET * 0.5, dy: OFFSET });
const M_25 = offset(JY_13, { dy: OFFSET });
export const M_08 = offset(JY_17, { dx: -OFFSET, dy: OFFSET });

export const MarunouchiPath = () => {
    return (
        <path
            d={`${startAtLocation(M_25)}
            ${curveFrom({ start: M_25, end: M_22, firstDirection: E, secondDirection: ESE })}
                ${curveFrom({ start: M_22, end: MARUNOUCHI_OTEMACHI, firstDirection: ESE, secondDirection: S })} 
                ${curveFrom({ start: MARUNOUCHI_OTEMACHI, end: TOKYO, firstDirection: S, secondDirection: E })}
                ${curveFrom({ start: TOKYO, end: GINZA, firstDirection: E, secondDirection: S })}
                ${curveFrom({ start: GINZA, end: KASUMIGASEKI, firstDirection: S, secondDirection: W })}
                ${curveFrom({ start: KASUMIGASEKI, end: M_12, firstDirection: W, secondDirection: WNW })}
                ${curveFrom({ start: M_12, end: M_08, firstDirection: WNW, secondDirection: W })}
                `}
        />
    );
};

const Marunouchi = () => {
    return (
        <g className="marunouchi">
            <MarunouchiPath />
            <StopFromTokyo stationCode="M 08" location={M_08} />
            <StopFromTokyo stationCode="M 09" location={M_09} />
            <StopFromTokyo
                stationCode="M 10"
                location={generatePoint({ start: M_12, slope: WNW, endReference: offset(M_12, { dx: -MAJOR_LINE * 2 }) })}
            />
            <StopFromTokyo
                stationCode="M 11"
                location={generatePoint({ start: M_12, slope: WNW, endReference: offset(M_12, { dx: -MAJOR_LINE }) })}
            />
            <StopFromTokyo stationCode="M 12" location={M_12} />
            <StopFromTokyo stationCode="M 13" location={M_13} />
            <StopFromTokyo stationCode="M 14" location={M_14} />
            <LineSegmentWithStepChange stops={SEGMENT_1} origin={MARUNOUCHI_OTEMACHI} ystep={MAJOR_LINE * -1} />
            <StopFromTokyo location={TOKYO} stationCode="M 17" />
            <StopFromTokyo location={GINZA} stationCode="M 16" />
            <StopFromTokyo location={KASUMIGASEKI} stationCode="M 15" textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="M 20" location={OCHANOMIZU} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="M 21" location={M_21} />
            <StopFromTokyo stationCode="M 22" location={M_22} />
            <StopFromTokyo stationCode="M 25" location={M_25} />
        </g>
    );
};

export default Marunouchi;
