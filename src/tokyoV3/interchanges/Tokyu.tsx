import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NE, NW, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { R_07 } from './KeihinTohoku';
import { JN_10 } from './Nambu';

export const OM_01 = offset(R_07, { dy: OFFSET });
const OFFSET_OM_01 = offset(OM_01, { dx: OFFSET });
export const OM_16 = offset(JN_10, { dy: -OFFSET * 2 });
const OIMACHI_SLOPE = scaleToUnitX(W, OFFSET * 3.5);
const MIZONOKUCHI_SLOPE = scaleToUnitX(NE, OFFSET * 2);

const COMMON_OIMACHI_STOPS = ['OM 16', 'DT 09', 'DT 08', 'OM 15'];
const Oimachi = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={COMMON_OIMACHI_STOPS}
                slope={MIZONOKUCHI_SLOPE}
                origin={OM_16}
                stopsToHide={COMMON_OIMACHI_STOPS}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('OM', 1, 14)}
                slope={OIMACHI_SLOPE}
                origin={OFFSET_OM_01}
                skipBeginning
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
                stopsToHide={['OM 08']}
            />
            <Stop stationCode="OM 01" location={OM_01} />
        </>
    );
};

export const DT_10 = offset(OM_16, scale(NW, OFFSET));
export const DT_07 = offset(DT_10, scale(MIZONOKUCHI_SLOPE, 3));
export const DT_06 = offset(DT_07, scale(N, MAJOR_LINE * 0.5), scale(NE, MAJOR_LINE * 0.5));

const DenEnToshi = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('DT', 10, 7)}
                slope={MIZONOKUCHI_SLOPE}
                origin={DT_10}
                textAlignments={[TextAlignment.LEFT]}
            />
            <Stop stationCode="DT 06" location={DT_06} />
        </>
    );
};

const OM_08 = offset(OFFSET_OM_01, scale(OIMACHI_SLOPE, 7));
export const MG_06 = offset(OM_08, { dx: -OFFSET * 0.5, dy: OFFSET });

const Meguro = () => {
    return <Stop stationCode="MG 06" location={MG_06} />;
};

const OM_10 = offset(OM_08, scale(OIMACHI_SLOPE, 2));
export const TY_07 = offset(OM_10, { dx: -OFFSET * 0.5, dy: OFFSET });

const JIYUGAYOKA_SLOPE_N = scaleToUnitX(N, MAJOR_LINE);

const OFFSET_TY_07 = offset(TY_07, { dy: -MINOR_LINE });
export const TY_03 = offset(OFFSET_TY_07, scale(JIYUGAYOKA_SLOPE_N, 3), scale(N, MAJOR_LINE * 0.5), scale(NW, OFFSET * 2));
export const H_01 = offset(TY_03, scale(NE, OFFSET));

const Toyoko = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('TY', 7, 4)}
                origin={OFFSET_TY_07}
                slope={JIYUGAYOKA_SLOPE_N}
                skipBeginning
            />
            <Stop stationCode="TY 07" location={TY_07} />
            <Stop stationCode="TY 03" location={TY_03} />
            <Stop stationCode="H 01" location={H_01} />
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
        </>
    );
};

export default TokyuGroup;
