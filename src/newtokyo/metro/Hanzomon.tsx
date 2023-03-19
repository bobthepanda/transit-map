import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, midPoint, N, NNE, offset, S, scale, scaleToUnitX, SSE, WNW, WSW } from '../../utils/PathUtils';
import { JB_22 } from '../jr-east/ChuoSobu';
import { A_14, A_20 } from '../toei/Asakusa';
import { I_10 } from '../toei/Mita';
import { E_13, E_14 } from '../toei/Oedo';
import { C_11 } from './Chiyoda';
import { G_01, G_12 } from './Ginza';
import { M_18 } from './Marunouchi';

export const Z_08 = offset(M_18, scaleToUnitX(WNW, MAJOR_LINE * 0.5), scaleToUnitX(NNE, OFFSET * 0.5));
export const Z_09 = offset(G_12, scaleToUnitX(S, OFFSET));
const Z_10 = offset(A_14, scaleToUnitX(S, OFFSET));
const Z_11 = offset(E_14, { dx: OFFSET * 0.5, dy: OFFSET });
const Z_13 = offset(JB_22, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const Z_12 = { x: Z_13.x, y: E_13.y };
export const Z_14 = offset(A_20, scaleToUnitX(E, OFFSET));
export const Z_07 = offset(I_10, { dx: -OFFSET * 0.5, dy: OFFSET * 2 });
export const Z_06 = offset(C_11, scaleToUnitX(WNW, MAJOR_LINE * 2.25), { dy: OFFSET * 1.5 }, scaleToUnitX(WSW, OFFSET * 2));
export const Z_01 = offset(G_01, scale(SSE, OFFSET));
const Z_04 = offset(Z_01, scaleToUnitX(ENE, MAJOR_LINE * 4));
const Z_05 = offset(midPoint(Z_04, Z_06), { dx: OFFSET * 2 + MINOR_LINE * 0.5 });

const HanzomonStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-hanzomon" />;
};

export const HanzomonStops = () => {
    return (
        <>
            <HanzomonStop stationCode="Z 01" location={Z_01} />
            <HanzomonStop stationCode="Z 04" location={Z_04} />
            <HanzomonStop stationCode="Z 05" location={Z_05} />
            <HanzomonStop stationCode="Z 06" location={Z_06} />
            <HanzomonStop stationCode="Z 07" location={Z_07} />
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
    return (
        <SVGPath
            points={[Z_01, Z_05, Z_06, Z_07, Z_08, midPoint(Z_08, Z_09), Z_09, Z_11, Z_14]}
            color="stroke-hanzomon"
            directions={[ENE, N, ENE, E, SSE, E, ESE, E, N]}
        />
    );
};
