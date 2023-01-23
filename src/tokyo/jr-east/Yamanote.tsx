import { MAJOR_LINE } from '../../map/GridLines';
import {
    CHIYODA_NISHI_NIPPORI,
    OFFSET,
    OTEMACHI,
    YAMANOTE_AKIHABARA,
    YAMANOTE_KANDA,
    YAMANOTE_OKACHIMACHI as JY_04,
    YAMANOTE_SHIMBASHI,
    YAMANOTE_TOKYO,
    YAMANOTE_UENO,
    YAMANOTE_YURAKUCHO,
} from '../../utils/CommonCoordinates';
import { curveFrom, ESE, Factor, N, offset, S, scale, SSW, startAtLocation, W, WNW, WSW } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

export const YAMANOTE_NISHI_NIPPORI = offset(offset(CHIYODA_NISHI_NIPPORI, { dx: OFFSET * 1, dy: -OFFSET * 2 }), scale(SSW, OFFSET));
export const JY_06 = offset(YAMANOTE_UENO, { dy: -MAJOR_LINE });
export const YAMANOTE_NIPPORI = offset(YAMANOTE_NISHI_NIPPORI, scale(ESE, (OFFSET * 8.5) / Factor.DOUBLE_DIAG));
export const JY_11 = offset(OTEMACHI, { dx: -MAJOR_LINE * 5, dy: -MAJOR_LINE * 8 - OFFSET * 2 });
export const JY_10 = offset(JY_11, { dx: MAJOR_LINE * 2 });
export const JY_17 = offset(OTEMACHI, { dx: -MAJOR_LINE * 10.5 });
export const JY_13 = offset(JY_17, { dx: MAJOR_LINE - OFFSET * 0.5, dy: -MAJOR_LINE * 7 });
export const JY_15 = offset(JY_17, { dy: -MAJOR_LINE * 1.75 * 2 });
export const JY_18 = offset(JY_17, { dy: MAJOR_LINE * 1.5 });

const YamanotePath = () => {
    return (
        <path
            d={`
            ${startAtLocation(YAMANOTE_SHIMBASHI)}
            ${curveFrom({ start: YAMANOTE_SHIMBASHI, end: YAMANOTE_NISHI_NIPPORI, firstDirection: N, secondDirection: WNW })}
            ${curveFrom({ start: YAMANOTE_NISHI_NIPPORI, end: JY_11, firstDirection: WNW, secondDirection: W })}
            ${curveFrom({ start: JY_11, end: JY_13, firstDirection: W, secondDirection: WSW })}
            ${curveFrom({ start: JY_13, end: JY_18, firstDirection: WSW, secondDirection: S })}
        `}
        />
    );
};

const Yamanote = () => {
    return (
        <g className="yamanote">
            <YamanotePath />
            <StopFromTokyo stationCode="JY 18" location={JY_18} />
            <StopFromTokyo stationCode="JY 13" location={JY_13} />
            <StopFromTokyo stationCode="JY 17" location={JY_17} />
            <StopFromTokyo stationCode="JY 16" location={offset(JY_17, { dy: -MAJOR_LINE * 1.75 })} />
            <StopFromTokyo stationCode="JY 15" location={JY_15} />
            <StopFromTokyo stationCode="JY 14" location={offset(JY_15, { dy: -MAJOR_LINE * 1.75 })} />
            <StopFromTokyo location={YAMANOTE_NISHI_NIPPORI} stationCode="JY 08" />
            <StopFromTokyo stationCode="JY 07" location={YAMANOTE_NIPPORI} />
            <StopFromTokyo stationCode="JY 06" location={JY_06} />
            <StopFromTokyo stationCode="JY 05" location={YAMANOTE_UENO} />
            <StopFromTokyo stationCode="JY 04" location={JY_04} />
            <StopFromTokyo location={YAMANOTE_AKIHABARA} stationCode="JY 03" />
            <StopFromTokyo location={YAMANOTE_KANDA} stationCode="JY 02" />
            <StopFromTokyo location={YAMANOTE_TOKYO} stationCode="JY 01" />
            <StopFromTokyo location={YAMANOTE_YURAKUCHO} stationCode="JY 30" />
            <StopFromTokyo location={YAMANOTE_SHIMBASHI} stationCode="JY 29" />
            <StopFromTokyo stationCode="JY 11" location={JY_11} />
            <StopFromTokyo stationCode="JY 10" location={JY_10} />
            <StopFromTokyo stationCode="JY 09" location={offset(YAMANOTE_NISHI_NIPPORI, { dx: -MAJOR_LINE, dy: -MAJOR_LINE * 0.5 })} />
        </g>
    );
};

export default Yamanote;
