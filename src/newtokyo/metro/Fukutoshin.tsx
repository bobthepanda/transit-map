import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, NNE, offset, S, scale, WSW } from '../../utils/PathUtils';
import { JY_20 } from '../jr-east/Yamanote';
import { C_03 } from './Chiyoda';
import { M_09 } from './Marunouchi';
import { Y_09 } from './Yurakucho';

export const F_09 = offset(Y_09, scale(NNE, OFFSET));
export const F_13 = offset(M_09, { dx: OFFSET * 0.5, dy: -OFFSET });
export const F_15 = offset(C_03, { dy: OFFSET });
export const F_16 = offset(JY_20, { dx: -OFFSET * 3 });

const FukutoshinStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-fukutoshin" />;
};

export const FukutoshinStops = () => {
    return (
        <>
            <FukutoshinStop stationCode="F 09" location={F_09} />
            <FukutoshinStop stationCode="F 13" location={F_13} />
            <FukutoshinStop stationCode="F 15" location={F_15} />
            <FukutoshinStop stationCode="F 16" location={F_16} />
        </>
    );
};

export const FukutoshinPath = () => {
    return <SVGPath points={[F_09, F_13, F_15, F_16]} directions={[ESE, S, WSW, S]} color="stroke-fukutoshin" />;
};
