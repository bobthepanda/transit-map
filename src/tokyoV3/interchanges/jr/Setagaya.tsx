import { TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, SW, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { SG_08 } from './Gotokuji';
import { SG_01 } from './Sangenjaya';

export const Setagaya = () => {
    return (
        <>
            <LineSegmentWithStepChange
                origin={SG_01}
                stops={generateStationCodes('SG', 1, 6)}
                slope={scaleToUnitX(NW, OFFSET * 4)}
                textAlignments={[TextAlignment.SW]}
                skipBeginning
            />
            <LineSegmentWithStepChange
                origin={SG_08}
                stops={generateStationCodes('SG', 8, 7)}
                slope={scaleToUnitX(SW, OFFSET * 6)}
                textAlignments={[TextAlignment.SE]}
                skipBeginning
            />
        </>
    );
};
