import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, offset, scale, scaleToUnitX, SE, SW, W, WSW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { N_01 } from '../metro/Namboku';
import { TY_07, TY_08, TY_09, TY_10, TY_11, TY_12, TY_13 } from './Toyoko';

const TOYOKO_OFFSET = scale(SE, OFFSET);

const MG_01 = offset(N_01, scale(WSW, OFFSET));
export const MG_06 = offset(TY_07, scaleToUnitX(E, MAJOR_LINE), scaleToUnitX(WSW, OFFSET * 1.5));
const MG_08 = offset(TY_08, TOYOKO_OFFSET);
const MG_09 = offset(TY_09, TOYOKO_OFFSET);
const MG_10 = offset(TY_10, TOYOKO_OFFSET);
export const MG_11 = offset(TY_11, TOYOKO_OFFSET);
const MG_12 = offset(TY_12, TOYOKO_OFFSET);
const MG_13 = offset(TY_13, TOYOKO_OFFSET);

export const MeguroStops = () => {
    return (
        <>
            <Stop stationCode="MG 01" location={MG_01} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('MG', 6, 2)}
                origin={MG_06}
                slope={scaleToUnitX(ENE, MAJOR_LINE * 0.5)}
            />
            <Stop stationCode="MG 08" location={MG_08} />
            <Stop stationCode="MG 09" location={MG_09} />
            <Stop stationCode="MG 10" location={MG_10} />
            <Stop stationCode="MG 11" location={MG_11} />
            <Stop stationCode="MG 12" location={MG_12} />
            <Stop stationCode="MG 13" location={MG_13} />
        </>
    );
};

export const MeguroPath = () => {
    return <SVGPath points={[MG_01, MG_06, MG_13]} directions={[W, WSW, SW]} />;
};
