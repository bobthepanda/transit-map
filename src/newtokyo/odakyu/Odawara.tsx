import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { offset, scale, scaleToUnitX, SSW, W, WSW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JC_05 } from '../jr-east/ChuoRapid';
import { C_01, C_02 } from '../metro/Chiyoda';

const OH_01 = offset(JC_05, { dx: -OFFSET });
const OH_04 = offset(C_02, { dy: -OFFSET });
const OH_05 = offset(C_01, { dy: -OFFSET });
const OH_06 = offset(OH_05, { dx: -MAJOR_LINE, dy: OFFSET * 2 });
const ODAWARA_SLOPE = scaleToUnitX(WSW, MAJOR_LINE * 0.5);

export const OH_07 = offset(OH_06, ODAWARA_SLOPE);
export const OH_10 = offset(OH_07, scale(ODAWARA_SLOPE, 3));
export const OH_18 = offset(OH_10, scale(ODAWARA_SLOPE, 8), scaleToUnitX(WSW, OFFSET * 1.25));
export const OH_23 = offset(OH_18, scale(ODAWARA_SLOPE, 5));
export const OH_27 = offset(OH_23, scale(ODAWARA_SLOPE, 4));
export const OH_28 = offset(OH_27, ODAWARA_SLOPE);
export const OH_32 = offset(OH_28, scale(ODAWARA_SLOPE, 4));
export const OH_33 = offset(OH_32, ODAWARA_SLOPE);
export const OH_41 = offset(OH_33, scale(ODAWARA_SLOPE, 8));

export const OdawaraStops = () => {
    return (
        <>
            <LineSegmentWithStepChange
                stops={generateStationCodes('OH', 1, 3)}
                origin={OH_01}
                slope={scaleToUnitX(SSW, MAJOR_LINE * 0.5)}
            />
            <Stop stationCode="OH 04" location={OH_04} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OH 05" location={OH_05} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OH 06" location={OH_06} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OH 07" location={OH_07} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OH 10" location={OH_10} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OH 18" location={OH_18} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OH 23" location={OH_23} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OH 27" location={OH_27} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OH 28" location={OH_28} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OH 32" location={OH_32} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OH 33" location={OH_33} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OH 41" location={OH_41} textAlignment={TextAlignment.UP} />
        </>
    );
};

export const OdawaraPath = () => {
    return <SVGPath points={[OH_01, OH_05, OH_41]} directions={[SSW, W, WSW]} />;
};
