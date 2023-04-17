import { DenEnToshiPath, DenEnToshiStops } from './DenEnToshi';
import { IkegamiPath, IkegamiStops } from './Ikegami';
import { MeguroPath, MeguroStops } from './Meguro';
import { OimachiPath, OimachiStops } from './Oimachi';
import { ToyokoPath, ToyokoStops } from './Toyoko';

export const TokyuStops = () => {
    return (
        <>
            <DenEnToshiStops />
            <ToyokoStops />
            <MeguroStops />
            <OimachiStops />
            <IkegamiStops />
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
        </>
    );
};
