import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, ESE, NW, SSE, W, WNW, WSW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { R_07 } from '../other/Rinkai';
import { DT_07, DT_10 } from './DenEnToshi';
import { MG_06 } from './Meguro';
import { TY_07 } from './Toyoko';

export const OM_01 = offset(R_07, { dx: -OFFSET });
export const OM_08 = offset(MG_06, { dy: OFFSET });
const OM_09 = offset(OM_08, scaleToUnitX(WNW, OFFSET * 2.5));
export const OM_10 = offset(TY_07, { dy: -OFFSET });
export const OM_15 = offset(DT_07, scale(SSE, OFFSET));
export const OM_16 = offset(DT_10, scale(SSE, OFFSET), scaleToUnitX(ENE, OFFSET * 0.5));

const OIMACHI_SLOPE = scaleToUnitX(ESE, MAJOR_LINE * 0.75);
export const OM_06 = offset(OM_08, scale(OIMACHI_SLOPE, 2));
export const OM_04 = offset(OM_06, scale(OIMACHI_SLOPE, 2));

export const OimachiStops = () => {
    return (
        <>
            <Stop stationCode="OM 01" location={OM_01} />
            <LineSegmentWithStepChange stops={generateStationCodes('OM', 8, 2)} origin={OM_08} slope={OIMACHI_SLOPE} />
            <Stop stationCode="OM 09" location={OM_09} textAlignment={TextAlignment.UP} />
            <Stop stationCode="OM 10" location={OM_10} hideText />
            <Stop stationCode="OM 15" location={OM_15} hideText />
            <Stop stationCode="OM 16" location={OM_16} />
        </>
    );
};

export const OimachiPath = () => {
    return <SVGPath points={[OM_01, OM_08, OM_10, OM_16]} directions={[W, WNW, NW, WSW]} />;
};
