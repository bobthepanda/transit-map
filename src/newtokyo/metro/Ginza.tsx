import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, NNE, NW, offset, scale, scaleToUnitX, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JY_01, JY_02 } from '../jr-east/Yamanote';

export const G_10 = offset(JY_01, scaleToUnitX(ESE, MAJOR_LINE));
export const G_12 = offset(G_10, scaleToUnitX(NNE, MAJOR_LINE * 0.5 * 2));
export const G_13 = offset(JY_02, scale(WNW, OFFSET * 2));

const GinzaStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-ginza" />;
};

export const GinzaStops = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('G', 10, 12)}
                origin={G_10}
                slope={scaleToUnitX(NNE, MAJOR_LINE * 0.5)}
                strokeColor="stroke-ginza"
            />
            <GinzaStop stationCode="G 13" location={G_13} />
        </>
    );
};

export const GinzaPath = () => {
    return <SVGPath points={[G_10, G_13]} color="stroke-ginza" directions={[NNE, NW]} />;
};
