import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { DT_01, JA_10 } from './Hamamatsucho';
import { KO_07 } from './Keio';
import { JN_07, JN_10 } from './Nambu';
import { OH_10 } from './Odakyu';
import { JS_17, MG_01 } from './Shinagawa';
import { IK_15, R_07, TM_07 } from './Tokaido';
import { DT_22, TY_16 } from './Yokohama';

export const OM_01 = offset(R_07, { dy: OFFSET });
export const OM_16 = offset(JN_10, { dy: -OFFSET * 2 });
export const OM_DT_09 = offset(OM_16, scaleToUnitX(E, OFFSET * 4), scale(N, OFFSET * 4));
const OIMACHI_SLOPE = scaleToUnitX(W, OFFSET * 4);
const MIZONOKUCHI_SLOPE = scaleToUnitX(N, OFFSET * 6);

const COMMON_OIMACHI_STOPS = ['DT 09', 'DT 08', 'OM 15'];
const OM_08 = offset(OM_01, scale(OIMACHI_SLOPE, 7));
const OM_10 = { y: OM_01.y, x: JA_10.x - OFFSET * 0.5 };
const Oimachi = () => {
    return (
        <>
            <Stop stationCode="OM 16" location={OM_16} />
            <LineSegmentWithStepChange
                stops={COMMON_OIMACHI_STOPS}
                slope={MIZONOKUCHI_SLOPE}
                origin={OM_DT_09}
                stopsToHide={COMMON_OIMACHI_STOPS}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('OM', 1, 8)}
                slope={OIMACHI_SLOPE}
                origin={OM_01}
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
                stopsToHide={['OM 08', 'OM 06', 'OM 04', 'OM 10', 'OM 01']}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('OM', 10, 14)}
                slope={OIMACHI_SLOPE}
                origin={OM_10}
                textAlignments={[TextAlignment.DOWN, TextAlignment.UP]}
                stopsToHide={['OM 08', 'OM 06', 'OM 04', 'OM 10']}
            />
            <Stop stationCode="OM 09" location={midPoint(OM_08, OM_10)} textAlignment={TextAlignment.UP} />
        </>
    );
};

export const DT_10 = offset(OM_16, scale(N, OFFSET));
export const DT_09 = offset(OM_DT_09, scale(W, OFFSET));
export const DT_07 = offset(DT_09, scale(MIZONOKUCHI_SLOPE, 2));
const SHIBUYA_OFFSET = scaleToUnitX(SW, OFFSET * 5);
const DT_02 = offset(DT_01, scaleToUnitX(SW, MAJOR_LINE));
const DT_03 = offset(DT_02, scale(SHIBUYA_OFFSET, 1));
// const MIZONOKUCHI_SLOPE_S = scaleToUnitX(W, MAJOR_LINE);
// const NAGATSUTA_SLOPE = scaleToUnitX(N, MAJOR_LINE);
const DT_11 = offset(DT_10, { dx: -MAJOR_LINE - OFFSET * 2 });
export const DT_12 = offset(DT_11, scaleToUnitX(W, OFFSET * 2), scaleToUnitX(SW, OFFSET * 2));
const NAGATSUTA_SLOPE = scaleToUnitX(SW, OFFSET * 2);
const DenEnToshi = () => {
    return (
        <>
            <Stop stationCode="DT 10" location={DT_10} />
            <Stop stationCode="DT 11" location={DT_11} textAlignment={TextAlignment.DOWN} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('DT', 12, 21)}
                origin={DT_12}
                slope={NAGATSUTA_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('DT', 9, 6)}
                slope={MIZONOKUCHI_SLOPE}
                origin={DT_09}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('DT', 2, 5)}
                slope={SHIBUYA_OFFSET}
                origin={DT_02}
                textAlignments={[TextAlignment.LEFT, TextAlignment.RIGHT]}
            />
            <Stop stationCode="DT 22" location={DT_22} />
        </>
    );
};

export const TY_07 = offset(OM_10, { dx: -OFFSET * 0.5, dy: OFFSET });

const JIYUGAYOKA_SLOPE_N = scaleToUnitX(N, OFFSET * 4.5);

