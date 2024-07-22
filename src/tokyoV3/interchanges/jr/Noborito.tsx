import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NE, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { OH_01 } from '../InsideYamanote/Shinjuku';
import { NAMBU_SLOPE } from './Bubaigawara';
import { JN_16 } from './Inadazutsumi';

export const JN_14 = offset(JN_16, scale(NAMBU_SLOPE, 2)); // Odawara

export const OH_18 = offset(JN_14, scale(E, OFFSET));
export const NOBORITO_SLOPE = scaleToUnitX(NE, OFFSET * 4.5);
export const OH_YOYOGI_SLOPE = scaleToUnitX(W, OFFSET * 5.25);

export const Noborito = () => {
    return (
        <>
            <g id="noborito">
                <Stop stationCode="JN 14" location={JN_14} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="OH 18" location={OH_18} hideText />
            </g>
            <LineSegmentWithStepChange
                stops={generateStationCodes('OH', 18, 14)}
                skipBeginning
                slope={NOBORITO_SLOPE}
                origin={OH_18}
                textAlignments={[TextAlignment.SE]}
            />
            <LineSegmentWithStepChange
                origin={OH_01}
                stops={generateStationCodes('OH', 1, 13)}
                stopsToSkip={['OH 01', 'OH 07', 'OH 05', 'OH 06', 'OH 10']}
                slope={OH_YOYOGI_SLOPE}
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
            />
        </>
    );
};
