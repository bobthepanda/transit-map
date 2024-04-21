import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NE, NW, S, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { JY_07 } from './Nippori';
import { TABATA_SCALE } from './Uguisuidani';

export const JY_08 = offset(JY_07, scaleToUnitX(NW, TABATA_SCALE));
export const JK_33 = offset(JY_08, scale(NE, OFFSET));
export const C_16 = offset(JK_33, scaleToUnitX(N, OFFSET));
export const C_15 = offset(C_16, scaleToUnitX(S, MAJOR_LINE * 0.5), scaleToUnitX(W, MAJOR_LINE));

export const NishiNippori = () => {
    return (
        <>
            <LineSegmentWithStepChange
                origin={C_15}
                strokeColor="stroke-chiyoda"
                stops={generateStationCodes('C', 15, 13)}
                slope={scaleToUnitX(S, MAJOR_LINE)}
                textAlignments={[TextAlignment.NW]}
            />

            <g id="nishi-nippori">
                <Stop stationCode="JY 08" location={JY_08} strokeColor="stroke-yamanote" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="JK 33" location={JK_33} strokeColor="stroke-keihin-tohoku" hideText />
                <Stop stationCode="C 16" location={C_16} strokeColor="stroke-chiyoda" hideText />
            </g>
        </>
    );
};
