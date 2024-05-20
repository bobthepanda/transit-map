import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NE, NW, S, SW, W, findIntersectionFromSlopes, midPoint, offset, scaleToUnitX } from '../../utils/PathUtils';
import { MG_01 } from '../interchanges/InsideYamanote/Meguro';
import { DT_01, TY_01 } from '../interchanges/InsideYamanote/Shibuya';
import { KK_01 } from '../interchanges/InsideYamanote/Shinagawa';
import { KO_01, OH_01 } from '../interchanges/InsideYamanote/Shinjuku';
import { A_07 } from '../interchanges/InsideYamanote/TakanawaGateway';
import { OH_02 } from '../interchanges/InsideYamanote/Yoyogi';
import { KO_25 } from '../interchanges/jr/Bubaigawara';
import { KO_18, KO_19 } from '../interchanges/jr/Chofu';
import { KO_36 } from '../interchanges/jr/Inadazutsumi';
import { KK_20, OM_01 } from '../interchanges/jr/Keihin';
import { DT_10, OM_16 } from '../interchanges/jr/Mizonokuchi';
import { MG_11, TY_11 } from '../interchanges/jr/MusashiKosugi';
import { OH_18 } from '../interchanges/jr/Noborito';

const Keikyu = () => {
    return (
        <SVGPath points={[A_07, offset(midPoint(A_07, KK_01), scaleToUnitX(W, OFFSET * 3)), KK_01, KK_20]} directions={[W, SW, S, SW]} />
    );
};

const DenEnToshi = () => {
    return <SVGPath points={[DT_01, DT_10]} directions={[W, SW]} />;
};

const Meguro = () => {
    return <SVGPath points={[MG_01, MG_11]} directions={[W, SW]} />;
};

const TOYOKO_MEGURO_CORNER = findIntersectionFromSlopes({
    firstDirection: W,
    start: MG_01,
    end: TY_11,
    secondDirection: NE,
});

const Toyoko = () => {
    return <SVGPath points={[TY_01, midPoint(TY_01, TOYOKO_MEGURO_CORNER), TY_11]} directions={[SW, W, SW]} />;
};

const Oimachi = () => {
    return <SVGPath points={[OM_01, OM_16]} directions={[NW, SW]} />;
};

const Odawara = () => {
    return <SVGPath points={[OH_01, OH_02, OH_18]} directions={[W, SW, W]} />;
};

const Keio = () => {
    return <SVGPath points={[KO_01, KO_18, KO_19, KO_25]} directions={[NW, W, N, NW]} />;
};

const Samigarhara = () => {
    return <SVGPath points={[KO_18, KO_36]} directions={[W, SW]} />;
};

const Private = () => {
    return (
        <>
            <Keikyu />
            <DenEnToshi />
            <Meguro />
            <Toyoko />
            <Oimachi />
            <Odawara />
            <Keio />
            <Samigarhara />
        </>
    );
};

export default Private;
