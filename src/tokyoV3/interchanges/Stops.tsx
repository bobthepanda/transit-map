import Akihabara from './Akihabara';
import Chuo from './Chuo';
import Hamamatsucho from './Hamamatsucho';
import Kanda from './Kanda';
import KeihinTohoku from './KeihinTohoku';
import KeioGroup from './Keio';
import Nambu from './Nambu';
import Nippori from './Nippori';
import NishiNippori from './NishiNippori';
import Okachimachi from './Okachimachi';
import Otemachi from './Otemachi';
import Shimbashi from './Shimbashi';
import Shinagawa from './Shinagawa';
import TakanawaGateway from './TakanawaGateway';
import Tamachi from './Tamachi';
import TokyoStation from './TokyoStation';
import Ueno from './Ueno';
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
        </>
    );
};

export default Interchanges;
