import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JO_21 } from '../interchanges/InsideYamanote/Bakurocho';
import { JE_02, JM_02 } from '../interchanges/InsideYamanote/Hatchobori';
import { JA_12, JS_21 } from '../interchanges/InsideYamanote/Ikebukuro';
import { JY_08 } from '../interchanges/InsideYamanote/NishiNippori';
import { JC_03 } from '../interchanges/InsideYamanote/Ochanomizu';
import { JB_21 } from '../interchanges/InsideYamanote/Ryogoku';
import { JA_10, JS_19, JY_20 } from '../interchanges/InsideYamanote/Shibuya';
import { JK_24, JO_18, JT_02, JY_29 } from '../interchanges/InsideYamanote/Shimbashi';
import { JA_11, JB_10, JC_05, JS_20 } from '../interchanges/InsideYamanote/Shinjuku';
import { JY_11 } from '../interchanges/InsideYamanote/Sugamo';
import { JB_17 } from '../interchanges/InsideYamanote/Suidobashi';
import { JK_34 } from '../interchanges/InsideYamanote/Tabata';
import { JY_15 } from '../interchanges/InsideYamanote/Takadanobaba';
import { JC_01, JE_01, JM_01 } from '../interchanges/InsideYamanote/TokyoStation';
import { JU_02 } from '../interchanges/InsideYamanote/Ueno';
import { JB_14, JC_04 } from '../interchanges/InsideYamanote/Yotsuya';
import { JB_12 } from '../interchanges/InsideYamanote/Yoyogi';

const Yamanote = () => {
    return <SVGPath color="stroke-yamanote" points={[JY_29, JY_08, JY_11, JY_15, JY_20, JY_29]} directions={[NE, N, W, SW, S, NE]} />;
};

const ChuoSobu = () => {
    return <SVGPath color="stroke-chuo-sobu" points={[JB_10, JB_12, JB_14, JB_17, JB_21]} directions={[SW, SE, NE, E, SE]} />;
};

const KeihinTohoku = () => {
    return <SVGPath color="stroke-keihin-tohoku" points={[JK_24, JK_34]} directions={[NE, N]} />;
};

const Tokaido = () => {
    return <SVGPath color="stroke-tokaido" points={[JU_02, JT_02]} />;
};

const SobuRapid = () => {
    return <SVGPath color="stroke-sobu-rapid" points={[JO_18, JO_21]} directions={[NE, E]} />;
};

const ChuoRapid = () => {
    return (
        <SVGPath
            color="stroke-chuo-rapid"
            points={[JC_01, JC_03, offset(JB_17, scaleToUnitX(S, OFFSET)), JC_04, offset(JB_12, scale(SW, OFFSET)), JC_05]}
            directions={[NE, NW, W, SW, NW, NE]}
        />
    );
};

const Keiyo = () => {
    return <SVGPath color="stroke-keiyo" points={[JE_01, JE_02]} />;
};

const Musashino = () => {
    return <SVGPath color="stroke-musashino" points={[JM_01, JM_02]} />;
};

const Saikyo = () => {
    return <SVGPath color="stroke-saikyo" points={[JA_10, JA_11, JA_12]} directions={[N, NE, E]} />;
};

const ShonanShinjuku = () => {
    return <SVGPath color="stroke-shonan-shinjuku" points={[JS_19, JS_20, JS_21]} directions={[N, NE, E]} />;
};

const JREast = () => {
    return (
        <g id="jr-east">
            <Yamanote />
            <ChuoSobu />
            <KeihinTohoku />
            <Tokaido />
            <SobuRapid />
            <ChuoRapid />
            <Musashino />
            <Keiyo />
            <Saikyo />
            <ShonanShinjuku />
        </g>
    );
};

export default JREast;
