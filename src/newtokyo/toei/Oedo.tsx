import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, N, NNE, offset, scale, scaleToUnitX, SSW, W, WNW } from '../../utils/PathUtils';
import { JB_21 } from '../jr-east/ChuoSobu';
import { JY_04 } from '../jr-east/Yamanote';
import { H_13 } from '../metro/Hibiya';
import { N_10 } from '../metro/Namboku';
import { A_17 } from './Asakusa';
import { I_12 } from './Mita';

export const E_15 = offset(H_13, scaleToUnitX(ESE, MAJOR_LINE));
export const E_12 = offset(JB_21, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const E_11 = offset(A_17, { dy: -OFFSET });
export const E_14 = offset(E_15, scaleToUnitX(NNE, MAJOR_LINE * 0.75 + OFFSET * 0.5));
export const E_13 = offset(E_14, scaleToUnitX(NNE, MAJOR_LINE * 0.625));
export const E_09 = offset(JY_04, scaleToUnitX(WNW, OFFSET * 3));
export const E_07 = offset(I_12, { dx: -OFFSET * 0.5, dy: OFFSET });
export const E_06 = offset(N_10, scale(WNW, OFFSET * 2));

const OedoStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-oedo" />;
};

export const OedoStops = () => {
    return (
        <>
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
    return <SVGPath points={[E_15, E_12, E_07, E_06]} directions={[NNE, N, W, SSW]} color="stroke-oedo" />;
};
