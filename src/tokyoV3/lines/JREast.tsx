import SVGPath from '../../symbols/SVGPath';
import { E, NE, SW, W } from '../../utils/PathUtils';
import { JB_14, JB_18, JC_03, JC_04, JK_24, JK_26, JO_18, JO_19, JT_01, JT_02, JY_01, JY_29 } from '../interchanges/InsideYamanote';

const Yamanote = () => {
    return <SVGPath color="stroke-yamanote" points={[JY_29, JY_01]} />;
};

const ChuoSobu = () => {
    return <SVGPath color="stroke-chuo-sobu" points={[JB_14, JB_18]} directions={[NE, E]} />;
};

const KeihinTohoku = () => {
    return <SVGPath color="stroke-keihin-tohoku" points={[JK_24, JK_26]} />;
};

const Tokaido = () => {
    return <SVGPath color="stroke-tokaido" points={[JT_01, JT_02]} />;
};

const SobuRapid = () => {
    return <SVGPath color="stroke-sobu-rapid" points={[JO_18, JO_19]} />;
};

const ChuoRapid = () => {
    return <SVGPath color="stroke-chuo-rapid" points={[JC_03, JC_04]} directions={[W, SW]} />;
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
        </g>
    );
};

export default JREast;
