import { MAJOR_LINE } from '../../map/GridLines';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JO_21 } from '../interchanges/InsideYamanote/Bakurocho';
import { JE_02, JM_02 } from '../interchanges/InsideYamanote/Hatchobori';
import { JA_12, JS_21 } from '../interchanges/InsideYamanote/Ikebukuro';
import { TAMACHI_OFFSET } from '../interchanges/InsideYamanote/Mita';
import { JK_33, JY_08 } from '../interchanges/InsideYamanote/NishiNippori';
import { JC_03 } from '../interchanges/InsideYamanote/Ochanomizu';
import { JA_08, JS_17, OSAKI_CORNER, SOBU_OSAKI_CORNER } from '../interchanges/InsideYamanote/Osaki';
import { JB_21 } from '../interchanges/InsideYamanote/Ryogoku';
import { JY_20 } from '../interchanges/InsideYamanote/Shibuya';
import { JK_24, JO_18, JY_29 } from '../interchanges/InsideYamanote/Shimbashi';
import { JO_17, JY_25 } from '../interchanges/InsideYamanote/Shinagawa';
import { JA_11, JB_10, JC_05, JS_20 } from '../interchanges/InsideYamanote/Shinjuku';
import { JY_11 } from '../interchanges/InsideYamanote/Sugamo';
import { JB_17 } from '../interchanges/InsideYamanote/Suidobashi';
import { JY_15 } from '../interchanges/InsideYamanote/Takadanobaba';
import { JK_21, JY_26 } from '../interchanges/InsideYamanote/TakanawaGateway';
import { JC_01, JE_01, JM_01 } from '../interchanges/InsideYamanote/TokyoStation';
import { JU_02 } from '../interchanges/InsideYamanote/Ueno';
import { JB_14, JC_04 } from '../interchanges/InsideYamanote/Yotsuya';
import { JB_12 } from '../interchanges/InsideYamanote/Yoyogi';
import { JA_15, JS_22 } from '../interchanges/jr/Akabane';
import { JC_22 } from '../interchanges/jr/Chuo';
import { JM_35, JN_20 } from '../interchanges/jr/Fuchuhommachi';
import { JH_32 } from '../interchanges/jr/Hachioji';
import { JH_12, JK_12, JK_16, JN_01, JO_13, JS_13, JT_04, JT_05 } from '../interchanges/jr/Keihin';
import { JH_14, JH_15 } from '../interchanges/jr/Kikuna';
import { JB_01, JC_12 } from '../interchanges/jr/Mitaka';
import { JO_15, JS_15 } from '../interchanges/jr/MusashiKosugi';
import { JM_33 } from '../interchanges/jr/NishiKokubunji';
import { JN_14 } from '../interchanges/jr/Noborito';
import { JO_14, JS_14 } from '../interchanges/jr/ShinKawasaki';
import { JN_26 } from '../interchanges/jr/Tachikawa';
import { JA_13, JK_47 } from '../interchanges/jr/Tohoku';

const Yamanote = () => {
    return (
        <SVGPath
            color="stroke-yamanote"
            points={[JY_29, JY_08, JY_11, JY_15, JY_20, OSAKI_CORNER, JY_25, JY_26, JY_29]}
            directions={[NE, NW, W, SW, S, E, NE, E, NE]}
        />
    );
};

const ChuoSobu = () => {
    return <SVGPath color="stroke-chuo-sobu" points={[JB_01, JB_10, JB_12, JB_14, JB_17, JB_21]} directions={[SE, SW, SE, NE, E, SE]} />;
};

const KeihinTohoku = () => {
    return <SVGPath color="stroke-keihin-tohoku" points={[JK_12, JK_16, JK_21, JK_24, JK_33, JK_47]} directions={[E, NE, E, NE, NW, N]} />;
};

const Tokaido = () => {
    return <SVGPath color="stroke-tokaido" points={[JU_02, TAMACHI_OFFSET, JT_04, JT_05]} directions={[SW, W, SW, W]} />;
};

const JS_SK_CORNER = offset(JS_14, scaleToUnitX(SE, OFFSET * 2), scale(S, OFFSET * 2));

const SobuRapid = () => {
    return (
        <SVGPath
            color="stroke-sobu-rapid"
            points={[
                JO_13,
                offset(JS_SK_CORNER, scale(SE, OFFSET)),
                JO_14,
                JO_15,
                SOBU_OSAKI_CORNER,
                JO_17,
                offset(TAMACHI_OFFSET, scale(S, OFFSET)),
                JO_18,
                JO_21,
            ]}
            directions={[E, NE, NW, NE, E, NE, E, NE, E]}
        />
    );
};

const ChuoRapid = () => {
    return (
        <SVGPath
            color="stroke-chuo-rapid"
            points={[JC_01, JC_03, offset(JB_17, scaleToUnitX(S, OFFSET)), JC_04, offset(JB_12, scale(SW, OFFSET)), JC_05, JC_12, JC_22]}
            directions={[NE, NW, W, SW, NW, NE, NW, W]}
        />
    );
};

const Keiyo = () => {
    return <SVGPath color="stroke-keiyo" points={[JE_01, JE_02]} />;
};

const Musashino = () => {
    return (
        <>
            <SVGPath color="stroke-musashino" points={[JM_01, JM_02]} />
            <SVGPath color="stroke-musashino" points={[JM_33, JM_35]} directions={[SW, S]} />
        </>
    );
};

const Saikyo = () => {
    return <SVGPath color="stroke-saikyo" points={[JA_08, JA_11, JA_12, JA_13, JA_15]} directions={[N, NE, E, NE, N]} />;
};

const ShonanShinjuku = () => {
    return (
        <SVGPath
            color="stroke-shonan-shinjuku"
            points={[JS_13, JS_SK_CORNER, JS_14, JS_15, offset(OSAKI_CORNER, { dx: -MAJOR_LINE }), JS_17, JS_20, JS_21, JS_22]}
            directions={[E, NE, NW, NE, E, N, NE, E, N]}
        />
    );
};

const Nambu = () => {
    return <SVGPath color="stroke-nambu" points={[JN_01, JN_14, JN_20, JN_26]} directions={[NW, N, NW, N]} />;
};

const Yokohama = () => {
    return <SVGPath color="stroke-yokohama" points={[JH_12, JH_14, JH_15, JH_32]} directions={[E, N, NW, N]} />;
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
            <Nambu />
            <Yokohama />
        </g>
    );
};

export default JREast;
