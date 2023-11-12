import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JO_17, JY_25 } from './Shinagawa';
import { TOKYO_VERTICAL_GRID } from './TokyoStation';

const KEIKYU_STOP_SPACING = scaleToUnitX(S, OFFSET * 3);

export const KK_02 = offset(JO_17, { dx: OFFSET * 2, dy: MAJOR_LINE });
export const KK_04 = offset(KK_02, scale(KEIKYU_STOP_SPACING, 2));
export const KK_03 = offset(KK_02, KEIKYU_STOP_SPACING);
export const KK_07 = offset(KK_04, scale(KEIKYU_STOP_SPACING, 3));
export const KK_11 = offset(KK_07, scale(KEIKYU_STOP_SPACING, 4));
export const KK_18 = offset(KK_11, KEIKYU_STOP_SPACING);
export const KK_20 = offset(KK_18, scale(KEIKYU_STOP_SPACING, 2), { dx: -OFFSET * 2 });

const KEIKYU_KANAGAWA_SPACING = scaleToUnitX(SW, OFFSET * 3);
export const KK_27 = offset(KK_20, KEIKYU_KANAGAWA_SPACING);
export const KK_29 = offset(KK_27, scale(KEIKYU_KANAGAWA_SPACING, 2));
export const KK_32 = offset(KK_29, scale(KEIKYU_KANAGAWA_SPACING, 3));
export const KK_35 = offset(KK_32, scale(KEIKYU_KANAGAWA_SPACING, 3));

const Hatchonawate = () => {
    return (
        <g id="hatchonawate">
            <Stop stationCode="KK 27" location={KK_27} />
        </g>
    );
};

const KeikyuMain = () => {
    return (
        <>
            <LineSegmentWithStepChange
                origin={KK_02}
                slope={KEIKYU_STOP_SPACING}
                stops={[...generateStationCodes('KK', 2, 11), ...generateStationCodes('KK', 18, 19)]}
            />
            <Stop stationCode="KK 20" location={KK_20} />
            <LineSegmentWithStepChange
                origin={offset(KK_27, KEIKYU_KANAGAWA_SPACING)}
                slope={KEIKYU_KANAGAWA_SPACING}
                stops={generateStationCodes('KK', 28, 35)}
            />
        </>
    );
};

export const R_07 = { x: JY_25.x, y: midPoint(KK_03, KK_04).y };
export const JK_19 = offset(R_07, { dx: OFFSET, dy: -OFFSET * 0.5 });

export const JK_18 = offset(KK_07, { dx: -OFFSET * 4 });

const Oimachi = () => {
    return (
        <g id="oimachi">
            <Stop stationCode="R 07" location={R_07} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JK 19" location={JK_19} strokeColor="stroke-keihin-tohoku" hideText />
        </g>
    );
};

export const JK_17 = offset(KK_11, { dx: -OFFSET * 4 });
export const TM_07 = offset(JK_17, { dx: -OFFSET, dy: OFFSET * 0.5 });
export const IK_15 = offset(TM_07, { dy: -OFFSET });

const Kamata = () => {
    return (
        <g id="kamata">
            <Stop stationCode="JK 17" location={JK_17} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} hideText />
            <Stop stationCode="IK 15" location={IK_15} textAlignment={TextAlignment.UP} />
            <Stop stationCode="TM 07" location={TM_07} hideText />
        </g>
    );
};

const JK_DIAGONAL_OFFSET = scaleToUnitX(NW, OFFSET * 3.5);

export const JK_16 = offset(KK_20, JK_DIAGONAL_OFFSET);
export const JT_04 = offset(JK_16, scale(SE, OFFSET));

const Kawasaki = () => {
    return (
        <g id="kawasaki">
            <Stop stationCode="JK 16" location={JK_16} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JT 04" location={JT_04} strokeColor="stroke-tokaido" hideText />
        </g>
    );
};

export const JK_15 = offset(KK_29, JK_DIAGONAL_OFFSET);

