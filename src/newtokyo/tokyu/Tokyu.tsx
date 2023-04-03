import { DenEnToshiPath, DenEnToshiStops } from './DenEnToshi';
import { MeguroPath, MeguroStops } from './Meguro';
import { ToyokoPath, ToyokoStops } from './Toyoko';

export const TokyuStops = () => {
    return (
        <>
            <DenEnToshiStops />
            <ToyokoStops />
            <MeguroStops />
        </>
    );
};

export const TokyuPath = () => {
    return (
        <>
            <DenEnToshiPath />
            <ToyokoPath />
            <MeguroPath />
        </>
    );
};
