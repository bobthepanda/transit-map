import { ChiyodaPath, ChiyodaStops } from './Chiyoda';
import { FukutoshinPath, FukutoshinStops } from './Fukutoshin';
import { GinzaPath, GinzaStops } from './Ginza';
import { HanzomonPath, HanzomonStops } from './Hanzomon';
import { HibiyaPath, HibiyaStops } from './Hibiya';
import { MarunouchiPath, MarunouchiStops } from './Marunouchi';
import { NambokuPath, NambokuStops } from './Namboku';
import { TozaiPath, TozaiStops } from './Tozai';
import { YurakuchoPath, YurakuchoStops } from './Yurakucho';

export const MetroStops = () => {
    return (
        <>
            <GinzaStops />
            <HibiyaStops />
            <MarunouchiStops />
            <HanzomonStops />
            <ChiyodaStops />
            <NambokuStops />
            <YurakuchoStops />
            <TozaiStops />
            <FukutoshinStops />
        </>
    );
};

export const MetroPaths = () => {
    return (
        <>
            <GinzaPath />
            <HibiyaPath />
            <MarunouchiPath />
            <HanzomonPath />
            <ChiyodaPath />
            <NambokuPath />
            <YurakuchoPath />
            <TozaiPath />
            <FukutoshinPath />
        </>
    );
};
