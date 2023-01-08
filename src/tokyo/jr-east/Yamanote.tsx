import { MAJOR_LINE } from '../../map/GridLines';
import {
    CHIYODA_NISHI_NIPPORI,
    OFFSET,
    YAMANOTE_AKIHABARA,
    YAMANOTE_KANDA,
    YAMANOTE_OKACHIMACHI,
    YAMANOTE_SHIMBASHI,
    YAMANOTE_TOKYO,
    YAMANOTE_UENO,
    YAMANOTE_YURAKUCHO,
} from '../../utils/CommonCoordinates';
import { curveFrom, ESE, Factor, N, offset, scale, startAtLocation, WNW } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

export const YAMANOTE_NISHI_NIPPORI = offset(CHIYODA_NISHI_NIPPORI, { dx: OFFSET });
export const YAMANOTE_USAIGUIDANI = offset(YAMANOTE_UENO, { dy: -MAJOR_LINE });
export const YAMANOTE_NIPPORI = offset(YAMANOTE_NISHI_NIPPORI, scale(ESE, (OFFSET * 8) / Factor.DOUBLE_DIAG));

const YamanotePath = () => {
    return (
        <path
            d={`
            ${startAtLocation(YAMANOTE_SHIMBASHI)}
            ${curveFrom({ start: YAMANOTE_SHIMBASHI, end: YAMANOTE_NISHI_NIPPORI, firstDirection: N, secondDirection: WNW })}
        `}
        />
    );
};

const Yamanote = () => {
    return (
        <g className="yamanote">
            <YamanotePath />
            <StopFromTokyo location={YAMANOTE_NISHI_NIPPORI} stationCode="JY 08" />
            <StopFromTokyo stationCode="JY 07" location={YAMANOTE_NIPPORI} />
            <StopFromTokyo stationCode="JY 06" location={YAMANOTE_USAIGUIDANI} />
            <StopFromTokyo stationCode="JY 05" location={YAMANOTE_UENO} />
            <StopFromTokyo stationCode="JY 04" location={YAMANOTE_OKACHIMACHI} />
            <StopFromTokyo location={YAMANOTE_AKIHABARA} stationCode="JY 03" />
            <StopFromTokyo location={YAMANOTE_KANDA} stationCode="JY 02" />
            <StopFromTokyo location={YAMANOTE_TOKYO} stationCode="JY 01" />
            <StopFromTokyo location={YAMANOTE_YURAKUCHO} stationCode="JY 30" />
            <StopFromTokyo location={YAMANOTE_SHIMBASHI} stationCode="JY 29" />
        </g>
    );
};

export default Yamanote;
