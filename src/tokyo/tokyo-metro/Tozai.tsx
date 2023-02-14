import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { NIHOMBASHI, OEDO_MONZEN_NAKACHO, OFFSET, OTEMACHI, SOBU_KINSCHICHO } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, generatePoint, midPoint, offset, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CS_NISHI_FUNABASHI, JB_07, JB_16, JB_33 } from '../jr-east/ChuoSobu';
import { JY_15 } from '../jr-east/Yamanote';
import { KS_31 } from '../keisei/Main';
import { I_10 } from '../toei/Mita';

const TOZAI_OTEMACHI = {
    x: OTEMACHI.x + MAJOR_LINE * 0.5 + MINOR_LINE,
    y: NIHOMBASHI.y + OFFSET,
};
const TOZAI_NIHOMBASHI = {
    x: NIHOMBASHI.x + MAJOR_LINE * 0.5,
    y: TOZAI_OTEMACHI.y,
};
const TOZAI_KAYABACHO = {
    ...TOZAI_NIHOMBASHI,
    x: TOZAI_NIHOMBASHI.x + MAJOR_LINE * 1.5 + OFFSET * 0.5,
};
const TOZAI_MONZEN_NAKACHO = { y: TOZAI_KAYABACHO.y, x: OEDO_MONZEN_NAKACHO.x + OFFSET * 0.5 };
const TOZAI_NISHI_FUNABASHI = offset(CS_NISHI_FUNABASHI, { dy: OFFSET });
const KIBA = offset(TOZAI_MONZEN_NAKACHO, { dx: MAJOR_LINE, dy: -OFFSET * 0.75 });
const TOYOCHO = generatePoint({ start: TOZAI_NISHI_FUNABASHI, slope: ENE, endReference: offset(SOBU_KINSCHICHO, { dx: OFFSET }) });
export const T_07 = offset(offset(I_10, { dx: -MAJOR_LINE * 2 + OFFSET * 1.5, dy: MAJOR_LINE * 0.5 + OFFSET + OFFSET * 0.75 }), {});
const T_06 = generatePoint({ start: T_07, slope: WNW, endReference: offset(JB_16, { dx: OFFSET * 2 }) });
const T_03 = offset(JY_15, { dx: OFFSET * 0.5, dy: -OFFSET });
const T_04 = offset(T_03, { dx: OFFSET * 0.5 + MAJOR_LINE * 1.5 });
const T_01 = offset(JB_07, { dy: -OFFSET });
const TR_09 = offset(KS_31, { dx: -OFFSET });
export const TR_04 = { x: JB_33.x - OFFSET * 2, y: KS_31.y };

export const TozaiPath = () => {
    return (
        <SVGPath
            color="stroke-tozai"
            points={[T_01, T_03, T_06, TOZAI_OTEMACHI, TOZAI_NISHI_FUNABASHI, TR_09]}
            directions={[ENE, E, ESE, E, ENE, E]}
        />
    );
};

const TozaiStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-tozai" />;
};
const Tozai = () => {
    return (
        <g className="tozai">
            <TozaiPath />
            <TozaiStop stationCode="T 01" location={T_01} />
            <TozaiStop stationCode="T 03" location={T_03} />
            <TozaiStop stationCode="T 04" location={T_04} textAlignment={TextAlignment.UP} />
            <TozaiStop
                stationCode="T 05"
                location={generatePoint({ start: T_06, slope: WNW, endReference: midPoint(T_04, T_06) })}
                textAlignment={TextAlignment.UP}
            />
            <TozaiStop stationCode="T 06" location={T_06} />
            <TozaiStop stationCode="T 07" location={T_07} />
            <TozaiStop stationCode="T 08" location={offset(T_07, { dx: MAJOR_LINE, dy: MAJOR_LINE * 0.5 })} />
            <TozaiStop location={TOZAI_NIHOMBASHI} stationCode="T 10" />
            <TozaiStop location={TOZAI_OTEMACHI} stationCode="T 09" />
            <TozaiStop location={TOZAI_KAYABACHO} stationCode="T 11" />
            <TozaiStop location={KIBA} stationCode="T 13" />
            <LineSegmentWithEndpoint
                origin={TOYOCHO}
                endpoint={TOZAI_NISHI_FUNABASHI}
                stops={generateStationCodes('T', 14, 23)}
                strokeColor="stroke-tozai"
            />
            <TozaiStop stationCode="T 12" location={TOZAI_MONZEN_NAKACHO} />
            <TozaiStop stationCode="TR 01" location={offset(TOZAI_NISHI_FUNABASHI, { dx: OFFSET, dy: -OFFSET * 0.5 })} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('TR', 4, 9)}
                origin={TR_04}
                endpoint={TR_09}
                strokeColor="stroke-tozai"
                textAlignments={[TextAlignment.DOWN, TextAlignment.UP]}
            />
            <TozaiStop stationCode="TR 03" location={offset(TR_04, { dx: -MAJOR_LINE + OFFSET })} textAlignment={TextAlignment.UP} />
            <TozaiStop
                stationCode="TR 02"
                location={offset(TR_04, { dx: (-MAJOR_LINE + OFFSET) * 2 })}
                textAlignment={TextAlignment.DOWN}
            />
        </g>
    );
};

export default Tozai;
