import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, midPoint, offset, scale, scaleToUnitX, SSE, W } from '../../utils/PathUtils';
import { Z_12 } from '../metro/Hanzomon';
import { A_15 } from './Asakusa';
import { E_13 } from './Oedo';

export const S_09 = offset(A_15, { dx: -OFFSET * 0.5, dy: -OFFSET }, scale(ENE, OFFSET));
export const S_08 = offset(A_15, { dx: -MAJOR_LINE, dy: -MAJOR_LINE * 1.5 });
const S_11 = offset(E_13, { dx: OFFSET * 0.5, dy: OFFSET });
const S_13 = offset(Z_12, { dx: OFFSET * 0.5, dy: OFFSET });

const ShinjukuStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-shinjuku" />;
};

export const ShinjukuStops = () => {
    return (
        <>
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
    return <SVGPath points={[S_08, S_09, S_13]} directions={[E, SSE, E]} color="stroke-shinjuku" />;
};
