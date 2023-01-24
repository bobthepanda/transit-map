import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { CHUO_TOKYO, OFFSET, YAMANOTE_SHIMBASHI, YAMANOTE_UENO } from '../../utils/CommonCoordinates';
import { offset } from '../../utils/PathUtils';

const TOKYO = { x: CHUO_TOKYO.x + OFFSET * 3, y: CHUO_TOKYO.y + OFFSET * 0.5 };
const SHIMBASHI = {
    ...YAMANOTE_SHIMBASHI,
    x: YAMANOTE_SHIMBASHI.x + OFFSET * 2,
};
const UENO = offset(YAMANOTE_UENO, { dx: OFFSET * 2 });

const TokaidoPath = () => {
    return <SVGPath color="stroke-tokaido" points={[SHIMBASHI, UENO]} />;
};

const TokaidoStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-tokaido" />;
};

const Tokaido = () => {
    return (
        <g className="tokaido">
            <TokaidoPath />
            <TokaidoStop location={UENO} stationCode="JU 02" />
            <TokaidoStop location={offset(TOKYO, { dy: -OFFSET })} stationCode="JU 01" />
            <TokaidoStop location={TOKYO} stationCode="JT 01" />
            <TokaidoStop location={SHIMBASHI} stationCode="JT 02" />
        </g>
    );
};

export default Tokaido;
