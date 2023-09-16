import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, generatePoint, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_02, JC_19, JC_22 } from './Chuo';
import { IN_01 } from './Hamamatsucho';
import { JN_16, JN_21, JN_26 } from './Nambu';
import { JH_28 } from './Yokohama';

export const KO_25 = offset(JN_21, { dy: -OFFSET });

export const IN_17 = offset(JB_02, { dy: OFFSET * 2 });

const INOKASHIRA_SLOPE = scaleToUnitX(SE, OFFSET * 3);

const FUCHU_SLOPE = scaleToUnitX(E, OFFSET * 4.5);

const CHOFU_SLOPE = scaleToUnitX(SE, MAJOR_LINE * 0.5);
const KO_20 = offset(KO_25, scale(FUCHU_SLOPE, 4), { dx: OFFSET * 5, dy: OFFSET * 2 });

const IN_08 = offset(IN_17, scale(INOKASHIRA_SLOPE, 9));
export const KO_06 = offset(IN_08, { dx: OFFSET });
const IN_05 = offset(IN_08, scale(INOKASHIRA_SLOPE, 3));
export const OH_07 = offset(IN_05, { dy: -OFFSET });

export const KO_19 = offset(KO_20, scale(CHOFU_SLOPE, 1));

export const KO_05 = offset(KO_06, { dy: -MAJOR_LINE * 0.5 - OFFSET, dx: MAJOR_LINE * 0.5 - OFFSET }, scaleToUnitX(NE, MINOR_LINE));

export const KO_07 = offset(KO_06, scaleToUnitX(W, OFFSET * 6));

const MEIDAMAE_SLOPE = scaleToUnitX(NW, OFFSET * 2.5);
export const KO_11 = offset(KO_07, scale(MEIDAMAE_SLOPE, 3), scaleToUnitX(W, OFFSET * 6), scaleToUnitX(NE, OFFSET * 2));

const ROKA_SLOPE = scaleToUnitX(SW, OFFSET * 2.5);

const SHIBUYA_SLOPE = scaleToUnitX(NE, OFFSET * 3.75);

export const KO_18 = offset(KO_11, scale(ROKA_SLOPE, 7));

export const KO_34 = offset(JC_22, scaleToUnitX(N, OFFSET * 2));

const KO_33 = offset(KO_34, scaleToUnitX(SE, OFFSET * 4));
const HACHIJOI_SLOPE = scaleToUnitX(SE, OFFSET * 2.5);
const KO_29 = offset(KO_33, scale(HACHIJOI_SLOPE, 4));

const KeioLine = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 11, 18)}
                origin={KO_11}
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
                stops={generateStationCodes('KO', 7, 10)}
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
            <Stop stationCode="KO 34" location={KO_34} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 33, 27)}
                origin={KO_33}
                slope={HACHIJOI_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
                stopsToHide={['KO 29']}
            />
            <Stop
                stationCode="KO 26"
                location={offset(KO_25, scale(FUCHU_SLOPE, -1), scale(W, OFFSET))}
                textAlignment={TextAlignment.DOWN}
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
                slope={scale(INOKASHIRA_SLOPE, -1)}
                stopsToHide={['IN 08', 'IN 05']}
            />
            <Stop stationCode="IN 02" location={IN_02} textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="OH 07" location={OH_07} />
        </>
    );
};

export const KO_36 = offset(JN_16, { dx: -OFFSET * 2 });
export const KO_35 = offset(KO_36, scaleToUnitX(N, MAJOR_LINE * 2), { dx: OFFSET * 1.5 });
export const KO_45 = offset(JH_28, scaleToUnitX(E, OFFSET));
export const KO_37 = offset(KO_36, scaleToUnitX(SW, OFFSET * 2), scale(W, MAJOR_LINE));
const YOMIURI_SLOPE = scaleToUnitX(W, MAJOR_LINE);
const HASHIMOTO_SLOPE = scaleToUnitX(SE, MAJOR_LINE);

const Samigahara = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('KO', 37, 42)}
                origin={KO_37}
                slope={YOMIURI_SLOPE}
                textAlignments={[TextAlignment.UP]}
            />
            <LineSegmentWithStepChange stops={generateStationCodes('KO', 45, 43)} origin={KO_45} slope={HASHIMOTO_SLOPE} />
            <Stop stationCode="KO 36" location={KO_36} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="KO 35" location={KO_35} />
        </>
    );
};

const KO_40 = offset(KO_37, scale(YOMIURI_SLOPE, 3));
export const OT_05 = offset(KO_40, scaleToUnitX(S, OFFSET * 2));
export const OT_06 = offset(OT_05, YOMIURI_SLOPE);
export const OT_07 = offset(OT_06, scaleToUnitX(S, OFFSET * 2), scaleToUnitX(W, MAJOR_LINE));
export const OT_04 = offset(OT_05, scaleToUnitX(E, OFFSET * 1.5), scaleToUnitX(SE, OFFSET * 4));
const HARUHINO_SLOPE = scaleToUnitX(SE, OFFSET * 5);

const OdakyuTama = () => {
    return (
        <>
            <LineSegmentWithStepChange stops={generateStationCodes('OT', 4, 1)} origin={OT_04} slope={HARUHINO_SLOPE} />
            <Stop stationCode="OT 05" location={OT_05} textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="OT 06" location={OT_06} textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="OT 07" location={OT_07} textAlignment={TextAlignment.LEFT} />
        </>
    );
};

export const TT_01 = offset(midPoint(OT_06, offset(KO_40, YOMIURI_SLOPE)), scaleToUnitX(W, OFFSET * 0.5));
export const TT_07 = offset(KO_29, { dx: -OFFSET });

export const TT_11 = generatePoint({ start: JN_26, slope: SW, endReference: TT_07 });
export const TT_12 = generatePoint({ start: JC_19, slope: NW, endReference: TT_07 });

const TACHIKAWA_MINAMI_SLOPE = scale(S, OFFSET * 5);

const TT_07_SLOPE = scale(S, MAJOR_LINE);
const TT_01_SLOPE = scale(NW, MAJOR_LINE * 1.5);

const TamaToshi = () => {
    return (
        <>
            <LineSegmentWithStepChange stops={generateStationCodes('TT', 1, 2)} origin={TT_01} slope={TT_01_SLOPE} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('TT', 7, 3)}
                origin={TT_07}
                slope={TT_07_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('TT', 11, 8)}
                origin={TT_11}
                slope={TACHIKAWA_MINAMI_SLOPE}
                textAlignments={[TextAlignment.LEFT]}
            />
            <Stop stationCode="TT 12" location={TT_12} textAlignment={TextAlignment.LEFT} />
        </>
    );
};

const KeioGroup = () => {
    return (
        <>
            <KeioLine />
            <Inokashira />
            <Samigahara />
            <OdakyuTama />
            <TamaToshi />
        </>
    );
};

export default KeioGroup;
