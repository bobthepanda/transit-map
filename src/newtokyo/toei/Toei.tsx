import { AsakusaPath, AsakusaStops } from './Asakusa';
import { MitaPath, MitaStops } from './Mita';
import { OedoPath, OedoStops } from './Oedo';
import { ShinjukuPath, ShinjukuStops } from './Shinjuku';

export const ToeiStops = () => {
    return (
        <>
            <AsakusaStops />
            <OedoStops />
            <ShinjukuStops />
            <MitaStops />
        </>
    );
};

export const ToeiPaths = () => {
    return (
        <>
            <AsakusaPath />
            <OedoPath />
            <ShinjukuPath />
            <MitaPath />
        </>
    );
};
