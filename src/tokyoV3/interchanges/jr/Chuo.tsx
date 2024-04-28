import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { W, offset, scale } from '../../../utils/PathUtils';
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

export const JC_17 = offset(JC_12, scale(CHUO_OFFSET, 5));
export const JM_33 = offset(JC_17, scale(W, OFFSET));

const NishiKokubunji = () => {
    return (
        <g id="nishi-kokubunji">
            <Stop stationCode="JC 17" location={JC_17} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="JM 33" location={JM_33} strokeColor="stroke-musashino" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export const JC_19 = offset(JC_17, scale(CHUO_OFFSET, 2));
export const JN_26 = offset(JC_19, scale(W, OFFSET));

const Tachikawa = () => {
    return (
        <g id="tachikawa">
            <Stop stationCode="JC 19" location={JC_19} strokeColor="stroke-chuo-rapid" hideText />
            <Stop stationCode="JN 26" location={JN_26} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export const JC_23 = offset(JC_19, scale(CHUO_OFFSET, 4));

export const Chuo = () => {
    return (
        <>
            <LineSegmentWithStepChange
                slope={CHUO_OFFSET}
                stops={generateStationCodes('JC', 12, 23)}
                origin={JC_12}
                stopsToHide={['JC 12', 'JC 19', 'JC 17']}
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
            <Tachikawa />
            <NishiKokubunji />
        </>
    );
};
