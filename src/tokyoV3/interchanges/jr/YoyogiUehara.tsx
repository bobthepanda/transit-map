import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, SE, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { OH_01 } from '../InsideYamanote/Shinjuku';
import { OH_YOYOGI_SLOPE } from './Noborito';

const OH_05 = offset(OH_01, scale(OH_YOYOGI_SLOPE, 4));
export const C_01 = offset(OH_05, scale(S, OFFSET));
export const C_02 = offset(C_01, scaleToUnitX(SE, MAJOR_LINE + OFFSET * 2));
export const YoyogiUehara = () => {
    return (
        <>
            <Stop stationCode="C 02" location={C_02} textAlignment={TextAlignment.SW} strokeColor="stroke-chiyoda" />
            <g id="yoyogi-uehara">
                <Stop stationCode="OH 05" location={OH_05} textAlignment={TextAlignment.UP} />
                <Stop stationCode="C 01" location={C_01} strokeColor="stroke-chiyoda" hideText />
            </g>
        </>
    );
};
