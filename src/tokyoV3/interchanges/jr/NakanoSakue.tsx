import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NW, SE, SW, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { E_31 } from './HigashiNakano';
import { KO_05 } from './Meidaimae';

const E_30 = offset(E_31, scaleToUnitX(SW, OFFSET * 5));
export const M_06 = offset(E_30, scale(E, OFFSET));
export const M_07 = offset(M_06, scaleToUnitX(SE, OFFSET * 3));
const M_05 = offset(M_06, scaleToUnitX(NW, MAJOR_LINE + OFFSET * 2));
export const MB_03 = { y: midPoint(M_06, M_05).y, x: KO_05.x };

export const NakanoSakue = () => {
    return (
        <>
            <g id="nakano-sakue">
                <Stop stationCode="E 30" location={E_30} hideText strokeColor="stroke-oedo" />
                <Stop stationCode="M 06" location={M_06} strokeColor="stroke-marunouchi" />
            </g>
            <Stop stationCode="M 07" location={M_07} textAlignment={TextAlignment.NE} strokeColor="stroke-marunouchi" />
            <LineSegmentWithStepChange
                origin={M_05}
                slope={scaleToUnitX(NW, OFFSET * 4.5)}
                stops={generateStationCodes('M', 5, 2)}
                strokeColor="stroke-marunouchi"
                textAlignments={[TextAlignment.SW]}
            />
            <LineSegmentWithStepChange
                origin={MB_03}
                slope={scaleToUnitX(E, OFFSET * 5)}
                stops={generateStationCodes('Mb', 3, 5)}
                strokeColor="stroke-marunouchi"
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
            />
        </>
    );
};
