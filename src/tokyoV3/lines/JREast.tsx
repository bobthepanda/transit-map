import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, S, SW, W, offset } from '../../utils/PathUtils';
import { JC_03, JK_28, JY_03 } from '../interchanges/Akihabara';
import { JO_21 } from '../interchanges/Kanda';
import { JO_20 } from '../interchanges/Otemachi';
import { JO_18 } from '../interchanges/Shimbashi';
import { JK_21, JY_26 } from '../interchanges/TakanawaGateway';
import { JC_01, JK_26, JY_01 } from '../interchanges/TokyoStation';

const KeihinTohoku = () => {
    return <SVGPath points={[JK_28, JK_26, JK_21]} directions={[S, SW, S]} color="stroke-keihin-tohoku" />;
};

const Yamanote = () => {
    return <SVGPath points={[JY_26, JY_01, JY_03]} directions={[N, NE, N]} color="stroke-yamanote" />;
};

const SobuRapid = () => {
    return <SVGPath points={[JO_18, JO_20, JO_21]} directions={[NE, E, NE]} color="stroke-sobu-rapid" />;
};

const ChuoRapid = () => {
    return (
        <SVGPath
            points={[JC_01, offset(JY_03, { dx: -OFFSET, dy: OFFSET * 4 }), JC_03]}
            directions={[NE, N, W]}
            color="stroke-chuo-rapid"
        />
    );
};

const JREast = () => {
    return (
        <g id="jr-east">
            <KeihinTohoku />
            <Yamanote />
            <SobuRapid />
            <ChuoRapid />
        </g>
    );
};

export default JREast;
