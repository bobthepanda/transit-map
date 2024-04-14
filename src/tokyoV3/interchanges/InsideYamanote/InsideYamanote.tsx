import { MAJOR_LINE, MINOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, findIntersectionFromSlopes, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
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
import { Ryogoku } from './Ryogoku';
import { F_16, Shibuya } from './Shibuya';
import { Shimbashi } from './Shimbashi';
import { ShinOkachimachi } from './ShinOkachimachi';
import { E_01, S_03, Shinjuku } from './Shinjuku';
import { Sugamo } from './Sugamo';
import { Suidobashi } from './Suidobashi';
import { Tabata } from './Tabata';
import { Takadanobaba } from './Takadanobaba';
import { TameikeSanno } from './TameikeSanno';
import { Tokyo } from './TokyoStation';
import { Toranomon } from './Toranomon';
import { Tsukiji } from './Tsukiji';
import { Tsukishima } from './Tsukishima';
import { Ueno } from './Ueno';
import { Uguisuidani } from './Uguisuidani';
import { Yotsuya } from './Yotsuya';
import { JY_18, Yoyogi } from './Yoyogi';
import { Yurakucho } from './Yurakucho';

const S_02 = offset(S_03, scaleToUnitX(NW, OFFSET * 4));
export const M_09 = offset(S_02, scale(SW, OFFSET));
export const F_13 = offset(S_02, scale(N, OFFSET));

const ShinjukuSanchome = () => {
    return (
        <g id="shinjuku-sanchome">
            <Stop stationCode="S 02" location={S_02} strokeColor="stroke-shinjuku" />
            <Stop stationCode="M 09" location={M_09} strokeColor="stroke-marunouchi" hideText />
            <Stop stationCode="F 13" location={F_13} strokeColor="stroke-fukutoshin" hideText />
        </g>
    );
};

const F_12 = offset(F_13, scaleToUnitX(NE, OFFSET * 4));
export const E_02 = offset(F_12, scaleToUnitX(W, OFFSET));
const F_11 = offset(F_12, scaleToUnitX(NE, OFFSET * 4));
const HigashiShinjuku = () => {
    return (
        <>
            <Stop stationCode="F 11" location={F_11} strokeColor="stroke-fukutoshin" textAlignment={TextAlignment.NW} />
            <LineSegmentWithStepChange
                origin={E_02}
                skipBeginning
                slope={scaleToUnitX(SE, OFFSET * 2.5)}
                stops={generateStationCodes('E', 2, 5)}
                strokeColor="stroke-oedo"
                textAlignments={[TextAlignment.NE]}
            />
            <g id="higashi-shinjuku">
                <Stop stationCode="F 12" location={F_12} strokeColor="stroke-fukutoshin" textAlignment={TextAlignment.UP} />
                <Stop stationCode="E 02" location={E_02} strokeColor="stroke-oedo" hideText />
            </g>
        </>
    );
};

export const E_28_START = offset(E_01, scaleToUnitX(W, MAJOR_LINE * 1.5 - OFFSET * 0.5));
export const E_28 = offset(E_28_START, scaleToUnitX(S, OFFSET));

const Tochomae = () => {
    return (
        <g id="tochomae">
            <Stop stationCode="E 28" location={E_28_START} strokeColor="stroke-oedo" textAlignment={TextAlignment.UP} />
            <Stop stationCode="E 28" location={E_28} strokeColor="stroke-oedo" hideText />
        </g>
    );
};

const F_15 = offset(F_16, scaleToUnitX(NE, MAJOR_LINE + MINOR_LINE));
export const F_14 = offset(F_15, scaleToUnitX(E, MAJOR_LINE * 0.5 - OFFSET), scaleToUnitX(NE, MAJOR_LINE * 0.5 - OFFSET));
export const C_03 = offset(F_15, scaleToUnitX(W, OFFSET));
const JY_19 = findIntersectionFromSlopes({ firstDirection: SW, start: JY_18, secondDirection: NW, end: F_15 });

const Harajuku = () => {
    return (
        <>
            <Stop stationCode="F 14" location={F_14} strokeColor="stroke-fukutoshin" textAlignment={TextAlignment.UP} />
            <g id="harajuku">
                <Stop stationCode="F 15" location={F_15} strokeColor="stroke-fukutoshin" textAlignment={TextAlignment.DOWN} />
                <Stop stationCode="C 03" location={C_03} strokeColor="stroke-chiyoda" hideText />
                <Stop stationCode="JY 19" location={JY_19} strokeColor="stroke-yamanote" textAlignment={TextAlignment.SE} />
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
        </g>
    );
};

export default InsideYamanote;
