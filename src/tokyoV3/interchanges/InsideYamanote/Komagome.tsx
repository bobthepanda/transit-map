import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, SW, midPoint, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { JY_11 } from './Sugamo';
import { JY_09 } from './Tabata';

export const JY_10 = { ...JY_11, x: midPoint(JY_11, JY_09).x };
export const N_14 = offset(JY_10, scaleToUnitX(S, OFFSET));
export const Komagome = () => {
    return (
        <>
            <g id="komagome">
                <Stop stationCode="JY 10" location={JY_10} strokeColor="stroke-yamanote" hideText />
                <Stop stationCode="N 14" location={N_14} strokeColor="stroke-namboku" textAlignment={TextAlignment.SE} />
            </g>
            <LineSegmentWithStepChange
                stops={generateStationCodes('N', 14, 12)}
                skipBeginning
                origin={N_14}
                slope={scaleToUnitX(SW, OFFSET * 4.5)}
                textAlignments={[TextAlignment.SE]}
                strokeColor="stroke-namboku"
            />
        </>
    );
};
