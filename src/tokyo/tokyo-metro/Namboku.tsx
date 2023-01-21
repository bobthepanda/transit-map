import { MAJOR_LINE } from '../../map/GridLines';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { curveFrom, ENE, N, offset, startAtLocation } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_16 } from '../jr-east/ChuoSobu';
import { JY_10 } from '../jr-east/Yamanote';
import StopFromTokyo from '../StopsFromTokyo';
import { M_22 } from './Marunouchi';

const N_11 = offset(M_22, { dy: OFFSET });
const N_14 = offset(JY_10, { dx: OFFSET * 0.5, dy: OFFSET });
const N_10 = offset(JB_16, { dx: -OFFSET * 2 });

export const NambokuPath = () => {
    return (
        <path
            d={`
    ${startAtLocation(N_10)}
    ${curveFrom({ start: N_10, end: N_11, firstDirection: N, secondDirection: ENE })}
    ${curveFrom({ start: N_11, end: N_14, firstDirection: ENE, secondDirection: N })}
    `}
        />
    );
};

const Namboku = () => {
    return (
        <g className="namboku">
            <NambokuPath />
            <StopFromTokyo stationCode="N 10" location={N_10} />
            <StopFromTokyo stationCode="N 11" location={N_11} />
            <LineSegmentWithStepChange stops={generateStationCodes('N', 14, 12)} origin={N_14} ystep={MAJOR_LINE} />
        </g>
    );
};

export default Namboku;
