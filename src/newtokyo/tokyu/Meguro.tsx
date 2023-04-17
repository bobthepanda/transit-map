import { Stop, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { SE, SW, W, WNW, WSW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_19 } from '../jr-east/KeihinTohoku';
import { N_01 } from '../metro/Namboku';
import { TY_08, TY_09, TY_10, TY_11, TY_12, TY_13 } from './Toyoko';

const TOYOKO_OFFSET = scale(SE, OFFSET);

const MG_01 = offset(N_01, scale(WSW, OFFSET));
export const MG_06 = offset(JK_19, { dx: -OFFSET * 2, dy: -OFFSET }, scaleToUnitX(WNW, OFFSET * 4 * 7));
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
            <Stop stationCode="MG 06" location={MG_06} textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="MG 08" location={MG_08} hideText />
            <Stop stationCode="MG 09" location={MG_09} hideText />
            <Stop stationCode="MG 10" location={MG_10} hideText />
            <Stop stationCode="MG 11" location={MG_11} hideText />
            <Stop stationCode="MG 12" location={MG_12} hideText />
            <Stop stationCode="MG 13" location={MG_13} hideText />
        </>
    );
};

export const MeguroPath = () => {
    return <SVGPath points={[MG_01, MG_06, MG_13]} directions={[WSW, W, SW]} />;
};
