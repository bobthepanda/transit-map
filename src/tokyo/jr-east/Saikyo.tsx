import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { MAJOR_LINE, OFFSET } from '../../utils/CommonCoordinates';
import { ENE, generatePoint, N, NNW, offset, RADIUS, scale, SSW, WNW } from '../../utils/PathUtils';
import { JK_38 } from './KeihinTohoku';
import { JY_11, JY_13, JY_17 } from './Yamanote';

const JA_11 = offset(JY_17, { dx: -OFFSET * 2 });
const JA_12 = offset(JY_13, scale(NNW, OFFSET * 2));
export const JA_13 = generatePoint({ start: JA_12, slope: ENE, endReference: offset(JA_12, { dx: MAJOR_LINE * 3 }) });
const JA_15 = offset(JK_38, scale(SSW, OFFSET * 3));

const AKABANE_CONTROL = offset(generatePoint({ start: JA_12, slope: ENE, endReference: JY_11 }), { dx: -OFFSET, dy: -OFFSET });

export const SaikyoPath = () => {
    return (
        <SVGPath
            color="stroke-saikyo"
            points={[JA_11, JA_12, AKABANE_CONTROL, JA_15]}
            directions={[N, ENE, N, WNW]}
            radii={{ 1: RADIUS + (OFFSET * 4) / 3, 2: RADIUS - (OFFSET / 1) * 3, 3: RADIUS - OFFSET * 0.5 }}
        />
    );
};

const SaikyoStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-saikyo" />;
};

const Saikyo = () => {
    return (
        <g className="saikyo">
            <SaikyoStop stationCode="JA 11" location={JA_11} />
            <SaikyoStop stationCode="JA 12" location={JA_12} />
            <SaikyoStop stationCode="JA 13" location={JA_13} textAlignment={TextAlignment.LEFT} />
            <SaikyoStop
                stationCode="JA 14"
                location={generatePoint({ start: JA_13, slope: ENE, endReference: offset(JA_13, { dx: MAJOR_LINE + OFFSET }) })}
            />
            <SaikyoStop stationCode="JA 15" location={JA_15} />
        </g>
    );
};

export default Saikyo;
