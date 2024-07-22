import { TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NE, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { KO_35 } from './Inadazutsumi';

export const KO_18 = offset(KO_35, scaleToUnitX(NE, OFFSET * 3), scaleToUnitX(E, OFFSET * 3));
export const KO_19 = offset(KO_18, scaleToUnitX(W, OFFSET * 3), scaleToUnitX(N, OFFSET * 4));
export const CHOFU_EAST_SCALE = scaleToUnitX(E, OFFSET * 4.25);
export const Chofu = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 18, 2)}
                origin={KO_18}
                stopsToSkip={['KO 06', 'KO 07']}
                textAlignments={[TextAlignment.DOWN, TextAlignment.UP]}
                slope={CHOFU_EAST_SCALE}
            />
            <LineSegmentWithStepChange stops={generateStationCodes('KO', 19, 24)} origin={KO_19} slope={scaleToUnitX(N, OFFSET * 5)} />
        </>
    );
};
