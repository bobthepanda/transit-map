import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { MITA_HIBIYA, OFFSET, OTEMACHI } from '../../utils/CommonCoordinates';
import { ESE, generatePoint, offset, S, scaleToUnitX, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_17 } from '../jr-east/ChuoSobu';
import { JA_13 } from '../jr-east/Saikyo';
import { JY_11 } from '../jr-east/Yamanote';
import { E_07 } from './Oedo';

export const I_10 = offset(OTEMACHI, { dx: -MAJOR_LINE, dy: -MAJOR_LINE * 2 + OFFSET * 2 });
const I_11 = offset(JB_17, { dx: OFFSET * 0.5, dy: -OFFSET });
const I_12 = offset(E_07, { dy: -OFFSET, dx: OFFSET * 0.5 });
const I_15 = offset(JY_11, { dy: OFFSET * 0.5, dx: -OFFSET });
const I_13 = offset(I_12, { dy: OFFSET - MAJOR_LINE * 1.5 });
const I_07 = offset(MITA_HIBIYA, { dy: MAJOR_LINE });
const I_06 = offset(I_07, { dy: MAJOR_LINE * 1.5 });
const I_04 = offset(I_06, { dy: MAJOR_LINE * 2 });
const I_17 = generatePoint({ start: I_15, slope: WNW, endReference: JA_13 });
export const I_16 = offset(I_17, scaleToUnitX(ESE, MAJOR_LINE * 1.5));

export const MitaPath = () => {
    return <SVGPath color="stroke-mita" points={[I_17, I_13, I_10, I_04]} directions={[ESE, S, ESE, S]} />;
};

const MitaStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-mita" />;
};

const Mita = () => {
    return (
        <g className="mita">
            <MitaPath />
            <MitaStop stationCode="I 17" location={I_17} textAlignment={TextAlignment.LEFT} />
            <MitaStop stationCode="I 16" location={I_16} />
            <MitaStop stationCode="I 15" location={I_15} />
            <MitaStop stationCode="I 14" location={offset(I_13, { dy: -MAJOR_LINE - OFFSET * 2 })} />
            <MitaStop stationCode="I 13" location={I_13} />
            <MitaStop stationCode="I 12" location={I_12} />
            <MitaStop stationCode="I 11" location={I_11} />
            <MitaStop stationCode="I 10" location={I_10} />
            <MitaStop stationCode="I 09" location={OTEMACHI} />
            <MitaStop stationCode="I 08" location={MITA_HIBIYA} />
            <MitaStop stationCode="I 07" location={I_07} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('I', 6, 4)}
                origin={I_06}
                endpoint={I_04}
                textAlignments={[TextAlignment.LEFT]}
                strokeColor="stroke-mita"
            />
        </g>
    );
};

export default Mita;
