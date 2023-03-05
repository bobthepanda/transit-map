import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ESE, midPoint, N, NNE, offset, S, scale, scaleToUnitX, WNW } from '../../utils/PathUtils';
import { JB_22 } from '../jr-east/ChuoSobu';
import { A_14, A_20 } from '../toei/Asakusa';
import { E_13, E_14 } from '../toei/Oedo';
import { G_12 } from './Ginza';
import { M_18 } from './Marunouchi';

export const Z_08 = offset(M_18, scaleToUnitX(WNW, MAJOR_LINE * 0.5 + MINOR_LINE), scale(NNE, OFFSET));
export const Z_09 = offset(G_12, scaleToUnitX(S, OFFSET));
const Z_10 = offset(A_14, scaleToUnitX(S, OFFSET));
const Z_11 = offset(E_14, { dx: OFFSET * 0.5, dy: OFFSET });
const Z_13 = offset(JB_22, { dy: -OFFSET * 0.5, dx: -OFFSET });
export const Z_12 = { x: Z_13.x, y: E_13.y };
export const Z_14 = offset(A_20, scaleToUnitX(E, OFFSET));

const HanzomonStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-hanzomon" />;
};

export const HanzomonStops = () => {
    return (
        <>
            <HanzomonStop stationCode="Z 08" location={Z_08} />
            <HanzomonStop stationCode="Z 09" location={Z_09} />
            <HanzomonStop stationCode="Z 10" location={Z_10} />
            <HanzomonStop stationCode="Z 11" location={Z_11} />
            <HanzomonStop stationCode="Z 12" location={Z_12} />
            <HanzomonStop stationCode="Z 13" location={Z_13} />
            <HanzomonStop stationCode="Z 14" location={Z_14} />
        </>
    );
};

export const HanzomonPath = () => {
    return <SVGPath points={[Z_08, midPoint(Z_08, Z_09), Z_09, Z_11, Z_14]} color="stroke-hanzomon" directions={[ESE, E, ESE, E, N]} />;
};
