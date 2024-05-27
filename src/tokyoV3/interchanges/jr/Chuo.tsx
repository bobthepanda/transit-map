import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { offset, scale } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { JC_12 } from './Mitaka';
import { CHUO_OFFSET, JB_09 } from './Okubo';
import { JC_19 } from './Tachikawa';

export const JC_23 = offset(JC_19, scale(CHUO_OFFSET, 4));

export const Chuo = () => {
    return (
        <>
            <LineSegmentWithStepChange
                slope={CHUO_OFFSET}
                stops={generateStationCodes('JC', 12, 23)}
                origin={JC_12}
                stopsToSkip={['JC 12', 'JC 13', 'JC 19', 'JC 17']}
                strokeColor="stroke-chuo-rapid"
                textAlignments={[TextAlignment.SW]}
            />
            <Stop stationCode="JB 09" location={JB_09} textAlignment={TextAlignment.NE} strokeColor="stroke-chuo-sobu" />
        </>
    );
};
