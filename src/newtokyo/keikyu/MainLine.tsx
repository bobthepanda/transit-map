import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { offset, scale, scaleToUnitX, SE, SSW, SW, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JY_25 } from '../jr-east/Yamanote';
import { A_07 } from '../toei/Asakusa';

const MAIN_LINE_OFFSET = scaleToUnitX(SW, MAJOR_LINE * 0.5);

const KK_01 = offset(JY_25, scale(WNW, OFFSET));
const KK_02 = offset(JY_25, scaleToUnitX(SE, MAJOR_LINE), scaleToUnitX(SW, OFFSET * 2));

export const KK_11 = offset(KK_02, scale(MAIN_LINE_OFFSET, 9));
const KK_20 = offset(KK_11, scale(MAIN_LINE_OFFSET, 3)); // 12-17 are skipped
export const KK_27 = offset(KK_20, MAIN_LINE_OFFSET); // 21-26 are skipped
const KK_29 = offset(KK_27, scale(MAIN_LINE_OFFSET, 2));
const KK_35 = offset(KK_29, scale(MAIN_LINE_OFFSET, 6));
const KK_37 = offset(KK_35, scale(MAIN_LINE_OFFSET, 2));

export const MainStops = () => {
    return (
        <>
            <Stop stationCode="KK 01" location={KK_01} />
            <LineSegmentWithStepChange
                stops={[...generateStationCodes('KK', 2, 11), ...generateStationCodes('KK', 18, 20), ...generateStationCodes('KK', 27, 36)]}
                origin={KK_02}
                slope={MAIN_LINE_OFFSET}
            />
            {/* <Stop stationCode="KK 20" location={KK_20} />
            <Stop stationCode="KK 27" location={KK_27} />
            <Stop stationCode="KK 29" location={KK_29} />
            <Stop stationCode="KK 35" location={KK_35} /> */}
            <Stop stationCode="KK 37" location={KK_37} />
        </>
    );
};

export const MainPath = () => {
    return <SVGPath points={[A_07, KK_01, KK_35]} directions={[SSW, SE, SW]} />;
};
