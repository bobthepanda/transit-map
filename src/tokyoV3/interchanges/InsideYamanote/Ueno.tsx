import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NE, SE, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_04 } from './Okachimachi';

export const JY_05 = offset(JY_04, scaleToUnitX(NE, MAJOR_LINE));
export const JK_30 = offset(JY_05, scale(SE, OFFSET));
export const JU_02 = offset(JK_30, scale(SE, OFFSET));
export const JJ_01 = offset(JK_30, scale(SE, OFFSET * 2));
export const H_18 = offset(JY_05, scaleToUnitX(SE, OFFSET * 3));
export const G_16 = offset(H_18, scaleToUnitX(E, OFFSET));
export const Ueno = () => {
    return (
        <g id="ueno">
            <Stop stationCode="JY 05" location={JY_05} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="JK 30" location={JK_30} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="JU 02" location={JU_02} strokeColor="stroke-tokaido" hideText />
            <Stop stationCode="JJ 01" location={JJ_01} strokeColor="stroke-sobu-rapid" hideText />
            <Stop stationCode="H 18" location={H_18} strokeColor="stroke-hibiya" hideText />
            <Stop stationCode="G 16" location={G_16} strokeColor="stroke-ginza" textAlignment={TextAlignment.NE} />
        </g>
    );
};
