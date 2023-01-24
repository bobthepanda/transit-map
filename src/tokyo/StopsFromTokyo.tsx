import { Coordinates } from '../interfaces/Dimensions';
import { Stop } from '../symbols/BasicStop';

export interface StopFromTokyoParameters {
    stationCode: string;
    location: Coordinates;
    textAlignment?: string;
    hideText?: boolean;
}

const StopFromTokyo = ({ stationCode, location, textAlignment, hideText }: StopFromTokyoParameters) => {
    return <Stop stationCode={stationCode} textAlignment={textAlignment} location={location} hideText={hideText} />;
};

export default StopFromTokyo;
