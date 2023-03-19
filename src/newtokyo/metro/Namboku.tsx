import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, generatePointY, N, NNE, NNW, NW, offset, scale, scaleToUnitX, SSE, SSW, WNW } from '../../utils/PathUtils';
import { JC_04 } from '../jr-east/ChuoRapid';
import { JB_15, JB_16 } from '../jr-east/ChuoSobu';
import { JY_10 } from '../jr-east/Yamanote';
import { A_17 } from '../toei/Asakusa';
import { I_01, I_02, I_03 } from '../toei/Mita';
import { G_06 } from './Ginza';

export const N_10 = offset(JB_16, scale(WNW, OFFSET));
export const N_11 = generatePointY({ start: N_10, slope: NNE, endReference: offset(A_17, { dy: OFFSET }) });
export const N_14 = offset(JY_10, { dy: OFFSET, dx: -OFFSET * 0.5 });
export const N_09 = offset(JB_15, scale(WNW, OFFSET));
export const N_08 = offset(JC_04, scale(N, OFFSET));
export const N_07 = offset(N_08, scaleToUnitX(SSE, OFFSET * 3.25));
export const N_01 = offset(I_01, scale(NNW, OFFSET));
export const N_02 = offset(I_02, scale(NNW, OFFSET));
export const N_03 = offset(I_03, scale(NNW, OFFSET));
export const N_06 = offset(G_06, scaleToUnitX(SSW, OFFSET * 0.5));
export const N_05 = offset(N_06, { dy: MAJOR_LINE });
export const N_04 = offset(N_05, { dy: MAJOR_LINE });

const NambokuStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-namboku" />;
};

export const NambokuStops = () => {
    return (
        <>
            <NambokuStop stationCode="N 01" location={N_01} />
            <NambokuStop stationCode="N 02" location={N_02} />
            <NambokuStop stationCode="N 03" location={N_03} />
            <NambokuStop stationCode="N 04" location={N_04} />
            <NambokuStop stationCode="N 05" location={N_05} textAlignment={TextAlignment.LEFT} />
            <NambokuStop stationCode="N 06" location={N_06} />
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
    return <SVGPath points={[N_01, N_04, N_07, N_09, N_14]} color="stroke-namboku" directions={[ENE, N, NNW, NNE, NW]} />;
};
