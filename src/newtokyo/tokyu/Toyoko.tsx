import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { offset, S, scale, scaleToUnitX, SSW } from '../../utils/PathUtils';
import { F_16 } from '../metro/Fukutoshin';

const TY_01 = offset(F_16, { dy: OFFSET });
const TY_02 = offset(TY_01, { dx: -OFFSET, dy: MAJOR_LINE * 1 + OFFSET * 0.75 });

const TOYOKO_OFFSET = scaleToUnitX(SSW, MAJOR_LINE * 0.25);

export const TY_03 = offset(TY_02, TOYOKO_OFFSET);
export const TY_07 = offset(TY_03, scale(TOYOKO_OFFSET, 4));
export const TY_08 = offset(TY_07, TOYOKO_OFFSET, scaleToUnitX(SSW, MINOR_LINE));
export const TY_09 = offset(TY_08, TOYOKO_OFFSET);
export const TY_10 = offset(TY_09, TOYOKO_OFFSET);
export const TY_11 = offset(TY_10, TOYOKO_OFFSET);
export const TY_12 = offset(TY_11, TOYOKO_OFFSET);
export const TY_13 = offset(TY_12, TOYOKO_OFFSET);
export const TY_15 = offset(TY_13, scale(TOYOKO_OFFSET, 2));
export const TY_16 = offset(TY_15, { dy: MAJOR_LINE * 0.5 }, { dx: -OFFSET, dy: OFFSET });

export const ToyokoStops = () => {
    return (
        <>
            <Stop stationCode="TY 01" location={TY_01} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 02" location={TY_02} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 03" location={TY_03} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 07" location={TY_07} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 08" location={TY_08} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 09" location={TY_09} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 10" location={TY_10} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 11" location={TY_11} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 12" location={TY_12} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 13" location={TY_13} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 15" location={TY_15} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TY 16" location={TY_16} textAlignment={TextAlignment.LEFT} />
        </>
    );
};

export const ToyokoPath = () => {
    return <SVGPath points={[TY_01, TY_15, TY_16]} directions={[S, SSW, S]} />;
};
