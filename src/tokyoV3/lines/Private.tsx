import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NE, NW, S, SW, W, findIntersectionFromSlopes, midPoint, offset, scaleToUnitX } from '../../utils/PathUtils';
import { MG_01 } from '../interchanges/InsideYamanote/Meguro';
import { DT_01, IN_01, TY_01 } from '../interchanges/InsideYamanote/Shibuya';
import { KK_01 } from '../interchanges/InsideYamanote/Shinagawa';
import { KO_01, OH_01 } from '../interchanges/InsideYamanote/Shinjuku';
import { A_07 } from '../interchanges/InsideYamanote/TakanawaGateway';
import { OH_02 } from '../interchanges/InsideYamanote/Yoyogi';
import { KO_25 } from '../interchanges/jr/Bubaigawara';
import { KO_18, KO_19 } from '../interchanges/jr/Chofu';
import { KO_36 } from '../interchanges/jr/Inadazutsumi';
import { KK_20, OM_01 } from '../interchanges/jr/Keihin';
import { IN_17 } from '../interchanges/jr/Kichijoji';
import { IN_06, IN_08 } from '../interchanges/jr/Meidaimae';
import { SW_03, SW_04, SW_06 } from '../interchanges/jr/MinamiTama';
import { DT_10, OM_16 } from '../interchanges/jr/Mizonokuchi';
import { MG_11, TY_11 } from '../interchanges/jr/MusashiKosugi';
import { SW_01 } from '../interchanges/jr/MusashiSakai';
import { OH_18 } from '../interchanges/jr/Noborito';
import { IN_03, IN_05 } from '../interchanges/jr/ShimoKitazawa';

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

const Inokashira = () => {
    return <SVGPath points={[IN_01, IN_03, IN_05, IN_06, IN_08, midPoint(IN_08, IN_17), IN_17]} directions={[NW, W, NW, NE, N, NW, N]} />;
};

const SeibuTamagawa = () => {
    return <SVGPath points={[SW_01, SW_03, SW_04, SW_06]} directions={[S, SW, W, N]} />;
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
            <Inokashira />
            <SeibuTamagawa />
        </>
    );
};

export default Private;
