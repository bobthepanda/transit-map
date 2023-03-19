import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ESE, generatePoint, N, NNE, NNW, offset, RADIUS, scale, scaleToUnitX, SSW, WNW } from '../../utils/PathUtils';
import { JY_03, JY_04, JY_05, JY_21 } from '../jr-east/Yamanote';
import { A_11, A_12, A_13, A_14 } from '../toei/Asakusa';
import { C_08, C_09 } from './Chiyoda';
import { G_07, G_09 } from './Ginza';

export const H_12 = offset(A_12, scaleToUnitX(ESE, MAJOR_LINE), scale(SSW, OFFSET));
export const H_13 = offset(A_13, scaleToUnitX(ESE, MAJOR_LINE));
export const H_14 = offset(A_14, scaleToUnitX(E, OFFSET));
export const H_16 = offset(JY_03, scaleToUnitX(E, OFFSET * 4));
export const H_17 = offset(JY_04, scaleToUnitX(E, OFFSET * 4));
export const H_18 = offset(JY_05, scaleToUnitX(E, OFFSET * 4));
export const H_11 = offset(H_12, scaleToUnitX(SSW, MAJOR_LINE * 0.5 - OFFSET * 0.5));
export const H_10 = offset(A_11, { dy: OFFSET });
export const H_09 = offset(G_09, scaleToUnitX(SSW, OFFSET * 0.375), scaleToUnitX(WNW, OFFSET * 0.375));
export const H_08 = offset(C_09, { dy: OFFSET });
export const H_07 = offset(C_08, { dx: OFFSET * 0.5, dy: OFFSET });
export const H_06 = generatePoint({ start: H_07, slope: SSW, endReference: G_07 });
export const H_02 = offset(JY_21, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const H_03 = offset(H_02, { dx: MAJOR_LINE - OFFSET, dy: -MAJOR_LINE * 0.5 });
export const H_04 = offset(H_03, { dx: MAJOR_LINE - OFFSET, dy: -MAJOR_LINE * 0.5 });
export const H_05 = offset(H_04, { dx: MAJOR_LINE * 2.5 });

const HibiyaStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-hibiya" />;
};

export const HibiyaStops = () => {
    return (
        <>
            <HibiyaStop stationCode="H 02" location={H_02} />
            <HibiyaStop stationCode="H 03" location={H_03} />
            <HibiyaStop stationCode="H 04" location={H_04} />
            <HibiyaStop stationCode="H 05" location={H_05} textAlignment={TextAlignment.UP} />
            <HibiyaStop stationCode="H 06" location={H_06} textAlignment={TextAlignment.DOWN} />
            <HibiyaStop stationCode="H 07" location={H_07} />
            <HibiyaStop stationCode="H 08" location={H_08} />
            <HibiyaStop stationCode="H 09" location={H_09} />
            <HibiyaStop stationCode="H 10" location={H_10} />
            <HibiyaStop stationCode="H 11" location={H_11} />
            <HibiyaStop stationCode="H 12" location={H_12} />
            <HibiyaStop stationCode="H 13" location={H_13} />
            <HibiyaStop stationCode="H 14" location={H_14} />
            <HibiyaStop stationCode="H 15" location={offset(H_14, scaleToUnitX(NNW, MAJOR_LINE * 0.75))} />
            <HibiyaStop stationCode="H 16" location={H_16} />
            <HibiyaStop stationCode="H 17" location={H_17} />
            <HibiyaStop stationCode="H 18" location={H_18} />
        </>
    );
};

export const HibiyaPath = () => {
    return (
        <SVGPath
            points={[H_02, H_03, H_04, H_07, H_08, H_12, H_14, H_16]}
            color="stroke-hibiya"
            directions={[E, N, E, NNE, ESE, NNE, NNW, NNE]}
            radii={{ 4: RADIUS * 2 }}
        />
    );
};
