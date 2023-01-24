import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, midPoint, N, NNE, offset, scale, W, WNW } from '../../utils/PathUtils';
import { JB_14, JB_15, JB_16 } from '../jr-east/ChuoSobu';
import { JY_10, YAMANOTE_NIPPORI } from '../jr-east/Yamanote';
import { E_22 } from '../toei/Oedo';
import { G_06 } from './Ginza';
import { M_22 } from './Marunouchi';
import { Y_16 } from './Yurakucho';

const N_11 = offset(M_22, { dy: OFFSET });
const N_14 = offset(JY_10, { dy: OFFSET });
const N_10 = offset(JB_16, { dx: -OFFSET * 1 });
const N_13 = offset(offset(YAMANOTE_NIPPORI, scale(NNE, OFFSET)), { dx: OFFSET * 1.5 - MAJOR_LINE * 4 });
const N_09 = offset(JB_15, { dx: OFFSET * -1 });
const N_08 = offset(JB_14, { dx: OFFSET * -1 });
const N_07 = offset(Y_16, { dy: OFFSET });
const N_06 = offset(G_06, { dx: -OFFSET, dy: OFFSET * 0.5 });
const N_04 = offset(E_22, { dy: -OFFSET, dx: -OFFSET * 0.5 });

export const NambokuPath = () => {
    return <SVGPath color="stroke-namboku" points={[N_04, N_07, N_08, N_11, N_13, N_14]} directions={[N, W, N, ENE, N, WNW]} />;
};

const NambokuStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-namboku" />;
};

const Namboku = () => {
    return (
        <g className="namboku">
            <NambokuPath />
            <NambokuStop stationCode="N 04" location={N_04} />
            <NambokuStop stationCode="N 05" location={midPoint(N_04, N_06)} />
            <NambokuStop stationCode="N 06" location={N_06} />
            <NambokuStop stationCode="N 07" location={N_07} />
            <NambokuStop stationCode="N 08" location={N_08} />
            <NambokuStop stationCode="N 09" location={N_09} />
            <NambokuStop stationCode="N 10" location={N_10} />
            <NambokuStop stationCode="N 11" location={N_11} />
            <NambokuStop stationCode="N 13" location={N_13} />
            <NambokuStop stationCode="N 14" location={N_14} />
        </g>
    );
};

export default Namboku;
