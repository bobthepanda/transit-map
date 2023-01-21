import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { MITA_HIBIYA, OFFSET, OTEMACHI } from '../../utils/CommonCoordinates';
import { curveFrom, ESE, offset, S, startAtLocation } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_17 } from '../jr-east/ChuoSobu';
import { JY_11 } from '../jr-east/Yamanote';
import StopFromTokyo from '../StopsFromTokyo';
import { E_07 } from './Oedo';

const SEGMENT_2 = ['I 08', 'I 07', 'I 06', 'I 05', 'I 04'];
export const I_10 = offset(OTEMACHI, { dx: MAJOR_LINE * -2 + OFFSET, dy: -MAJOR_LINE * 2 + OFFSET * 2 });
const I_11 = offset(JB_17, { dx: OFFSET * 0.5, dy: -OFFSET });
const I_12 = offset(E_07, { dy: -OFFSET, dx: OFFSET * 0.5 });
const I_15 = offset(JY_11, { dx: OFFSET * 0.5, dy: OFFSET });
export const MitaPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(I_15)}
        ${curveFrom({ start: I_11, end: I_10, firstDirection: S, secondDirection: ESE })}
        ${curveFrom({ start: I_10, end: MITA_HIBIYA, firstDirection: ESE, secondDirection: S })}    
    `}
        />
    );
};

const Mita = () => {
    return (
        <g className="mita">
            <MitaPath />
            <LineSegmentWithEndpoint stops={generateStationCodes('I', 15, 12)} origin={I_15} endpoint={I_12} />
            <StopFromTokyo stationCode="I 11" location={I_11} />
            <StopFromTokyo stationCode="I 10" location={I_10} />
            <StopFromTokyo stationCode="I 09" location={OTEMACHI} />
            <LineSegmentWithStepChange stops={SEGMENT_2} origin={MITA_HIBIYA} ystep={MAJOR_LINE} textAlignments={[TextAlignment.LEFT]} />
        </g>
    );
};

export default Mita;
