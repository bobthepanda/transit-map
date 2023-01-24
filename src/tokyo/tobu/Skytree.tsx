import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, N, offset, W } from '../../utils/PathUtils';
import { KS_06 } from '../keisei/Main';
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
            <SVGPath points={[TS_01, TS_04]} directions={[ENE, N]} />
            <SVGPath points={[TS_03, TS_08, TS_09]} directions={[N, W, N]} />
        </>
    );
};

const Skytree = () => {
    return (
        <g className="skytree">
            <SkytreePath />
            <Stop stationCode="TS 01" location={TS_01} />
            <Stop
                stationCode="TS 02"
                location={offset(TS_01, { dx: MAJOR_LINE * 1.5, dy: -MAJOR_LINE * 1.5 * 0.5 })}
                textAlignment={TextAlignment.LEFT}
            />
            <Stop stationCode="TS 03" location={TS_03} textAlignment={TextAlignment.LEFT} />
            <LineSegmentWithStepChange
                stops={['TS 04', 'TS 05', 'TS 06']}
                origin={TS_04}
                ystep={-OFFSET * 3}
                textAlignments={[TextAlignment.LEFT]}
            />
            <Stop stationCode="TS 07" location={offset(TS_04, { dy: MAJOR_LINE * -1.375 })} />
            <Stop stationCode="TS 08" location={TS_08} textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="TS 09" location={TS_09} />
        </g>
    );
};

export default Skytree;
