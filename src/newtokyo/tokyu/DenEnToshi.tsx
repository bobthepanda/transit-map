import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, ESE, SE, WSW, findIntersectionFromSlopes, generatePoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { Z_01 } from '../metro/Hanzomon';
import { OH_18, OH_27, OH_28 } from '../odakyu/Odawara';

const DT_01 = offset(Z_01, scale(WSW, OFFSET));
const DT_02 = offset(DT_01, scaleToUnitX(WSW, MAJOR_LINE * 1.5));
const DEN_EN_TOSHI_OFFSET = scaleToUnitX(WSW, MAJOR_LINE * 0.75);
// const MIZONOKUCHI_OFFSET = scaleToUnitX(SW, MAJOR_LINE * 0.75);

export const DT_03 = offset(DT_02, scale(DEN_EN_TOSHI_OFFSET, 1));
export const DT_07 = offset(DT_03, scale(DEN_EN_TOSHI_OFFSET, 4));
export const DT_10 = offset(
    findIntersectionFromSlopes({ start: OH_18, firstDirection: ESE, end: DT_01, secondDirection: WSW }),
    scaleToUnitX(ENE, OFFSET * 2)
);
// const DT_11 = offset(DT_10, scaleToUnitX(WSW, MAJOR_LINE * 0.5), { dy: OFFSET });
export const DT_16 = offset(DT_10, scale(DEN_EN_TOSHI_OFFSET, 6));
export const DT_22 = findIntersectionFromSlopes({ start: OH_27, firstDirection: SE, end: DT_16, secondDirection: WSW });
export const DT_27 = generatePoint({ start: DT_22, slope: WSW, endReference: OH_28 });

export const DenEnToshiStops = () => {
    return (
        <>
            <Stop stationCode="DT 01" location={DT_01} textAlignment={TextAlignment.LEFT} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('DT', 2, 9)}
                origin={DT_02}
                textAlignments={[TextAlignment.LEFT]}
                slope={DEN_EN_TOSHI_OFFSET}
            />
            <Stop stationCode="DT 10" location={DT_10} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="DT 16" location={DT_16} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="DT 22" location={DT_22} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="DT 27" location={DT_27} textAlignment={TextAlignment.LEFT} />
        </>
    );
};

export const DenEnToshiPath = () => {
    return <SVGPath points={[DT_01, DT_27]} />;
};
