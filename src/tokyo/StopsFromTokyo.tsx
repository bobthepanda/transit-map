import { Coordinates } from '../interfaces/Dimensions';
import { Stop, TextAlignment } from '../symbols/BasicStop';
import { StopData } from '../symbols/LineSegment';

export const StopFromTokyo = ({
  stationCode,
  location,
  textAlignment,
}: {
  stationCode: string;
  location: Coordinates;
  textAlignment?: TextAlignment;
}) => {
  return <Stop stationCode={stationCode} textAlignment={textAlignment} location={location} />;
};
