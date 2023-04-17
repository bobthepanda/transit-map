import { DenEnToshiPath, DenEnToshiStops } from './DenEnToshi';
import { IkegamiPath, IkegamiStops } from './Ikegami';
import { MeguroPath, MeguroStops } from './Meguro';
import { OimachiPath, OimachiStops } from './Oimachi';
import { TamagawaPath, TamagawaStops } from './Tamagawa';
import { ToyokoPath, ToyokoStops } from './Toyoko';

export const TokyuStops = () => {
    return (
        <>
            <DenEnToshiStops />
            <ToyokoStops />
            <MeguroStops />
            <OimachiStops />
            <IkegamiStops />
            <TamagawaStops />
        </>
    );
};

export const TokyuPath = () => {
    return (
        <>
            <DenEnToshiPath />
            <ToyokoPath />
            <MeguroPath />
            <OimachiPath />
            <IkegamiPath />
            <TamagawaPath />
        </>
    );
};