const OFFSET_TY_07 = offset(TY_07, { dy: -MINOR_LINE });
export const TY_03 = offset(OFFSET_TY_07, scale(JIYUGAYOKA_SLOPE_N, 4));
export const H_01 = offset(TY_03, scale(E, OFFSET));
export const TY_02 = offset(TY_03, scaleToUnitX(NW, OFFSET * 2), scaleToUnitX(N, OFFSET * 2));
export const TY_11 = offset(JN_07, { dx: OFFSET * 0.5, dy: OFFSET });
const JIYUGAYOKA_SLOPE_S = scaleToUnitX(N, MAJOR_LINE);
export const TY_08 = offset(TY_11, scale(JIYUGAYOKA_SLOPE_S, 3));
const YOKOHAMA_SLOPE = scaleToUnitX(S, OFFSET * 2.5);
const KIKUNA_SLOPE = scaleToUnitX(S, OFFSET * 2.75);
export const TY_20 = offset(TY_16, scale(YOKOHAMA_SLOPE, 3), scaleToUnitX(S, OFFSET * 2), scaleToUnitX(SE, OFFSET * 1.5));

const Toyoko = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('TY', 7, 2)}
                origin={OFFSET_TY_07}
                slope={JIYUGAYOKA_SLOPE_N}
                skipBeginning
                textAlignments={[TextAlignment.LEFT]}
            />
            <Stop stationCode="TY 07" location={TY_07} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="H 01" location={H_01} strokeColor="stroke-hibiya" hideText />
            <LineSegmentWithStepChange
                stops={generateStationCodes('TY', 11, 9)}
                origin={TY_11}
                skipBeginning
                slope={JIYUGAYOKA_SLOPE_S}
                stopsToHide={generateStationCodes('TY', 11, 9)}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('TY', 11, 15)}
                origin={TY_11}
                slope={KIKUNA_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('TY', 16, 19)}
                origin={TY_16}
                slope={YOKOHAMA_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />
            <Stop stationCode="TY 08" location={TY_08} hideText />
            <Stop stationCode="TY 20" location={TY_20} />
        </>
    );
};

export const MG_06 = offset(OM_08, { dx: -OFFSET * 0.5, dy: OFFSET });
const MEGURO_SLOPE = scaleToUnitX(N, OFFSET * 3);
export const MG_02 = offset(MG_01, scaleToUnitX(SW, OFFSET * 4));
export const MG_11 = offset(TY_11, scale(E, OFFSET));
export const MG_08 = offset(TY_08, scale(E, OFFSET));
export const MG_07 = midPoint(MG_06, MG_08);

const Meguro = () => {
    return (
        <>
            <Stop stationCode="MG 06" location={MG_06} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('MG', 5, 4)}
                slope={MEGURO_SLOPE}
                origin={offset(MG_06, MEGURO_SLOPE, { dy: -OFFSET * 0.5 })}
            />
            <Stop stationCode="MG 02" location={MG_02} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="MG 03" location={offset(MG_02, scaleToUnitX(SW, OFFSET * 2.5))} textAlignment={TextAlignment.LEFT} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('MG', 11, 9)}
                origin={MG_11}
                slope={JIYUGAYOKA_SLOPE_S}
                stopsToHide={['MG 09', 'MG 11']}
            />
            <Stop stationCode="MG 08" location={MG_08} />
            <Stop stationCode="MG 07" location={MG_07} />
        </>
    );
};

export const TM_01 = offset(MG_11, scale(JIYUGAYOKA_SLOPE_S, 2), { dx: OFFSET });
const TAMAGAWA_SLOPE = scaleToUnitX(W, OFFSET * 5.5);

const Tamagawa = () => {
    return (
        <>
            <Stop stationCode="TM 01" location={TM_01} />
            <LineSegmentWithStepChange
                skipBeginning
                origin={TM_07}
                stops={generateStationCodes('TM', 7, 2)}
                slope={TAMAGAWA_SLOPE}
                textAlignments={[TextAlignment.DOWN]}
            />
        </>
    );
};

const OM_06 = offset(OM_08, scale(OIMACHI_SLOPE, -2));
const OM_04 = offset(OM_06, scale(OIMACHI_SLOPE, -2));
export const A_03 = offset(OM_04, { dx: -OFFSET * 0.5, dy: OFFSET });
export const IK_05 = offset(OM_06, { dx: -OFFSET * 0.5, dy: OFFSET });
const GOTANDA_SLOPE = scaleToUnitX(N, OFFSET * 2);
export const IK_14 = offset(IK_15, scaleToUnitX(NW, OFFSET * 2), scaleToUnitX(W, OFFSET * 2));
const KAMATA_SLOPE = scaleToUnitX(W, OFFSET * 4);
const HATANODAI_SLOPE = scaleToUnitX(S, OFFSET * 3);

