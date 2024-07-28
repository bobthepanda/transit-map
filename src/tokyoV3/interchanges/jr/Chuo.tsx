import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { offset, scale } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { JC_13, MITAKA_OFFSET } from './MusashiSakai';
import { JB_09 } from './Okubo';
import { JC_19 } from './Tachikawa';

export const JC_22 = offset(JC_19, scale(MITAKA_OFFSET, 3));

export const Chuo = () => {
    return (
        <>
            <LineSegmentWithStepChange
                slope={MITAKA_OFFSET}
                stops={generateStationCodes('JC', 13, 22)}
                origin={JC_13}
                stopsToSkip={['JC 12', 'JC 13', 'JC 19', 'JC 17']}
                strokeColor="stroke-chuo-rapid"
                textAlignments={[TextAlignment.SW]}
            />
            <Stop stationCode="JB 09" location={JB_09} textAlignment={TextAlignment.NE} strokeColor="stroke-chuo-sobu" />
        </>
    );
};
