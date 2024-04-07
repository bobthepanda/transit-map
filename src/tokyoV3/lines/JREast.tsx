import { MAJOR_LINE } from '../../map/GridLines';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, S, SW, W, offset, scaleToUnitX } from '../../utils/PathUtils';
import { JB_14, JB_19, JC_01, JC_03, JC_04, JK_24, JK_28, JO_18, JO_19, JT_02, JY_03, JY_29 } from '../interchanges/InsideYamanote';

const Yamanote = () => {
    return <SVGPath color="stroke-yamanote" points={[JY_29, JY_03]} directions={[NE, N]} />;
};

const ChuoSobu = () => {
    return <SVGPath color="stroke-chuo-sobu" points={[JB_14, JB_19]} directions={[NE, E]} />;
};

const KeihinTohoku = () => {
    return <SVGPath color="stroke-keihin-tohoku" points={[JK_24, JK_28]} directions={[NE, N]} />;
};

const Tokaido = () => {
    return <SVGPath color="stroke-tokaido" points={[offset(JK_28, scaleToUnitX(E, OFFSET)), JT_02]} directions={[S, SW]} />;
};

const SobuRapid = () => {
    return <SVGPath color="stroke-sobu-rapid" points={[JO_18, JO_19]} />;
};

const ChuoRapid = () => {
    return (
        <SVGPath
            color="stroke-chuo-rapid"
            points={[JC_01, offset(JY_03, scaleToUnitX(S, MAJOR_LINE), scaleToUnitX(W, OFFSET)), JC_03, JC_04]}
            directions={[NE, N, W, SW]}
        />
    );
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
