import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, offset, WNW } from '../../utils/PathUtils';
import { JY_13, JY_17 } from '../jr-east/Yamanote';

export const F_13 = offset(JY_17, { dx: MAJOR_LINE });
export const F_09 = offset(offset(JY_13, { dy: OFFSET }), { dy: OFFSET * 2, dx: -OFFSET });

export const FukutoshinPath = () => {
    return <SVGPath color="stroke-fukutoshin" points={[F_13, F_09]} directions={[N, WNW]} />;
};

const FukutoshinStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-fukutoshin" />;
};

const Fukutoshin = () => {
    return (
        <g className="fukutoshin">
            <FukutoshinPath />
            <FukutoshinStop stationCode="F 13" location={F_13} />
            <FukutoshinStop stationCode="F 09" location={F_09} />
        </g>
    );
};

export default Fukutoshin;
