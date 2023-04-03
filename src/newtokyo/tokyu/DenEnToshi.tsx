import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, ESE, findIntersectionFromSlopes, generatePoint, offset, scale, scaleToUnitX, SE, WSW } from '../../utils/PathUtils';
import { Z_01 } from '../metro/Hanzomon';
import { OH_18, OH_27, OH_28 } from '../odakyu/Odawara';

const DT_01 = offset(Z_01, scale(WSW, OFFSET));
const DT_02 = offset(DT_01, scaleToUnitX(WSW, MAJOR_LINE * 1.5));
const DEN_EN_TOSHI_OFFSET = scaleToUnitX(WSW, MAJOR_LINE * 0.5);

export const DT_03 = offset(DT_02, scale(DEN_EN_TOSHI_OFFSET, 1));
export const DT_07 = offset(DT_03, scale(DEN_EN_TOSHI_OFFSET, 4));
export const DT_10 = offset(
    findIntersectionFromSlopes({ start: OH_18, firstDirection: ESE, end: DT_01, secondDirection: WSW }),
    scaleToUnitX(ENE, OFFSET * 2)
);
export const DT_16 = offset(DT_10, scale(DEN_EN_TOSHI_OFFSET, 6));
export const DT_22 = findIntersectionFromSlopes({ start: OH_27, firstDirection: SE, end: DT_01, secondDirection: WSW });
export const DT_27 = generatePoint({ start: DT_01, slope: WSW, endReference: OH_28 });

export const DenEnToshiStops = () => {
    return (
        <>
            <Stop stationCode="DT 01" location={DT_01} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="DT 02" location={DT_02} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="DT 03" location={DT_03} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="DT 07" location={DT_07} textAlignment={TextAlignment.LEFT} />
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
