import { DenEnToshiPath, DenEnToshiStops } from './DenEnToshi';
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
        </>
    );
};
