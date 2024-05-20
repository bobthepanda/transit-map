import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, S, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { NOBORITO_SLOPE, OH_18 } from './Noborito';

const OH_05 = offset(OH_18, scale(NOBORITO_SLOPE, 13));
export const C_01 = offset(OH_05, scale(S, OFFSET));
export const YoyogiUehara = () => {
    return (
        <>
            <Stop
                stationCode="C 02"
                location={offset(C_01, scaleToUnitX(E, MAJOR_LINE + OFFSET * 2))}
                textAlignment={TextAlignment.DOWN}
                strokeColor="stroke-chiyoda"
            />
            <g id="yoyogi-uehara">
                <Stop stationCode="OH 05" location={OH_05} hideText />
                <Stop stationCode="C 01" location={C_01} textAlignment={TextAlignment.DOWN} strokeColor="stroke-chiyoda" />
            </g>
        </>
    );
};
