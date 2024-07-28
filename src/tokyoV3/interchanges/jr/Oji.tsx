import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, NW, S, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { JK_34 } from '../InsideYamanote/Tabata';

export const OJI_OFFSET = scaleToUnitX(NW, OFFSET * 5);
export const AKABANE_OFFSET = scaleToUnitX(N, MAJOR_LINE * 2);

export const JK_35 = offset(JK_34, scale(AKABANE_OFFSET, 0.5), scale(OJI_OFFSET, 0.5));
export const JK_36 = offset(JK_35, scale(AKABANE_OFFSET, 1));

export const N_16 = offset(JK_36, scaleToUnitX(W, OFFSET));
export const SA_16 = offset(N_16, scaleToUnitX(S, OFFSET * 2));
export const Oji = () => {
    return (
        <>
            <LineSegmentWithStepChange
                slope={scaleToUnitX(W, OFFSET * 4)}
                origin={SA_16}
                stops={generateStationCodes('SA', 16, 17)}
                textAlignments={[TextAlignment.UP]}
                skipBeginning
            />
            <g id="oji">
                <Stop stationCode="JK 36" location={JK_36} strokeColor="stroke-keihin-tohoku" hideText />
                <Stop stationCode="N 16" location={N_16} strokeColor="stroke-namboku" textAlignment={TextAlignment.NW} />
                <Stop stationCode="SA 16" location={SA_16} textAlignment={TextAlignment.DOWN} />
            </g>
        </>
    );
};
