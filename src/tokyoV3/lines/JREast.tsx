import SVGPath from '../../symbols/SVGPath';
import { E, NE, NW, SE, SW } from '../../utils/PathUtils';
import { JK_28, JY_03 } from '../interchanges/InsideYamanote/Akihabara';
import { JB_20 } from '../interchanges/InsideYamanote/Asakusabashi';
import { JO_21 } from '../interchanges/InsideYamanote/Bakurocho';
import { JC_03 } from '../interchanges/InsideYamanote/Ochanomizu';
import { JK_24, JO_18, JT_02, JY_29 } from '../interchanges/InsideYamanote/Shimbashi';
import { JC_01, JT_01 } from '../interchanges/InsideYamanote/Tokyo';
import { JB_14, JC_04 } from '../interchanges/InsideYamanote/Yotsuya';

const Yamanote = () => {
    return <SVGPath color="stroke-yamanote" points={[JY_29, JY_03]} />;
};

const ChuoSobu = () => {
    return <SVGPath color="stroke-chuo-sobu" points={[JB_14, JB_20]} directions={[NE, SE]} />;
};

const KeihinTohoku = () => {
    return <SVGPath color="stroke-keihin-tohoku" points={[JK_24, JK_28]} />;
};

const Tokaido = () => {
    return <SVGPath color="stroke-tokaido" points={[JT_01, JT_02]} />;
};

const SobuRapid = () => {
    return <SVGPath color="stroke-sobu-rapid" points={[JO_18, JO_21]} directions={[NE, E]} />;
};

const ChuoRapid = () => {
    return <SVGPath color="stroke-chuo-rapid" points={[JC_01, JC_03, JC_04]} directions={[NE, NW, SW]} />;
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
