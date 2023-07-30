import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, offset } from '../../utils/PathUtils';
import { JB_20, JC_03, JK_28, JY_03 } from '../interchanges/Akihabara';
import { JB_01, JC_22 } from '../interchanges/Chuo';
import { JB_10, JC_05, JO_21, JY_17 } from '../interchanges/Kanda';
import { JK_12 } from '../interchanges/KeihinTohoku';
import { JN_01, JN_26 } from '../interchanges/Nambu';
import { JK_33, JY_08 } from '../interchanges/NishiNippori';
import { JO_20 } from '../interchanges/Otemachi';
import { JB_12, JB_14, JC_04, JO_18 } from '../interchanges/Shimbashi';
import { JY_21, JY_24 } from '../interchanges/Shinagawa';
import { JK_21, JY_26 } from '../interchanges/TakanawaGateway';
import { JC_01, JK_26, JY_01 } from '../interchanges/TokyoStation';

const KeihinTohoku = () => {
    return <SVGPath points={[JK_33, JK_28, JK_26, JK_21, JK_12]} directions={[SE, S, SW, S, SW]} color="stroke-keihin-tohoku" />;
};

const Yamanote = () => {
    return (
        <SVGPath points={[JY_17, JY_21, JY_24, JY_26, JY_01, JY_03, JY_08]} directions={[S, SE, E, N, NE, N, NW]} color="stroke-yamanote" />
    );
};

const SobuRapid = () => {
    return <SVGPath points={[JO_18, JO_20, JO_21]} directions={[NE, E, NE]} color="stroke-sobu-rapid" />;
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
    return <SVGPath points={[JN_01, JN_26]} directions={[W, NW]} color="stroke-nambu" />;
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
        </g>
    );
};

export default JREast;
