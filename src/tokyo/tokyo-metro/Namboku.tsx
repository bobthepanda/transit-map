import { MAJOR_LINE } from '../../map/GridLines';
import { OFFSET } from '../../utils/CommonCoordinates';
import { curveFrom, ENE, midPoint, N, NNE, offset, scale, startAtLocation, W, WNW } from '../../utils/PathUtils';
import { JB_14, JB_15, JB_16 } from '../jr-east/ChuoSobu';
import { JY_10, YAMANOTE_NIPPORI } from '../jr-east/Yamanote';
import StopFromTokyo from '../StopsFromTokyo';
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
    return (
        <path
            d={`
    ${startAtLocation(N_04)}
    ${curveFrom({ start: N_04, end: N_07, firstDirection: N, secondDirection: W })}
    ${curveFrom({ start: N_07, end: N_08, firstDirection: W, secondDirection: N })}
    ${curveFrom({ start: N_08, end: N_11, firstDirection: N, secondDirection: ENE })}
    ${curveFrom({ start: N_11, end: N_13, firstDirection: ENE, secondDirection: N })}
    ${curveFrom({ start: N_13, end: N_14, firstDirection: N, secondDirection: WNW })}
    `}
        />
    );
};

const Namboku = () => {
    return (
        <g className="namboku">
            <NambokuPath />
            <StopFromTokyo stationCode="N 04" location={N_04} />
            <StopFromTokyo stationCode="N 05" location={midPoint(N_04, N_06)} />
            <StopFromTokyo stationCode="N 06" location={N_06} />
            <StopFromTokyo stationCode="N 07" location={N_07} />
            <StopFromTokyo stationCode="N 08" location={N_08} />
            <StopFromTokyo stationCode="N 09" location={N_09} />
            <StopFromTokyo stationCode="N 10" location={N_10} />
            <StopFromTokyo stationCode="N 11" location={N_11} />
            <StopFromTokyo stationCode="N 13" location={N_13} />
            <StopFromTokyo stationCode="N 14" location={N_14} />
        </g>
    );
};

export default Namboku;
