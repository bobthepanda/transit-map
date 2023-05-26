import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, N, NE, NNE, NNW, S, SSE, SW, W, WSW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JY_01, JY_02, JY_03, JY_04, JY_05, JY_06, JY_07, JY_08, JY_09, JY_25, JY_26, JY_27, JY_28, JY_29, JY_30 } from './Yamanote';

const YAMANOTE_OFFSET = scale(ESE, OFFSET);
const NORTH_YAMANOTE_OFFSET = scale(ENE, OFFSET);

export const JK_26 = offset(JY_01, YAMANOTE_OFFSET);
export const JK_27 = offset(JY_02, YAMANOTE_OFFSET);
export const JK_28 = offset(JY_03, YAMANOTE_OFFSET);
export const JK_29 = offset(JY_04, YAMANOTE_OFFSET);
export const JK_30 = offset(JY_05, YAMANOTE_OFFSET);
export const JK_31 = offset(JY_06, NORTH_YAMANOTE_OFFSET);
export const JK_32 = offset(JY_07, NORTH_YAMANOTE_OFFSET);
export const JK_33 = offset(JY_08, NORTH_YAMANOTE_OFFSET);
export const JK_34 = offset(JY_09, NORTH_YAMANOTE_OFFSET);
export const JK_35 = offset(JK_34, scaleToUnitX(NNW, MAJOR_LINE * 0.5));
export const JK_36 = offset(JK_34, scaleToUnitX(NNW, MAJOR_LINE * 0.5, 2));
export const JK_38 = offset(JK_36, scaleToUnitX(NNW, MAJOR_LINE * 0.5, 2));
export const JK_42 = offset(JK_38, scaleToUnitX(NNW, MAJOR_LINE * 0.5, 4));
export const JK_43 = offset(JK_42, scaleToUnitX(NNW, MAJOR_LINE * 0.5));
export const JK_46 = offset(JK_43, scaleToUnitX(NNW, MAJOR_LINE * 0.5, 3));
export const JK_47 = offset(JK_46, scaleToUnitX(NNW, MAJOR_LINE * 0.5));
export const JK_25 = offset(JY_30, YAMANOTE_OFFSET);
export const JK_24 = offset(JY_29, YAMANOTE_OFFSET);
export const JK_23 = offset(JY_28, scale(SSE, OFFSET));
export const JK_22 = offset(JY_27, YAMANOTE_OFFSET);
export const JK_21 = offset(JY_26, YAMANOTE_OFFSET);
export const JK_20 = offset(JY_25, YAMANOTE_OFFSET);

export const JK_17 = offset(JY_25, { dx: OFFSET * 1.5, dy: OFFSET * 1.5 }, scaleToUnitX(SW, MAJOR_LINE * 4.5 + OFFSET * 2));
export const JK_16 = offset(JK_17, { dx: -MAJOR_LINE, dy: MAJOR_LINE * 0.75 }, { dx: -OFFSET, dy: OFFSET * 0.5 });
export const JK_18 = offset(JK_17, scaleToUnitX(NE, MAJOR_LINE * 2));
export const JK_19 = offset(JK_18, scaleToUnitX(NE, MAJOR_LINE * 1.25));
export const JK_15 = offset(JK_16, scaleToUnitX(WSW, MAJOR_LINE * 1.5));
export const JK_14 = offset(JK_15, scaleToUnitX(WSW, MAJOR_LINE * 1.5));
export const JK_13 = offset(JK_14, scaleToUnitX(WSW, MAJOR_LINE * 1.5));
export const JK_12 = offset(JK_13, scaleToUnitX(WSW, MAJOR_LINE * 1.5));
export const JK_11 = offset(JK_12, { dx: -OFFSET * 0.5, dy: MAJOR_LINE * 1.5 }, { dx: -OFFSET * 3.125 }, scaleToUnitX(SSE, OFFSET * 2));
export const JK_10 = offset(JK_11, scaleToUnitX(SSE, OFFSET * 2));
export const JK_09 = offset(JK_10, { dx: OFFSET * 1.124, dy: MAJOR_LINE });
export const JK_08 = offset(JK_09, scaleToUnitX(S, MAJOR_LINE));
export const JK_07 = offset(JK_08, scaleToUnitX(SW, MAJOR_LINE));
export const JK_06 = offset(JK_07, scaleToUnitX(WSW, MAJOR_LINE * 1));
export const JK_05 = offset(JK_06, scaleToUnitX(WSW, MAJOR_LINE * 1));
export const JK_04 = offset(JK_05, { dx: -MAJOR_LINE * 1.5, dy: MAJOR_LINE * 0.5 });
const OFUNA_SLOPE = scaleToUnitX(W, MAJOR_LINE * 1);
export const JK_01 = offset(JK_04, scale(OFUNA_SLOPE, 3));

const KeihinTohokuStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-keihin-tohoku" />;
};

export const KeihinTohokuStops = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('JK', 4, 1)}
                origin={JK_04}
                slope={OFUNA_SLOPE}
                strokeColor="stroke-keihin-tohoku"
            />
            <KeihinTohokuStop stationCode="JK 05" location={JK_05} />
            <KeihinTohokuStop stationCode="JK 06" location={JK_06} />
            <KeihinTohokuStop stationCode="JK 07" location={JK_07} />
            <KeihinTohokuStop stationCode="JK 08" location={JK_08} />
            <KeihinTohokuStop stationCode="JK 09" location={JK_09} />
            <KeihinTohokuStop stationCode="JK 10" location={JK_10} />
            <KeihinTohokuStop stationCode="JK 11" location={JK_11} />
            <KeihinTohokuStop stationCode="JK 12" location={JK_12} />
            <KeihinTohokuStop stationCode="JK 13" location={JK_13} />
            <KeihinTohokuStop stationCode="JK 14" location={JK_14} />
            <KeihinTohokuStop stationCode="JK 15" location={JK_15} />
            <KeihinTohokuStop stationCode="JK 16" location={JK_16} />
            <KeihinTohokuStop stationCode="JK 17" location={JK_17} />
            <KeihinTohokuStop stationCode="JK 18" location={JK_18} />
            <KeihinTohokuStop stationCode="JK 19" location={JK_19} />
            <KeihinTohokuStop stationCode="JK 20" location={JK_20} />
            <KeihinTohokuStop stationCode="JK 21" location={JK_21} />
            <KeihinTohokuStop stationCode="JK 22" location={JK_22} />
            <KeihinTohokuStop stationCode="JK 23" location={JK_23} />
            <KeihinTohokuStop stationCode="JK 24" location={JK_24} />
            <KeihinTohokuStop stationCode="JK 25" location={JK_25} />
            <KeihinTohokuStop stationCode="JK 26" location={JK_26} />
            <KeihinTohokuStop stationCode="JK 27" location={JK_27} />
            <KeihinTohokuStop stationCode="JK 28" location={JK_28} />
            <KeihinTohokuStop stationCode="JK 28" location={JK_28} />
            <KeihinTohokuStop stationCode="JK 29" location={JK_29} />
            <KeihinTohokuStop stationCode="JK 30" location={JK_30} />
            <KeihinTohokuStop stationCode="JK 31" location={JK_31} />
            <KeihinTohokuStop stationCode="JK 32" location={JK_32} />
            <KeihinTohokuStop stationCode="JK 34" location={JK_34} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JK', 34, 47)}
                origin={JK_34}
                slope={scaleToUnitX(NNW, MAJOR_LINE * 0.5)}
                strokeColor="stroke-keihin-tohoku"
            />
        </>
    );
};

export const KeihinTohokuPath = () => {
    return (
        <SVGPath
            points={[JK_01, JK_07, JK_08, JK_11, JK_12, JK_17, JK_20, JK_23, JK_26, JK_47]}
            directions={[E, ENE, N, NNW, ENE, NE, NNE, ENE, NNE, NNW]}
            color="stroke-keihin-tohoku"
        />
    );
};
