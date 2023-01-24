import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import {
    ASAKUSA_NINGYOCHO,
    GINZA_MITSUKOSHIMAE,
    OEDO_MONZEN_NAKACHO,
    OFFSET,
    OTEMACHI,
    SOBU_KINSCHICHO,
} from '../../utils/CommonCoordinates';
import { E, ENE, midPoint, N, NNW, offset, S, scale, SSE, WNW } from '../../utils/PathUtils';
import { CS_KAMEIDO } from '../jr-east/ChuoSobu';
import { I_10 } from '../toei/Mita';
import { S_05, S_13 } from '../toei/Shinjuku';
import { G_04 } from './Ginza';
import { Y_16 } from './Yurakucho';

const Z_08 = {
    x: OTEMACHI.x + MAJOR_LINE * 0.5 + MINOR_LINE,
    y: OTEMACHI.y - OFFSET,
};
const MITSUKOSHIMAE = { ...GINZA_MITSUKOSHIMAE, y: GINZA_MITSUKOSHIMAE.y - OFFSET };
const NINGYOCHO = { x: ASAKUSA_NINGYOCHO.x + OFFSET, y: MITSUKOSHIMAE.y };
const MIDPOINT = midPoint(Z_08, MITSUKOSHIMAE);
const Z_11 = { ...NINGYOCHO, x: OEDO_MONZEN_NAKACHO.x + OFFSET * 0.5 };
const Z_12 = offset(S_13, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const Z_13 = offset(SOBU_KINSCHICHO, { dx: -OFFSET * 0.5, dy: -OFFSET });
export const Z_14 = { x: Z_13.x - MAJOR_LINE * 0.5 - OFFSET, y: CS_KAMEIDO.y - OFFSET * 2 };
const Z_07 = offset(I_10, { dy: -OFFSET });
const OTEMACHI_MIDPOINT = offset(OTEMACHI, { dx: -OFFSET, dy: -MAJOR_LINE });
const Z_06 = offset(S_05, scale(SSE, OFFSET));
const Z_04 = offset(Y_16, { dx: -OFFSET * 0.5, dy: -OFFSET });
const Z_03 = offset(G_04, scale(NNW, OFFSET));

export const HanzomonPath = () => {
    return (
        <SVGPath
            color="stroke-hanzomon"
            points={[Z_03, Z_04, Z_06, Z_07, OTEMACHI_MIDPOINT, Z_08, MIDPOINT, NINGYOCHO, Z_13, Z_14]}
            directions={[ENE, N, ENE, E, S, E, ENE, E, N, WNW]}
        />
    );
};

const HanzomonStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-hanzomon" />;
};

const Hanzomon = () => {
    return (
        <g className="hanzomon">
            <HanzomonPath />
            <HanzomonStop stationCode="Z 06" location={Z_06} />
            <HanzomonStop stationCode="Z 07" location={Z_07} />
            <HanzomonStop stationCode="Z 08" location={Z_08} textAlignment={TextAlignment.UP} />
            <HanzomonStop stationCode="Z 09" location={MITSUKOSHIMAE} />
            <HanzomonStop stationCode="Z 10" location={NINGYOCHO} textAlignment={TextAlignment.DOWN} />
            <HanzomonStop stationCode="Z 11" location={Z_11} />
            <HanzomonStop stationCode="Z 12" location={Z_12} />
            <HanzomonStop stationCode="Z 13" location={Z_13} />
            <HanzomonStop stationCode="Z 14" location={Z_14} />
            <HanzomonStop stationCode="Z 05" location={offset(Z_04, { dy: -MAJOR_LINE * 1.5 })} />
            <HanzomonStop stationCode="Z 04" location={Z_04} />
            <HanzomonStop stationCode="Z 03" location={Z_03} />
        </g>
    );
};

export default Hanzomon;
