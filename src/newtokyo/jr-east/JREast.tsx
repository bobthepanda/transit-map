import { ChuoRapidPath, ChuoRapidStops } from './ChuoRapid';
import { ChuoSobuPath, ChuoSobuStops } from './ChuoSobu';
import { KeihinTohokuPath, KeihinTohokuStops } from './KeihinTohoku';
import { NambuPath, NambuStops } from './Nambu';
import { SobuRapidPath, SobuRapidStops } from './SobuRapid';
import { TokaidoPath, TokaidoStops } from './Tokaido';
import { YamanotePath, YamanoteStops } from './Yamanote';
import { YokohamaPath, YokohamaStops } from './Yokohama';

export const JRStops = () => {
    return (
        <>
            <YamanoteStops />
            <KeihinTohokuStops />
            <ChuoRapidStops />
            <SobuRapidStops />
            <ChuoSobuStops />
            <TokaidoStops />
            <YokohamaStops />
            <NambuStops />
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
            <YokohamaPath />
            <NambuPath />
        </>
    );
};
