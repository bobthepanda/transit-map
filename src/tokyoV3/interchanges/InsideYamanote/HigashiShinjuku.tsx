import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, SE, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { F_13 } from './ShinjukuSanchome';

export const F_12 = offset(F_13, scaleToUnitX(NE, OFFSET * 4));
export const E_02 = offset(F_12, scaleToUnitX(W, OFFSET));
export const F_11 = offset(F_12, scaleToUnitX(NE, OFFSET * 4));
export const HigashiShinjuku = () => {
    return (
        <>
            <Stop stationCode="F 11" location={F_11} strokeColor="stroke-fukutoshin" textAlignment={TextAlignment.NW} />
            <LineSegmentWithStepChange
                origin={E_02}
                skipBeginning
                slope={scaleToUnitX(SE, OFFSET * 2.5)}
                stops={generateStationCodes('E', 2, 5)}
                strokeColor="stroke-oedo"
                textAlignments={[TextAlignment.NE]}
            />
            <g id="higashi-shinjuku">
                <Stop stationCode="F 12" location={F_12} strokeColor="stroke-fukutoshin" textAlignment={TextAlignment.UP} />
                <Stop stationCode="E 02" location={E_02} strokeColor="stroke-oedo" hideText />
            </g>
        </>
    );
};
