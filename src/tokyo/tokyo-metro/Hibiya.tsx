import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import {
    ASAKUSA_NINGYOCHO,
    HIBIYA,
    HIBIYA_GINZA,
    HIBIYA_KAYABACHO,
    OEDO_MONZEN_NAKACHO,
    OFFSET,
    YAMANOTE_AKIHABARA,
    YAMANOTE_OKACHIMACHI,
    YAMANOTE_TOKYO,
    YAMANOTE_UENO,
    YAMANOTE_YURAKUCHO,
} from '../../utils/CommonCoordinates';
import { curveFrom, S, ESE, startAtLocation, W, offset, WSW, Factor, scale } from '../../utils/PathUtils';
import { CS_KOIWA } from '../jr-east/ChuoSobu';
import StopFromTokyo from '../StopsFromTokyo';
import { TOKYO_RADIUS } from './Marunouchi';

const HIBIYA_TSUKIJI = { x: HIBIYA_KAYABACHO.x, y: YAMANOTE_YURAKUCHO.y };
const AKIHABARA = { ...YAMANOTE_AKIHABARA, x: YAMANOTE_AKIHABARA.x + OFFSET * 3 };
const UENO = { x: AKIHABARA.x, y: YAMANOTE_UENO.y };
const NIGYOCHO = { x: ASAKUSA_NINGYOCHO.x + OFFSET, y: ASAKUSA_NINGYOCHO.y - OFFSET * 0.25 };
export const HIBIYA_KITA_SENJU = { x: OEDO_MONZEN_NAKACHO.x, y: CS_KOIWA.y - MAJOR_LINE * 2 };
export const H_21 = offset(HIBIYA_KITA_SENJU, { dy: MAJOR_LINE * 1.5 });
const H_20 = offset(H_21, { dx: -MAJOR_LINE, dy: MAJOR_LINE + OFFSET });
const H_19 = offset(H_20, scale(WSW, MAJOR_LINE / Factor.HALF_DIAG));

export const HibiyaPath = () => {
    return (
        <path
            d={`
                ${startAtLocation(HIBIYA_KITA_SENJU)}
                ${curveFrom({
                    start: HIBIYA_KITA_SENJU,
                    end: H_20,
                    firstDirection: S,
                    secondDirection: WSW,
                })}
                ${curveFrom({
                    start: H_20,
                    end: UENO,
                    firstDirection: WSW,
                    secondDirection: S,
                })}
                ${curveFrom({
                    start: UENO,
                    end: NIGYOCHO,
                    firstDirection: S,
                    secondDirection: ESE,
                })}
                ${curveFrom({
                    start: NIGYOCHO,
                    end: HIBIYA_TSUKIJI,
                    firstDirection: ESE,
                    secondDirection: S,
                })}
                ${curveFrom({
                    start: HIBIYA_TSUKIJI,
                    end: HIBIYA,
                    radius: TOKYO_RADIUS,
                    firstDirection: S,
                    secondDirection: W,
                })}
            `}
        />
    );
};

const Hibiya = () => {
    return (
        <g className="hibiya">
            <HibiyaPath />
            <StopFromTokyo location={HIBIYA} stationCode="H 08" />
            <StopFromTokyo location={HIBIYA_GINZA} stationCode="H 09" />
            <StopFromTokyo location={{ ...HIBIYA_GINZA, x: HIBIYA_GINZA.x + MAJOR_LINE + OFFSET }} stationCode="H 10" />
            <StopFromTokyo location={{ ...HIBIYA_KAYABACHO, y: YAMANOTE_YURAKUCHO.y }} stationCode="H 11" />
            <StopFromTokyo location={{ ...HIBIYA_KAYABACHO, y: YAMANOTE_TOKYO.y + OFFSET }} stationCode="H 12" />
            <StopFromTokyo location={HIBIYA_KAYABACHO} stationCode="H 13" />
            <StopFromTokyo stationCode="H 14" location={NIGYOCHO} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="H 16" location={AKIHABARA} />
            <StopFromTokyo stationCode="H 17" location={{ x: AKIHABARA.x, y: YAMANOTE_OKACHIMACHI.y }} />
            <StopFromTokyo stationCode="H 18" location={UENO} />
            <StopFromTokyo stationCode="H 22" location={HIBIYA_KITA_SENJU} />
            <StopFromTokyo stationCode="H 21" location={H_21} />
            <StopFromTokyo stationCode="H 20" location={H_20} />
            <StopFromTokyo stationCode="H 19" location={H_19} />
        </g>
    );
};

export default Hibiya;
