import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { curveFrom, ENE, N, offset, startAtLocation, W } from '../../utils/PathUtils';
import { KS_06 } from '../keisei/Main';
import StopFromTokyo from '../StopsFromTokyo';
import { A_18 } from '../toei/Asakusa';
import { Z_14 } from '../tokyo-metro/Hanzomon';
import { HIBIYA_KITA_SENJU } from '../tokyo-metro/Hibiya';

const TS_03 = offset(Z_14, { dy: -OFFSET, dx: -OFFSET });
export const TS_04 = offset(TS_03, { dy: -MAJOR_LINE * 0.5 - OFFSET });
const TS_09 = offset(HIBIYA_KITA_SENJU, { dx: OFFSET });
const TS_08 = offset(KS_06, { dy: OFFSET });
const TS_01 = offset(A_18, { dy: -OFFSET * 2 });

export const SkytreePath = () => {
    return (
        <>
            <path
                d={`
            ${startAtLocation(TS_01)}
            ${curveFrom({ start: TS_01, end: TS_04, firstDirection: ENE, secondDirection: N })}
        `}
            />
            <path
                d={`
            ${startAtLocation(TS_03)}
            ${curveFrom({ start: TS_03, end: TS_08, firstDirection: N, secondDirection: W })}
            ${curveFrom({ start: TS_08, end: TS_09, firstDirection: W, secondDirection: N })}
        `}
            />
        </>
    );
};

const Skytree = () => {
    return (
        <g className="skytree">
            <SkytreePath />
            <StopFromTokyo stationCode="TS 01" location={TS_01} />
            <StopFromTokyo
                stationCode="TS 02"
                location={offset(TS_01, { dx: MAJOR_LINE * 1.5, dy: -MAJOR_LINE * 1.5 * 0.5 })}
                textAlignment={TextAlignment.LEFT}
            />
            <StopFromTokyo stationCode="TS 03" location={TS_03} textAlignment={TextAlignment.LEFT} />
            <LineSegmentWithStepChange
                stops={['TS 04', 'TS 05', 'TS 06']}
                origin={TS_04}
                ystep={-OFFSET * 3}
                textAlignments={[TextAlignment.LEFT]}
            />
            <StopFromTokyo stationCode="TS 07" location={offset(TS_04, { dy: MAJOR_LINE * -1.375 })} />
            <StopFromTokyo stationCode="TS 08" location={TS_08} textAlignment={TextAlignment.DOWN} />
            <StopFromTokyo stationCode="TS 09" location={TS_09} />
        </g>
    );
};

export default Skytree;
