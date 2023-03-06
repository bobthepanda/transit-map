import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, ESE, NNE, NW, offset, scale, scaleToUnitX, SSE, SSW, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JY_01, JY_02, JY_04, JY_20, JY_29 } from '../jr-east/Yamanote';
import { C_08 } from './Chiyoda';

export const G_10 = offset(JY_01, scaleToUnitX(ESE, MAJOR_LINE));
export const G_11 = offset(G_10, scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const G_12 = offset(G_11, scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const G_13 = offset(JY_02, scale(WNW, OFFSET * 2));
export const G_15 = offset(JY_04, scaleToUnitX(WNW, OFFSET * 6));
export const G_09 = offset(G_10, scaleToUnitX(SSW, MAJOR_LINE));
export const G_07 = offset(C_08, scaleToUnitX(SSW, OFFSET * 1.875));
export const G_01 = offset(JY_20, { dx: OFFSET, dy: -OFFSET }, scale(SSE, OFFSET));

const GinzaStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-ginza" />;
};

export const GinzaStops = () => {
    return (
        <>
            <GinzaStop stationCode="G 01" location={G_01} />
            <GinzaStop stationCode="G 07" location={G_07} />
            <GinzaStop stationCode="G 08" location={offset(JY_29, { dy: OFFSET })} />
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