const Ikegami = () => {
    return (
        <>
            <LineSegmentWithStepChange stops={generateStationCodes('IK', 5, 10)} origin={IK_05} slope={HATANODAI_SLOPE} />
            <LineSegmentWithStepChange
                origin={offset(IK_05, { dy: -OFFSET * 3.5 })}
                slope={GOTANDA_SLOPE}
                stops={generateStationCodes('IK', 4, 2)}
            />
            <LineSegmentWithStepChange
                origin={IK_14}
                slope={KAMATA_SLOPE}
                stops={generateStationCodes('IK', 14, 11)}
                textAlignments={[TextAlignment.UP]}
            />
        </>
    );
};

const ASAKUSA_SLOPE = scaleToUnitX(S, OFFSET * 3);
export const A_01 = offset(A_03, scale(ASAKUSA_SLOPE, 2));

const AsakusaStops = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('A', 3, 1)}
                origin={A_03}
                strokeColor="stroke-asakusa"
                slope={ASAKUSA_SLOPE}
            />
            <Stop stationCode="A 04" location={offset(A_03, scaleToUnitX(S, OFFSET * -4.5))} strokeColor="stroke-asakusa" />
        </>
    );
};

export const SG_01 = offset(DT_03, { dx: -OFFSET });
export const SG_08 = offset(OH_10, { dx: -OFFSET * 2 });
export const SG_10 = offset(KO_07, { dy: OFFSET });
const SETAGAYA_SLOPE = scaleToUnitX(W, OFFSET * 4);
const YAMASHITA_SLOPE = scaleToUnitX(SE, OFFSET * 2);

const Setagaya = () => {
    return (
        <>
            <LineSegmentWithStepChange
                origin={SG_01}
                stops={generateStationCodes('SG', 1, 2)}
                slope={SETAGAYA_SLOPE}
                textAlignments={[TextAlignment.DOWN]}
                stopsToHide={['SG 01']}
            />
            <LineSegmentWithStepChange
                origin={offset(SG_08, scaleToUnitX(SE, OFFSET * 2.5))}
                stops={generateStationCodes('SG', 7, 3)}
                slope={YAMASHITA_SLOPE}
            />
            <Stop stationCode="SG 08" location={SG_08} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="SG 09" location={offset(SG_10, scaleToUnitX(S, MAJOR_LINE * 1.5))} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="SG 10" location={SG_10} hideText />
        </>
    );
};

export const JS_15 = offset(MG_11, scaleToUnitX(E, OFFSET));
export const JO_15 = offset(JS_15, scaleToUnitX(E, OFFSET));

export const JO_14 = offset(JO_15, scaleToUnitX(S, OFFSET * 2), scaleToUnitX(SE, MAJOR_LINE + OFFSET));
export const JS_14 = offset(JO_14, scale(SW, OFFSET));

export const JO_15_CURVE = offset(JO_15, scaleToUnitX(N, OFFSET * 2), scaleToUnitX(NE, OFFSET * 2));
export const JS_15_CURVE = offset(JO_15_CURVE, scale(NW, OFFSET));

const OSAKI_OFFSET = OFFSET * 3;

export const JS_17_CURVE = offset(JS_17, scaleToUnitX(SE, OSAKI_OFFSET));
export const JO_17_FIRST_CURVE = offset(JS_17, scaleToUnitX(E, OSAKI_OFFSET * 2 + OFFSET));
export const JO_17_SECOND_CURVE = offset(JS_17_CURVE, scaleToUnitX(E, OFFSET));

export const JS_16 = offset(A_01, scaleToUnitX(S, MAJOR_LINE + OFFSET), scaleToUnitX(E, OFFSET * 4.5));
export const JO_16 = offset(JS_16, scaleToUnitX(S, OFFSET));

const SobuStops = () => {
    return (
        <>
            <Stop location={JS_16} stationCode="JS 16" strokeColor="stroke-shonan-shinjuku" textAlignment={TextAlignment.UP} />
            <Stop location={JO_16} stationCode="JO 16" strokeColor="stroke-sobu-rapid" hideText />
            <Stop location={JS_15} stationCode="JS 15" strokeColor="stroke-shonan-shinjuku" hideText />
            <Stop location={JO_15} stationCode="JO 15" strokeColor="stroke-sobu-rapid" hideText />
            <Stop location={JS_14} stationCode="JS 14" strokeColor="stroke-shonan-shinjuku" hideText />
            <Stop location={JO_14} stationCode="JO 14" strokeColor="stroke-sobu-rapid" />
        </>
    );
};

const TokyuGroup = () => {
    return (
        <>
            <Oimachi />
            <DenEnToshi />
            <Meguro />
            <Toyoko />
            <Ikegami />
            <AsakusaStops />
            <Tamagawa />
            <Setagaya />
            <SobuStops />
        </>
    );
};

export default TokyuGroup;
