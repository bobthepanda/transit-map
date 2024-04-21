import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NW, S, SE, SW, W, findIntersectionFromSlopes, offset, roundCoordinate, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { Akihabara } from './Akihabara';
import { AoyamaItchome } from './AoyamaItchome';
import { AsakasaMitsukae } from './AsakasaMitsukae';
import { Asakusabashi } from './Asakusabashi';
import { Bakurocho } from './Bakurocho';
import { Ginza } from './Ginza';
import { Harajuku } from './Harajuku';
import { Hatchobori } from './Hatchobori';
import { Hibiya, I_08 } from './Hibiya';
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
import { Okubo } from './Okubo';
import { Omotesando } from './Omotesando';
import { Otemachi } from './Otemachi';
import { Otsuka } from './Otsuka';
import { Ryogoku } from './Ryogoku';
import { Shibuya } from './Shibuya';
import { JY_29, Shimbashi } from './Shimbashi';
import { ShinOkachimachi } from './ShinOkachimachi';
import { Shinjuku } from './Shinjuku';
import { ShinjukuSanchome } from './ShinjukuSanchome';
import { Sugamo } from './Sugamo';
import { Suidobashi } from './Suidobashi';
import { Tabata } from './Tabata';
import { Takadanobaba } from './Takadanobaba';
import { N_06, TameikeSanno } from './TameikeSanno';
import { Tochomae } from './Tochomae';
import { Tokyo } from './TokyoStation';
import { H_06, Toranomon } from './Toranomon';
import { Tsukiji } from './Tsukiji';
import { Tsukishima } from './Tsukishima';
import { Ueno } from './Ueno';
import { Uguisuidani } from './Uguisuidani';
import { Yotsuya } from './Yotsuya';
import { Yoyogi } from './Yoyogi';
import { Yurakucho } from './Yurakucho';
import { Zoshigaya } from './Zoshigaya';

export const JY_28 = offset(JY_29, scaleToUnitX(SW, MAJOR_LINE * 1.5));
export const JK_23 = offset(JY_28, scale(SE, OFFSET));
export const A_09 = offset(JY_28, scaleToUnitX(NW, OFFSET * 3));
export const E_20 = offset(A_09, scaleToUnitX(W, OFFSET));

