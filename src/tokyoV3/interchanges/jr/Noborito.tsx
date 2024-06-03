import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { NAMBU_SLOPE } from './Bubaigawara';
import { JN_16 } from './Inadazutsumi';

export const JN_14 = offset(JN_16, scale(NAMBU_SLOPE, 2)); // Odawara

export const OH_18 = offset(JN_14, scale(E, OFFSET * 0.5), scale(N, OFFSET));
export const NOBORITO_SLOPE = scaleToUnitX(E, OFFSET * 4.5);
export const Noborito = () => {
    return (
        <>
            <g id="noborito">
                <Stop stationCode="JN 14" location={JN_14} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="OH 18" location={OH_18} hideText />
            </g>
            <LineSegmentWithStepChange
                stops={generateStationCodes('OH', 18, 7)}
                skipBeginning
                skipEnd
                stopsToSkip={['OH 07']}
                slope={NOBORITO_SLOPE}
                origin={OH_18}
                textAlignments={[TextAlignment.DOWN, TextAlignment.UP]}
            />
        </>
    );
};
