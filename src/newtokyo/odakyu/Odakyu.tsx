import { EnoshimaPath, EnoshimaStops } from './Enoshima';
import { OdawaraPath, OdawaraStops } from './Odawara';

export const OdakyuStops = () => {
    return (
        <>
            <OdawaraStops />
            <EnoshimaStops />
        </>
    );
};

export const OdakyuPaths = () => {
    return (
        <>
            <OdawaraPath />
            <EnoshimaPath />
        </>
    );
};
