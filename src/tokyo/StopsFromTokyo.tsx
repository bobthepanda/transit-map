import { Coordinates } from "../interfaces/Dimensions";
import { Stop, TextAlignment } from "../symbols/BasicStop";
import { StopData } from "../symbols/LineSegment";

export const StopFromTokyo = ({stop, location, textAlignment}: {stop: StopData, location: Coordinates, textAlignment?: TextAlignment}) => {
    return <Stop
        stationCode={stop.stationCode}
        text={stop.eng}
        subtitleText={stop.jp}
        textAlignment={stop.textAlignment || textAlignment}
        location={location}
    />
}