import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, NNW, S, WSW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JK_17 } from '../jr-east/KeihinTohoku';
import { A_05 } from '../toei/Asakusa';
import { OM_06 } from './Oimachi';

const IK_01 = offset(A_05, scale(NNW, OFFSET));
const IK_05 = offset(OM_06, { dy: OFFSET, dx: OFFSET * 0.5 });
export const IK_15 = offset(JK_17, { dy: -OFFSET });

export const IkegamiStops = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('IK', 1, 4)}
                origin={IK_01}
                slope={scaleToUnitX(WSW, MAJOR_LINE * 0.5)}
                textAlignments={[TextAlignment.UP]}
            />
            <Stop stationCode="IK 05" location={IK_05} />
            <Stop stationCode="IK 15" location={IK_15} />
        </>
    );
};

export const IkegamiPath = () => {
    return <SVGPath points={[IK_01, IK_05, IK_15]} directions={[WSW, S, ESE]} />;
};