const Hamamatsucho = () => {
    return (
        <g id="hamamatsucho">
            <Stop stationCode="JY 28" location={JY_28} strokeColor="stroke-yamanote" textAlignment={TextAlignment.NW} />
            <Stop stationCode="JK 23" location={JK_23} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="A 09" location={A_09} strokeColor="stroke-asakusa" hideText />
            <Stop stationCode="E 20" location={E_20} strokeColor="stroke-oedo" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export const I_04 = roundCoordinate(
    findIntersectionFromSlopes({
        firstDirection: SW,
        start: offset(I_08, scaleToUnitX(W, OFFSET * 3)),
        end: offset(A_09, scaleToUnitX(SW, OFFSET * 3)),
        secondDirection: W,
    }),
    MAJOR_LINE * 0.5
);

export const A_08 = offset(I_04, scaleToUnitX(S, OFFSET));
export const JY_27 = offset(A_08, scaleToUnitX(S, OFFSET * 3));
export const JK_22 = offset(JY_27, scaleToUnitX(S, OFFSET));

const Mita = () => {
    return (
        <g id="mita">
            <Stop stationCode="JY 27" location={JY_27} strokeColor="stroke-yamanote" textAlignment={TextAlignment.UP} />
            <Stop stationCode="JK 22" location={JK_22} strokeColor="stroke-keihin-tohoku" hideText />
            <Stop stationCode="A 08" location={A_08} strokeColor="stroke-asakusa" hideText />
            <Stop stationCode="I 04" location={I_04} strokeColor="stroke-mita" textAlignment={TextAlignment.UP} />
        </g>
    );
};

export const JK_21 = offset(JK_22, scaleToUnitX(W, MAJOR_LINE * 1.5));
export const JY_26 = offset(JK_21, scale(N, OFFSET));
export const A_07 = offset(JK_21, scaleToUnitX(N, OFFSET * 4));
const TakanawaGateway = () => {
    return (
        <>
            <Stop stationCode="A 07" location={A_07} strokeColor="stroke-asakusa" textAlignment={TextAlignment.UP} />
            <g id="takanawa-gateway">
                <Stop stationCode="JY 26" location={JY_26} strokeColor="stroke-yamanote" textAlignment={TextAlignment.UP} />
                <Stop stationCode="JK 21" location={JK_21} strokeColor="stroke-keihin-tohoku" hideText />
            </g>
        </>
    );
};

export const I_03 = offset(A_07, scaleToUnitX(N, MAJOR_LINE), scaleToUnitX(W, MAJOR_LINE * 0.5));
export const N_03 = offset(I_03, scaleToUnitX(N, OFFSET));

const ShirokaneTakanawa = () => {
    return (
        <g id="shirokane-takanawa">
            <Stop stationCode="I 03" location={I_03} strokeColor="stroke-mita" hideText />
            <Stop stationCode="N 03" location={N_03} strokeColor="stroke-namboku" textAlignment={TextAlignment.UP} />
        </g>
    );
};

const ROPPONGI_INTERSECTION = findIntersectionFromSlopes({
    start: offset(H_06, scaleToUnitX(SW, OFFSET * 2)),
    firstDirection: W,
    end: E_20,
    secondDirection: NW,
});

export const E_23 = offset(ROPPONGI_INTERSECTION, scaleToUnitX(NW, OFFSET));
export const H_04 = offset(E_23, scaleToUnitX(S, OFFSET));

const Roppongi = () => {
    return (
        <>
            <Stop
                stationCode="H 05"
                location={offset(H_04, scaleToUnitX(E, MAJOR_LINE * 1.5))}
                strokeColor="stroke-hibiya"
                textAlignment={TextAlignment.DOWN}
            />
            <g id="roppongi">
                <Stop stationCode="H 04" location={H_04} strokeColor="stroke-hibiya" hideText />
                <Stop stationCode="E 23" location={E_23} strokeColor="stroke-oedo" textAlignment={TextAlignment.NE} />
            </g>
        </>
    );
};

const AZABU_JUBAN_INTERSECTION = findIntersectionFromSlopes({ start: E_20, firstDirection: NW, secondDirection: SW, end: N_06 });

export const E_22 = offset(AZABU_JUBAN_INTERSECTION, scaleToUnitX(SE, OFFSET * 0.5));
export const N_04 = offset(E_22, scaleToUnitX(W, OFFSET));

const AzabuJuban = () => {
    return (
        <>
            <Stop
                stationCode="E 21"
                location={offset(E_22, scaleToUnitX(SE, OFFSET * 4))}
                strokeColor="stroke-oedo"
                textAlignment={TextAlignment.SW}
            />
            <g id="azabu-juban">
                <Stop stationCode="N 04" location={N_04} strokeColor="stroke-namboku" textAlignment={TextAlignment.NW} />
                <Stop stationCode="E 22" location={E_22} strokeColor="stroke-oedo" hideText />
            </g>
        </>
    );
};

export const JK_20 = offset(JK_21, scaleToUnitX(W, MAJOR_LINE * 0.5), scaleToUnitX(SW, MAJOR_LINE));
export const JY_25 = offset(JK_20, scale(NW, OFFSET));

const Shinagawa = () => {
    return (
        <g id="shinagawa">
            <Stop stationCode="JY 25" location={JY_25} strokeColor="stroke-yamanote" textAlignment={TextAlignment.NW} />
            <Stop stationCode="JK 20" location={JK_20} strokeColor="stroke-keihin-tohoku" hideText />
        </g>
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
            <Okubo />
            <Hamamatsucho />
            <Mita />
            <TakanawaGateway />
            <ShirokaneTakanawa />
            <Roppongi />
            <AzabuJuban />
            <Shinagawa />
        </g>
    );
};

export default InsideYamanote;
