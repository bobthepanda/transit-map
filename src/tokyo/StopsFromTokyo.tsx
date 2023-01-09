import { Coordinates } from '../interfaces/Dimensions';
import { Stop, TextAlignment } from '../symbols/BasicStop';

const StopFromTokyo = ({
    stationCode,
    location,
    textAlignment,
    hideText,
}: {
    stationCode: string;
    location: Coordinates;
    textAlignment?: TextAlignment;
    hideText?: boolean;
}) => {
    return <Stop stationCode={stationCode} textAlignment={textAlignment} location={location} hideText={hideText} />;
};

export default StopFromTokyo;
