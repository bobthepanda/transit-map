import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, NNE, NNW, offset, scale, scaleToUnitX, SSW, W, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JY_01, JY_23, JY_26, JY_27, JY_28, JY_29 } from '../jr-east/Yamanote';

export const A_12 = offset(JY_01, scaleToUnitX(ESE, MAJOR_LINE * 2));
export const A_13 = offset(A_12, scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const A_14 = offset(A_13, scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const A_15 = offset(A_14, scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const A_16 = offset(A_15, scaleToUnitX(NNE, MAJOR_LINE));
export const A_17 = offset(A_16, scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const A_18 = offset(A_17, scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const A_20 = offset(A_18, { dy: -MAJOR_LINE * 0.5, dx: MAJOR_LINE * 3 - OFFSET * 1.5 });
export const A_11 = offset(A_12, scaleToUnitX(SSW, MAJOR_LINE * 0.75));
export const A_05 = offset(JY_23, { dy: OFFSET });
export const A_07 = offset(JY_26, scaleToUnitX(WNW, OFFSET * 2));
export const A_08 = offset(JY_27, scaleToUnitX(WNW, OFFSET * 2));
export const A_09 = offset(JY_28, scaleToUnitX(NNW, OFFSET));
export const A_10 = offset(JY_29, { dy: OFFSET }, scale(SSW, OFFSET), scaleToUnitX(WNW, OFFSET));

const AsakusaStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-asakusa" />;
};

export const AsakusaStops = () => {
    return (
        <>
            <AsakusaStop stationCode="A 05" location={A_05} />
            <AsakusaStop stationCode="A 07" location={A_07} />
            <AsakusaStop stationCode="A 08" location={A_08} />
            <AsakusaStop stationCode="A 09" location={A_09} />
            <AsakusaStop stationCode="A 10" location={A_10} />
            <AsakusaStop stationCode="A 11" location={A_11} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('A', 12, 15)}
                origin={A_12}
                slope={scaleToUnitX(NNE, MAJOR_LINE * 0.5)}
                strokeColor="stroke-asakusa"
            />
            <AsakusaStop stationCode="A 16" location={A_16} />
            <AsakusaStop stationCode="A 17" location={A_17} />
            <AsakusaStop stationCode="A 18" location={A_18} />
            <AsakusaStop stationCode="A 19" location={offset(A_20, scaleToUnitX(W, MAJOR_LINE * 1.5))} />
            <AsakusaStop stationCode="A 20" location={A_20} />
        </>
    );
};

export const AsakusaPath = () => {
    return <SVGPath points={[A_05, A_07, A_09, A_10, A_11, A_20]} directions={[E, NNE, ENE, ESE, NNE, E]} color="stroke-asakusa" />;
};
