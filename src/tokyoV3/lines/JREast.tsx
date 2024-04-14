import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, offset, scaleToUnitX } from '../../utils/PathUtils';
import { JO_21 } from '../interchanges/InsideYamanote/Bakurocho';
import { JE_02, JM_02 } from '../interchanges/InsideYamanote/Hatchobori';
import { JY_15 } from '../interchanges/InsideYamanote/InsideYamanote';
import { JY_08 } from '../interchanges/InsideYamanote/NishiNippori';
import { JC_03 } from '../interchanges/InsideYamanote/Ochanomizu';
import { JB_21 } from '../interchanges/InsideYamanote/Ryogoku';
import { JK_24, JO_18, JT_02, JY_29 } from '../interchanges/InsideYamanote/Shimbashi';
import { JY_11 } from '../interchanges/InsideYamanote/Sugamo';
import { JB_17 } from '../interchanges/InsideYamanote/Suidobashi';
import { JK_34 } from '../interchanges/InsideYamanote/Tabata';
import { JC_01, JE_01, JM_01 } from '../interchanges/InsideYamanote/TokyoStation';
import { JU_02 } from '../interchanges/InsideYamanote/Ueno';
import { JB_14, JC_04 } from '../interchanges/InsideYamanote/Yotsuya';

const Yamanote = () => {
    return <SVGPath color="stroke-yamanote" points={[JY_29, JY_08, JY_11, JY_15]} directions={[NE, N, W, SW]} />;
};

const ChuoSobu = () => {
    return <SVGPath color="stroke-chuo-sobu" points={[JB_14, JB_17, JB_21]} directions={[NE, E, SE]} />;
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
            points={[JC_01, JC_03, offset(JB_17, scaleToUnitX(S, OFFSET)), JC_04]}
            directions={[NE, NW, W, SW]}
        />
    );
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
