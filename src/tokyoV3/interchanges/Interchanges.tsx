import Akihabara from './Akihabara';
import Hamamatsucho from './Hamamatsucho';
import Kanda from './Kanda';
import Otemachi from './Otemachi';
import Shimbashi from './Shimbashi';
import TakanawaGateway from './TakanawaGateway';
import Tamachi from './Tamachi';
import TokyoStation from './TokyoStation';
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
        </>
    );
};

export default Interchanges;
