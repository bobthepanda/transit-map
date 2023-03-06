import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ESE, midPoint, NNE, NNW, offset, S, scale, scaleToUnitX, SSE, SSW, W, WNW } from '../../utils/PathUtils';
import { JB_14, JB_18 } from '../jr-east/ChuoSobu';
import { JK_26 } from '../jr-east/KeihinTohoku';
import { JY_13, JY_17 } from '../jr-east/Yamanote';
import { I_10 } from '../toei/Mita';
import { C_07, C_08, C_11 } from './Chiyoda';
import { G_09 } from './Ginza';
import { N_11 } from './Namboku';

export const M_17 = offset(JK_26, scale(SSW, OFFSET));
export const M_18 = offset(C_11, scaleToUnitX(ESE, MAJOR_LINE));
export const M_19 = offset(I_10, scaleToUnitX(E, MAJOR_LINE * 1.5), scaleToUnitX(SSE, OFFSET));
export const M_20 = offset(JB_18, { dy: -OFFSET });
export const M_22 = offset(N_11, { dx: OFFSET, dy: -OFFSET });
export const M_25 = offset(JY_13, { dx: OFFSET });
export const M_16 = offset(G_09, scale(WNW, OFFSET));
export const M_15 = offset(C_08, scale(SSW, OFFSET));
export const M_14 = offset(C_07, { dy: -OFFSET });
export const M_12 = offset(JB_14, scaleToUnitX(WNW, OFFSET));
export const M_08 = offset(JY_17, { dx: OFFSET * 2, dy: -OFFSET });
export const M_09 = offset(M_08, { dx: MAJOR_LINE });

const MarunouchiStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-marunouchi" />;
};

export const MarunouchiStops = () => {
    return (
        <>
            <MarunouchiStop stationCode="M 08" location={M_08} />
            <MarunouchiStop stationCode="M 09" location={M_09} />
            <MarunouchiStop stationCode="M 12" location={M_12} textAlignment={TextAlignment.LEFT} />
            <MarunouchiStop stationCode="M 14" location={M_14} textAlignment={TextAlignment.UP} />
            <MarunouchiStop stationCode="M 15" location={M_15} />
            <MarunouchiStop stationCode="M 16" location={M_16} />
            <MarunouchiStop stationCode="M 17" location={M_17} />
            <MarunouchiStop stationCode="M 18" location={M_18} />
            <MarunouchiStop stationCode="M 19" location={M_19} />
            <MarunouchiStop stationCode="M 20" location={M_20} />
            <MarunouchiStop stationCode="M 22" location={M_22} />
            <MarunouchiStop stationCode="M 25" location={M_25} />
        </>
    );
};

export const MarunouchiPath = () => {
    return (
        <SVGPath
            points={[M_08, M_12, M_15, M_16, M_17, M_18, M_19, M_22, midPoint(M_22, M_25), M_25]}
            color="stroke-marunouchi"
            directions={[E, S, ESE, NNE, WNW, NNE, NNW, W, WNW, W]}
        />
    );
};
