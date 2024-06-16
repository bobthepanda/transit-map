import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { MAJOR_LINE, OFFSET } from '../../../utils/CommonCoordinates';
import { N, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { DT_01 } from '../InsideYamanote/Shibuya';
import { H_01 } from './NakaMeguro';

const DT_SHIBUYA_OFFSET = scaleToUnitX(W, MAJOR_LINE * 1.5);
const DT_02 = { y: DT_01.y, x: H_01.x };
const DT_03 = offset(DT_02, DT_SHIBUYA_OFFSET);
export const SG_01 = offset(DT_03, scale(N, OFFSET));

export const Sangenjaya = () => (
    <>
        <g id="sangenjaya">
            <Stop stationCode="SG 01" location={SG_01} hideText />
            <Stop stationCode="DT 03" location={DT_03} textAlignment={TextAlignment.DOWN} />
        </g>
        <LineSegmentWithStepChange
            origin={DT_02}
            stops={generateStationCodes('DT', 2, 6)}
            stopsToSkip={['DT 03']}
            slope={DT_SHIBUYA_OFFSET}
            textAlignments={[TextAlignment.DOWN]}
        />
    </>
);
