import SVGPath from '../../symbols/SVGPath';
import { NW, S, SE, SW, W } from '../../utils/PathUtils';
import { IN_01 } from '../interchanges/Hamamatsucho';
import { KO_01 } from '../interchanges/Kanda';
import { KK_04, KK_20 } from '../interchanges/KeihinTohoku';
import { IN_17, KO_05, KO_06, KO_18, KO_19, KO_25, KO_35, KO_36 } from '../interchanges/Keio';
import { KK_01 } from '../interchanges/Shinagawa';
import { A_07 } from '../interchanges/TakanawaGateway';

const Keikyu = () => {
    return <SVGPath points={[A_07, KK_01, KK_04, KK_20]} directions={[S, SE, S, SW]} />;
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

const Other = () => {
    return (
        <>
            <Inokashira />
            <Keikyu />
            <KeioLine />
            <Samigahara />
        </>
    );
};

export default Other;
