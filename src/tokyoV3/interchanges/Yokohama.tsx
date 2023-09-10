import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NE, S, SE, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JC_22 } from './Chuo';
import { JN_07 } from './Nambu';
import { JK_13 } from './Tokaido';

export const JH_14 = offset(JK_13, scaleToUnitX(NE, OFFSET), scaleToUnitX(N, MAJOR_LINE));

export const JH_15 = offset(JN_07, scaleToUnitX(S, MAJOR_LINE * 2.5));
export const TY_16 = offset(JH_15, { dx: OFFSET * 0.5, dy: OFFSET });
export const JH_32 = offset(JC_22, { dy: OFFSET });

const HACHIJOI_SLOPE = scaleToUnitX(S, MAJOR_LINE * 1.75);
export const JH_28 = offset(JH_32, scale(HACHIJOI_SLOPE, 4));
export const JH_27 = offset(JH_28, scale(HACHIJOI_SLOPE), scaleToUnitX(SE, MAJOR_LINE * 0.5));

const KIKUNA_SLOPE = scaleToUnitX(W, MAJOR_LINE * 1.5);
export const JH_21 = offset(JH_15, scale(KIKUNA_SLOPE, 6));

const SAGAMIHARA_SLOPE = scaleToUnitX(SE, MAJOR_LINE * 1.75);

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
