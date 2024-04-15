import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, SE, SW, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { T_06 } from './Iidabashi';
import { JY_13 } from './Ikebukuro';

const TAKADANOBABA_SCALE = OFFSET * 4;

export const JY_14 = offset(JY_13, scaleToUnitX(W, MAJOR_LINE * 1.5), scaleToUnitX(SW, MAJOR_LINE * 0.5));
export const T_03 = offset(T_06, scaleToUnitX(NW, TAKADANOBABA_SCALE, 3));
const TAKADANOBABA_INTERSECTION = findIntersectionFromSlopes({ start: JY_14, firstDirection: SW, secondDirection: NW, end: T_06 });
offset(TAKADANOBABA_INTERSECTION, scaleToUnitX(SE, OFFSET * 0.5));
const T_04 = offset(T_03, scaleToUnitX(SE, OFFSET * 6));
export const JY_15 = offset(T_03, scaleToUnitX(W, OFFSET));
export const Takadanobaba = () => {
    return (
        <>
            <Stop stationCode="JY 14" location={JY_14} strokeColor="stroke-yamanote" textAlignment={TextAlignment.SE} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('T', 4, 6)}
                origin={T_04}
                endpoint={T_06}
                skipEnd
                strokeColor="stroke-tozai"
                textAlignments={[TextAlignment.NE]}
            />
            <g id="takadanobaba">
                <Stop stationCode="T 03" location={T_03} strokeColor="stroke-tozai" />
                <Stop stationCode="JY 15" location={JY_15} strokeColor="stroke-yamanote" hideText />
            </g>
        </>
    );
};
