import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, SE, SW, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_03 } from './Akihabara';

export const JY_04 = offset(JY_03, scaleToUnitX(NE, OFFSET * 4));
export const JK_29 = offset(JY_04, scale(SE, OFFSET));
export const H_17 = offset(JY_04, scaleToUnitX(SE, OFFSET * 3));
export const E_09 = offset(JY_04, scaleToUnitX(N, OFFSET * 2));
export const G_15 = offset(E_09, scaleToUnitX(N, OFFSET * 2));
const G_14 = offset(G_15, scaleToUnitX(SW, OFFSET * 5));
export const Okachimachi = () => {
    return (
        <>
            <Stop stationCode="G 14" location={G_14} strokeColor="stroke-ginza" textAlignment={TextAlignment.NW} />
            <g id="okachimachi">
                <Stop stationCode="G 15" location={G_15} strokeColor="stroke-ginza" textAlignment={TextAlignment.NW} />
                <Stop stationCode="JY 04" location={JY_04} strokeColor="stroke-yamanote" hideText />
                <Stop stationCode="JK 29" location={JK_29} strokeColor="stroke-keihin-tohoku" hideText />
                <Stop stationCode="H 17" location={H_17} strokeColor="stroke-hibiya" textAlignment={TextAlignment.SE} />
                <Stop stationCode="E 09" location={E_09} strokeColor="stroke-oedo" textAlignment={TextAlignment.LEFT} />
            </g>
        </>
    );
};
