import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, SE, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { NAMBU_SLOPE } from './NAMBU_SLOPE';
import { JN_26 } from './Tachikawa';

export const JN_21 = offset(JN_26, scale(NAMBU_SLOPE, 5));

export const KO_25 = offset(JN_21, scale(E, OFFSET * 0.5), scale(N, OFFSET));
export const BUBAIGAWRARA_SLOPE = scaleToUnitX(W, OFFSET * 5);
export const CHOFU_SLOPE = scaleToUnitX(SE, MAJOR_LINE * 0.5);
const KO_23 = offset(KO_25, scale(BUBAIGAWRARA_SLOPE, -2.5), scale(CHOFU_SLOPE, 0.5));
export const KO_19 = offset(KO_23, scale(CHOFU_SLOPE, 3));
export const Bubaigawara = () => {
    return (
        <>
            <g id="bubaigawara">
                <Stop stationCode="JN 21" location={JN_21} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="KO 25" location={KO_25} hideText />
            </g>
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 25, 23)}
                origin={KO_25}
                slope={scale(BUBAIGAWRARA_SLOPE, -1)}
                skipBeginning
                textAlignments={[TextAlignment.UP]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 22, 19)}
                origin={KO_23}
                slope={CHOFU_SLOPE}
                textAlignments={[TextAlignment.NE]}
            />
        </>
    );
};
