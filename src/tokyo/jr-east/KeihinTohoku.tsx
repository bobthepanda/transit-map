import { Stop, StopDefinition } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import {
    CHUO_TOKYO,
    MAJOR_LINE,
    OFFSET,
    YAMANOTE_AKIHABARA,
    YAMANOTE_KANDA,
    YAMANOTE_OKACHIMACHI,
    YAMANOTE_SHIMBASHI,
    YAMANOTE_UENO,
    YAMANOTE_YURAKUCHO,
} from '../../utils/CommonCoordinates';
import { ESE, generatePoint, NNE, NNW, offset, S, scale, SSE, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JY_06, JY_09, YAMANOTE_NIPPORI, YAMANOTE_NISHI_NIPPORI } from './Yamanote';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 2 };
const YURAKUCHO = { ...TOKYO, y: YAMANOTE_YURAKUCHO.y };
const SHIMBASHI = { ...YAMANOTE_SHIMBASHI, x: YAMANOTE_SHIMBASHI.x + OFFSET };
export const JK_34 = offset(JY_09, scale(NNE, OFFSET));
export const JK_36 = generatePoint({ start: JK_34, slope: WNW, endReference: offset(JK_34, { dx: -MAJOR_LINE * 2.5 - OFFSET * 2 }) });

const TOHOKU_SPACING = 1.5 * MAJOR_LINE * 0.25;

export const JK_37 = offset(JK_36, { dx: -MAJOR_LINE, dy: -MAJOR_LINE });
export const JK_38 = generatePoint({ start: JK_37, slope: NNW, endReference: offset(JK_37, { dx: -TOHOKU_SPACING }) });

export const JK_39 = generatePoint({ start: JK_38, slope: NNW, endReference: offset(JK_38, { dx: -TOHOKU_SPACING }) });
export const JK_42 = generatePoint({ start: JK_39, slope: NNW, endReference: offset(JK_39, { dx: -TOHOKU_SPACING * 3 }) });
export const JK_43 = generatePoint({ start: JK_42, slope: NNW, endReference: offset(JK_42, { dx: -TOHOKU_SPACING }) });
export const JK_47 = generatePoint({ start: JK_43, slope: NNW, endReference: offset(JK_43, { dx: -TOHOKU_SPACING * 4 }) });
export const JK_33 = offset(YAMANOTE_NISHI_NIPPORI, scale(NNE, OFFSET));

export const KeihinTohokuPath = () => {
    return <SVGPath color="stroke-keihin-tohoku" points={[JK_47, JK_36, SHIMBASHI]} directions={[SSE, ESE, S]} />;
};

const KeihinTohokuStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-keihin-tohoku" />;
};

const KeihinTohoku = () => {
    return (
        <g className="keihin-tohoku">
            <KeihinTohokuStop location={TOKYO} stationCode="JK 26" />
            <KeihinTohokuStop location={YURAKUCHO} stationCode="JK 25" />
            <KeihinTohokuStop location={SHIMBASHI} stationCode="JK 24" />
            <KeihinTohokuStop location={{ x: TOKYO.x, y: YAMANOTE_AKIHABARA.y }} stationCode="JK 28" />
            <KeihinTohokuStop location={{ x: TOKYO.x, y: YAMANOTE_KANDA.y }} stationCode="JK 27" />
            <KeihinTohokuStop location={{ x: TOKYO.x, y: YAMANOTE_UENO.y }} stationCode="JK 30" />
            <KeihinTohokuStop stationCode="JK 32" location={offset(YAMANOTE_NIPPORI, scale(NNE, OFFSET))} />
            <KeihinTohokuStop stationCode="JK 29" location={offset(YAMANOTE_OKACHIMACHI, { dx: OFFSET })} />
            <KeihinTohokuStop stationCode="JK 31" location={offset(JY_06, { dx: OFFSET })} />
            <KeihinTohokuStop stationCode="JK 33" location={JK_33} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('JK', 34, 36)}
                origin={JK_34}
                endpoint={JK_36}
                strokeColor="stroke-keihin-tohoku"
            />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('JK', 37, 47)}
                origin={JK_37}
                endpoint={JK_47}
                strokeColor="stroke-keihin-tohoku"
            />
        </g>
    );
};

export default KeihinTohoku;
