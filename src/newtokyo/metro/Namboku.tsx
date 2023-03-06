import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { generatePointY, N, NE, NNE, NNW, offset, scale, scaleToUnitX, SSE, WNW } from '../../utils/PathUtils';
import { JC_04 } from '../jr-east/ChuoRapid';
import { JB_15, JB_16 } from '../jr-east/ChuoSobu';
import { JY_10, JY_22 } from '../jr-east/Yamanote';
import { A_17 } from '../toei/Asakusa';

export const N_10 = offset(JB_16, scaleToUnitX(WNW, OFFSET));
export const N_11 = generatePointY({ start: N_10, slope: NNE, endReference: offset(A_17, { dy: OFFSET }) });
export const N_14 = offset(JY_10, { dy: OFFSET, dx: -OFFSET * 0.5 });
export const N_09 = offset(JB_15, scale(WNW, OFFSET));
export const N_08 = offset(JC_04, { dy: OFFSET });
export const N_07 = offset(N_08, scaleToUnitX(SSE, OFFSET * 2));
export const N_01 = offset(JY_22, { dy: -OFFSET * 2 });

const NambokuStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-namboku" />;
};

export const NambokuStops = () => {
    return (
        <>
            <NambokuStop stationCode="N 01" location={N_01} />
            <NambokuStop stationCode="N 07" location={N_07} />
            <NambokuStop stationCode="N 08" location={N_08} />
            <NambokuStop stationCode="N 09" location={N_09} />
            <NambokuStop stationCode="N 10" location={N_10} />
            <NambokuStop stationCode="N 11" location={N_11} />
            <NambokuStop stationCode="N 14" location={N_14} />
        </>
    );
};

export const NambokuPath = () => {
    return <SVGPath points={[N_01, N_08, N_09, N_14]} color="stroke-namboku" directions={[NE, NNW, NNE, N]} />;
};
