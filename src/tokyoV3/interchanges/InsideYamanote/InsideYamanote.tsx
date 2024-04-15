import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, S, SE, SW, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { Akihabara } from './Akihabara';
import { AoyamaItchome } from './AoyamaItchome';
import { AsakasaMitsukae } from './AsakasaMitsukae';
import { Asakusabashi } from './Asakusabashi';
import { Bakurocho } from './Bakurocho';
import { Ginza } from './Ginza';
import { Harajuku } from './Harajuku';
import { Hatchobori } from './Hatchobori';
import { Hibiya } from './Hibiya';
import { HigashiGinza } from './HigashiGinza';
import { HigashiIkebukuro } from './HigashiIkebukuro';
import { HigashiShinjuku } from './HigashiShinjuku';
import { HongoSanchome } from './HongoSanchome';
import { Ichigaya } from './Ichigaya';
import { Iidabashi } from './Iidabashi';
import { Ikebukuro } from './Ikebukuro';
import { Jimbocho } from './Jimbocho';
import { Kanda } from './Kanda';
import { Kasuga } from './Kasuga';
import { Kasumigaseki } from './Kasumigaseki';
import { Kayabacho } from './Kayabacho';
import { KiyosumiShirakawa } from './KiyosumiShirakawa';
import { Komagome } from './Komagome';
import { Kudanshita } from './Kudanshita';
import { Kuramae } from './Kuramae';
import { Mitsukoshimae } from './Mitsukoshimae';
import { MonzenNakacho } from './MonzenNakacho';
import { Morishita } from './Morishita';
import { Nihombashi } from './Nihombashi';
import { Ningyocho } from './Ningyocho';
import { Nippori } from './Nippori';
import { NishiNippori } from './NishiNippori';
import { Ochanomizu } from './Ochanomizu';
import { Ogawamachi } from './Ogawamachi';
import { Okachimachi } from './Okachimachi';
import { Omotesando } from './Omotesando';
import { Otemachi } from './Otemachi';
import { Otsuka } from './Otsuka';
import { Ryogoku } from './Ryogoku';
import { Shibuya } from './Shibuya';
import { Shimbashi } from './Shimbashi';
import { ShinOkachimachi } from './ShinOkachimachi';
import { Shinjuku } from './Shinjuku';
import { F_13, ShinjukuSanchome } from './ShinjukuSanchome';
import { Sugamo } from './Sugamo';
import { Suidobashi } from './Suidobashi';
import { Tabata } from './Tabata';
import { JY_14, Takadanobaba } from './Takadanobaba';
import { TameikeSanno } from './TameikeSanno';
import { Tochomae } from './Tochomae';
import { Tokyo } from './TokyoStation';
import { Toranomon } from './Toranomon';
import { Tsukiji } from './Tsukiji';
import { Tsukishima } from './Tsukishima';
import { Ueno } from './Ueno';
import { Uguisuidani } from './Uguisuidani';
import { Yotsuya } from './Yotsuya';
import { Yoyogi } from './Yoyogi';
import { Yurakucho } from './Yurakucho';

const F_10 = findIntersectionFromSlopes({ start: F_13, firstDirection: NE, end: JY_14, secondDirection: SE });
export const SA_27 = offset(F_10, scaleToUnitX(SE, OFFSET));
const SA_26 = offset(SA_27, scaleToUnitX(NE, OFFSET * 2));
export const SA_28 = offset(SA_27, scaleToUnitX(SW, OFFSET), scaleToUnitX(S, OFFSET));
const SA_29 = offset(SA_28, scaleToUnitX(SE, OFFSET), scaleToUnitX(S, OFFSET));
export const SA_30 = offset(SA_29, scaleToUnitX(SE, OFFSET * 2));

const Zoshigaya = () => {
    return (
        <>
            <Stop stationCode="SA 26" location={SA_26} textAlignment={TextAlignment.SE} />
            <Stop stationCode="SA 28" location={SA_28} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="SA 29" location={SA_29} textAlignment={TextAlignment.NE} />
            <Stop stationCode="SA 30" location={SA_30} textAlignment={TextAlignment.NE} />
            <g id="zoshigaya">
                <Stop stationCode="F 10" strokeColor="stroke-fukutoshin" location={F_10} textAlignment={TextAlignment.NW} />
                <Stop stationCode="SA 27" location={SA_27} textAlignment={TextAlignment.SE} />
            </g>
        </>
    );
};

const InsideYamanote = () => {
    return (
        <g id="inside-yamanote">
            <TameikeSanno />
            <AsakasaMitsukae />
            <AoyamaItchome />
            <Yotsuya />
            <Ichigaya />
            <Iidabashi />
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
            <Uguisuidani />
            <Nippori />
            <NishiNippori />
            <Tabata />
            <Komagome />
            <Sugamo />
            <Kasuga />
            <HongoSanchome />
            <Takadanobaba />
            <Ikebukuro />
            <Omotesando />
            <Shibuya />
            <Shinjuku />
            <Yoyogi />
            <ShinjukuSanchome />
            <HigashiShinjuku />
            <Tochomae />
            <Harajuku />
            <HigashiIkebukuro />
            <Otsuka />
            <Zoshigaya />
        </g>
    );
};

export default InsideYamanote;
