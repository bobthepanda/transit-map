import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, generatePoint, N, NNE, NNW, offset, scale, scaleToUnitX, SSW, WNW, WSW } from '../../utils/PathUtils';
import { JY_01, JY_08, JY_19, JY_20 } from '../jr-east/Yamanote';

export const C_11 = offset(JY_01, scaleToUnitX(WNW, MAJOR_LINE * 2), scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const C_10 = offset(JY_01, scaleToUnitX(WNW, MAJOR_LINE * 2));
export const C_16 = generatePoint({ start: C_10, slope: NNE, endReference: offset(JY_08, { dx: -OFFSET }) });
export const C_09 = offset(C_10, scaleToUnitX(SSW, MAJOR_LINE * 0.75), scaleToUnitX(ESE, MAJOR_LINE * 0.5));
export const C_08 = offset(C_09, scaleToUnitX(SSW, MAJOR_LINE * 0.25), scaleToUnitX(WNW, MAJOR_LINE * 1.25 - OFFSET * 2));
export const C_07 = offset(C_08, { dx: -MINOR_LINE - OFFSET * 4 }, scaleToUnitX(WNW, MAJOR_LINE * 0.25), scaleToUnitX(WSW, OFFSET * 0.75));
export const C_04 = offset(JY_20, { dx: OFFSET * 2 }, scale(NNW, OFFSET), scaleToUnitX(ENE, MAJOR_LINE - OFFSET), { dy: -OFFSET });
const C_06 = offset(C_07, scaleToUnitX(WSW, MAJOR_LINE * 1.5 + MINOR_LINE * 0.5));
const C_05 = offset(C_04, scaleToUnitX(ESE, MAJOR_LINE));
export const C_03 = offset(JY_19, { dx: OFFSET, dy: MAJOR_LINE * 0.5 });
export const C_02 = offset(C_03, { dx: -MAJOR_LINE * 3 });
export const C_01 = offset(C_02, { dx: -MAJOR_LINE });

const ChiyodaStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-chiyoda" />;
};

export const ChiyodaStops = () => {
    return (
        <>
            <ChiyodaStop stationCode="C 01" location={C_01} textAlignment={TextAlignment.DOWN} />
            <ChiyodaStop stationCode="C 02" location={C_02} textAlignment={TextAlignment.DOWN} />
            <ChiyodaStop stationCode="C 03" location={C_03} textAlignment={TextAlignment.UP} />
            <ChiyodaStop stationCode="C 04" location={C_04} />
            <ChiyodaStop stationCode="C 05" location={C_05} />
            <ChiyodaStop stationCode="C 06" location={C_06} />
            <ChiyodaStop stationCode="C 07" location={C_07} />
            <ChiyodaStop stationCode="C 08" location={C_08} />
            <ChiyodaStop stationCode="C 09" location={C_09} />
            <ChiyodaStop stationCode="C 10" location={C_10} />
            <ChiyodaStop stationCode="C 11" location={C_11} />
            <ChiyodaStop stationCode="C 16" location={C_16} />
        </>
    );
};

export const ChiyodaPath = () => {
    return <SVGPath points={[C_01, C_04, C_07, C_08, C_09, C_16]} directions={[E, ESE, ENE, ESE, N, NNE]} color="stroke-chiyoda" />;
};
