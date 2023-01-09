import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, generatePoint, lineToLocation, offset, startAtLocation } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CS_KAMEIDO } from '../jr-east/ChuoSobu';
import StopFromTokyo from '../StopsFromTokyo';
import { TS_04 } from './Skytree';

const KAMEIDO_TS_04 = offset(TS_04, { dx: OFFSET });
const TS_44 = generatePoint({ start: KAMEIDO_TS_04, slope: ESE, endReference: offset(CS_KAMEIDO, { dx: OFFSET * 0.5 }) });

export const KameidoPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(KAMEIDO_TS_04)}
        ${lineToLocation(TS_44)}
    `}
        />
    );
};

const Kameido = () => {
    return (
        <g className="kameido">
            <KameidoPath />
            <StopFromTokyo stationCode="TS 04" location={KAMEIDO_TS_04} hideText />
            <LineSegmentWithStepChange
                stops={generateStationCodes('TS', 44, 41)}
                origin={TS_44}
                xstep={-MAJOR_LINE * 0.5}
                ystep={-MAJOR_LINE * 0.25}
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
            />
        </g>
    );
};

export default Kameido;
