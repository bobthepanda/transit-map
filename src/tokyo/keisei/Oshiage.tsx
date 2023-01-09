import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { MAJOR_LINE, OFFSET } from '../../utils/CommonCoordinates';
import { curveFrom, E, Factor, NNE, offset, scale, startAtLocation } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { Z_14 } from '../tokyo-metro/Hanzomon';
import { KS_09 } from './Main';

const KS_45 = offset(Z_14, { dy: -OFFSET });
const KS_44 = offset(KS_45, scale(NNE, MAJOR_LINE / Factor.DOUBLE_DIAG));

export const OshiagePath = () => {
    return (
        <path
            d={`
            ${startAtLocation(KS_45)}
            ${curveFrom({ start: KS_45, end: KS_09, firstDirection: NNE, secondDirection: E })}
    `}
        />
    );
};

const Oshiage = () => {
    return (
        <g className="oshiage">
            <OshiagePath />
            <StopFromTokyo stationCode="KS 45" location={KS_45} />
            <LineSegmentWithStepChange origin={KS_44} xstep={OFFSET} ystep={-OFFSET * 2} stops={generateStationCodes('KS', 46, 49)} />
        </g>
    );
};

export default Oshiage;
