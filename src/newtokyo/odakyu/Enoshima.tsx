import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JT_08 } from '../jr-east/Tokaido';

const ENOSHIMA_SLOPE = scaleToUnitX(N, MAJOR_LINE + MINOR_LINE);
const OE_13 = offset(JT_08, { dy: -OFFSET, dx: OFFSET * 0.5 });
export const OE_02 = offset(OE_13, scale(ENOSHIMA_SLOPE, 11));
export const OH_28 = offset(OE_02, scale(ENOSHIMA_SLOPE, 2));

export const EnoshimaStops = () => {
    return <LineSegmentWithStepChange stops={[...generateStationCodes('OE', 13, 1), 'OH 28']} origin={OE_13} slope={ENOSHIMA_SLOPE} />;
};

export const EnoshimaPath = () => {
    return <SVGPath points={[OH_28, OE_13]} />;
};
