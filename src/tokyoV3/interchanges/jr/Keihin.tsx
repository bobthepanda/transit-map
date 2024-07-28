import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, NW, S, SE, SW, W, findIntersectionFromSlopes, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { R_08 } from '../InsideYamanote/Osaki';
import { JK_20 } from '../InsideYamanote/Shinagawa';
import { NAMBU_SLOPE } from './NAMBU_SLOPE';

const OIMACHI_INTERSECTION = findIntersectionFromSlopes({ start: R_08, firstDirection: S, secondDirection: SW, end: JK_20 });

export const R_07 = offset(OIMACHI_INTERSECTION, scaleToUnitX(N, OFFSET));
export const OM_01 = offset(R_07, scale(W, OFFSET));
export const JK_19 = offset(OIMACHI_INTERSECTION, scaleToUnitX(NE, OFFSET));
const KEIKYU_SW_OFFSET = scaleToUnitX(SE, OFFSET * 3);
const KEIKYU_SE_STOP_SPACING = scaleToUnitX(SW, OFFSET * 3);
const SHINAGAWA_NE_STOP_SPACING = scaleToUnitX(NE, MAJOR_LINE * 0.5);
export const KK_04 = offset(JK_19, KEIKYU_SW_OFFSET);
const Oimachi = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('KK', 4, 2)}
                origin={KK_04}
                textAlignments={[TextAlignment.SE]}
                slope={SHINAGAWA_NE_STOP_SPACING}
            />
            <g id="oimachi">
                <Stop stationCode="OM 01" location={OM_01} textAlignment={TextAlignment.SW} />
                <Stop stationCode="R 07" location={R_07} hideText />
                <Stop stationCode="JK 19" location={JK_19} hideText strokeColor="stroke-keihin-tohoku" />
            </g>
        </>
    );
};

export const JK_18 = offset(JK_19, scale(KEIKYU_SE_STOP_SPACING, 3));
export const KK_07 = offset(JK_18, KEIKYU_SW_OFFSET);

const Omori = () => {
    return (
        <>
            <Stop stationCode="JK 18" location={JK_18} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.NW} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KK', 7, 5)}
                origin={KK_07}
                textAlignments={[TextAlignment.SE]}
                slope={scale(KEIKYU_SE_STOP_SPACING, -1)}
            />
        </>
    );
};

export const JK_17 = offset(JK_18, scale(KEIKYU_SE_STOP_SPACING, 4));
export const KK_11 = offset(JK_17, KEIKYU_SW_OFFSET);
export const TM_07 = offset(JK_17, scale(N, OFFSET));
export const IK_15 = offset(TM_07, scale(NE, OFFSET));

const Kamata = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('KK', 11, 7)}
                origin={KK_11}
                skipBeginning
                textAlignments={[TextAlignment.SE]}
                slope={scale(KEIKYU_SE_STOP_SPACING, -1)}
            />
            <g id="kamata">
                <Stop stationCode="JK 17" location={JK_17} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="KK 11" location={KK_11} textAlignment={TextAlignment.SE} />
                <Stop stationCode="TM 07" location={TM_07} hideText />
                <Stop stationCode="IK 15" location={IK_15} hideText />
            </g>
        </>
    );
};

export const JK_16 = offset(JK_17, scale(KEIKYU_SE_STOP_SPACING, 3));
export const JT_04 = offset(JK_16, scale(SE, OFFSET));
export const JN_01 = offset(JK_16, scale(W, OFFSET));
export const KK_20 = offset(JK_16, KEIKYU_SW_OFFSET);
export const NAMBU_KAWASAKI_SLOPE = scaleToUnitX(NW, MAJOR_LINE - OFFSET * 0.5);

export const JN_06 = offset(JN_01, scale(NAMBU_KAWASAKI_SLOPE, 5));
const JN_08 = offset(JN_06, scale(NAMBU_KAWASAKI_SLOPE, 2));
export const JN_09 = offset(JN_08, scale(NAMBU_KAWASAKI_SLOPE, 0.5), scale(NAMBU_SLOPE, -0.5));

const Kawasaki = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('KK', 20, 18)}
                origin={KK_20}
                skipBeginning
                textAlignments={[TextAlignment.SE]}
                slope={scale(KEIKYU_SE_STOP_SPACING, -1)}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JN', 1, 8)}
                slope={NAMBU_KAWASAKI_SLOPE}
                stopsToSkip={['JN 01', 'JN 07', 'JN 04']}
                strokeColor="stroke-nambu"
                origin={JN_01}
                textAlignments={[TextAlignment.NE]}
            />
            <g id="kawasaki">
                <Stop stationCode="JK 16" location={JK_16} strokeColor="stroke-keihin-tohoku" hideText />
                <Stop stationCode="JT 04" location={JT_04} strokeColor="stroke-tokaido" hideText />
                <Stop stationCode="JN 01" location={JN_01} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="KK 20" location={KK_20} textAlignment={TextAlignment.SE} />
            </g>
        </>
    );
};

export const Keihin = () => {
    return (
        <>
            <Oimachi />
            <Omori />
            <Kamata />
            <Kawasaki />
        </>
    );
};
