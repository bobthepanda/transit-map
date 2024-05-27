import InsideYamanote from './InsideYamanote/InsideYamanote';
import { Asagaya } from './jr/Asagaya';
import { HigashiNakano } from './jr/HigashiNakano';
import JR from './jr/JR';
import { Kichijoji } from './jr/Kichijoji';
import { Koenji } from './jr/Koenji';
import { Mitaka } from './jr/Mitaka';
import { MusashiSakai } from './jr/MusashiSakai';
import { Nakano } from './jr/Nakano';
import { NakanoSakue } from './jr/NakanoSakue';
import { NishiKokubunji } from './jr/NishiKokubunji';
import { NishiOgikubo } from './jr/NishiOgikubo';
import { Ogikubo } from './jr/Ogikubo';
import { Tachikawa } from './jr/Tachikawa';

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
