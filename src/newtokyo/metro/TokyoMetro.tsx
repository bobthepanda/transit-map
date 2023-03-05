import { GinzaPath, GinzaStops } from './Ginza';
import { HanzomonPath, HanzomonStops } from './Hanzomon';
import { HibiyaPath, HibiyaStops } from './Hibiya';
import { MarunouchiPath, MarunouchiStops } from './Marunouchi';

export const MetroStops = () => {
    return (
        <>
            <GinzaStops />
            <HibiyaStops />
            <MarunouchiStops />
            <HanzomonStops />
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
        </>
    );
};
