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
import { ESE, generatePoint, midPoint, NNE, offset, S, scale, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JY_06, JY_09, YAMANOTE_NIPPORI, YAMANOTE_NISHI_NIPPORI } from './Yamanote';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 2 };
const YURAKUCHO = { ...TOKYO, y: YAMANOTE_YURAKUCHO.y };
const SHIMBASHI = { ...YAMANOTE_SHIMBASHI, x: YAMANOTE_SHIMBASHI.x + OFFSET };
export const JK_34 = offset(JY_09, scale(NNE, OFFSET));
export const JK_38 = generatePoint({ start: JK_34, slope: WNW, endReference: offset(JK_34, { dx: -MAJOR_LINE * 5 }) });
export const JK_36 = midPoint(JK_34, JK_38);
export const KeihinTohokuPath = () => {
    return <SVGPath color="stroke-keihin-tohoku" points={[JK_38, SHIMBASHI]} directions={[ESE, S]} />;
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
            <KeihinTohokuStop stationCode="JK 33" location={offset(YAMANOTE_NISHI_NIPPORI, scale(NNE, OFFSET))} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('JK', 34, 38)}
                origin={JK_34}
                endpoint={JK_38}
                strokeColor="stroke-keihin-tohoku"
            />
        </g>
    );
};

export default KeihinTohoku;
