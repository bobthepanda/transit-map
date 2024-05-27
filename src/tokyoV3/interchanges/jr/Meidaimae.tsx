import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NW, S, SW, W, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { CHOFU_EAST_SCALE, KO_18 } from './Chofu';
import { IN_17 } from './Kichijoji';

const KO_06 = offset(KO_18, scale(CHOFU_EAST_SCALE, 12));
export const IN_08 = offset(KO_06, scale(W, OFFSET * 0.5), scale(S, OFFSET));
const IN_07 = offset(IN_08, scaleToUnitX(S, MAJOR_LINE * 1.5));
export const IN_06 = offset(IN_07, scaleToUnitX(SW, MAJOR_LINE * 1.5), scaleToUnitX(E, OFFSET * 2));
export const KO_05 = offset(KO_06, CHOFU_EAST_SCALE);
const MEIDAIMAE_NORTH_SLOPE = scaleToUnitX(N, OFFSET * 5.5);
const MEIDAMAE_NW_SLOPE = scaleToUnitX(NW, OFFSET * 3);

export const Meidaimae = () => {
    return (
        <>
            <g id="meidaimae">
                <Stop stationCode="KO 06" location={KO_06} hideText />
                <Stop stationCode="IN 08" location={IN_08} />
            </g>
            <Stop stationCode="IN 07" location={IN_07} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="IN 06" location={IN_06} textAlignment={TextAlignment.NW} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('IN', 8, 10)}
                origin={IN_08}
                skipBeginning
                slope={MEIDAIMAE_NORTH_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('IN', 17, 15)}
                origin={IN_17}
                skipBeginning
                slope={scale(MEIDAIMAE_NORTH_SLOPE, -1)}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('IN', 13, 14)}
                origin={offset(midPoint(IN_08, IN_17), scale(MEIDAMAE_NW_SLOPE, 0.5))}
                textAlignments={[TextAlignment.SW]}
                slope={MEIDAMAE_NW_SLOPE}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('IN', 12, 11)}
                origin={offset(midPoint(IN_08, IN_17), scale(MEIDAMAE_NW_SLOPE, -0.5))}
                textAlignments={[TextAlignment.SW]}
                slope={scale(MEIDAMAE_NW_SLOPE, -1)}
            />
        </>
    );
};
