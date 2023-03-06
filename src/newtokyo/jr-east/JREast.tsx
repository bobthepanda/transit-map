import { ChuoRapidPath, ChuoRapidStops } from './ChuoRapid';
import { ChuoSobuPath, ChuoSobuStops } from './ChuoSobu';
import { KeihinTohokuPath, KeihinTohokuStops } from './KeihinTohoku';
import { SobuRapidPath, SobuRapidStops } from './SobuRapid';
import { TokaidoPath, TokaidoStops } from './Tokaido';
import { YamanotePath, YamanoteStops } from './Yamanote';

export const JRStops = () => {
    return (
        <>
            <YamanoteStops />
            <KeihinTohokuStops />
            <ChuoRapidStops />
            <SobuRapidStops />
            <ChuoSobuStops />
            <TokaidoStops />
        </>
    );
};

export const JRPaths = () => {
    return (
        <>
            <YamanotePath />
            <KeihinTohokuPath />
            <ChuoRapidPath />
            <SobuRapidPath />
            <ChuoSobuPath />
            <TokaidoPath />
        </>
    );
};
