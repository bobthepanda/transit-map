import { MAJOR_LINE } from '../../map/GridLines';
import { H_04 } from '../../newtokyo/metro/Hibiya';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import {
    ASAKUSA_BAKUROCHO,
    ASAKUSA_KURAMAE,
    ASAKUSA_NINGYOCHO,
    CS_RYOGOKU,
    MITA_HIBIYA,
    OEDO_MONZEN_NAKACHO,
    OFFSET,
    YAMANOTE_OKACHIMACHI,
    YAMANOTE_YURAKUCHO,
} from '../../utils/CommonCoordinates';
import { E, N, RADIUS, S, W, WNW, generatePoint, offset } from '../../utils/PathUtils';
import { JB_12, JB_16, JB_17 } from '../jr-east/ChuoSobu';
import { JY_17, JY_18 } from '../jr-east/Yamanote';

const KURAMAE = offset(ASAKUSA_KURAMAE, { dx: OFFSET * 0.5, dy: -OFFSET });
const RYOGOKU = { ...OEDO_MONZEN_NAKACHO, y: CS_RYOGOKU.y - OFFSET };
const TSUKISHIMA = { ...OEDO_MONZEN_NAKACHO, y: YAMANOTE_YURAKUCHO.y };
export const UENO_OKAMACHI = offset(YAMANOTE_OKACHIMACHI, { dx: -OFFSET * 2, dy: -OFFSET * 2 });
export const E_07 = { y: KURAMAE.y, x: JB_17.x };
export const E_08 = offset(E_07, { dx: OFFSET * 0.5 + MAJOR_LINE * 1.5 });
const E_06 = offset(JB_16, { dx: -OFFSET * 3 });
export const E_20 = offset(MITA_HIBIYA, { dx: MAJOR_LINE + OFFSET * 0.5, dy: MAJOR_LINE * 3 });
const E_19 = offset(E_20, { dx: MAJOR_LINE * 3 - OFFSET * 0.5 });
const E_18 = offset(E_19, { dx: MAJOR_LINE * 1.5 });
export const E_22 = offset(E_20, { dx: -OFFSET - MAJOR_LINE * 3.5 });
export const E_23 = offset(H_04, { dy: -OFFSET, dx: -OFFSET * 0.5 });
export const E_24 = generatePoint({ start: E_23, slope: WNW, endReference: offset(E_23, { dx: -MAJOR_LINE * 2 }) });
const E_25 = offset(JB_12, { dy: OFFSET + MAJOR_LINE });
const E_26 = offset(JY_18, { dx: OFFSET * 2 });
const E_27 = offset(JY_17, { dy: OFFSET * 2, dx: -OFFSET });
export const E_10 = offset(KURAMAE, { dx: -OFFSET * 0.5 - MAJOR_LINE });

export const OedoPath = () => {
    return (
        <SVGPath
            color="stroke-oedo"
            points={[E_06, E_07, TSUKISHIMA, E_22, E_24, E_25, E_26, E_27]}
            directions={[N, E, S, W, WNW, W, N, W]}
            radii={{ 1: RADIUS + OFFSET * 2, 2: RYOGOKU.y - KURAMAE.y - OFFSET, 3: RYOGOKU.x - E_18.x - OFFSET }}
        />
    );
};

const OedoStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-oedo" />;
};

const Oedo = () => {
    return (
        <g className="oedo">
            <OedoPath />
            <OedoStop stationCode="E 27" location={E_27} />
            <OedoStop stationCode="E 26" location={E_26} />
            <OedoStop stationCode="E 25" location={E_25} textAlignment={TextAlignment.UP} />
            <OedoStop stationCode="E 24" location={E_24} />
            <OedoStop stationCode="E 23" location={E_23} />
            <OedoStop stationCode="E 22" location={E_22} />
            <OedoStop stationCode="E 20" location={E_20} />
            <OedoStop stationCode="E 17" location={offset(TSUKISHIMA, { dy: MAJOR_LINE * 1.5 })} />
            <OedoStop stationCode="E 19" location={E_19} />
            <OedoStop stationCode="E 18" location={E_18} />
            <OedoStop stationCode="E 15" location={OEDO_MONZEN_NAKACHO} />
            <OedoStop stationCode="E 16" location={TSUKISHIMA} />
            <OedoStop stationCode="E 14" location={{ ...OEDO_MONZEN_NAKACHO, y: ASAKUSA_NINGYOCHO.y + OFFSET * 2 }} />
            <OedoStop stationCode="E 13" location={{ ...OEDO_MONZEN_NAKACHO, y: ASAKUSA_BAKUROCHO.y - OFFSET }} />
            <OedoStop stationCode="E 12" location={RYOGOKU} />
            <OedoStop stationCode="E 11" location={KURAMAE} />
            <OedoStop stationCode="E 10" location={E_10} />
            <OedoStop stationCode="E 09" location={UENO_OKAMACHI} />
            <OedoStop stationCode="E 08" location={E_08} />
            <OedoStop stationCode="E 07" location={E_07} />
            <OedoStop stationCode="E 06" location={E_06} />
        </g>
    );
};

export default Oedo;
