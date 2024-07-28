import { TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { BUBAIGAWRARA_SLOPE, CHOFU_SLOPE, KO_19 } from './Bubaigawara';

export const KO_18 = offset(KO_19, scale(BUBAIGAWRARA_SLOPE, -0.5), scale(CHOFU_SLOPE, 0.5));
export const CHOFU_EAST_SCALE = scaleToUnitX(E, OFFSET * 4.25);
export const Chofu = () => {
    return (
        <LineSegmentWithStepChange
            stops={generateStationCodes('KO', 18, 8)}
            origin={KO_18}
            stopsToSkip={['KO 06', 'KO 07']}
            textAlignments={[TextAlignment.DOWN, TextAlignment.UP]}
            slope={CHOFU_EAST_SCALE}
        />
    );
};
