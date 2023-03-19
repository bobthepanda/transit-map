import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, ESE, NNE, NNW, offset, RADIUS, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JY_01, JY_02, JY_03, JY_04, JY_05, JY_06, JY_07, JY_08, JY_09 } from './Yamanote';

export const JK_26 = offset(JY_01, scale(ESE, OFFSET));
export const JK_27 = offset(JY_02, scale(ESE, OFFSET));
export const JK_28 = offset(JY_03, scale(ESE, OFFSET));
export const JK_29 = offset(JY_04, scale(ESE, OFFSET));
export const JK_30 = offset(JY_05, scale(ESE, OFFSET));
export const JK_31 = offset(JY_06, scale(ENE, OFFSET));
export const JK_32 = offset(JY_07, scale(ENE, OFFSET));
export const JK_33 = offset(JY_08, scale(ENE, OFFSET));
export const JK_34 = offset(JY_09, scale(ENE, OFFSET));
export const JK_36 = offset(JK_34, scaleToUnitX(NNW, MAJOR_LINE * 0.5, 2));
export const JK_38 = offset(JK_36, scaleToUnitX(NNW, MAJOR_LINE * 0.5, 2));
export const JK_42 = offset(JK_38, scaleToUnitX(NNW, MAJOR_LINE * 0.5, 4));
export const JK_43 = offset(JK_42, scaleToUnitX(NNW, MAJOR_LINE * 0.5));
export const JK_46 = offset(JK_43, scaleToUnitX(NNW, MAJOR_LINE * 0.5, 3));
export const JK_47 = offset(JK_46, scaleToUnitX(NNW, MAJOR_LINE * 0.5));

const KeihinTohokuStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-keihin-tohoku" />;
};

export const KeihinTohokuStops = () => {
    return (
        <>
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
        <SVGPath points={[JK_26, JK_47]} directions={[NNE, NNW]} radii={{ 1: RADIUS + OFFSET * 0.5 * 2 }} color="stroke-keihin-tohoku" />
    );
};
