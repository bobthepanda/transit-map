import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NE, NW, S, W, midPoint, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
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
import { Iidabashi, T_06 } from './Iidabashi';
import { Jimbocho } from './Jimbocho';
import { Kanda } from './Kanda';
import { E_07, Kasuga, M_22 } from './Kasuga';
import { Kasumigaseki } from './Kasumigaseki';
import { Kayabacho } from './Kayabacho';
import { KiyosumiShirakawa } from './KiyosumiShirakawa';
import { Komagome } from './Komagome';
import { Kudanshita, Y_15 } from './Kudanshita';
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
import { Otemachi } from './Otemachi';
import { Ryogoku } from './Ryogoku';
import { Shimbashi } from './Shimbashi';
import { ShinOkachimachi } from './ShinOkachimachi';
import { JY_11, Sugamo } from './Sugamo';
import { Suidobashi } from './Suidobashi';
import { Tabata } from './Tabata';
import { TameikeSanno } from './TameikeSanno';
import { Tokyo } from './TokyoStation';
import { Toranomon } from './Toranomon';
import { Tsukiji } from './Tsukiji';
import { Tsukishima } from './Tsukishima';
import { Ueno } from './Ueno';
import { Uguisuidani } from './Uguisuidani';
import { Yotsuya } from './Yotsuya';
import { Yurakucho } from './Yurakucho';

export const E_08 = offset(E_07, scaleToUnitX(E, MAJOR_LINE * 2));
export const M_21 = offset(E_08, scaleToUnitX(S, OFFSET));

const HongoSanchome = () => {
    return (
        <g id="hongo-sanchome">
            <Stop stationCode="E 08" location={E_08} strokeColor="stroke-oedo" textAlignment={TextAlignment.UP} />
            <Stop stationCode="M 21" location={M_21} strokeColor="stroke-marunouchi" hideText />
        </g>
    );
};

const TAKADANOBABA_SCALE = OFFSET * 4;

export const T_03 = offset(T_06, scaleToUnitX(NW, TAKADANOBABA_SCALE, 3));
export const JY_15 = offset(T_03, scaleToUnitX(W, OFFSET));
const JY_14 = offset(JY_15, scaleToUnitX(NE, MAJOR_LINE));

const Takadanobaba = () => {
    return (
        <>
            <Stop stationCode="JY 14" location={JY_14} strokeColor="stroke-yamanote" textAlignment={TextAlignment.SE} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('T', 3, 6)}
                origin={T_03}
                endpoint={T_06}
                skipBeginning
                skipEnd
                strokeColor="stroke-tozai"
            />
            <g id="takadanobaba">
                <Stop stationCode="T 03" location={T_03} strokeColor="stroke-tozai" />
                <Stop stationCode="JY 15" location={JY_15} strokeColor="stroke-yamanote" hideText />
            </g>
        </>
    );
};

const JY_12 = offset(JY_11, scaleToUnitX(W, MAJOR_LINE + OFFSET * 1.5));
const JY_13 = offset(JY_12, scaleToUnitX(W, MAJOR_LINE + OFFSET * 1.5));
export const JS_21 = offset(JY_13, scaleToUnitX(N, OFFSET));
export const JA_12 = offset(JS_21, scaleToUnitX(N, OFFSET));
export const Y_09 = offset(JA_12, scaleToUnitX(N, OFFSET), scaleToUnitX(W, OFFSET));
export const F_09 = offset(Y_09, scaleToUnitX(W, OFFSET));
export const M_25 = offset(JY_13, scaleToUnitX(S, OFFSET));
export const MARUNOUCHI_MIDPOINT = midPoint(M_25, M_22);
const M_24 = offset(MARUNOUCHI_MIDPOINT, scaleToUnitX(N, OFFSET * 2.5));
const M_23 = offset(MARUNOUCHI_MIDPOINT, scaleToUnitX(S, OFFSET * 2.5));

const Ikebukuro = () => {
    return (
        <>
            <Stop stationCode="JY 12" location={JY_12} strokeColor="stroke-yamanote" textAlignment={TextAlignment.DOWN} />
            <Stop stationCode="M 24" location={M_24} strokeColor="stroke-marunouchi" />
            <Stop stationCode="M 23" location={M_23} strokeColor="stroke-marunouchi" />
            <g id="ikebukuro">
                <Stop stationCode="JY 13" location={JY_13} strokeColor="stroke-yamanote" hideText />
                <Stop stationCode="JS 21" location={JS_21} strokeColor="stroke-shonan-shinjuku" hideText />
                <Stop stationCode="JA 12" location={JA_12} strokeColor="stroke-saikyo" hideText />
                <Stop stationCode="Y 09" location={Y_09} strokeColor="stroke-yurakucho" />
                <Stop stationCode="F 09" location={F_09} strokeColor="stroke-fukutoshin" hideText />
                <Stop stationCode="M 25" location={M_25} strokeColor="stroke-marunouchi" hideText />
            </g>
            <LineSegmentWithStepChange
                stops={generateStationCodes('Y', 10, 12)}
                origin={offset(Y_09, scaleToUnitX(S, MAJOR_LINE + OFFSET))}
                slope={scaleToUnitX(S, OFFSET * 5)}
                strokeColor="stroke-yurakucho"
            />
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
        </g>
    );
};

export default InsideYamanote;
