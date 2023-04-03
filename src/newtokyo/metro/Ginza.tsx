import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, ESE, NNE, NNW, NW, offset, scale, scaleToUnitX, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JY_01, JY_02, JY_04, JY_20 } from '../jr-east/Yamanote';
import { A_10, A_11 } from '../toei/Asakusa';
import { C_08 } from './Chiyoda';

export const G_10 = offset(JY_01, scaleToUnitX(ESE, MAJOR_LINE));
export const G_11 = offset(G_10, scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const G_12 = offset(G_11, scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const G_13 = offset(JY_02, scale(WNW, OFFSET * 2));
export const G_15 = offset(JY_04, scaleToUnitX(WNW, OFFSET * 6));
export const G_09 = offset(A_11, scaleToUnitX(WNW, MAJOR_LINE));
export const G_07 = offset(C_08, { dy: MAJOR_LINE - OFFSET * 1.25 }, scaleToUnitX(WNW, OFFSET * 2));
export const G_01 = offset(JY_20, { dx: OFFSET * 2 }, scale(NNW, OFFSET));
export const G_06 = offset(G_07, scaleToUnitX(WNW, MAJOR_LINE * 1.25 + OFFSET * 0.75));
export const G_05 = offset(G_06, scaleToUnitX(WNW, MAJOR_LINE * 0.5));
export const G_08 = offset(A_10, scale(NNE, OFFSET));
export const G_02 = offset(G_01, scaleToUnitX(ENE, MAJOR_LINE - OFFSET));
export const G_03 = offset(G_02, scaleToUnitX(ENE, MAJOR_LINE - OFFSET));
export const G_04 = offset(G_03, scaleToUnitX(ENE, MAJOR_LINE - OFFSET));

const GinzaStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-ginza" />;
};

export const GinzaStops = () => {
    return (
        <>
            <GinzaStop stationCode="G 01" location={G_01} />
            <GinzaStop stationCode="G 02" location={G_02} />
            <GinzaStop stationCode="G 03" location={G_03} />
            <GinzaStop stationCode="G 04" location={G_04} />
            <GinzaStop stationCode="G 05" location={G_05} textAlignment={TextAlignment.LEFT} />
            <GinzaStop stationCode="G 06" location={G_06} />
            <GinzaStop stationCode="G 07" location={G_07} />
            <GinzaStop stationCode="G 08" location={G_08} />
            <GinzaStop stationCode="G 09" location={G_09} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('G', 10, 12)}
                origin={G_10}
                slope={scaleToUnitX(NNE, MAJOR_LINE * 0.5)}
                strokeColor="stroke-ginza"
            />
            <GinzaStop stationCode="G 13" location={G_13} />
            <GinzaStop stationCode="G 15" location={G_15} />
        </>
    );
};

export const GinzaPath = () => {
    return <SVGPath points={[G_01, G_07, G_09, G_13, G_15]} color="stroke-ginza" directions={[ENE, ESE, NNE, NW, NNE]} />;
};