const Tsurumi = () => {
    return (
        <g id="tsurumi">
            <Stop stationCode="JK 15" location={JK_15} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export const JK_13 = offset(KK_35, JK_DIAGONAL_OFFSET);
export const JH_13 = offset(JK_13, scale(NW, OFFSET));

const HigashiKanagawa = () => {
    return (
        <g id="tsurumi">
            <Stop stationCode="JK 13" location={JK_13} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JH 13" location={JH_13} strokeColor="stroke-yokohama" />
        </g>
    );
};

export const JK_12 = offset(JK_13, scale(KEIKYU_KANAGAWA_SPACING, 2));
export const JH_12 = offset(JK_12, scale(NW, OFFSET));
export const JO_13 = offset(JH_12, scale(NW, OFFSET));
export const JS_13 = offset(JO_13, scale(NW, OFFSET));
export const JT_05 = offset(JK_12, scale(SE, OFFSET));
export const KK_37 = offset(JT_05, scale(SE, OFFSET));
export const TY_21 = offset(JS_13, scale(NW, OFFSET), scale(NE, OFFSET * 0.5));
export const MM_01 = offset(TY_21, scale(SW, OFFSET));
export const YB_20 = offset(MM_01, scale(W, OFFSET));
const Yokohama = () => {
    return (
        <g id="yokohama">
            <Stop stationCode="JK 12" location={JK_12} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JK 12" location={JH_12} strokeColor="stroke-yokohama" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JO 13" location={JO_13} strokeColor="stroke-sobu-rapid" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JS 13" location={JS_13} strokeColor="stroke-shonan-shinjuku" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JT 05" location={JT_05} strokeColor="stroke-tokaido" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="KK 37" location={KK_37} />
            <Stop stationCode="TY 21" location={TY_21} />
            <Stop stationCode="MM 01" location={MM_01} />
            <Stop stationCode="YB 20" location={YB_20} strokeColor="stroke-yokohama-blue" />
        </g>
    );
};

export const MM_02 = offset(JK_12, scaleToUnitX(SE, MAJOR_LINE), scaleToUnitX(SW, MAJOR_LINE * 0.5));
const MM_SLOPE = scaleToUnitX(SE, MAJOR_LINE * 0.5);
export const MM_06 = offset(MM_02, scale(MM_SLOPE, 4));

const MinatoMirai = () => {
    return (
        <LineSegmentWithStepChange
            stops={generateStationCodes('MM', 2, 6)}
            origin={MM_02}
            strokeColor="stroke-fukutoshin"
            slope={MM_SLOPE}
        />
    );
};

export const KK_36 = midPoint(KK_35, KK_37);

const YOKOHAMA_GRID = scale(TOKYO_VERTICAL_GRID);

export const YB_19 = offset(MM_02, YOKOHAMA_GRID);

const NEGISHI_SLOPE = scale(MM_SLOPE, 1.5);
export const YB_16 = offset(YB_19, scale(NEGISHI_SLOPE, 2), scale(S, MAJOR_LINE));
const KAMIOOKA_SLOPE = scale(SW, OFFSET * 4);
export const YB_11 = offset(YB_16, scale(KAMIOOKA_SLOPE, 5));
export const YB_10 = offset(YB_11, scaleToUnitX(W, MAJOR_LINE), scaleToUnitX(S, MAJOR_LINE * 0.5));
const TOTSUKA_SLOPE = scaleToUnitX(W, MAJOR_LINE + OFFSET * 2);
export const YB_06 = offset(YB_10, scale(TOTSUKA_SLOPE, 4));
export const YB_01 = offset(YB_06, scale(TOTSUKA_SLOPE, 5));

const YokohamaBlueSouth = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('YB', 19, 17)}
                origin={YB_19}
                slope={NEGISHI_SLOPE}
                strokeColor="stroke-yokohama-blue"
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('YB', 16, 11)}
                origin={YB_16}
                slope={KAMIOOKA_SLOPE}
                strokeColor="stroke-yokohama-blue"
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('YB', 10, 1)}
                origin={YB_10}
                slope={TOTSUKA_SLOPE}
                strokeColor="stroke-yokohama-blue"
                textAlignments={[TextAlignment.DOWN]}
            />
        </>
    );
};

export const JK_11_YOKOHAMA = offset(YB_19, NEGISHI_SLOPE, scale(NE, OFFSET));
export const JK_11 = offset(JK_11_YOKOHAMA, scale(NE, OFFSET));

const Negishi = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('JK', 11, 8)}
                origin={JK_11}
                slope={NEGISHI_SLOPE}
                strokeColor="stroke-keihin-tohoku"
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JK', 11, 8)}
                origin={JK_11_YOKOHAMA}
                slope={NEGISHI_SLOPE}
                strokeColor="stroke-yokohama"
            />
        </>
    );
};

export const KK_38 = offset(YB_19, scale(YOKOHAMA_GRID, 2 / 3));
export const KK_39 = offset(KK_38, scaleToUnitX(S, MAJOR_LINE));
export const KK_44 = offset(YB_11, scaleToUnitX(W, OFFSET));
const GUMYOJI_SLOPE = scaleToUnitX(SE, OFFSET * 4);
export const KK_46 = offset(KK_44, scale(GUMYOJI_SLOPE, 2));
export const KK_47 = offset(KK_46, scaleToUnitX(E, MAJOR_LINE * 0.5), scaleToUnitX(S, MAJOR_LINE), scaleToUnitX(NW, OFFSET));
const TOMIOKA_SLOPE = scaleToUnitX(S, MAJOR_LINE * 0.5);
export const KK_55 = offset(KK_47, scale(TOMIOKA_SLOPE, 8));

