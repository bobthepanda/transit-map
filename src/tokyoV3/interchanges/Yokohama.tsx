import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, NE, NW, S, SE, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JC_22 } from './Chuo';
import { JN_07 } from './Nambu';
import { JK_13 } from './Tokaido';

export const JH_14 = offset(JK_13, scaleToUnitX(NE, MAJOR_LINE * 0.5), scaleToUnitX(NW, MAJOR_LINE));

export const JH_15 = offset(JN_07, scaleToUnitX(S, MAJOR_LINE * 2.5));
export const TY_16 = offset(JH_15, { dx: OFFSET * 0.5, dy: OFFSET });
export const JH_32 = offset(JC_22, { dx: -OFFSET, dy: OFFSET * 0.5 });

const HACHIJOI_SLOPE = scaleToUnitX(S, MAJOR_LINE * 1.5);
export const JH_28 = offset(JH_32, scale(HACHIJOI_SLOPE, 4));
export const JH_27 = offset(JH_28, scale(HACHIJOI_SLOPE), scaleToUnitX(SE, MAJOR_LINE * 0.5), scaleToUnitX(E, OFFSET));

const KIKUNA_SLOPE = scaleToUnitX(W, MAJOR_LINE * 1.5);
const JH_19 = offset(JH_15, scale(KIKUNA_SLOPE, 4));
export const YG_01 = offset(JH_19, { dy: OFFSET, dx: OFFSET * 0.5 });

const JH_21 = offset(JH_19, scale(KIKUNA_SLOPE, 2));
export const DT_22 = offset(JH_21, { dy: OFFSET, dx: OFFSET * 0.5 });
export const KD_01 = offset(DT_22, scaleToUnitX(E, OFFSET));

export const KO_48 = offset(JH_32, HACHIJOI_SLOPE, { dx: OFFSET * 0.5, dy: OFFSET });

const SAGAMIHARA_SLOPE = scaleToUnitX(SE, MAJOR_LINE * 1.75);

const JH_23 = offset(JH_27, scale(SAGAMIHARA_SLOPE, 4));
export const OH_27 = offset(JH_23, { dy: -OFFSET });

export const Yokohama = () => {
    return (
        <>
            <Stop stationCode="JH 14" location={JH_14} strokeColor="stroke-yokohama" />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JH', 15, 21)}
                origin={JH_15}
                strokeColor="stroke-yokohama"
                slope={KIKUNA_SLOPE}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JH', 32, 28)}
                origin={JH_32}
                strokeColor="stroke-yokohama"
                slope={HACHIJOI_SLOPE}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JH', 27, 22)}
                origin={JH_27}
                strokeColor="stroke-yokohama"
                slope={SAGAMIHARA_SLOPE}
            />
        </>
    );
};
