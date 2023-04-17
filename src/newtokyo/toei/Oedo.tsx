import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ESE, N, NNE, S, SSW, W, WNW, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JB_11, JB_12, JB_13, JB_21 } from '../jr-east/ChuoSobu';
import { JY_04 } from '../jr-east/Yamanote';
import { G_04 } from '../metro/Ginza';
import { H_04, H_13 } from '../metro/Hibiya';
import { M_08 } from '../metro/Marunouchi';
import { N_04, N_10 } from '../metro/Namboku';
import { A_09, A_17 } from './Asakusa';
import { I_12 } from './Mita';

export const E_15 = offset(H_13, scaleToUnitX(ESE, MAJOR_LINE));
export const E_12 = offset(JB_21, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const E_11 = offset(A_17, { dy: -OFFSET });
export const E_14 = offset(E_15, scaleToUnitX(NNE, MAJOR_LINE * 0.75 + OFFSET * 0.5));
export const E_13 = offset(E_14, scaleToUnitX(NNE, MAJOR_LINE * 0.625));
export const E_09 = offset(JY_04, scaleToUnitX(WNW, OFFSET * 3));
export const E_07 = offset(I_12, { dx: -OFFSET * 0.5, dy: OFFSET });
export const E_06 = offset(N_10, scale(WNW, OFFSET));
export const E_20 = offset(A_09, { dx: -OFFSET });
export const E_24 = offset(G_04, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const E_22 = offset(N_04, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const E_23 = offset(H_04, { dx: -OFFSET * 0.5, dy: -OFFSET });
const E_21 = offset(E_22, { dx: MAJOR_LINE });
const E_25 = offset(midPoint(JB_12, JB_13), { dy: MAJOR_LINE * 0.5 });
const E_26 = offset(JB_11, { dx: OFFSET });
const E_27 = offset(M_08, { dy: OFFSET });

const OedoStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-oedo" />;
};

export const OedoStops = () => {
    return (
        <>
            <OedoStop stationCode="E 27" location={E_27} />
            <OedoStop stationCode="E 26" location={E_26} />
            <OedoStop stationCode="E 25" location={E_25} />

            <OedoStop stationCode="E 24" location={E_24} />
            <OedoStop stationCode="E 23" location={E_23} />
            <OedoStop stationCode="E 22" location={E_22} />
            <OedoStop stationCode="E 21" location={E_21} textAlignment={TextAlignment.UP} />
            <OedoStop stationCode="E 20" location={E_20} />
            <OedoStop stationCode="E 15" location={E_15} />
            <OedoStop stationCode="E 14" location={E_14} />
            <OedoStop stationCode="E 13" location={E_13} />
            <OedoStop stationCode="E 12" location={E_12} />
            <OedoStop stationCode="E 11" location={E_11} />
            <OedoStop stationCode="E 09" location={E_09} />
            <OedoStop stationCode="E 07" location={E_07} />
            <OedoStop stationCode="E 06" location={E_06} />
        </>
    );
};

export const OedoPath = () => {
    return (
        <SVGPath
            points={[E_27, E_26, E_25, E_24, E_22, E_20, E_15, E_12, E_07, E_06]}
            directions={[E, S, E, S, E, ESE, NNE, N, W, SSW]}
            color="stroke-oedo"
        />
    );
};
