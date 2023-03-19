import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { generatePoint, offset, scale, scaleToUnitX, W, WSW } from '../../utils/PathUtils';
import { OH_10 } from '../odakyu/Odawara';
import { S_01 } from '../toei/Shinjuku';

const KO_01 = offset(S_01, { dx: -OFFSET });
const KO_02 = offset(KO_01, { dx: -MAJOR_LINE * 2, dy: MAJOR_LINE * 0.5 });
export const KO_07 = generatePoint({ start: KO_02, slope: WSW, endReference: OH_10 });
const KO_08 = offset(KO_07, { dx: -MAJOR_LINE, dy: OFFSET * 2 });

const MAIN_OFFSET = scaleToUnitX(W, MAJOR_LINE * 0.5);
export const KO_18 = offset(KO_08, scale(MAIN_OFFSET, 10));
export const KO_21 = offset(KO_18, scale(MAIN_OFFSET, 3));
export const KO_23 = offset(KO_21, scale(MAIN_OFFSET, 2));
export const KO_25 = offset(KO_23, scale(MAIN_OFFSET, 2));
export const KO_29 = offset(KO_25, scale(MAIN_OFFSET, 4));
export const KO_33 = offset(KO_29, scale(MAIN_OFFSET, 4));
// export const KO_34 = offset(KO_33, scale(MAIN_OFFSET, 1));

export const MainStops = () => {
    return (
        <>
            <Stop stationCode="KO 01" location={KO_01} />
            <Stop stationCode="KO 02" location={KO_02} />
            <Stop stationCode="KO 07" location={KO_07} />
            <Stop stationCode="KO 08" location={KO_08} />
            <Stop stationCode="KO 18" location={KO_18} />
            <Stop stationCode="KO 21" location={KO_21} />
            <Stop stationCode="KO 23" location={KO_23} />
            <Stop stationCode="KO 25" location={KO_25} />
            <Stop stationCode="KO 29" location={KO_29} />
            <Stop stationCode="KO 33" location={KO_33} />
        </>
    );
};

export const MainPath = () => {
    return <SVGPath points={[KO_01, KO_07, KO_33]} directions={[W, WSW, W]} />;
};
