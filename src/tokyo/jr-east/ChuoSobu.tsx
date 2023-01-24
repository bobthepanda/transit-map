import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import {
    ASAKUSA_BAKUROCHO,
    ASAKUSA_KURAMAE,
    CHUO_OCHANOMIZU,
    CS_RYOGOKU,
    OFFSET,
    OTEMACHI,
    SOBU_KINSCHICHO,
    YAMANOTE_AKIHABARA,
} from '../../utils/CommonCoordinates';
import { E, ENE, generatePoint, midPoint, N, NNE, offset, RADIUS, S, scale, SSE, W } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JY_17, JY_18 } from './Yamanote';

const OCHANOMIZU = offset(CHUO_OCHANOMIZU, { dy: OFFSET * -1 });
const AKIHABARA = offset(YAMANOTE_AKIHABARA, { dx: OFFSET * 1.5, dy: OFFSET * -1 });
const KINSCHICHO = offset(SOBU_KINSCHICHO, scale(SSE, OFFSET));
export const CS_KAMEIDO = offset(ASAKUSA_KURAMAE, { dx: MAJOR_LINE * 5, dy: -MAJOR_LINE * 1.5 + OFFSET });
export const CS_MOTOYAWATA = offset(CS_KAMEIDO, { dx: MAJOR_LINE * 3 - OFFSET, dy: -MAJOR_LINE * 2 - OFFSET });
export const CS_NISHI_FUNABASHI = offset(CS_MOTOYAWATA, { dx: MAJOR_LINE * 3 });
export const JB_31 = offset(CS_NISHI_FUNABASHI, { dx: MAJOR_LINE * 1.5 + OFFSET, dy: -OFFSET * 5 });
export const FUNABASHI_MIDPOINT = offset(midPoint(CS_NISHI_FUNABASHI, JB_31), { dx: OFFSET * 2 });
export const JB_17 = offset(OCHANOMIZU, { dx: -MAJOR_LINE * 3 + OFFSET * 0.5 });
export const JB_16 = offset(JB_17, { dy: OFFSET * 2, dx: OFFSET * 0.5 - MAJOR_LINE * 2 - OFFSET * 4 });
export const JB_15 = { x: JB_16.x, y: OTEMACHI.y };
export const JB_14 = offset(JB_15, { dy: MAJOR_LINE * 1.5 });
export const JB_10 = offset(JY_17, { dx: OFFSET });
export const JB_13 = offset(JB_14, { dy: MAJOR_LINE * 0.5 - OFFSET, dx: OFFSET - MAJOR_LINE * 1.5 });
export const JB_12 = offset(JB_13, { dx: -MAJOR_LINE * 1.5 });

export const ChuoSobuPath = () => {
    return (
        <SVGPath
            color="stroke-chuo-sobu"
            points={[JB_10, JB_13, JB_14, JB_17, KINSCHICHO, CS_KAMEIDO, CS_NISHI_FUNABASHI, FUNABASHI_MIDPOINT, JB_31]}
            directions={[S, E, N, E, ENE, N, E, NNE, E]}
            radii={{ 3: RADIUS + OFFSET, 5: RADIUS + (OFFSET * 2) / 2 }}
        />
    );
};

const ChuoSobuStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-chuo-sobu" />;
};

export const CS_KOIWA = offset(generatePoint({ start: CS_MOTOYAWATA, slope: W, endReference: CS_KAMEIDO }), { dx: MAJOR_LINE * 0.5 });
export const ChuoSobu = () => {
    return (
        <g className="chuo-sobu">
            <ChuoSobuPath />
            <ChuoSobuStop stationCode="JB 10" location={JB_10} />
            <ChuoSobuStop stationCode="JB 11" location={offset(JY_18, { dx: OFFSET })} />
            <ChuoSobuStop stationCode="JB 13" location={JB_13} textAlignment={TextAlignment.UP} />
            <ChuoSobuStop stationCode="JB 12" location={JB_12} textAlignment={TextAlignment.UP} />
            <ChuoSobuStop stationCode="JB 14" location={JB_14} />
            <ChuoSobuStop stationCode="JB 15" location={JB_15} />
            <ChuoSobuStop stationCode="JB 16" location={JB_16} />
            <ChuoSobuStop stationCode="JB 17" location={JB_17} />
            <ChuoSobuStop stationCode="JB 18" location={OCHANOMIZU} />
            <ChuoSobuStop stationCode="JB 19" location={AKIHABARA} />
            <ChuoSobuStop stationCode="JB 20" location={{ y: OCHANOMIZU.y, x: ASAKUSA_BAKUROCHO.x + OFFSET * 0.5 }} />
            <ChuoSobuStop stationCode="JB 21" location={CS_RYOGOKU} />
            <ChuoSobuStop stationCode="JB 22" location={KINSCHICHO} />
            <LineSegmentWithEndpoint
                origin={CS_KAMEIDO}
                stops={generateStationCodes('JB', 23, 25)}
                endpoint={offset(generatePoint({ start: CS_KAMEIDO, slope: N, endReference: CS_MOTOYAWATA }), { dy: MAJOR_LINE * 0.5 })}
                strokeColor="stroke-chuo-sobu"
            />
            <LineSegmentWithEndpoint
                origin={CS_MOTOYAWATA}
                stops={generateStationCodes('JB', 28, 26)}
                endpoint={CS_KOIWA}
                textAlignments={[TextAlignment.DOWN]}
                strokeColor="stroke-chuo-sobu"
            />
            <LineSegmentWithEndpoint
                origin={CS_MOTOYAWATA}
                stops={generateStationCodes('JB', 28, 30)}
                endpoint={CS_NISHI_FUNABASHI}
                textAlignments={[TextAlignment.DOWN]}
                strokeColor="stroke-chuo-sobu"
            />
            <ChuoSobuStop stationCode="JB 31" location={JB_31} textAlignment={TextAlignment.DOWN} />
        </g>
    );
};
