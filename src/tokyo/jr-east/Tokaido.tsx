import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { CHUO_TOKYO, OFFSET, YAMANOTE_SHIMBASHI, YAMANOTE_UENO } from '../../utils/CommonCoordinates';
import { N, offset, scale, SSW, W, WNW } from '../../utils/PathUtils';
import { JK_34, JK_38 } from './KeihinTohoku';

const TOKYO = { x: CHUO_TOKYO.x + OFFSET * 3, y: CHUO_TOKYO.y + OFFSET * 0.5 };
const SHIMBASHI = {
    ...YAMANOTE_SHIMBASHI,
    x: YAMANOTE_SHIMBASHI.x + OFFSET * 2,
};
const UENO = offset(YAMANOTE_UENO, { dx: OFFSET * 2 });
const JU_04 = offset(JK_38, scale(SSW, OFFSET));
const JU_03 = offset(JK_34, { dy: -MAJOR_LINE });

export const TokaidoPath = () => {
    return <SVGPath color="stroke-tokaido" points={[SHIMBASHI, JU_03, JU_04]} directions={[N, W, WNW]} />;
};

const TokaidoStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-tokaido" />;
};

const Tokaido = () => {
    return (
        <g className="tokaido">
            <TokaidoStop stationCode="JU 03" location={JU_03} />
            <TokaidoStop stationCode="JU 04" location={JU_04} />
            <TokaidoStop location={UENO} stationCode="JU 02" />
            <TokaidoStop location={offset(TOKYO, { dy: -OFFSET })} stationCode="JU 01" />
            <TokaidoStop location={TOKYO} stationCode="JT 01" />
            <TokaidoStop location={SHIMBASHI} stationCode="JT 02" />
        </g>
    );
};

export default Tokaido;
