import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, findIntersectionFromSlopes, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
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

const KEIKYU_YOKOHAMA_SPACING = scaleToUnitX(W, OFFSET * 6);
const JK_YOKOHAMA_OFFSET = scaleToUnitX(N, OFFSET * 6);
export const KK_27 = offset(KK_20, scale(KEIKYU_SE_STOP_SPACING, 2), scale(KEIKYU_YOKOHAMA_SPACING, 0.5));
export const JN_51 = offset(KK_27, scaleToUnitX(S, OFFSET), scaleToUnitX(E, OFFSET * 0.5));

const HatchoNawate = () => {
    return (
        <>
            <g id="hatcho-nawate">
                <Stop stationCode="KK 27" location={KK_27} hideText />
                <Stop stationCode="JN 51" location={JN_51} strokeColor="stroke-nambu" />
            </g>
            <Stop stationCode="KK 28" location={offset(KK_27, KEIKYU_YOKOHAMA_SPACING)} textAlignment={TextAlignment.UP} />
        </>
    );
};

export const KK_29 = offset(KK_27, scale(KEIKYU_YOKOHAMA_SPACING, 2));
export const JK_15 = offset(KK_29, JK_YOKOHAMA_OFFSET);
export const JI_01 = offset(JK_15, scaleToUnitX(N, OFFSET), scaleToUnitX(E, OFFSET * 0.5));
const Tsurumi = () => {
    return (
        <>
            <g id="tsurumi">
                <Stop stationCode="JK 15" location={JK_15} strokeColor="stroke-keihin-tohoku" hideText />
                <Stop stationCode="KK 29" location={KK_29} textAlignment={TextAlignment.DOWN} />
                <Stop stationCode="JI 01" location={JI_01} strokeColor="stroke-tsurumi" />
            </g>
            <LineSegmentWithStepChange
                stops={generateStationCodes('KK', 29, 36)}
                origin={KK_29}
                slope={KEIKYU_YOKOHAMA_SPACING}
                stopsToSkip={['KK 29', 'KK 32', 'KK 35']}
                textAlignments={[TextAlignment.DOWN, TextAlignment.UP]}
            />
        </>
    );
};

export const KK_32 = offset(KK_29, scale(KEIKYU_YOKOHAMA_SPACING, 3));
export const JK_14 = offset(KK_32, JK_YOKOHAMA_OFFSET);
const ShinKoyusu = () => {
    return (
        <g id="shin-koyosu">
            <Stop stationCode="JK 14" location={JK_14} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.UP} />
            <Stop stationCode="KK 32" location={KK_32} textAlignment={TextAlignment.UP} />
        </g>
    );
};

export const KK_35 = offset(KK_32, scale(KEIKYU_YOKOHAMA_SPACING, 3));
export const JK_13 = offset(KK_35, JK_YOKOHAMA_OFFSET);
export const JH_13 = offset(JK_13, scale(N, OFFSET));
const HigashiKanagawa = () => {
    return (
        <g id="higashi-kanagawa">
            <Stop stationCode="JH 13" location={JH_13} strokeColor="stroke-yokohama" textAlignment={TextAlignment.UP} />
            <Stop stationCode="JK 13" location={JK_13} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="KK 35" location={KK_35} textAlignment={TextAlignment.DOWN} />
        </g>
    );
};

export const KK_37 = offset(KK_35, scale(KEIKYU_YOKOHAMA_SPACING, 2));
export const JK_12 = offset(KK_37, JK_YOKOHAMA_OFFSET);
export const JT_05 = offset(JK_12, scale(S, OFFSET));
export const JH_12 = offset(JK_12, scale(N, OFFSET));
export const JS_13 = offset(JT_05, scale(S, OFFSET));
export const JO_13 = offset(JS_13, scale(S, OFFSET));
export const TY_21 = offset(JO_13, scale(S, OFFSET), scale(W, OFFSET * 0.5));
export const MM_01 = offset(TY_21, scale(S, OFFSET));
export const YB_20 = offset(TY_21, scale(S, OFFSET * 0.5), scale(W, OFFSET));
export const SO_01 = offset(YB_20, scale(W, OFFSET));
const Yokohama = () => {
    return (
        <g id="yokohama">
            <Stop stationCode="JS 13" location={JS_13} strokeColor="stroke-shonan-shinjuku" hideText />
            <Stop stationCode="JO 13" location={JO_13} strokeColor="stroke-sobu-rapid" hideText />
            <Stop stationCode="JK 12" location={JH_12} strokeColor="stroke-yokohama" textAlignment={TextAlignment.UP} />
            <Stop stationCode="JK 12" location={JK_12} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="JT 05" location={JT_05} strokeColor="stroke-tokaido" hideText />
            <Stop stationCode="KK 37" location={KK_37} hideText />
            <Stop stationCode="TY 21" location={TY_21} hideText />
            <Stop stationCode="MM 01" location={MM_01} hideText />
            <Stop stationCode="YB 20" location={YB_20} hideText />
            <Stop stationCode="SO 01" location={SO_01} hideText />
        </g>
    );
};

export const Keihin = () => {
    return (
        <>
            <Oimachi />
            <Omori />
            <Kamata />
            <Kawasaki />
            <HatchoNawate />
            <Tsurumi />
            <ShinKoyusu />
            <HigashiKanagawa />
            <Yokohama />
        </>
    );
};