const KeikyuMainSouth = () => {
    return (
        <>
            <Stop stationCode="KK 38" location={KK_38} />
            <LineSegmentWithStepChange stops={generateStationCodes('KK', 39, 42)} origin={KK_39} slope={KAMIOOKA_SLOPE} />
            <Stop stationCode="KK 43" location={offset(KK_44, scale(GUMYOJI_SLOPE, -1))} />
            <LineSegmentWithStepChange stops={generateStationCodes('KK', 44, 46)} origin={KK_44} slope={GUMYOJI_SLOPE} />
            <LineSegmentWithStepChange stops={generateStationCodes('KK', 47, 55)} origin={KK_47} slope={TOMIOKA_SLOPE} />
        </>
    );
};

export const JT_06 = offset(YB_06, scaleToUnitX(N, OFFSET * 0.5), scaleToUnitX(E, OFFSET));
export const JS_10 = offset(JT_06, scaleToUnitX(E, OFFSET));
export const JO_10 = offset(JS_10, scaleToUnitX(E, OFFSET));

export const JT_07 = offset(JT_06, scaleToUnitX(S, MAJOR_LINE * 1.5));
export const JS_09 = offset(JT_07, scaleToUnitX(E, OFFSET));
export const JO_09 = offset(JS_09, scaleToUnitX(E, OFFSET));

const TokaidoSouth = () => {
    return (
        <>
            <Stop stationCode="JS 10" location={JS_10} strokeColor="stroke-shonan-shinjuku" />
            <Stop stationCode="JO 10" location={JO_10} strokeColor="stroke-sobu-rapid" />
            <Stop stationCode="JT 06" location={JT_06} strokeColor="stroke-tokaido" />
            <Stop stationCode="JS 09" location={JS_09} strokeColor="stroke-shonan-shinjuku" />
            <Stop stationCode="JO 09" location={JO_09} strokeColor="stroke-sobu-rapid" />
            <Stop stationCode="JT 07" location={JT_07} strokeColor="stroke-tokaido" />
        </>
    );
};

export const JK_05_YOKOHAMA = offset(KK_46, scaleToUnitX(E, OFFSET * 2));
export const JK_05 = offset(JK_05_YOKOHAMA, scale(SE, OFFSET));

export const JK_01_YOKOHAMA = offset(JO_09, scaleToUnitX(E, OFFSET), scaleToUnitX(N, OFFSET * 0.5));
export const JK_01 = offset(JK_01_YOKOHAMA, scaleToUnitX(S, OFFSET));

const JK_01_SLOPE = scaleToUnitX(E, MAJOR_LINE * 1.75);
const JK_05_SLOPE = scaleToUnitX(NE, MAJOR_LINE * 1);

const NegishiSouth = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('JK', 5, 7)}
                origin={JK_05}
                slope={JK_05_SLOPE}
                strokeColor="stroke-keihin-tohoku"
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JK', 5, 7)}
                origin={JK_05_YOKOHAMA}
                slope={JK_05_SLOPE}
                strokeColor="stroke-yokohama"
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JK', 1, 4)}
                origin={JK_01}
                slope={JK_01_SLOPE}
                strokeColor="stroke-keihin-tohoku"
                stopsToHide={['JK 01']}
                textAlignments={[TextAlignment.DOWN]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JK', 1, 4)}
                origin={JK_01_YOKOHAMA}
                slope={JK_01_SLOPE}
                strokeColor="stroke-yokohama"
                stopsToHide={generateStationCodes('JK', 1, 4)}
            />
        </>
    );
};

export const JO_08 = offset(JO_09, scaleToUnitX(E, MAJOR_LINE * 0.5), scaleToUnitX(S, MAJOR_LINE));
export const JO_04 = offset(KK_55, scaleToUnitX(SE, MAJOR_LINE * 0.5));

const Yokosuka = () => {
    return (
        <>
            <Stop stationCode="JO 08" location={JO_08} strokeColor="stroke-sobu-rapid" />
            <Stop stationCode="JO 04" location={JO_04} strokeColor="stroke-sobu-rapid" />
        </>
    );
};

const KeihinTohokuGroup = () => {
    return (
        <>
            <Oimachi />
            <KeikyuMain />
            <Kamata />
            <Kawasaki />
            <Hatchonawate />
            <Tsurumi />
            <HigashiKanagawa />
            <Yokohama />
            <Stop stationCode="JK 18" location={JK_18} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
            <Stop
                stationCode="JK 14"
                location={offset(KK_32, JK_DIAGONAL_OFFSET)}
                strokeColor="stroke-keihin-tohoku"
                textAlignment={TextAlignment.LEFT}
            />
            <Stop stationCode="KK 36" location={KK_36} />
            <MinatoMirai />
            <KeikyuMainSouth />
            <YokohamaBlueSouth />
            <Negishi />
            <TokaidoSouth />
            <NegishiSouth />
            <Yokosuka />
        </>
    );
};

export default KeihinTohokuGroup;
