import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, midPoint, NNE, offset, RADIUS, scale, scaleToUnitX, SSE, W, WNW } from '../../utils/PathUtils';
import { JY_17 } from '../jr-east/Yamanote';
import { Z_06, Z_12 } from '../metro/Hanzomon';
import { A_15 } from './Asakusa';
import { I_10 } from './Mita';
import { E_13 } from './Oedo';

export const S_09 = offset(A_15, { dx: -OFFSET * 0.5, dy: -OFFSET }, scale(ENE, OFFSET));
const S_11 = offset(E_13, { dx: OFFSET * 0.5, dy: OFFSET });
const S_13 = offset(Z_12, { dx: OFFSET * 0.5, dy: OFFSET });
export const S_06 = offset(I_10, { dx: -OFFSET * 0.5, dy: OFFSET });
export const S_08 = offset(A_15, { dx: -MAJOR_LINE * 0.75, dy: -MAJOR_LINE });
export const S_01 = offset(JY_17, { dx: OFFSET * 2 });
const S_05 = offset(Z_06, scale(WNW, OFFSET));

const ShinjukuStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-shinjuku" />;
};

export const ShinjukuStops = () => {
    return (
        <>
            <ShinjukuStop stationCode="S 01" location={S_01} />
            <ShinjukuStop stationCode="S 05" location={S_05} />
            <ShinjukuStop stationCode="S 06" location={S_06} />
            <ShinjukuStop stationCode="S 08" location={S_08} />
            <ShinjukuStop stationCode="S 09" location={S_09} />
            <ShinjukuStop stationCode="S 10" location={offset(S_11, scaleToUnitX(W, MAJOR_LINE * 1.5))} />
            <ShinjukuStop stationCode="S 11" location={S_11} />
            <ShinjukuStop stationCode="S 12" location={midPoint(S_11, S_13)} />
            <ShinjukuStop stationCode="S 13" location={S_13} />
        </>
    );
};

export const ShinjukuPath = () => {
    return (
        <SVGPath
            points={[S_01, S_05, S_06, S_09, S_13]}
            radii={{ 2: RADIUS + (OFFSET * 2) / 3 }}
            directions={[E, NNE, E, SSE, E]}
            color="stroke-shinjuku"
        />
    );
};
