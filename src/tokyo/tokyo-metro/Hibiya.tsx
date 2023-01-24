import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import {
    ASAKUSA_NINGYOCHO,
    HIBIYA,
    HIBIYA_GINZA,
    HIBIYA_KASUMIGASEKI,
    HIBIYA_KAYABACHO,
    OEDO_MONZEN_NAKACHO,
    OFFSET,
    YAMANOTE_AKIHABARA,
    YAMANOTE_OKACHIMACHI,
    YAMANOTE_TOKYO,
    YAMANOTE_UENO,
    YAMANOTE_YURAKUCHO,
} from '../../utils/CommonCoordinates';
import { ESE, Factor, offset, S, scale, W, WSW } from '../../utils/PathUtils';
import { CS_KOIWA } from '../jr-east/ChuoSobu';
import { E_23 } from '../toei/Oedo';

const HIBIYA_TSUKIJI = { x: HIBIYA_KAYABACHO.x, y: YAMANOTE_YURAKUCHO.y };
const AKIHABARA = { ...YAMANOTE_AKIHABARA, x: YAMANOTE_AKIHABARA.x + OFFSET * 3 };
const UENO = { x: AKIHABARA.x, y: YAMANOTE_UENO.y };
const NIGYOCHO = { x: ASAKUSA_NINGYOCHO.x + OFFSET, y: ASAKUSA_NINGYOCHO.y - OFFSET * 0.25 };
export const HIBIYA_KITA_SENJU = { x: OEDO_MONZEN_NAKACHO.x, y: CS_KOIWA.y - MAJOR_LINE * 1.5 };
export const H_21 = offset(HIBIYA_KITA_SENJU, { dy: MAJOR_LINE * 1 });
const H_20 = offset(H_21, { dx: -MAJOR_LINE, dy: MAJOR_LINE + OFFSET });
const H_19 = offset(H_20, scale(WSW, MAJOR_LINE / Factor.HALF_DIAG));
const H_06 = offset(HIBIYA_KASUMIGASEKI, { dy: MAJOR_LINE + OFFSET * 2 });
const H_05 = offset(H_06, { dx: -MAJOR_LINE, dy: MAJOR_LINE * 0.5 });
const H_04 = offset(E_23, { dy: -OFFSET });

export const HibiyaPath = () => {
    return (
        <SVGPath
            color="stroke-hibiya"
            points={[HIBIYA_KITA_SENJU, H_20, UENO, NIGYOCHO, HIBIYA_TSUKIJI, HIBIYA, H_06, H_04]}
            directions={[S, WSW, S, ESE, S, W, S, W]}
        />
    );
};

const HibiyaStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-hibiya" />;
};

const Hibiya = () => {
    return (
        <g className="hibiya">
            <HibiyaPath />
            <HibiyaStop location={HIBIYA} stationCode="H 08" />
            <HibiyaStop location={HIBIYA_GINZA} stationCode="H 09" />
            <HibiyaStop location={{ ...HIBIYA_GINZA, x: HIBIYA_GINZA.x + MAJOR_LINE + OFFSET }} stationCode="H 10" />
            <HibiyaStop location={{ ...HIBIYA_KAYABACHO, y: YAMANOTE_YURAKUCHO.y }} stationCode="H 11" />
            <HibiyaStop location={{ ...HIBIYA_KAYABACHO, y: YAMANOTE_TOKYO.y + OFFSET }} stationCode="H 12" />
            <HibiyaStop location={HIBIYA_KAYABACHO} stationCode="H 13" />
            <HibiyaStop stationCode="H 14" location={NIGYOCHO} textAlignment={TextAlignment.UP} />
            <HibiyaStop stationCode="H 16" location={AKIHABARA} />
            <HibiyaStop stationCode="H 17" location={{ x: AKIHABARA.x, y: YAMANOTE_OKACHIMACHI.y }} />
            <HibiyaStop stationCode="H 18" location={UENO} />
            <HibiyaStop stationCode="H 22" location={HIBIYA_KITA_SENJU} />
            <HibiyaStop stationCode="H 21" location={H_21} />
            <HibiyaStop stationCode="H 20" location={H_20} />
            <HibiyaStop stationCode="H 19" location={H_19} />
            <HibiyaStop stationCode="H 07" location={HIBIYA_KASUMIGASEKI} />
            <HibiyaStop stationCode="H 06" location={H_06} />
            <HibiyaStop stationCode="H 05" location={H_05} />
            <HibiyaStop stationCode="H 04" location={H_04} />
        </g>
    );
};

export default Hibiya;
