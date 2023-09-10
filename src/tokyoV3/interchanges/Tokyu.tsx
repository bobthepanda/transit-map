import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, SW, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { DT_01 } from './Hamamatsucho';
import { R_07 } from './KeihinTohoku';
import { JN_10 } from './Nambu';
import { MG_01 } from './Shinagawa';

export const OM_01 = offset(R_07, { dy: OFFSET });
export const OM_16 = offset(JN_10, { dy: -OFFSET * 2 });
export const OM_DT_09 = offset(OM_16, scaleToUnitX(NE, OFFSET * 2), scale(N, OFFSET * 2));
const OIMACHI_SLOPE = scaleToUnitX(W, OFFSET * 3.75);
const MIZONOKUCHI_SLOPE = scaleToUnitX(N, OFFSET * 2.5);

const COMMON_OIMACHI_STOPS = ['DT 09', 'DT 08', 'OM 15'];
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
                stops={generateStationCodes('OM', 1, 14)}
                slope={OIMACHI_SLOPE}
                origin={OM_01}
                skipBeginning
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
                stopsToHide={['OM 08', 'OM 06', 'OM 04', 'OM 10']}
            />
            <Stop stationCode="OM 01" location={OM_01} />
        </>
    );
};

export const DT_10 = offset(OM_16, scale(NW, OFFSET));
export const DT_09 = offset(OM_DT_09, scale(W, OFFSET));
export const DT_07 = offset(DT_09, scale(MIZONOKUCHI_SLOPE, 2));
const FUTAKO_OFFSET = scaleToUnitX(N, MAJOR_LINE - OFFSET);
const SHIBUYA_OFFSET = scaleToUnitX(SW, OFFSET * 5);

const DenEnToshi = () => {
    return (
        <>
            <Stop stationCode="DT 10" location={DT_10} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('DT', 9, 7)}
                slope={MIZONOKUCHI_SLOPE}
                origin={DT_09}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('DT', 6, 5)}
                slope={FUTAKO_OFFSET}
                origin={offset(DT_07, FUTAKO_OFFSET)}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('DT', 2, 4)}
                slope={SHIBUYA_OFFSET}
                origin={offset(DT_01, scaleToUnitX(SW, MAJOR_LINE))}
                textAlignments={[TextAlignment.LEFT]}
            />
        </>
    );
};

const OM_08 = offset(OM_01, scale(OIMACHI_SLOPE, 7));
export const MG_06 = offset(OM_08, { dx: -OFFSET * 0.5, dy: OFFSET });
const MEGURO_SLOPE = scaleToUnitX(N, OFFSET * 3);
export const MG_02 = offset(MG_01, scaleToUnitX(SW, OFFSET * 4));

const Meguro = () => {
    return (
        <>
            <Stop stationCode="MG 06" location={MG_06} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('MG', 5, 3)}
                slope={MEGURO_SLOPE}
                origin={offset(MG_06, MEGURO_SLOPE, { dy: -OFFSET * 0.5 })}
            />
            <Stop stationCode="MG 02" location={MG_02} textAlignment={TextAlignment.LEFT} />
        </>
    );
};

const OM_10 = offset(OM_08, scale(OIMACHI_SLOPE, 2));
export const TY_07 = offset(OM_10, { dx: -OFFSET * 0.5, dy: OFFSET });

const JIYUGAYOKA_SLOPE_N = scaleToUnitX(N, OFFSET * 4);

const OFFSET_TY_07 = offset(TY_07, { dy: -MINOR_LINE });
export const TY_03 = offset(OFFSET_TY_07, scale(JIYUGAYOKA_SLOPE_N, 4));
export const H_01 = offset(TY_03, scale(E, OFFSET));
export const TY_02 = offset(TY_03, scaleToUnitX(NW, OFFSET * 2), scaleToUnitX(N, OFFSET * 2));

const Toyoko = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('TY', 7, 3)}
                origin={OFFSET_TY_07}
                slope={JIYUGAYOKA_SLOPE_N}
                skipBeginning
                textAlignments={[TextAlignment.LEFT]}
            />
            <Stop stationCode="TY 07" location={TY_07} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 02" location={TY_02} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="H 01" location={H_01} strokeColor="stroke-hibiya" hideText />
        </>
    );
};

const OM_06 = offset(OM_08, scale(OIMACHI_SLOPE, -2));
const OM_04 = offset(OM_06, scale(OIMACHI_SLOPE, -2));
export const A_03 = offset(OM_04, { dx: -OFFSET * 0.5, dy: OFFSET });
export const IK_05 = offset(OM_06, { dx: -OFFSET * 0.5, dy: OFFSET });
const GOTANDA_SLOPE = scaleToUnitX(N, OFFSET * 2);

const Ikegami = () => {
    return (
        <>
            <Stop stationCode="IK 05" location={IK_05} />
            <LineSegmentWithStepChange
                origin={offset(IK_05, { dy: -OFFSET * 3.5 })}
                slope={GOTANDA_SLOPE}
                stops={generateStationCodes('IK', 4, 2)}
            />
        </>
    );
};

const AsakusaStops = () => {
    return <Stop stationCode="A 03" location={A_03} strokeColor="stroke-asakusa" />;
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
        </>
    );
};

export default TokyuGroup;
