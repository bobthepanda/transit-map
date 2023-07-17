import Akihabara from './Akihabara';
import Hamamatsucho from './Hamamatsucho';
import Kanda from './Kanda';
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
        </>
    );
};

export default Interchanges;
