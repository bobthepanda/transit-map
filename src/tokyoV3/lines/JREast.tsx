import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, offset } from '../../utils/PathUtils';
import { JB_20, JC_03, JK_28, JY_03 } from '../interchanges/Akihabara';
import { JB_01, JC_22 } from '../interchanges/Chuo';
import { JA_11, JB_10, JC_05, JO_21, JS_20, JY_17 } from '../interchanges/Kanda';
import { JN_01, JN_21, JN_26 } from '../interchanges/Nambu';
import { JK_33, JY_08 } from '../interchanges/NishiNippori';
import { JO_20 } from '../interchanges/Otemachi';
import { JB_12, JB_14, JC_04, JO_18 } from '../interchanges/Shimbashi';
import { JA_08, JA_09, JO_17, JS_17, JS_18, JY_21, JY_24 } from '../interchanges/Shinagawa';
import { JK_21, JY_26 } from '../interchanges/TakanawaGateway';
import { JH_12, JK_12, JO_13, JS_13 } from '../interchanges/Tokaido';
import { JC_01, JK_26, JY_01 } from '../interchanges/TokyoStation';
import {
    JO_14,
    JO_15,
    JO_15_CURVE,
    JO_16,
    JO_17_FIRST_CURVE,
    JO_17_SECOND_CURVE,
    JS_14,
    JS_15,
    JS_15_CURVE,
    JS_16,
    JS_17_CURVE,
} from '../interchanges/Tokyu';
import { JH_14, JH_15, JH_27, JH_32 } from '../interchanges/Yokohama';

const KeihinTohoku = () => {
    return <SVGPath points={[JK_33, JK_28, JK_26, JK_21, JK_12]} directions={[SE, S, SW, S, SW]} color="stroke-keihin-tohoku" />;
};

const Yamanote = () => {
    return (
        <SVGPath points={[JY_17, JY_21, JY_24, JY_26, JY_01, JY_03, JY_08]} directions={[S, SE, E, N, NE, N, NW]} color="stroke-yamanote" />
    );
};

const SobuRapid = () => {
    return (
        <SVGPath
            points={[JO_13, JO_14, JO_15, JO_15_CURVE, JO_16, JO_17_SECOND_CURVE, JO_17_FIRST_CURVE, JO_17, JO_18, JO_20, JO_21]}
            directions={[NE, NW, N, NE, E, N, E, N, NE, E, NE]}
            color="stroke-sobu-rapid"
        />
    );
};

const ChuoRapid = () => {
    return (
        <SVGPath
            points={[JC_01, offset(JY_03, { dx: -OFFSET, dy: OFFSET * 4 }), JC_03, JC_04, offset(JB_12, { dy: OFFSET }), JC_05, JC_22]}
            directions={[NE, N, W, SW, W, N, W]}
            color="stroke-chuo-rapid"
        />
    );
};

const ChuoSobu = () => {
    return <SVGPath points={[JB_01, JB_10, JB_12, JB_14, JB_20]} directions={[E, S, E, NE, E]} color="stroke-chuo-sobu" />;
};

const Nambu = () => {
    return <SVGPath points={[JN_01, JN_21, JN_26]} directions={[W, NW, N]} color="stroke-nambu" />;
};

const ShonanShinjuku = () => {
    return (
        <SVGPath
            points={[JS_13, JS_14, JS_15, JS_15_CURVE, JS_16, JS_17_CURVE, JS_17, JS_18, JS_20]}
            directions={[NE, NW, N, NE, E, N, W, NW, N]}
            color="stroke-shonan-shinjuku"
        />
    );
};

const Saikyo = () => {
    return <SVGPath points={[JA_08, JA_09, JA_11]} directions={[W, NW, N]} color="stroke-saikyo" />;
};

const Yokohama = () => {
    return <SVGPath points={[JH_12, JH_14, JH_15, JH_27, JH_32]} directions={[NE, NW, W, NW, N]} color="stroke-yokohama" />;
};

const JREast = () => {
    return (
        <g id="jr-east">
            <KeihinTohoku />
            <Yamanote />
            <SobuRapid />
            <ChuoRapid />
            <ChuoSobu />
            <Nambu />
            <ShonanShinjuku />
            <Saikyo />
            <Yokohama />
        </g>
    );
};

export default JREast;
