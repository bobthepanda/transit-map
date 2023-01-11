import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import {
    ASAKUSA_BAKUROCHO,
    ASAKUSA_KURAMAE,
    CHUO_OCHANOMIZU,
    CS_RYOGOKU,
    OFFSET,
    SOBU_KINSCHICHO,
    YAMANOTE_AKIHABARA,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, ENE, SSE, offset, scale, startAtLocation, N, RADIUS, generatePoint, W, midPoint, NNE } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import StopFromTokyo from '../StopsFromTokyo';

const OCHANOMIZU = offset(CHUO_OCHANOMIZU, { dy: OFFSET * -1 });
const AKIHABARA = offset(YAMANOTE_AKIHABARA, { dx: OFFSET * 1.5, dy: OFFSET * -1 });
const START = OCHANOMIZU;
const KINSCHICHO = offset(SOBU_KINSCHICHO, scale(SSE, OFFSET));
export const CS_KAMEIDO = offset(ASAKUSA_KURAMAE, { dx: MAJOR_LINE * 5, dy: -MAJOR_LINE * 1.5 + OFFSET });
export const CS_MOTOYAWATA = offset(CS_KAMEIDO, { dx: MAJOR_LINE * 3 - OFFSET, dy: -MAJOR_LINE * 2 - OFFSET });
export const CS_NISHI_FUNABASHI = offset(CS_MOTOYAWATA, { dx: MAJOR_LINE * 3 });
export const JB_31 = offset(CS_NISHI_FUNABASHI, { dx: MAJOR_LINE * 1.5 + OFFSET, dy: -OFFSET * 5 });
export const FUNABASHI_MIDPOINT = offset(midPoint(CS_NISHI_FUNABASHI, JB_31), { dx: OFFSET * 2 });

export const ChuoSobuPath = () => {
    return (
        <path
            d={`
            ${startAtLocation(START)}
            ${curveFrom({ start: START, end: KINSCHICHO, firstDirection: E, secondDirection: ENE })}
            ${curveFrom({ start: KINSCHICHO, end: CS_KAMEIDO, firstDirection: ENE, secondDirection: N, radius: RADIUS + OFFSET * 0.5 })}
            ${curveFrom({ start: CS_KAMEIDO, end: CS_NISHI_FUNABASHI, firstDirection: N, secondDirection: E })}
            ${curveFrom({ start: CS_NISHI_FUNABASHI, end: FUNABASHI_MIDPOINT, firstDirection: E, secondDirection: NNE })}
            ${curveFrom({ start: FUNABASHI_MIDPOINT, end: JB_31, firstDirection: NNE, secondDirection: E })}
        `}
        />
    );
};

export const CS_KOIWA = offset(generatePoint({ start: CS_MOTOYAWATA, slope: W, endReference: CS_KAMEIDO }), { dx: MAJOR_LINE * 0.5 });
export const ChuoSobu = () => {
    return (
        <g className="chuo-sobu">
            <ChuoSobuPath />
            <StopFromTokyo stationCode="JB 18" location={OCHANOMIZU} />
            <StopFromTokyo stationCode="JB 19" location={AKIHABARA} />
            <StopFromTokyo stationCode="JB 20" location={{ y: OCHANOMIZU.y, x: ASAKUSA_BAKUROCHO.x + OFFSET * 0.5 }} />
            <StopFromTokyo stationCode="JB 21" location={CS_RYOGOKU} />
            <StopFromTokyo stationCode="JB 22" location={KINSCHICHO} />
            <LineSegmentWithEndpoint
                origin={CS_KAMEIDO}
                stops={generateStationCodes('JB', 23, 25)}
                endpoint={offset(generatePoint({ start: CS_KAMEIDO, slope: N, endReference: CS_MOTOYAWATA }), { dy: MAJOR_LINE * 0.5 })}
            />
            <LineSegmentWithEndpoint
                origin={CS_MOTOYAWATA}
                stops={generateStationCodes('JB', 28, 26)}
                endpoint={CS_KOIWA}
                textAlignments={[TextAlignment.DOWN]}
            />
            <LineSegmentWithEndpoint
                origin={CS_MOTOYAWATA}
                stops={generateStationCodes('JB', 28, 30)}
                endpoint={CS_NISHI_FUNABASHI}
                textAlignments={[TextAlignment.DOWN]}
            />
            <StopFromTokyo stationCode="JB 31" location={JB_31} textAlignment={TextAlignment.DOWN} />
        </g>
    );
};
