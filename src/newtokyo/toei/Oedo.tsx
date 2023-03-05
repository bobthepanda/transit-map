import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, N, NNE, offset, scaleToUnitX, W } from '../../utils/PathUtils';
import { JB_21 } from '../jr-east/ChuoSobu';
import { H_13 } from '../metro/Hibiya';
import { A_17 } from './Asakusa';

export const E_15 = offset(H_13, scaleToUnitX(ESE, MAJOR_LINE));
export const E_12 = offset(JB_21, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const E_11 = offset(A_17, { dy: -OFFSET });
export const E_14 = offset(E_15, scaleToUnitX(NNE, MAJOR_LINE * 0.75 + OFFSET * 0.5));
export const E_13 = offset(E_14, scaleToUnitX(NNE, MAJOR_LINE * 0.75));

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
        </>
    );
};

export const OedoPath = () => {
    return <SVGPath points={[E_15, E_12, E_11]} directions={[NNE, N, W]} color="stroke-oedo" />;
};
