import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NNE, NNW, offset, scale, scaleToUnitX, SSE, WNW } from '../../utils/PathUtils';
import { JY_11 } from '../jr-east/Yamanote';
import { C_09, C_11 } from '../metro/Chiyoda';

const I_15 = offset(JY_11, { dy: OFFSET });
const I_09 = offset(C_11, scale(WNW, OFFSET));
const I_11 = offset(I_15, scaleToUnitX(SSE, MAJOR_LINE * 2 - OFFSET));
export const I_10 = offset(I_11, scaleToUnitX(SSE, MAJOR_LINE / 2 + MINOR_LINE * 0.75));
export const I_12 = offset(I_11, scaleToUnitX(NNW, MAJOR_LINE * 0.5 + MINOR_LINE * 0.25));
const I_08 = offset(C_09, scale(WNW, OFFSET));

const MitaStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-mita" />;
};

export const MitaStops = () => {
    return (
        <>
            <MitaStop stationCode="I 08" location={I_08} />
            <MitaStop stationCode="I 09" location={I_09} />
            <MitaStop stationCode="I 10" location={I_10} />
            <MitaStop stationCode="I 11" location={I_11} />
            <MitaStop stationCode="I 12" location={I_12} />
            <MitaStop stationCode="I 15" location={I_15} />
        </>
    );
};

export const MitaPath = () => {
    return <SVGPath points={[I_09, I_15]} directions={[NNE, NNW]} color="stroke-mita" />;
};
