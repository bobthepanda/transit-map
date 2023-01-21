import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import {
    GINZA_MITSUKOSHIMAE,
    HIBIYA_KASUMIGASEKI,
    MITA_HIBIYA,
    NIHOMBASHI,
    OFFSET,
    OTEMACHI,
    YAMANOTE_KANDA,
    YAMANOTE_OKACHIMACHI,
    YAMANOTE_SHIMBASHI,
    YAMANOTE_UENO,
} from '../../utils/CommonCoordinates';
import { curveFrom, E, N, offset, RADIUS, startAtLocation, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import StopFromTokyo from '../StopsFromTokyo';
import { A_18 } from '../toei/Asakusa';

const SHIMBASHI = {
    x: YAMANOTE_SHIMBASHI.x + OFFSET * 1.5,
    y: YAMANOTE_SHIMBASHI.y + OFFSET,
};
const GINZA = { x: OTEMACHI.x, y: MITA_HIBIYA.y };
const SHIMBASHI_RADIUS = RADIUS + OFFSET;
const TORANOMON = { y: SHIMBASHI.y, x: HIBIYA_KASUMIGASEKI.x - OFFSET };
const KANDA = { ...YAMANOTE_KANDA, x: YAMANOTE_KANDA.x - OFFSET * 2 };
const UENO = offset(YAMANOTE_UENO, { dx: OFFSET, dy: -OFFSET });
const ASAKUSA = offset(A_18, { dy: -OFFSET });
export const G_15 = offset(YAMANOTE_OKACHIMACHI, { dx: -MAJOR_LINE * 0.5 - OFFSET, dy: -OFFSET * 4 });

export const GinzaPath = () => {
    return (
        <path
            d={`${startAtLocation(TORANOMON)}
                ${curveFrom({
                    start: TORANOMON,
                    end: NIHOMBASHI,
                    radius: SHIMBASHI_RADIUS,
                    firstDirection: E,
                    secondDirection: N,
                })}
                ${curveFrom({
                    start: NIHOMBASHI,
                    end: KANDA,
                    firstDirection: N,
                    secondDirection: WNW,
                })}
                ${curveFrom({
                    start: KANDA,
                    end: G_15,
                    firstDirection: WNW,
                    secondDirection: N,
                })}
                ${curveFrom({
                    start: G_15,
                    end: ASAKUSA,
                    firstDirection: N,
                    secondDirection: E,
                })}
                `}
        />
    );
};

const Ginza = () => {
    return (
        <g className="ginza">
            <GinzaPath />
            <StopFromTokyo location={NIHOMBASHI} stationCode="G 11" />
            <StopFromTokyo location={{ ...NIHOMBASHI, y: NIHOMBASHI.y + OFFSET * 4 }} stationCode="G 10" />
            <StopFromTokyo location={GINZA} stationCode="G 09" />
            <StopFromTokyo location={SHIMBASHI} stationCode="G 08" />
            <StopFromTokyo location={TORANOMON} stationCode="G 07" textAlignment={TextAlignment.UP} />
            <StopFromTokyo location={KANDA} stationCode="G 13" textAlignment={TextAlignment.LEFT} />
            <StopFromTokyo location={GINZA_MITSUKOSHIMAE} stationCode="G 12" />
            <LineSegmentWithEndpoint
                origin={UENO}
                endpoint={ASAKUSA}
                stops={generateStationCodes('G', 16, 19)}
                textAlignments={[TextAlignment.UP]}
            />
            <StopFromTokyo stationCode="G 15" location={G_15} textAlignment={TextAlignment.LEFT} />
            <StopFromTokyo stationCode="G 14" location={offset(G_15, { dy: OFFSET * 5 })} textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export default Ginza;
