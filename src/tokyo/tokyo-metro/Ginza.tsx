import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import {
    GINZA_MITSUKOSHIMAE,
    HIBIYA_GINZA,
    HIBIYA_KASUMIGASEKI,
    NIHOMBASHI,
    OFFSET,
    YAMANOTE_KANDA,
    YAMANOTE_OKACHIMACHI,
    YAMANOTE_SHIMBASHI,
    YAMANOTE_UENO,
} from '../../utils/CommonCoordinates';
import { E, ENE, ESE, Factor, N, offset, RADIUS, scale, SSW, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { A_18 } from '../toei/Asakusa';
import { E_24 } from '../toei/Oedo';
import { M_13 } from './Marunouchi';

const SHIMBASHI = {
    x: YAMANOTE_SHIMBASHI.x + OFFSET * 1.5,
    y: YAMANOTE_SHIMBASHI.y + OFFSET,
};
const GINZA = offset(HIBIYA_GINZA, { dx: OFFSET * 0.5, dy: -OFFSET });
const SHIMBASHI_RADIUS = RADIUS + OFFSET;
const TORANOMON = { y: SHIMBASHI.y, x: HIBIYA_KASUMIGASEKI.x + OFFSET };
const KANDA = { ...YAMANOTE_KANDA, x: YAMANOTE_KANDA.x - OFFSET * 2 };
const UENO = offset(YAMANOTE_UENO, { dx: OFFSET, dy: -OFFSET });
const ASAKUSA = offset(A_18, { dy: -OFFSET });
export const G_15 = offset(YAMANOTE_OKACHIMACHI, { dx: -MAJOR_LINE * 0.5 - OFFSET, dy: -OFFSET * 4 });
const G_05 = offset(M_13, scale(SSW, OFFSET));
export const G_06 = offset(G_05, scale(ESE, MAJOR_LINE / Factor.DOUBLE_DIAG));
export const G_04 = offset(E_24, { dy: -OFFSET });

export const GinzaPath = () => {
    return (
        <SVGPath
            color="stroke-ginza"
            points={[G_04, G_05, TORANOMON, NIHOMBASHI, KANDA, G_15, ASAKUSA]}
            directions={[ENE, ESE, E, N, WNW, N, E]}
            radii={{ 3: SHIMBASHI_RADIUS }}
        />
    );
};

const GinzaStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-ginza" />;
};

const Ginza = () => {
    return (
        <g className="ginza">
            <GinzaPath />
            <GinzaStop stationCode="G 04" location={G_04} />
            <GinzaStop stationCode="G 06" location={G_06} />
            <GinzaStop stationCode="G 05" location={G_05} />
            <GinzaStop location={NIHOMBASHI} stationCode="G 11" />
            <GinzaStop location={{ ...NIHOMBASHI, y: NIHOMBASHI.y + OFFSET * 4 }} stationCode="G 10" />
            <GinzaStop location={GINZA} stationCode="G 09" />
            <GinzaStop location={SHIMBASHI} stationCode="G 08" />
            <GinzaStop location={TORANOMON} stationCode="G 07" textAlignment={TextAlignment.UP} />
            <GinzaStop location={KANDA} stationCode="G 13" textAlignment={TextAlignment.LEFT} />
            <GinzaStop location={GINZA_MITSUKOSHIMAE} stationCode="G 12" />
            <LineSegmentWithEndpoint
                origin={UENO}
                endpoint={ASAKUSA}
                stops={generateStationCodes('G', 16, 19)}
                textAlignments={[TextAlignment.UP]}
                strokeColor="stroke-ginza"
            />
            <GinzaStop stationCode="G 15" location={G_15} textAlignment={TextAlignment.LEFT} />
            <GinzaStop stationCode="G 14" location={offset(G_15, { dy: OFFSET * 5 })} textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export default Ginza;
