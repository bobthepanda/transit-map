import SVGPath from '../../symbols/SVGPath';
import { E, ESE, N, NW, S, SE, SW, W } from '../../utils/PathUtils';
import { DT_01, IN_01, TY_01 } from '../interchanges/Hamamatsucho';
import { KO_01, OH_01 } from '../interchanges/Kanda';
import { IN_17, KO_05, KO_06, KO_18, KO_19, KO_25, KO_36, OH_07 } from '../interchanges/Keio';
import { OH_18 } from '../interchanges/Nambu';
import { OH_06 } from '../interchanges/Odakyu';
import { IK_01, KK_01, MG_01 } from '../interchanges/Shinagawa';
import { A_07 } from '../interchanges/TakanawaGateway';
import { IK_15, KK_04, KK_20, KK_36, KK_37, MM_01, MM_02, TM_07 } from '../interchanges/Tokaido';
import {
    DT_09,
    DT_10,
    DT_12,
    IK_05,
    IK_14,
    MG_06,
    MG_07,
    MG_11,
    OM_01,
    OM_16,
    OM_DT_09,
    SG_01,
    SG_06,
    SG_08,
    SG_10,
    TM_01,
    TY_02,
    TY_11,
} from '../interchanges/Tokyu';
import { DT_22, OH_27 } from '../interchanges/Yokohama';

const Keikyu = () => {
    return <SVGPath points={[A_07, KK_01, KK_04, KK_20, KK_36, KK_37]} directions={[S, ESE, S, SW, W, SW]} />;
};

const Inokashira = () => {
    return <SVGPath points={[IN_01, IN_17]} directions={[W, NW]} />;
};

const KeioLine = () => {
    return <SVGPath points={[KO_01, KO_05, KO_06, KO_18, KO_19, KO_25]} directions={[W, SW, S, W, NW, W]} />;
};

const Samigahara = () => {
    return <SVGPath points={[KO_18, KO_36]} directions={[W, S]} />;
};

const OdakyuOdawara = () => {
    return <SVGPath points={[OH_01, OH_06, OH_07, OH_18, OH_27]} directions={[S, SW, S, SW, W]} />;
};

const Oimachi = () => {
    return <SVGPath points={[OM_01, OM_DT_09, OM_16]} directions={[W, S, W]} />;
};

const DenEnToshi = () => {
    return <SVGPath points={[DT_01, DT_09, DT_10, DT_12, DT_22]} directions={[SW, S, W, SW, S]} />;
};

const Meguro = () => {
    return <SVGPath points={[MG_01, MG_06, MG_07, MG_11]} directions={[SW, S, SW, S]} />;
};

const Toyoko = () => {
    return <SVGPath points={[TY_01, TY_02, TY_11, MM_01, MM_02]} directions={[S, SE, S, SW, SE]} color="stroke-fukutoshin" />;
};

const Ikegami = () => {
    return <SVGPath points={[IK_01, IK_05, IK_14, IK_15]} directions={[W, S, E, SE]} />;
};

const Tamagawa = () => {
    return <SVGPath points={[TM_01, TM_07]} directions={[SE, E]} />;
};

const Setagaya = () => {
    return <SVGPath points={[SG_01, SG_06, SG_08, SG_10]} directions={[W, N, NW, N]} />;
};

const Other = () => {
    return (
        <>
            <Inokashira />
            <Keikyu />
            <KeioLine />
            <Samigahara />
            <OdakyuOdawara />
            <Oimachi />
            <DenEnToshi />
            <Meguro />
            <Toyoko />
            <Ikegami />
            <Tamagawa />
            <Setagaya />
        </>
    );
};

export default Other;
