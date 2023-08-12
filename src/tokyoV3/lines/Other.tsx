import SVGPath from '../../symbols/SVGPath';
import { ESE, NW, S, SE, SW, W } from '../../utils/PathUtils';
import { DT_01, IN_01, TY_01 } from '../interchanges/Hamamatsucho';
import { KO_01, OH_01 } from '../interchanges/Kanda';
import { KK_04, KK_20 } from '../interchanges/KeihinTohoku';
import { IN_17, KO_05, KO_06, KO_18, KO_19, KO_25, KO_35, KO_36, OH_07 } from '../interchanges/Keio';
import { OH_18 } from '../interchanges/Nambu';
import { OH_06 } from '../interchanges/Odakyu';
import { KK_01, MG_01 } from '../interchanges/Shinagawa';
import { A_07 } from '../interchanges/TakanawaGateway';
import { DT_06, DT_10, MG_06, OM_01, OM_16, TY_03, TY_07 } from '../interchanges/Tokyu';

const Keikyu = () => {
    return <SVGPath points={[A_07, KK_01, KK_04, KK_20]} directions={[S, ESE, S, SW]} />;
};

const Inokashira = () => {
    return <SVGPath points={[IN_01, IN_17]} directions={[W, NW]} />;
};

const KeioLine = () => {
    return <SVGPath points={[KO_01, KO_05, KO_06, KO_18, KO_19, KO_25]} directions={[W, SW, S, W, NW, W]} />;
};

const Samigahara = () => {
    return <SVGPath points={[KO_18, KO_35, KO_36]} directions={[W, S, W]} />;
};

const OdakyuOdawara = () => {
    return <SVGPath points={[OH_01, OH_06, OH_07, OH_18]} directions={[S, SW, S, SW]} />;
};

const Oimachi = () => {
    return <SVGPath points={[OM_01, OM_16]} directions={[W, SW]} />;
};

const DenEnToshi = () => {
    return <SVGPath points={[DT_01, DT_06, DT_10]} directions={[SW, S, SW]} />;
};

const Meguro = () => {
    return <SVGPath points={[MG_01, MG_06]} directions={[SW, S]} />;
};

const Toyoko = () => {
    return <SVGPath points={[TY_01, TY_03, TY_07]} directions={[S, SE, S]} />;
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
        </>
    );
};

export default Other;
