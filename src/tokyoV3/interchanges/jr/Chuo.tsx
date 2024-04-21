import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { offset, scale } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { Asagaya } from './Asagaya';
import { HigashiNakano } from './HigashiNakano';
import { Kichijoji } from './Kichijoji';
import { Koenji } from './Koenji';
import { JC_12, Mitaka } from './Mitaka';
import { Nakano } from './Nakano';
import { NishiOgikubo } from './NishiOgikubo';
import { Ogikubo } from './Ogikubo';
import { CHUO_OFFSET, JB_09 } from './Okubo';

export const JC_23 = offset(JC_12, scale(CHUO_OFFSET, 11));
export const Chuo = () => {
    return (
        <>
            <LineSegmentWithStepChange
                slope={CHUO_OFFSET}
                stops={generateStationCodes('JC', 12, 23)}
                origin={JC_12}
                stopsToHide={['JC 12']}
                strokeColor="stroke-chuo-rapid"
                textAlignments={[TextAlignment.SW]}
            />
            <Stop stationCode="JB 09" location={JB_09} textAlignment={TextAlignment.NE} strokeColor="stroke-chuo-sobu" />
            <HigashiNakano />
            <Nakano />
            <Koenji />
            <Asagaya />
            <Ogikubo />
            <NishiOgikubo />
            <Kichijoji />
            <Mitaka />
        </>
    );
};
