import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import {
    CHIYODA_NISHI_NIPPORI,
    OFFSET,
    OTEMACHI,
    YAMANOTE_AKIHABARA,
    YAMANOTE_KANDA,
    YAMANOTE_OKACHIMACHI as JY_04,
    YAMANOTE_SHIMBASHI,
    YAMANOTE_TOKYO,
    YAMANOTE_UENO,
    YAMANOTE_YURAKUCHO,
} from '../../utils/CommonCoordinates';
import { ESE, Factor, N, offset, S, scale, SSW, W, WNW, WSW } from '../../utils/PathUtils';

export const YAMANOTE_NISHI_NIPPORI = offset(offset(CHIYODA_NISHI_NIPPORI, { dx: OFFSET * 1, dy: -OFFSET * 2 }), scale(SSW, OFFSET));
export const JY_06 = offset(YAMANOTE_UENO, { dy: -MAJOR_LINE });
export const YAMANOTE_NIPPORI = offset(YAMANOTE_NISHI_NIPPORI, scale(ESE, (OFFSET * 8.5) / Factor.DOUBLE_DIAG));
export const JY_11 = offset(OTEMACHI, { dx: -MAJOR_LINE * 4.5, dy: -MAJOR_LINE * 8 - OFFSET * 2 });
export const JY_10 = offset(JY_11, { dx: MAJOR_LINE * 2 });
export const JY_17 = offset(OTEMACHI, { dx: -MAJOR_LINE * 10.5, dy: MAJOR_LINE * 0.5 });
export const JY_13 = offset(JY_17, { dx: MAJOR_LINE * 0.5, dy: -MAJOR_LINE * 8 });
export const JY_15 = offset(JY_17, { dy: -MAJOR_LINE * 1.75 * 2 });
export const JY_18 = offset(JY_17, { dy: MAJOR_LINE * 1 });
export const JY_09 = offset(YAMANOTE_NISHI_NIPPORI, { dx: -MAJOR_LINE, dy: -MAJOR_LINE * 0.5 });

export const YamanotePath = () => {
    return (
        <SVGPath
            color="stroke-yamanote"
            points={[YAMANOTE_SHIMBASHI, YAMANOTE_NISHI_NIPPORI, JY_11, JY_13, JY_18]}
            directions={[N, WNW, W, WSW, S]}
        />
    );
};

const YamanoteStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-yamanote" />;
};
const Yamanote = () => {
    return (
        <g className="yamanote">
            <YamanoteStop stationCode="JY 18" location={JY_18} />
            <YamanoteStop stationCode="JY 13" location={JY_13} />
            <YamanoteStop stationCode="JY 17" location={JY_17} />
            <YamanoteStop stationCode="JY 16" location={offset(JY_17, { dy: -MAJOR_LINE * 2.5 - OFFSET })} />
            <YamanoteStop stationCode="JY 15" location={JY_15} />
            <YamanoteStop stationCode="JY 14" location={offset(JY_15, { dy: -MAJOR_LINE * 1.75 })} />
            <YamanoteStop location={YAMANOTE_NISHI_NIPPORI} stationCode="JY 08" />
            <YamanoteStop stationCode="JY 07" location={YAMANOTE_NIPPORI} />
            <YamanoteStop stationCode="JY 06" location={JY_06} />
            <YamanoteStop stationCode="JY 05" location={YAMANOTE_UENO} />
            <YamanoteStop stationCode="JY 04" location={JY_04} />
            <YamanoteStop location={YAMANOTE_AKIHABARA} stationCode="JY 03" />
            <YamanoteStop location={YAMANOTE_KANDA} stationCode="JY 02" />
            <YamanoteStop location={YAMANOTE_TOKYO} stationCode="JY 01" />
            <YamanoteStop location={YAMANOTE_YURAKUCHO} stationCode="JY 30" />
            <YamanoteStop location={YAMANOTE_SHIMBASHI} stationCode="JY 29" />
            <YamanoteStop stationCode="JY 11" location={JY_11} />
            <YamanoteStop stationCode="JY 10" location={JY_10} />
            <YamanoteStop stationCode="JY 09" location={JY_09} />
        </g>
    );
};

export default Yamanote;
