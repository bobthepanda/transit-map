import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { midPoint, offset, scale, scaleToUnitX, SE, SSE, SSW, SW, W, WNW, WSW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JK_11, JK_16, JK_17 } from '../jr-east/KeihinTohoku';
import { JO_13 } from '../jr-east/SobuRapid';
import { JY_25 } from '../jr-east/Yamanote';
import { A_07 } from '../toei/Asakusa';

const MAIN_LINE_OFFSET = scaleToUnitX(SW, MAJOR_LINE * 0.5);
const KAMATA_OFFSET = scaleToUnitX(WSW, MAJOR_LINE * 0.5);

const KK_01 = offset(JY_25, scale(WNW, OFFSET));

export const KK_11 = offset(JK_17, scaleToUnitX(SE, OFFSET * 4.5));
const KK_02 = offset(KK_11, scale(MAIN_LINE_OFFSET, -9));
const KK_20 = offset(JK_16, scaleToUnitX(SSE, OFFSET * 2.5)); // 12-17 are skipped
export const KK_27 = offset(KK_20, KAMATA_OFFSET); // 21-26 are skipped
const KK_29 = offset(KK_27, scale(KAMATA_OFFSET, 2));
const KK_35 = offset(KK_29, scale(KAMATA_OFFSET, 6));
const KK_36 = offset(KK_35, scale(KAMATA_OFFSET, 1));
const KK_37 = offset(JO_13, scale(SSE, OFFSET));
const KK_39 = offset(JK_11, scaleToUnitX(WSW, MAJOR_LINE));
export const MainStops = () => {
    return (
        <>
            <Stop stationCode="KK 01" location={KK_01} />
            <LineSegmentWithStepChange stops={generateStationCodes('KK', 2, 11)} origin={KK_02} slope={MAIN_LINE_OFFSET} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('KK', 27, 36)}
                origin={offset(KK_20, KAMATA_OFFSET)}
                slope={KAMATA_OFFSET}
            />
            <LineSegmentWithStepChange stops={generateStationCodes('KK', 20, 18)} origin={KK_20} slope={scale(KAMATA_OFFSET, -1)} />
            <Stop stationCode="KK 37" location={KK_37} />
            <Stop stationCode="KK 39" location={KK_39} />
        </>
    );
};

export const MainPath = () => {
    return (
        <SVGPath points={[A_07, KK_01, KK_11, KK_36, midPoint(KK_36, KK_37), KK_37, KK_39]} directions={[SSW, SE, SW, WSW, W, WSW, SSE]} />
    );
};
