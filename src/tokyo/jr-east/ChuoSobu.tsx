import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
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
import { E, ENE, ESE, generatePoint, midPoint, N, offset, RADIUS, S, scale, scaleToUnitX, SSE, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JY_17, JY_18 } from './Yamanote';

const OCHANOMIZU = offset(CHUO_OCHANOMIZU, { dy: OFFSET * -1 });
const AKIHABARA = offset(YAMANOTE_AKIHABARA, { dx: OFFSET * 1.5, dy: OFFSET * -1 });
const KINSCHICHO = offset(SOBU_KINSCHICHO, scale(SSE, OFFSET));
export const CS_KAMEIDO = offset(ASAKUSA_KURAMAE, { dx: MAJOR_LINE * 5, dy: -MAJOR_LINE * 1.5 + OFFSET });
export const CS_KOIWA = offset(CS_KAMEIDO, { dy: -OFFSET - MAJOR_LINE * 2, dx: MAJOR_LINE * 0.5 });
export const CS_MOTOYAWATA = offset(
    generatePoint({ start: CS_KOIWA, endReference: offset(CS_KOIWA, { dx: MAJOR_LINE * 3.5 }), slope: ESE }),
    { dy: -MAJOR_LINE * 0.5 }
);
export const CS_NISHI_FUNABASHI = generatePoint({
    start: CS_MOTOYAWATA,
    endReference: offset(CS_MOTOYAWATA, { dx: MAJOR_LINE * 3 }),
    slope: ESE,
});
export const JB_31 = offset(CS_NISHI_FUNABASHI, { dx: MAJOR_LINE * 2.5, dy: OFFSET });
export const FUNABASHI_MIDPOINT = offset(midPoint(CS_NISHI_FUNABASHI, JB_31), { dx: OFFSET * 2 });
export const JB_17 = offset(OCHANOMIZU, { dx: -MAJOR_LINE * 3 + OFFSET * 0.5 });
export const JB_16 = offset(JB_17, { dy: MAJOR_LINE - OFFSET, dx: OFFSET * 0.5 - MAJOR_LINE * 2 - OFFSET * 4 });
export const JB_15 = { x: JB_16.x, y: OTEMACHI.y };
export const JB_14 = offset(JB_15, { dy: MAJOR_LINE * 1.5 });
export const JB_10 = offset(JY_17, { dx: OFFSET });
export const JB_13 = offset(JB_14, { dy: MAJOR_LINE * 0.5 - OFFSET, dx: OFFSET - MAJOR_LINE * 1.5 });
export const JB_12 = offset(JB_13, { dx: -MAJOR_LINE * 1.5 });
export const JB_09 = offset(JY_17, { dy: -MAJOR_LINE * 2, dx: -MAJOR_LINE * 1.5 });

export const CHUO_SPACING = MAJOR_LINE;

export const JB_07 = offset(JB_09, { dx: -CHUO_SPACING * 2 });
export const JB_04 = offset(JB_07, { dx: -CHUO_SPACING * 3 });
export const JB_01 = offset(JB_04, { dx: -CHUO_SPACING * 3 });
export const JB_33 = offset(JB_31, { dx: MAJOR_LINE * 3, dy: MAJOR_LINE });
const JB_33_SLOPE = scale(scaleToUnitX(ESE), MAJOR_LINE * 1.5);
export const JB_34 = offset(JB_33, JB_33_SLOPE);
const JB_34_SLOPE = scale(scaleToUnitX(ESE), MAJOR_LINE);
export const JB_35 = offset(JB_34, JB_34_SLOPE);
export const JB_37 = offset(JB_35, scale(JB_34_SLOPE, 2));
export const JB_39 = offset(JB_37, scale(JB_34_SLOPE, 2));
export const JB_27 = offset(CS_MOTOYAWATA, scale(scaleToUnitX(WNW), MAJOR_LINE * 1.5));
export const JB_25 = offset(generatePoint({ start: CS_KAMEIDO, slope: N, endReference: CS_KOIWA }), { dy: MAJOR_LINE * 0.5 });

export const ChuoSobuPath = () => {
    return (
        <SVGPath
            color="stroke-chuo-sobu"
            points={[JB_01, JB_10, JB_13, JB_14, JB_17, KINSCHICHO, CS_KAMEIDO, CS_KOIWA, CS_NISHI_FUNABASHI, JB_31, JB_39]}
            directions={[E, S, E, N, E, ENE, N, E, ESE, E, ESE]}
            radii={{ 1: RADIUS + OFFSET, 4: RADIUS + OFFSET, 6: RADIUS + (OFFSET * 2) / 2 }}
        />
    );
};

const ChuoSobuStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-chuo-sobu" />;
};

export const ChuoSobu = () => {
    return (
        <g className="chuo-sobu">
            <LineSegmentWithEndpoint
                strokeColor="stroke-chuo-sobu"
                stops={generateStationCodes('JB', 9, 1)}
                origin={JB_09}
                endpoint={JB_01}
            />
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
                endpoint={JB_25}
                strokeColor="stroke-chuo-sobu"
            />
            <ChuoSobuStop stationCode="JB 26" location={CS_KOIWA} />
            <LineSegmentWithEndpoint
                origin={JB_27}
                stops={generateStationCodes('JB', 27, 30)}
                endpoint={CS_NISHI_FUNABASHI}
                textAlignments={[TextAlignment.DOWN]}
                strokeColor="stroke-chuo-sobu"
            />
            <ChuoSobuStop stationCode="JB 31" location={JB_31} textAlignment={TextAlignment.DOWN} />
            <ChuoSobuStop stationCode="JB 32" location={offset(JB_33, scale(scaleToUnitX(WNW), MAJOR_LINE * 1.5))} />
            <ChuoSobuStop stationCode="JB 33" location={JB_33} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JB', 34, 39)}
                origin={JB_34}
                slope={JB_34_SLOPE}
                strokeColor="stroke-chuo-sobu"
            />
        </g>
    );
};
