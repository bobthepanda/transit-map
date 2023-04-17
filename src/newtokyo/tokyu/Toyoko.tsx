import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, NE, NW, S, SSW, SW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_12 } from '../jr-east/KeihinTohoku';
import { F_16 } from '../metro/Fukutoshin';
import { DT_10 } from './DenEnToshi';

const TY_01 = offset(F_16, { dy: OFFSET });
const TY_02 = offset(TY_01, { dx: -OFFSET, dy: MAJOR_LINE * 1 + OFFSET * 0.75 });

const TOYOKO_OFFSET = scaleToUnitX(SSW, OFFSET);
const DEN_EN_CHOFU_OFFSET = scaleToUnitX(SW, MAJOR_LINE * 0.5);

export const TY_03 = offset(TY_02, TOYOKO_OFFSET);
// export const TY_07 = offset(TY_03, scale(TOYOKO_OFFSET, 3), DEN_EN_CHOFU_OFFSET);
export const TY_11 = offset(DT_10, scaleToUnitX(ESE, MAJOR_LINE * 3 + OFFSET));
export const TY_10 = offset(TY_11, scale(DEN_EN_CHOFU_OFFSET, -1));
export const TY_09 = offset(TY_10, scale(DEN_EN_CHOFU_OFFSET, -1));
export const TY_08 = offset(TY_09, scale(DEN_EN_CHOFU_OFFSET, -1));
export const TY_07 = offset(TY_08, scale(DEN_EN_CHOFU_OFFSET, -1), scaleToUnitX(NE, MINOR_LINE * 0.5));
// export const TY_11 = offset(TY_10, DEN_EN_CHOFU_OFFSET);
export const TY_12 = offset(TY_11, DEN_EN_CHOFU_OFFSET);
export const TY_13 = offset(TY_12, DEN_EN_CHOFU_OFFSET);
export const TY_15 = offset(TY_13, scale(DEN_EN_CHOFU_OFFSET, 2));
export const TY_16 = offset(TY_15, DEN_EN_CHOFU_OFFSET);
export const TY_21 = offset(JK_12, scaleToUnitX(NW, OFFSET * 2));

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
            <Stop stationCode="TY 21" location={TY_21} textAlignment={TextAlignment.LEFT} />
        </>
    );
};

export const ToyokoPath = () => {
    return <SVGPath points={[TY_01, TY_02, TY_10, TY_21]} directions={[S, SSW, SW, S]} />;
};
