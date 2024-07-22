import InsideYamanote from './InsideYamanote/InsideYamanote';
import { Asagaya } from './jr/Asagaya';
import { DenEnChofu } from './jr/DenEnChofu';
import { HigashiNakano } from './jr/HigashiNakano';
import JR from './jr/JR';
import { Jiyugaoka } from './jr/Jiyugaoka';
import { Kichijoji } from './jr/Kichijoji';
import { Koenji } from './jr/Koenji';
import { Mitaka } from './jr/Mitaka';
import { FutakoTamagawa, Futakoshinchi, Takatsu } from './jr/Mizonokuchi';
import { MusashiSakai } from './jr/MusashiSakai';
import { NakaMeguro } from './jr/NakaMeguro';
import { Nakano } from './jr/Nakano';
import { NakanoSakue } from './jr/NakanoSakue';
import { NishiKokubunji } from './jr/NishiKokubunji';
import { NishiOgikubo } from './jr/NishiOgikubo';
import { Ogikubo } from './jr/Ogikubo';
import { IkegamiLine, OimachiLine, Ookayama, TokyuKamataLines } from './jr/Ookayama';
import { Sangenjaya } from './jr/Sangenjaya';
import { ShinMaruko } from './jr/ShinMaruko';
import { Tachikawa } from './jr/Tachikawa';
import { Tamagawa } from './jr/Tamagawa';

const WesternTokyo = () => {
    return (
        <>
            <HigashiNakano />
            <Nakano />
            <Koenji />
            <Asagaya />
            <Ogikubo />
            <NishiOgikubo />
            <Kichijoji />
            <Mitaka />
            <Tachikawa />
            <NishiKokubunji />
            <NakanoSakue />
            <MusashiSakai />
            <ShinMaruko />
            <Tamagawa />
            <DenEnChofu />
            <Jiyugaoka />
            <Ookayama />
            <NakaMeguro />
            <Takatsu />
            <Futakoshinchi />
            <FutakoTamagawa />
            <Sangenjaya />
            <OimachiLine />
            <IkegamiLine />
            <TokyuKamataLines />
        </>
    );
};

const Interchanges = () => {
    return (
        <g id="interchanges">
            <InsideYamanote />;
            <JR />
            <WesternTokyo />;
        </g>
    );
};

export default Interchanges;
