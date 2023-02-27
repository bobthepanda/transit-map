import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET, YAMANOTE_AKIHABARA } from '../../utils/CommonCoordinates';
import { ENE, generatePoint, midPoint, N, NNE, offset, scaleToUnitX, WSW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JM_16 } from '../jr-east/Musashino';
import { TD_22 } from '../tobu/UrbanPark';
import { A_18 } from '../toei/Asakusa';
import { E_10 } from '../toei/Oedo';
import { HIBIYA_KITA_SENJU, H_21 } from '../tokyo-metro/Hibiya';

const TX_01 = offset(YAMANOTE_AKIHABARA, { dx: OFFSET * 4 });
const TX_02 = offset(E_10, { dx: OFFSET * 0.5, dy: -OFFSET });
const TX_03 = offset(A_18, { dy: -MAJOR_LINE, dx: -MAJOR_LINE * 0.5 });
const TX_04 = offset(H_21, { dx: -OFFSET * 2 });
const TX_05 = offset(HIBIYA_KITA_SENJU, { dx: -OFFSET * 2 });
const TX_10 = offset(JM_16, { dy: OFFSET });

const TX_10_OFFSET = scaleToUnitX(WSW, MAJOR_LINE * 1.5);
const TX_07 = offset(generatePoint({ start: TX_10, slope: WSW, endReference: TX_05 }), { dy: MAJOR_LINE * 0.5 + OFFSET });
const TX_10_CORNER_OFFSET = { dy: MAJOR_LINE };
const TX_12 = offset(TD_22, { dy: -OFFSET });
const TX_09 = offset(TX_10, { dy: MAJOR_LINE, dx: -MAJOR_LINE * 1.5 });

export const TsukubaExpressPath = () => {
    return <SVGPath points={[TX_01, TX_02, TX_03, TX_04, TX_09, TX_12]} directions={[ENE, N, ENE, N, ENE, NNE]} />;
};

const TsukubaExpress = () => {
    return (
        <g className="tsukuba-express">
            <Stop stationCode="TX 01" location={TX_01} />
            <Stop stationCode="TX 02" location={TX_02} />
            <Stop stationCode="TX 03" location={TX_03} />
            <Stop stationCode="TX 04" location={TX_04} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="TX 05" location={TX_05} />
            <LineSegmentWithStepChange stops={generateStationCodes('TX', 9, 8)} origin={TX_09} slope={TX_10_OFFSET} />
            <LineSegmentWithStepChange stops={generateStationCodes('TX', 7, 6)} origin={TX_07} slope={TX_10_CORNER_OFFSET} />
            <Stop stationCode="TX 10" location={TX_10} />
            <Stop stationCode="TX 11" location={midPoint(TX_10, TX_12)} />
            <Stop stationCode="TX 12" location={TX_12} />
        </g>
    );
};

export default TsukubaExpress;
