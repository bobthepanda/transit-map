import { MAJOR_LINE } from '../../map/GridLines';
import { TextAlignment } from '../../symbols/BasicStop';
import { ASAKUSA_BAKUROCHO, OFFSET, OTEMACHI } from '../../utils/CommonCoordinates';
import { horizontalToLocation, offset, startAtLocation } from '../../utils/PathUtils';
import StopFromTokyo from '../StopsFromTokyo';

const BAKUROCHO = offset(ASAKUSA_BAKUROCHO, { dx: OFFSET * -1, dy: OFFSET * -2 });
const OGAWAMACHI = { x: OTEMACHI.x + MAJOR_LINE * 0.5 + OFFSET * 0.5, y: BAKUROCHO.y };

export const ShinjukuPath = () => {
    return (
        <path
            d={`
            ${startAtLocation(OGAWAMACHI)}
            ${horizontalToLocation(BAKUROCHO)}        
        `}
        />
    );
};

const Shinjuku = () => {
    return (
        <g className="class">
            <ShinjukuPath />
            <StopFromTokyo stationCode="S 09" location={BAKUROCHO} textAlignment={TextAlignment.UP} />
            <StopFromTokyo stationCode="S 07" location={OGAWAMACHI} textAlignment={TextAlignment.UP} />
        </g>
    );
};

export default Shinjuku;
