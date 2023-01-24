import { Stop, StopDefinition } from '../../symbols/BasicStop';
import {
    CHUO_TOKYO,
    OFFSET,
    YAMANOTE_AKIHABARA,
    YAMANOTE_KANDA,
    YAMANOTE_OKACHIMACHI,
    YAMANOTE_SHIMBASHI,
    YAMANOTE_UENO,
    YAMANOTE_YURAKUCHO,
} from '../../utils/CommonCoordinates';
import { NNE, offset, scale } from '../../utils/PathUtils';
import { JY_06, YAMANOTE_NIPPORI, YAMANOTE_NISHI_NIPPORI } from './Yamanote';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 2 };
const YURAKUCHO = { ...TOKYO, y: YAMANOTE_YURAKUCHO.y };
const SHIMBASHI = { ...YAMANOTE_SHIMBASHI, x: YAMANOTE_SHIMBASHI.x + OFFSET };

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
        </g>
    );
};

export default KeihinTohoku;
