import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import {
    KIKUKAWA,
    MORISHITA,
    OFFSET,
    OTEMACHI,
    SHINJUKU_BAKUROCHO,
    SOBU_KINSCHICHO,
    YAMANOTE_AKIHABARA,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, ENE, generatePoint, midPoint, N, offset, startAtLocation } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CS_MOTOYAWATA } from '../jr-east/ChuoSobu';
import StopFromTokyo from '../StopsFromTokyo';

const OGAWAMACHI = { x: OTEMACHI.x + MAJOR_LINE * 0.5 + OFFSET * 0.5, y: SHINJUKU_BAKUROCHO.y };

const ICHINOE = offset(offset(KIKUKAWA, { dx: MAJOR_LINE * 6 * 0.75, dy: MAJOR_LINE * -0.5 * 6 * 0.75 }), {
    dx: OFFSET * 2,
    dy: -OFFSET * 3,
});

export const S_13 = generatePoint({ start: KIKUKAWA, slope: ENE, endReference: SOBU_KINSCHICHO });
const S_14 = generatePoint({ start: KIKUKAWA, slope: ENE, endReference: { ...KIKUKAWA, x: KIKUKAWA.x + MAJOR_LINE * 1.5 } });

const MOTOYAWATA = offset(CS_MOTOYAWATA, { dy: OFFSET });

export const ShinjukuPath = () => {
    return (
        <path
            className="shinjuku"
            d={`
            ${startAtLocation(OGAWAMACHI)}
            ${curveFrom({ start: OGAWAMACHI, end: KIKUKAWA, firstDirection: E, secondDirection: ENE })}
            ${curveFrom({ start: KIKUKAWA, end: MOTOYAWATA, firstDirection: ENE, secondDirection: N })}        
        `}
        />
    );
};

const Shinjuku = () => {
    return (
        <g className="shinjuku">
            <ShinjukuPath />
            <StopFromTokyo stationCode="S 11" location={MORISHITA} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="S 10" location={midPoint(SHINJUKU_BAKUROCHO, MORISHITA)} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="S 09" location={SHINJUKU_BAKUROCHO} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="S 08" location={{ y: SHINJUKU_BAKUROCHO.y, x: YAMANOTE_AKIHABARA.x + MAJOR_LINE - OFFSET }} />
            <StopFromTokyo stationCode="S 07" location={OGAWAMACHI} textAlignment={TextAlignment.DOWN} />
            <StopFromTokyo stationCode="S 12" location={KIKUKAWA} />
            <StopFromTokyo stationCode="S 13" location={S_13} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('S', 14, 18)}
                origin={S_14}
                ystep={MAJOR_LINE * -0.5 * 0.75}
                xstep={MAJOR_LINE * 0.75}
            />
            <LineSegmentWithEndpoint stops={generateStationCodes('S', 19, 21)} origin={ICHINOE} endpoint={MOTOYAWATA} />
        </g>
    );
};

export default Shinjuku;
