import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, N, NNW, offset, RADIUS, scale, WSW } from '../../utils/PathUtils';
import { JK_38 } from './KeihinTohoku';
import { JY_11, JY_13, JY_17 } from './Yamanote';

const JS_20 = offset(JY_17, { dx: -OFFSET });
const JS_21 = offset(JY_13, scale(NNW, OFFSET));
const JS_22 = offset(JK_38, scale(WSW, OFFSET * 2));
const SUGAMO_CONTROL = offset(JY_11, { dy: -OFFSET });

export const ShonanShinjukuPath = () => {
    return (
        <SVGPath
            color="stroke-shonan-shinjuku"
            points={[JS_20, JS_21, SUGAMO_CONTROL, JS_22]}
            directions={[N, ENE, E, NNW]}
            radii={{ 1: RADIUS + (OFFSET * 2) / 3, 3: RADIUS + (OFFSET * 4) / 3 }}
        />
    );
};

const ShonanShinjukuStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-shonan-shinjuku" />;
};
const ShonanShinjuku = () => {
    return (
        <g className="shonan-shinjuku">
            <ShonanShinjukuStop stationCode="JS 20" location={JS_20} />
            <ShonanShinjukuStop stationCode="JS 21" location={JS_21} />
            <ShonanShinjukuStop stationCode="JS 22" location={JS_22} />
        </g>
    );
};

export default ShonanShinjuku;
