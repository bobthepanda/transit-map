import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, ESE, generatePoint, NNE, offset, scaleToUnitX, SSW, WNW } from '../../utils/PathUtils';
import { JY_01, JY_08 } from '../jr-east/Yamanote';

export const C_11 = offset(JY_01, scaleToUnitX(WNW, MAJOR_LINE * 2), scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const C_10 = offset(JY_01, scaleToUnitX(WNW, MAJOR_LINE * 2));
export const C_16 = generatePoint({ start: C_10, slope: NNE, endReference: offset(JY_08, { dx: -OFFSET }) });
export const C_09 = offset(C_10, scaleToUnitX(SSW, MAJOR_LINE));
export const C_08 = offset(C_09, scaleToUnitX(SSW, MAJOR_LINE * 0.25), scaleToUnitX(WNW, MAJOR_LINE - OFFSET * 2));
export const C_07 = offset(C_08, { dx: -MINOR_LINE - OFFSET * 4 });

const ChiyodaStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-chiyoda" />;
};

export const ChiyodaStops = () => {
    return (
        <>
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
    return <SVGPath points={[C_07, C_08, C_16]} directions={[ENE, ESE, NNE]} color="stroke-chiyoda" />;
};
