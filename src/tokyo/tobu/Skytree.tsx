import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, N, offset, scale, W, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JM_22 } from '../jr-east/Musashino';
import { KS_06 } from '../keisei/Main';
import { A_18 } from '../toei/Asakusa';
import { Z_14 } from '../tokyo-metro/Hanzomon';
import { HIBIYA_KITA_SENJU } from '../tokyo-metro/Hibiya';
import { TD_10 } from './UrbanPark';

const TS_03 = offset(Z_14, { dy: -OFFSET, dx: -OFFSET });
export const TS_04 = offset(TS_03, { dy: -MAJOR_LINE * 0.5 - OFFSET });
const TS_09 = offset(HIBIYA_KITA_SENJU, { dx: OFFSET });
const TS_08 = offset(KS_06, { dy: OFFSET });
const TS_01 = offset(A_18, { dy: -OFFSET * 2 });
const TS_20 = offset(JM_22, { dy: OFFSET, dx: OFFSET * 0.5 });
const TS_10 = offset(TS_09, { dy: -MAJOR_LINE, dx: -MAJOR_LINE });
const TS_27 = offset(TD_10, { dy: OFFSET, dx: OFFSET * 0.5 });

export const SkytreePath = () => {
    return (
        <>
            <SVGPath points={[TS_01, TS_04]} directions={[ENE, N]} />
            <SVGPath points={[TS_03, TS_08, TS_09, TS_10, TS_27]} directions={[N, W, N, WNW, N]} />
        </>
    );
};

const TS_20_OFFSET = { dy: (MAJOR_LINE * 8) / 12 };
const TS_10_OFFSET = scale({ dx: -MAJOR_LINE, dy: -MAJOR_LINE * 0.5 }, 8 / 12);

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
                slope={{ dy: -OFFSET * 3 }}
                textAlignments={[TextAlignment.LEFT]}
            />
            <Stop stationCode="TS 07" location={offset(TS_04, { dy: MAJOR_LINE * -1.375 })} />
            <Stop stationCode="TS 08" location={TS_08} textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="TS 09" location={TS_09} />
            <LineSegmentWithEndpoint stops={generateStationCodes('TS', 20, 27)} origin={TS_20} endpoint={TS_27} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('TS', 19, 17)}
                origin={offset(TS_20, TS_20_OFFSET)}
                slope={TS_20_OFFSET}
            />
            <LineSegmentWithStepChange stops={generateStationCodes('TS', 10, 16)} origin={TS_10} slope={TS_10_OFFSET} />
        </g>
    );
};

export default Skytree;
