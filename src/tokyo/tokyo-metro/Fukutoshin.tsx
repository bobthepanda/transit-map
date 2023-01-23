import { MAJOR_LINE } from '../../map/GridLines';
import { OFFSET } from '../../utils/CommonCoordinates';
import { curveFrom, offset, N, startAtLocation, WNW } from '../../utils/PathUtils';
import { JY_13, JY_17 } from '../jr-east/Yamanote';
import StopFromTokyo from '../StopsFromTokyo';

export const F_13 = offset(JY_17, { dx: MAJOR_LINE });
export const F_09 = offset(offset(JY_13, { dy: OFFSET }), { dy: OFFSET * 2, dx: -OFFSET });

export const FukutoshinPath = () => {
    return (
        <path
            d={`
        ${startAtLocation(F_13)}
        ${curveFrom({ start: F_13, end: F_09, firstDirection: N, secondDirection: WNW })}
        `}
        />
    );
};

const Fukutoshin = () => {
    return (
        <g className="fukutoshin">
            <FukutoshinPath />
            <StopFromTokyo stationCode="F 13" location={F_13} />
            <StopFromTokyo stationCode="F 09" location={F_09} />
        </g>
    );
};

export default Fukutoshin;
