import { AsakusaPath, AsakusaStops } from './Asakusa';
import { OedoPath, OedoStops } from './Oedo';
import { ShinjukuPath, ShinjukuStops } from './Shinjuku';

export const ToeiStops = () => {
    return (
        <>
            <AsakusaStops />
            <OedoStops />
            <ShinjukuStops />
        </>
    );
};

export const ToeiPaths = () => {
    return (
        <>
            <AsakusaPath />
            <OedoPath />
            <ShinjukuPath />
        </>
    );
};
