import { MAJOR_LINE } from '../../map/GridLines';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, generatePoint, lineToLocation, offset, startAtLocation } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_31 } from '../jr-east/ChuoSobu';
import { JM_13 } from '../jr-east/Musashino';
import { KS_10 } from '../keisei/Main';
import StopFromTokyo from '../StopsFromTokyo';

const THIS_KS_10 = offset(KS_10, { dy: -OFFSET });
const HS_05 = generatePoint({ start: THIS_KS_10, slope: ENE, endReference: JM_13 });
export const HS_08 = generatePoint({ start: THIS_KS_10, slope: ENE, endReference: offset(JB_31, { dx: -OFFSET * 0.5 }) });

export const HokusoPath = () => {
    return (
        <path
            d={`
    ${startAtLocation(THIS_KS_10)}
    ${lineToLocation(HS_08)}
    `}
        />
    );
};

const Hokuso = () => {
    return (
        <g className="hokuso">
            <HokusoPath />
            <StopFromTokyo location={THIS_KS_10} stationCode="KS 10" hideText />
            <LineSegmentWithEndpoint
                origin={offset(THIS_KS_10, { dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 })}
                endpoint={HS_05}
                stops={[...generateStationCodes('HS', 1, 5)]}
            />
            <LineSegmentWithStepChange stops={generateStationCodes('HS', 8, 6)} origin={HS_08} xstep={-OFFSET * 4} ystep={OFFSET * 2} />
        </g>
    );
};

export default Hokuso;