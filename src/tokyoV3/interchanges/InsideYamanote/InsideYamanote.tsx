import { Stop } from '../../../symbols/BasicStop';
import { Akihabara } from './Akihabara';
import { AoyamaItchome } from './AoyamaItchome';
import { AsakasaMitsukae } from './AsakasaMitsukae';
import { Asakusabashi } from './Asakusabashi';
import { Bakurocho } from './Bakurocho';
import { Ginza } from './Ginza';
import { Hatchobori } from './Hatchobori';
import { Hibiya } from './Hibiya';
import { HigashiGinza } from './HigashiGinza';
import { Ichigaya } from './Ichigaya';
import { Iidabashi } from './Iidabashi';
import { Jimbocho } from './Jimbocho';
import { Kanda } from './Kanda';
import { Kasumigaseki } from './Kasumigaseki';
import { Kayabacho } from './Kayabacho';
import { KiyosumiShirakawa } from './KiyosumiShirakawa';
import { Kudanshita, Y_15 } from './Kudanshita';
import { Kuramae } from './Kuramae';
import { Mitsukoshimae } from './Mitsukoshimae';
import { MonzenNakacho } from './MonzenNakacho';
import { Morishita } from './Morishita';
import { Nihombashi } from './Nihombashi';
import { Ningyocho } from './Ningyocho';
import { Ochanomizu } from './Ochanomizu';
import { Ogawamachi } from './Ogawamachi';
import { Okachimachi } from './Okachimachi';
import { Otemachi } from './Otemachi';
import { Ryogoku } from './Ryogoku';
import { Shimbashi } from './Shimbashi';
import { ShinOkachimachi } from './ShinOkachimachi';
import { Suidobashi } from './Suidobashi';
import { TameikeSanno } from './TameikeSanno';
import { Tokyo } from './TokyoStation';
import { Toranomon } from './Toranomon';
import { Tsukiji } from './Tsukiji';
import { Tsukishima } from './Tsukishima';
import { Ueno } from './Ueno';
import { Yotsuya } from './Yotsuya';
import { Yurakucho } from './Yurakucho';

const InsideYamanote = () => {
    return (
        <g id="inside-yamanote">
            <TameikeSanno />
            <AsakasaMitsukae />
            <AoyamaItchome />
            <Yotsuya />
            <Ichigaya />
            <Iidabashi />
            <Stop stationCode="Y 15" location={Y_15} strokeColor="stroke-yurakucho" />
            <Toranomon />
            <Kasumigaseki />
            <Shimbashi />
            <Hibiya />
            <Yurakucho />
            <Ginza />
            <Tokyo />
            <Otemachi />
            <Kudanshita />
            <Jimbocho />
            <Ogawamachi />
            <Suidobashi />
            <Ochanomizu />
            <Akihabara />
            <Kanda />
            <Nihombashi />
            <Asakusabashi />
            <Bakurocho />
            <Mitsukoshimae />
            <HigashiGinza />
            <Tsukiji />
            <Hatchobori />
            <Kayabacho />
            <Ningyocho />
            <Tsukishima />
            <MonzenNakacho />
            <KiyosumiShirakawa />
            <Morishita />
            <Ryogoku />
            <Okachimachi />
            <Kuramae />
            <ShinOkachimachi />
            <Ueno />
        </g>
    );
};

export default InsideYamanote;
