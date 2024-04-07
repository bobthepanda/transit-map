import { Stop } from '../../../symbols/BasicStop';
import { Akihabara } from './Akihabara';
import { AoyamaItchome } from './AoyamaItchome';
import { AsakasaMitsukae } from './AsakasaMitsukae';
import { Asakusabashi } from './Asakusabashi';
import { Bakurocho } from './Bakurocho';
import { Ginza } from './Ginza';
import { Hibiya } from './Hibiya';
import { HigashiGinza } from './HigashiGinza';
import { Ichigaya } from './Ichigaya';
import { Iidabashi } from './Iidabashi';
import { Jimbocho } from './Jimbocho';
import { Kanda } from './Kanda';
import { Kasumigaseki } from './Kasumigaseki';
import { Kudanshita, Y_15 } from './Kudanshita';
import { Mitsukomae } from './Mitsukomae';
import { Nihombashi } from './Nihombashi';
import { Ochanomizu } from './Ochanomizu';
import { Ogawamachi } from './Ogawamachi';
import { Otemachi } from './Otemachi';
import { Shimbashi } from './Shimbashi';
import { Suidobashi } from './Suidobashi';
import { TameikeSanno } from './TameikeSanno';
import { Tokyo } from './Tokyo';
import { Toranomon } from './Toranomon';
import { Tsukiji } from './Tsukiji';
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
            <Mitsukomae />
            <HigashiGinza />
            <Tsukiji />
        </g>
    );
};

export default InsideYamanote;
