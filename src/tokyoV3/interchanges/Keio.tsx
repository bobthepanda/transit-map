import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, S, SE, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_02, JB_09 } from './Chuo';
import { IN_01 } from './Hamamatsucho';
import { KO_01 } from './Kanda';
import { JN_16, JN_21 } from './Nambu';

export const KO_36 = offset(JN_16, { dx: -OFFSET * 2 });
export const KO_25 = offset(JN_21, { dy: -OFFSET });

export const IN_17 = offset(JB_02, { dy: OFFSET * 2 });

const INOKASHIRA_SLOPE = scaleToUnitX(SE, OFFSET * 3);

const FUCHU_SLOPE = scaleToUnitX(E, OFFSET * 5);

const KO_23 = offset(KO_25, scale(FUCHU_SLOPE, 2));
const CHOFU_SLOPE = scaleToUnitX(SE, MAJOR_LINE * 0.5);
const KO_22 = offset(KO_23, { dx: OFFSET * 4, dy: OFFSET * 2 });

const IN_08 = offset(IN_17, scale(INOKASHIRA_SLOPE, 9));
export const KO_06 = offset(IN_08, { dx: OFFSET });
const IN_05 = offset(IN_08, scale(INOKASHIRA_SLOPE, 3));
export const OH_07 = offset(IN_05, { dx: OFFSET });

export const KO_19 = offset(KO_22, scale(CHOFU_SLOPE, 3));
export const KO_18 = offset(KO_19, scaleToUnitX(SE, 2 * OFFSET), scaleToUnitX(E, 3 * OFFSET));

export const KO_35 = offset(KO_36, scaleToUnitX(N, MAJOR_LINE * 1.5));
const CHOFU_EAST_SLOPE = scaleToUnitX(E, MAJOR_LINE * 0.5);
const MEIDAIMAE_SLOPE = scaleToUnitX(S, OFFSET * 2.5);

export const KO_05 = offset(KO_06, { dy: -MAJOR_LINE * 0.5 - OFFSET, dx: MAJOR_LINE * 0.5 - OFFSET }, scaleToUnitX(NE, MINOR_LINE));
const DAITABASHI_SLOPE = scaleToUnitX(NE, OFFSET * 4);

const KO_02 = { y: KO_01.y, x: JB_09.x };

export const KO_07 = offset(KO_06, MEIDAIMAE_SLOPE);

const KeioLine = () => {
    return (
        <>
            <Stop stationCode="KO 36" location={KO_36} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 25, 23)}
                origin={KO_25}
                slope={FUCHU_SLOPE}
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 22, 19)}
                origin={KO_22}
                slope={CHOFU_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />
            <Stop stationCode="KO 06" location={KO_06} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 6, 10)}
                origin={KO_06}
                slope={MEIDAIMAE_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
                skipBeginning
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 18, 11)}
                origin={KO_18}
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
                slope={CHOFU_EAST_SLOPE}
            />
            <LineSegmentWithStepChange stops={generateStationCodes('KO', 5, 3)} origin={KO_05} slope={DAITABASHI_SLOPE} />
            <Stop stationCode="KO 02" location={KO_02} textAlignment={TextAlignment.DOWN} />
        </>
    );
};

export const IN_02 = offset(IN_01, scaleToUnitX(W, OFFSET * 4));

const Inokashira = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('IN', 17, 3)}
                origin={IN_17}
                slope={INOKASHIRA_SLOPE}
                stopsToHide={['IN 08', 'IN 05']}
            />
            <Stop stationCode="IN 02" location={IN_02} textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="KO 02" location={KO_02} textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="OH 07" location={OH_07} />
        </>
    );
};

const Samigahara = () => {
    return <Stop stationCode="KO 35" location={KO_35} />;
};

const KeioGroup = () => {
    return (
        <>
            <KeioLine />
            <Inokashira />
            <Samigahara />
        </>
    );
};

export default KeioGroup;
