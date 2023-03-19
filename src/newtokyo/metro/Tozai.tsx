import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ESE, midPoint, offset, scaleToUnitX, WNW } from '../../utils/PathUtils';
import { JY_15 } from '../jr-east/Yamanote';
import { A_13 } from '../toei/Asakusa';
import { C_11 } from './Chiyoda';
import { G_11 } from './Ginza';
import { H_13 } from './Hibiya';
import { M_18 } from './Marunouchi';
import { N_10 } from './Namboku';

const T_03 = offset(JY_15, { dx: -OFFSET * 0.5, dy: -OFFSET });
const T_06 = offset(N_10, { dy: OFFSET }, scaleToUnitX(WNW, OFFSET * 2));
const T_09 = offset(midPoint(C_11, M_18), { dy: OFFSET * 0.75, dx: -OFFSET * 0.5 });
const T_10 = offset(midPoint(G_11, A_13), { dy: OFFSET * 0.75, dx: -OFFSET * 0.5 });
const T_11 = offset(H_13, { dy: OFFSET });

const TozaiStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-tozai" />;
};

export const TozaiStops = () => {
    return (
        <>
            <TozaiStop stationCode="T 03" location={T_03} />
            <TozaiStop stationCode="T 06" location={T_06} textAlignment={TextAlignment.LEFT} />
            <TozaiStop stationCode="T 09" location={T_09} />
            <TozaiStop stationCode="T 10" location={T_10} />
            <TozaiStop stationCode="T 11" location={T_11} />
        </>
    );
};

export const TozaiPath = () => {
    return <SVGPath points={[T_03, T_11]} color="stroke-tozai" directions={[E, ESE]} />;
};
