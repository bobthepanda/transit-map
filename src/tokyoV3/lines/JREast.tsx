import SVGPath from '../../symbols/SVGPath';
import { E, NE, NW, SE, SW } from '../../utils/PathUtils';
import { JO_21 } from '../interchanges/InsideYamanote/Bakurocho';
import { JE_02, JM_02 } from '../interchanges/InsideYamanote/Hatchobori';
import { JC_03 } from '../interchanges/InsideYamanote/Ochanomizu';
import { JB_21 } from '../interchanges/InsideYamanote/Ryogoku';
import { JK_24, JO_18, JT_02, JY_29 } from '../interchanges/InsideYamanote/Shimbashi';
import { JC_01, JE_01, JM_01 } from '../interchanges/InsideYamanote/TokyoStation';
import { JK_30, JU_02, JY_05 } from '../interchanges/InsideYamanote/Ueno';
import { JB_14, JC_04 } from '../interchanges/InsideYamanote/Yotsuya';

const Yamanote = () => {
    return <SVGPath color="stroke-yamanote" points={[JY_29, JY_05]} />;
};

const ChuoSobu = () => {
    return <SVGPath color="stroke-chuo-sobu" points={[JB_14, JB_21]} directions={[NE, SE]} />;
};

const KeihinTohoku = () => {
    return <SVGPath color="stroke-keihin-tohoku" points={[JK_24, JK_30]} />;
};

const Tokaido = () => {
    return <SVGPath color="stroke-tokaido" points={[JU_02, JT_02]} />;
};

const SobuRapid = () => {
    return <SVGPath color="stroke-sobu-rapid" points={[JO_18, JO_21]} directions={[NE, E]} />;
};

const ChuoRapid = () => {
    return <SVGPath color="stroke-chuo-rapid" points={[JC_01, JC_03, JC_04]} directions={[NE, NW, SW]} />;
};

const Keiyo = () => {
    return <SVGPath color="stroke-keiyo" points={[JE_01, JE_02]} />;
};

const Musashino = () => {
    return <SVGPath color="stroke-musashino" points={[JM_01, JM_02]} />;
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
        </g>
    );
};

export default JREast;
