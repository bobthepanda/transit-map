import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ESE, offset, S, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_31 } from '../jr-east/ChuoSobu';
import { JL_22 } from '../jr-east/JobanLocal';
import { KS_26 } from '../keisei/Main';
import { TR_04 } from '../tokyo-metro/Tozai';

const SL_01 = offset(JL_22, { dx: OFFSET * 2 });
const SL_05 = offset(SL_01, { dx: MAJOR_LINE * 3 - OFFSET });
export const SL_11 = { x: JB_31.x - MINOR_LINE, y: SL_05.y };
const SL_19 = offset(TR_04, { dx: OFFSET, dy: OFFSET * 0.5 });
const SL_24 = offset(KS_26, { dx: -OFFSET, dy: OFFSET * 0.5 });
const SL_12 = offset(SL_11, { dx: MAJOR_LINE + MINOR_LINE, dy: OFFSET * 2 });

export const ShinKeiseiPath = () => {
    return <SVGPath points={[SL_01, SL_12, SL_24]} directions={[E, ESE, S]} />;
};

const ShinKeisei = () => {
    return (
        <g>
            <LineSegmentWithEndpoint
                origin={SL_01}
                endpoint={SL_05}
                stops={generateStationCodes('SL', 1, 5)}
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
            />
            <LineSegmentWithEndpoint
                origin={SL_05}
                endpoint={SL_11}
                stops={generateStationCodes('SL', 5, 11)}
                textAlignments={[TextAlignment.UP, TextAlignment.DOWN]}
            />
            <LineSegmentWithStepChange
                stops={generateStationCodes('SL', 12, 14)}
                origin={SL_12}
                slope={scale(scaleToUnitX(ESE), OFFSET * 4)}
            />
            <LineSegmentWithStepChange
                origin={offset(SL_19, { dy: -MINOR_LINE - (MAJOR_LINE * 2) / 3 })}
                slope={{ dy: (-MAJOR_LINE * 2) / 3 }}
                stops={generateStationCodes('SL', 18, 15)}
            />
            <LineSegmentWithStepChange origin={SL_19} slope={{ dy: MAJOR_LINE * 0.5 }} stops={generateStationCodes('SL', 19, 23)} />
            <Stop stationCode="SL 24" location={SL_24} />
        </g>
    );
};

export default ShinKeisei;
