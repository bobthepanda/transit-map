import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { NIHOMBASHI, OEDO_MONZEN_NAKACHO, OFFSET, YAMANOTE_YURAKUCHO } from '../../utils/CommonCoordinates';
import { E, ESE, generatePoint, NNE, offset, S, scale } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_15, JB_16 } from '../jr-east/ChuoSobu';
import { E_07 } from '../toei/Oedo';
import { F_09 } from './Fukutoshin';

const THIS_YURAKUCHO = {
    x: YAMANOTE_YURAKUCHO.x + OFFSET * 0.5,
    y: YAMANOTE_YURAKUCHO.y + OFFSET,
};
const GINZA = { ...THIS_YURAKUCHO, x: NIHOMBASHI.x + MAJOR_LINE * 0.5 };
const TSUKIJI = {
    y: THIS_YURAKUCHO.y,
    x: NIHOMBASHI.x + MAJOR_LINE * 2 + OFFSET * 0.5,
};
const TSUKISHIMA = { ...THIS_YURAKUCHO, x: OEDO_MONZEN_NAKACHO.x + OFFSET * 0.5 };
export const Y_16 = { y: THIS_YURAKUCHO.y, x: E_07.x - OFFSET * 0.5 };
const Y_14 = offset(JB_15, { dx: -OFFSET * 2 });
const Y_13 = offset(JB_16, { dx: -OFFSET * 2 });
const Y_15 = offset(Y_14, { dx: MAJOR_LINE * 1.5, dy: MAJOR_LINE * 1.5 });
const Y_09 = offset(F_09, scale(NNE, OFFSET));

export const YurakuchoPath = () => {
    return <SVGPath color="stroke-yurakucho" points={[Y_09, Y_13, Y_15, TSUKISHIMA]} directions={[ESE, S, ESE, E]} />;
};

const YurakuchoStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-yurakucho" />;
};

const Yurakucho = () => {
    return (
        <g className="yurakucho">
            <YurakuchoPath />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('Y', 9, 11)}
                origin={Y_09}
                endpoint={generatePoint({ start: Y_09, slope: ESE, endReference: offset(Y_13, { dx: -MAJOR_LINE }) })}
                strokeColor="stroke-yurakucho"
            />
            <YurakuchoStop stationCode="Y 12" location={offset(Y_13, { dy: OFFSET - MAJOR_LINE * 2.5 })} />
            <YurakuchoStop stationCode="Y 13" location={Y_13} />
            <YurakuchoStop stationCode="Y 14" location={Y_14} />
            <YurakuchoStop stationCode="Y 15" location={Y_15} />
            <YurakuchoStop stationCode="Y 16" location={Y_16} />
            <YurakuchoStop location={THIS_YURAKUCHO} stationCode="Y 18" />
            <YurakuchoStop location={GINZA} stationCode="Y 19" textAlignment={TextAlignment.UP} />
            <YurakuchoStop location={TSUKIJI} stationCode="Y 20" textAlignment={TextAlignment.DOWN} />
            <YurakuchoStop stationCode="Y 21" location={TSUKISHIMA} />
        </g>
    );
};

export default Yurakucho;
