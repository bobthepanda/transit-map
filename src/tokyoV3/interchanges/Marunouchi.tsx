import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, W, offset, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_04, JB_08 } from './Chuo';

export const M_01 = offset(JB_04, { dy: OFFSET * 2 });

export const M_06 = offset(JB_08, { dy: MAJOR_LINE });
export const M_07 = offset(M_06, scaleToUnitX(E, MAJOR_LINE * 1));

const Marunouchi = () => {
    return (
        <>
            <Stop stationCode="M 01" location={M_01} strokeColor="stroke-marunouchi" hideText />
            <LineSegmentWithStepChange
                stops={generateStationCodes('M', 6, 2)}
                origin={M_06}
                slope={scaleToUnitX(W, MAJOR_LINE - OFFSET)}
                strokeColor="stroke-marunouchi"
                textAlignments={[TextAlignment.UP]}
            />
            <Stop stationCode="M 07" location={M_07} strokeColor="stroke-marunouchi" textAlignment={TextAlignment.UP} />
        </>
    );
};

export default Marunouchi;
