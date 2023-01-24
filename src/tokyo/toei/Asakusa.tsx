import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import {
    ASAKUSA_BAKUROCHO,
    ASAKUSA_KURAMAE,
    ASAKUSA_NIHOMBASHI,
    ASAKUSA_NINGYOCHO,
    HIBIYA_GINZA,
    MITA_HIBIYA,
    NIHOMBASHI,
    OFFSET,
    YAMANOTE_AKIHABARA,
    YAMANOTE_SHIMBASHI,
    YAMANOTE_UENO,
} from '../../utils/CommonCoordinates';
import { offset, RADIUS, S, W, WSW } from '../../utils/PathUtils';

const SHIMBASHI = { x: YAMANOTE_SHIMBASHI.x + OFFSET * 1.5, y: YAMANOTE_SHIMBASHI.y + OFFSET * 2 };
const GINZA = { x: HIBIYA_GINZA.x + OFFSET * 0.5 + MAJOR_LINE, y: MITA_HIBIYA.y };
const SHIMBASHI_RADIUS = RADIUS + OFFSET * 2;
const ASAKUSABASHI = { ...YAMANOTE_AKIHABARA, x: ASAKUSA_BAKUROCHO.x };
export const A_18 = { x: ASAKUSA_KURAMAE.x + MAJOR_LINE, y: YAMANOTE_UENO.y };
const OSHIAGE = offset(A_18, { dx: MAJOR_LINE * 2 - OFFSET, dy: -MAJOR_LINE + OFFSET });
export const A_09 = offset(MITA_HIBIYA, { dx: MAJOR_LINE, dy: MAJOR_LINE * 3 - OFFSET });

export const AsakusaPath = () => {
    return (
        <SVGPath
            color="stroke-asakusa"
            points={[OSHIAGE, A_18, ASAKUSA_KURAMAE, SHIMBASHI, A_09]}
            directions={[W, WSW, S, W, S]}
            radii={{ 3: SHIMBASHI_RADIUS }}
        />
    );
};

const AsakusaStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-asakusa" />;
};

const Asakusa = () => {
    return (
        <g className="asakusa">
            <AsakusaPath />
            <AsakusaStop location={A_09} stationCode="A 09" />
            <AsakusaStop location={SHIMBASHI} stationCode="A 10" />
            <AsakusaStop location={{ ...ASAKUSA_NIHOMBASHI, y: NIHOMBASHI.y + OFFSET * 4 }} stationCode="A 12" />
            <AsakusaStop location={GINZA} stationCode="A 11" />
            <AsakusaStop location={ASAKUSA_NIHOMBASHI} stationCode="A 13" />
            <AsakusaStop stationCode="A 14" location={ASAKUSA_NINGYOCHO} />
            <AsakusaStop stationCode="A 15" location={ASAKUSA_BAKUROCHO} />
            <AsakusaStop stationCode="A 16" location={ASAKUSABASHI} />
            <AsakusaStop stationCode="A 17" location={ASAKUSA_KURAMAE} />
            <AsakusaStop stationCode="A 18" location={A_18} textAlignment={TextAlignment.DOWN} />
            <AsakusaStop
                stationCode="A 19"
                location={offset(A_18, { dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 })}
                textAlignment={TextAlignment.DOWN}
            />
            <AsakusaStop stationCode="A 20" location={OSHIAGE} textAlignment={TextAlignment.DOWN} />
        </g>
    );
};

export default Asakusa;
