import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop } from '../../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { I_12 } from './Kasuga';
import { I_11 } from './Suidobashi';
import { JY_09 } from './Tabata';
import { TABATA_SCALE } from './Uguisuidani';

export const I_15 = findIntersectionFromSlopes({
    start: offset(JY_09, scaleToUnitX(N, TABATA_SCALE - MAJOR_LINE * 0.5)),
    firstDirection: W,
    end: I_11,
    secondDirection: N,
});
export const JY_11 = offset(I_15, scaleToUnitX(E, OFFSET * 0.5), scaleToUnitX(N, OFFSET));
export const Sugamo = () => {
    return (
        <>
            <LineSegmentWithEndpoint
                origin={I_15}
                endpoint={I_12}
                skipBeginning
                skipEnd
                strokeColor="stroke-mita"
                stops={generateStationCodes('I', 15, 12)}
            />
            <g id="sugamo">
                <Stop stationCode="JY 11" location={JY_11} strokeColor="stroke-yamanote" hideText />
                <Stop stationCode="I 15" location={I_15} strokeColor="stroke-mita" />
            </g>
        </>
    );
};
