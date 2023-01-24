import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, generatePoint, offset } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_31 } from '../jr-east/ChuoSobu';
import { JM_13 } from '../jr-east/Musashino';
import { KS_10 } from '../keisei/Main';

const THIS_KS_10 = offset(KS_10, { dy: -OFFSET });
const HS_05 = generatePoint({ start: THIS_KS_10, slope: ENE, endReference: JM_13 });
export const HS_08 = generatePoint({ start: THIS_KS_10, slope: ENE, endReference: offset(JB_31, { dx: -OFFSET * 0.5 }) });

export const HokusoPath = () => {
    return <SVGPath color="stroke-hokuso" points={[THIS_KS_10, HS_08]} />;
};

const Hokuso = () => {
    return (
        <g className="hokuso">
            <HokusoPath />
            <Stop location={THIS_KS_10} stationCode="KS 10" hideText />
            <LineSegmentWithEndpoint
                origin={offset(THIS_KS_10, { dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 })}
                endpoint={HS_05}
                stops={[...generateStationCodes('HS', 1, 5)]}
                strokeColor="stroke-hokuso"
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('HS', 8, 6)}
                origin={HS_08}
                xstep={-OFFSET * 4}
                ystep={OFFSET * 2}
                strokeColor="stroke-hokuso"
            />
        </g>
    );
};

export default Hokuso;
