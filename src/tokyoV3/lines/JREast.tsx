import SVGPath from '../../symbols/SVGPath';
import { JB_14, JB_16, JK_24, JK_26, JO_18, JO_19, JT_01, JT_02, JY_01, JY_29 } from '../interchanges/InsideYamanote';

const Yamanote = () => {
    return <SVGPath color="stroke-yamanote" points={[JY_29, JY_01]} />;
};

const ChuoSobu = () => {
    return <SVGPath color="stroke-chuo-sobu" points={[JB_14, JB_16]} />;
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

const JREast = () => {
    return (
        <g id="jr-east">
            <Yamanote />
            <ChuoSobu />
            <KeihinTohoku />
            <Tokaido />
            <SobuRapid />
        </g>
    );
};

export default JREast;
