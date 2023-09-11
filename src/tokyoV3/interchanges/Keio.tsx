import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, SE, SW, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_02 } from './Chuo';
import { IN_01 } from './Hamamatsucho';
import { JN_16, JN_21 } from './Nambu';

export const KO_36 = offset(JN_16, { dy: -OFFSET * 2 });
export const KO_25 = offset(JN_21, { dy: -OFFSET });

export const IN_17 = offset(JB_02, { dy: OFFSET * 2 });

const INOKASHIRA_SLOPE = scaleToUnitX(SE, OFFSET * 3);

const FUCHU_SLOPE = scaleToUnitX(E, OFFSET * 4.5);

const CHOFU_SLOPE = scaleToUnitX(SE, MAJOR_LINE * 0.5);
const KO_20 = offset(KO_25, scale(FUCHU_SLOPE, 4), { dx: OFFSET * 4, dy: OFFSET * 2 });

const IN_08 = offset(IN_17, scale(INOKASHIRA_SLOPE, 9));
export const KO_06 = offset(IN_08, { dx: OFFSET });
const IN_05 = offset(IN_08, scale(INOKASHIRA_SLOPE, 3));
export const OH_07 = offset(IN_05, { dx: OFFSET });

export const KO_19 = offset(KO_20, scale(CHOFU_SLOPE, 1));
export const KO_18 = offset(KO_19, scaleToUnitX(SE, 2 * OFFSET), scaleToUnitX(E, 5 * OFFSET));

export const KO_35 = offset(KO_36, scaleToUnitX(N, MAJOR_LINE), { dx: OFFSET * 1.5 });

export const KO_05 = offset(KO_06, { dy: -MAJOR_LINE * 0.5 - OFFSET, dx: MAJOR_LINE * 0.5 - OFFSET }, scaleToUnitX(NE, MINOR_LINE));

export const KO_07 = offset(KO_06, scaleToUnitX(W, OFFSET * 6));

// const CHOFU_EAST_SLOPE = scaleToUnitX(SW, OFFSET * 2);

const MEIDAMAE_SLOPE = scaleToUnitX(NW, OFFSET * 2.5);
export const KO_12 = offset(KO_07, scale(MEIDAMAE_SLOPE, 4), scaleToUnitX(W, OFFSET * 6), scaleToUnitX(NE, OFFSET));

const ROKA_SLOPE = scaleToUnitX(SW, OFFSET * 2.5);

const SHIBUYA_SLOPE = scaleToUnitX(NE, OFFSET * 3.75);

const KeioLine = () => {
    return (
        <>
            <Stop stationCode="KO 36" location={KO_36} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 12, 18)}
                origin={KO_12}
                slope={ROKA_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 25, 21)}
                origin={KO_25}
                slope={FUCHU_SLOPE}
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 20, 19)}
                origin={KO_20}
                slope={CHOFU_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 7, 11)}
                origin={KO_07}
                slope={MEIDAMAE_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />

            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 6, 10)}
                origin={KO_06}
                slope={SHIBUYA_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />
        </>
    );
};

export const IN_02 = offset(IN_01, scaleToUnitX(W, OFFSET * 4));

const Inokashira = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('IN', 17, 8)}
                origin={IN_17}
                slope={INOKASHIRA_SLOPE}
                stopsToHide={['IN 08', 'IN 05']}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('IN', 5, 3)}
                origin={IN_05}
                slope={INOKASHIRA_SLOPE}
                stopsToHide={['IN 08', 'IN 05']}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('IN', 5, 7)}
                skipBeginning
                origin={IN_05}
                slope={scaleToUnitX(NW, OFFSET * 2.5)}
                stopsToHide={['IN 08', 'IN 05']}
            />
            <Stop stationCode="IN 02" location={IN_02} textAlignment={TextAlignment.DOWN} />
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
