import { Stop } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { MAJOR_LINE, OFFSET } from '../../utils/CommonCoordinates';
import { E, Factor, NNE, offset, scale } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { Z_14 } from '../tokyo-metro/Hanzomon';
import { KS_09 } from './Main';

const KS_45 = offset(Z_14, { dy: -OFFSET });
const KS_44 = offset(KS_45, scale(NNE, MAJOR_LINE / Factor.DOUBLE_DIAG));

export const OshiagePath = () => {
    return <SVGPath points={[KS_45, KS_09]} directions={[NNE, E]} />;
};

const Oshiage = () => {
    return (
        <g className="oshiage">
            <OshiagePath />
            <Stop stationCode="KS 45" location={KS_45} />
            <LineSegmentWithStepChange origin={KS_44} slope={{ dx: OFFSET, dy: -OFFSET * 2 }} stops={generateStationCodes('KS', 46, 49)} />
        </g>
    );
};

export default Oshiage;
