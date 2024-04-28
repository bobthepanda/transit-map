import { Coordinates } from '../../../interfaces/Dimensions';
import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { JB_15 } from './Ichigaya';

export const JB_16: Coordinates = offset(JB_15, scaleToUnitX(NE, MAJOR_LINE + OFFSET * 3));
export const N_10: Coordinates = offset(JB_16, scale(NW, OFFSET));
export const Y_13: Coordinates = offset(N_10, scale(NW, OFFSET));
export const E_06: Coordinates = offset(Y_13, scale(NW, OFFSET));
export const T_06: Coordinates = offset(E_06, scale(W, OFFSET));
export const Iidabashi = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('T', 6, 4)}
                slope={scaleToUnitX(NW, OFFSET * 3)}
                origin={T_06}
                skipBeginning
                strokeColor="stroke-tozai"
                textAlignments={[TextAlignment.NE]}
            />
            <g id="iidabashi">
                <Stop stationCode="N 10" location={N_10} strokeColor="stroke-namboku" hideText />
                <Stop stationCode="JB 16" location={JB_16} strokeColor="stroke-chuo-sobu" hideText />
                <Stop stationCode="Y 13" location={Y_13} strokeColor="stroke-yurakucho" hideText />
                <Stop stationCode="E 06" location={E_06} strokeColor="stroke-oedo" textAlignment={TextAlignment.NW} />
                <Stop stationCode="T 06" location={T_06} strokeColor="stroke-tozai" hideText />
            </g>
        </>
    );
};
