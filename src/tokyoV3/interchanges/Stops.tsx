import Akihabara from './Akihabara';
import Chuo from './Chuo';
import Hamamatsucho from './Hamamatsucho';
import Kanda from './Kanda';
import KeioGroup from './Keio';
import Marunouchi from './Marunouchi';
import Nambu from './Nambu';
import Nippori from './Nippori';
import NishiNippori from './NishiNippori';
import Odakyu from './Odakyu';
import Oedo from './Oedo';
import Okachimachi from './Okachimachi';
import Otemachi from './Otemachi';
import Shimbashi from './Shimbashi';
import Shinagawa from './Shinagawa';
import TakanawaGateway from './TakanawaGateway';
import Tamachi from './Tamachi';
import KeihinTohoku from './Tokaido';
import TokyoStation from './TokyoStation';
import TokyuGroup from './Tokyu';
import Ueno from './Ueno';
import { Yokohama } from './Yokohama';
import YurakuchoStation from './YurakuchoStation';

const Interchanges = () => {
    return (
        <>
            <TokyoStation />
            <YurakuchoStation />
            <Shimbashi />
            <Hamamatsucho />
            <Tamachi />
            <TakanawaGateway />
            <Kanda />
            <Otemachi />
            <Akihabara />
            <Okachimachi />
            <Ueno />
            <Nippori />
            <NishiNippori />
            <Shinagawa />
            <KeihinTohoku />
            <Chuo />
            <Nambu />
            <KeioGroup />
            <Marunouchi />
            <Oedo />
            <Odakyu />
            <TokyuGroup />
            <Yokohama />
        </>
    );
};

export default Interchanges;
