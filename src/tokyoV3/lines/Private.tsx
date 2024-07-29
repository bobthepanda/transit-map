import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, midPoint, offset, scaleToUnitX } from '../../utils/PathUtils';
import { IK_01 } from '../interchanges/InsideYamanote/Gotanda';
import { MG_01 } from '../interchanges/InsideYamanote/Meguro';
import { DT_01, IN_01, TY_01 } from '../interchanges/InsideYamanote/Shibuya';
import { KK_01 } from '../interchanges/InsideYamanote/Shinagawa';
import { KO_01, OH_01 } from '../interchanges/InsideYamanote/Shinjuku';
import { A_07 } from '../interchanges/InsideYamanote/TakanawaGateway';
import { KO_19, KO_25 } from '../interchanges/jr/Bubaigawara';
import { KO_18 } from '../interchanges/jr/Chofu';
import { SG_08, SG_09 } from '../interchanges/jr/Gotokuji';
import { MG_13 } from '../interchanges/jr/Hiyoshi';
import { KO_35, KO_36 } from '../interchanges/jr/Inadazutsumi';
import { TY_04 } from '../interchanges/jr/Jiyugaoka';
import { IK_15, KK_20, KK_37, OM_01, TM_07, TY_21 } from '../interchanges/jr/Keihin';
import { IN_17 } from '../interchanges/jr/Kichijoji';
import { IN_08 } from '../interchanges/jr/Meidaimae';
import { SW_06 } from '../interchanges/jr/MinamiTama';
import { DT_10, OM_16 } from '../interchanges/jr/Mizonokuchi';
import { TY_11 } from '../interchanges/jr/MusashiKosugi';
import { SW_01 } from '../interchanges/jr/MusashiSakai';
import { OH_18 } from '../interchanges/jr/Noborito';
import { IK_05, IK_13 } from '../interchanges/jr/Ookayama';
import { SG_01 } from '../interchanges/jr/Sangenjaya';
import { IN_04, IN_05 } from '../interchanges/jr/ShimoKitazawa';
import { SG_10 } from '../interchanges/jr/ShimoTokaido';
import { TM_01 } from '../interchanges/jr/Tamagawa';

const Keikyu = () => {
    return (
        <SVGPath
            points={[A_07, offset(midPoint(A_07, KK_01), scaleToUnitX(W, OFFSET * 3)), KK_01, KK_20, KK_37]}
            directions={[W, SW, S, SW, W]}
        />
    );
};

const DenEnToshi = () => {
    return <SVGPath points={[DT_01, DT_10]} directions={[W, SW]} />;
};

const Meguro = () => {
    return <SVGPath points={[MG_01, MG_13]} directions={[W, SW]} />;
};
const Toyoko = () => {
    return <SVGPath points={[TY_01, TY_04, TY_11, TY_21]} directions={[SW, W, SW, S]} />;
};

const Oimachi = () => {
    return <SVGPath points={[OM_01, OM_16]} directions={[NW, SW]} />;
};

const Odawara = () => {
    return <SVGPath points={[OH_01, OH_18]} directions={[W, SW]} />;
};

const Keio = () => {
    return <SVGPath points={[KO_01, KO_18, KO_19, KO_25]} directions={[NW, W, NW, W]} />;
};

const Samigarhara = () => {
    return (
        <SVGPath
            points={[KO_18, offset(KO_18, scaleToUnitX(W, OFFSET * 2), scaleToUnitX(SW, OFFSET * 2)), KO_35, KO_36]}
            directions={[W, SW, S, SW]}
        />
    );
};

const Inokashira = () => {
    return <SVGPath points={[IN_01, IN_04, IN_05, IN_08, midPoint(IN_08, IN_17), IN_17]} directions={[NW, N, NE, N, NW, N]} />;
};

const SeibuTamagawa = () => {
    return <SVGPath points={[SW_01, SW_06]} directions={[S, SW]} />;
};

const Ikegami = () => {
    return <SVGPath points={[IK_01, IK_05, IK_13, IK_15]} directions={[W, SW, SE, S]} />;
};

const Tamagawa = () => {
    return <SVGPath points={[TM_01, TM_07]} directions={[SW, SE]} />;
};

const Setagaya = () => {
    return <SVGPath points={[SG_01, SG_08, SG_09, SG_10]} directions={[NW, NE, E, NE]} />;
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
            <Ikegami />
            <Tamagawa />
            <Setagaya />
        </>
    );
};

export default Private;
