import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NW, S, W, findIntersectionFromSlopes, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { MG_01 } from '../InsideYamanote/Meguro';
import { OM_10 } from './Jiyugaoka';
import { OM_01 } from './Keihin';

const OOKAYAMA_INTERSECTION = findIntersectionFromSlopes({ start: MG_01, firstDirection: W, secondDirection: NW, end: OM_01 });
const MG_06 = offset(OOKAYAMA_INTERSECTION, scaleToUnitX(E, OFFSET));
const OM_08 = offset(MG_06, scale(S, OFFSET));

export const Ookayama = () => {
    return (
        <>
            <Stop stationCode="OM 09" location={midPoint(OM_08, OM_10)} textAlignment={TextAlignment.NE} />
            <Stop stationCode="MG 07" location={offset(MG_06, scaleToUnitX(W, MAJOR_LINE + OFFSET))} textAlignment={TextAlignment.UP} />
            <g id="ookayama">
                <Stop stationCode="MG 06" location={MG_06} hideText />
                <Stop stationCode="OM 08" location={OM_08} textAlignment={TextAlignment.SW} />
            </g>
            <LineSegmentWithEndpoint
                origin={MG_01}
                endpoint={MG_06}
                stops={generateStationCodes('MG', 1, 6)}
                skipBeginning
                skipEnd
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
            />
        </>
    );
};
