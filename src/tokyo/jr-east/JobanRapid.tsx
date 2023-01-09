import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { OFFSET, YAMANOTE_UENO } from '../../utils/CommonCoordinates';
import { curveFrom, E, N, offset, scale, SSW, startAtLocation, WNW } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { HIBIYA_KITA_SENJU } from '../tokyo-metro/Hibiya';
import { YAMANOTE_NIPPORI } from './Yamanote';

const UENO = offset(YAMANOTE_UENO, { dx: -OFFSET });
const NIPPORI = offset(YAMANOTE_NIPPORI, scale(SSW, OFFSET));
const JJ_03 = offset(UENO, { dy: MAJOR_LINE * -2.5 });
const JJ_05 = offset(HIBIYA_KITA_SENJU, { dx: -OFFSET });
const CURVE_POINT = { x: YAMANOTE_NIPPORI.x - OFFSET * 2, y: JJ_03.y + OFFSET * 2 };

export const JobanRapidPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(UENO)}
        ${curveFrom({ start: UENO, end: NIPPORI, firstDirection: N, secondDirection: WNW })}
        ${curveFrom({ start: NIPPORI, end: CURVE_POINT, firstDirection: WNW, secondDirection: N, radius: MINOR_LINE * 3 })}
        ${curveFrom({ start: CURVE_POINT, end: JJ_03, firstDirection: N, secondDirection: E, radius: MINOR_LINE * 3 })}
        ${curveFrom({ start: JJ_03, end: JJ_05, firstDirection: E, secondDirection: N })}
    `}
        />
    );
};

const JobanRapid = () => {
    return (
        <g className="joban-rapid">
            <JobanRapidPath />
            <StopFromTokyo stationCode="JJ 01" location={UENO} />
            <StopFromTokyo stationCode="JJ 02" location={NIPPORI} />
            <StopFromTokyo stationCode="JJ 03" location={JJ_03} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="JJ 04" location={offset(JJ_05, { dy: MAJOR_LINE })} />
            <StopFromTokyo stationCode="JJ 05" location={JJ_05} />
        </g>
    );
};

export default JobanRapid;
