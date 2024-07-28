import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { JN_20 } from './Fuchuhommachi';
import { NAMBU_KAWASAKI_SLOPE } from './Keihin';

export const JN_19 = offset(JN_20, scale(NAMBU_KAWASAKI_SLOPE, -1)); // Seibu Tamagawa

export const SW_06 = offset(JN_19, scaleToUnitX(N, OFFSET * 4));
const SW_05 = offset(SW_06, scaleToUnitX(NE, OFFSET * 4));
export const SW_04 = offset(SW_05, scaleToUnitX(NE, MAJOR_LINE * 1.75));
export const SW_03 = offset(SW_04, scaleToUnitX(NE, MAJOR_LINE * 1.75));
const SW_02 = offset(SW_03, scaleToUnitX(NE, MAJOR_LINE * 1.75));
export const MinamiTama = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('JN', 19, 18)}
                origin={JN_19}
                strokeColor="stroke-nambu"
                textAlignments={[TextAlignment.SW]}
                slope={scale(NAMBU_KAWASAKI_SLOPE, -1)}
            />
            <Stop stationCode="SW 06" location={SW_06} textAlignment={TextAlignment.SE} />
            <Stop stationCode="SW 05" location={SW_05} textAlignment={TextAlignment.SE} />
            <Stop stationCode="SW 04" location={SW_04} textAlignment={TextAlignment.SE} />
            <Stop stationCode="SW 03" location={SW_03} textAlignment={TextAlignment.SE} />
            <Stop stationCode="SW 02" location={SW_02} textAlignment={TextAlignment.SE} />
        </>
    );
};
