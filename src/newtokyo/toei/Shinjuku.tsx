import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, midPoint, NNW, offset, RADIUS, scale, scaleToUnitX, SSE, W } from '../../utils/PathUtils';
import { Z_06, Z_07, Z_12 } from '../metro/Hanzomon';
import { M_08, M_09 } from '../metro/Marunouchi';
import { Y_14 } from '../metro/Yurakucho';
import { A_15 } from './Asakusa';
import { E_13 } from './Oedo';

export const S_09 = offset(A_15, { dx: -OFFSET * 0.5, dy: -OFFSET }, scale(ENE, OFFSET));
const S_11 = offset(E_13, { dx: OFFSET * 0.5, dy: OFFSET });
const S_13 = offset(Z_12, { dx: OFFSET * 0.5, dy: OFFSET });
export const S_06 = offset(Z_07, { dy: -OFFSET });
export const S_08 = offset(A_15, { dx: -MAJOR_LINE * 0.75, dy: -MAJOR_LINE });
export const S_01 = offset(M_08, { dy: OFFSET * -2 });
export const S_02 = offset(M_09, { dy: OFFSET * -2 });
export const S_03 = offset(S_02, { dx: MAJOR_LINE * 1.5 });
export const S_04 = offset(Y_14, scaleToUnitX(ESE, OFFSET));
const S_05 = offset(Z_06, scaleToUnitX(NNW, OFFSET * 0.5));

const ShinjukuStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-shinjuku" textAlignment={textAlignment} />;
};

export const ShinjukuStops = () => {
    return (
        <>
            <ShinjukuStop stationCode="S 01" location={S_01} />
            <ShinjukuStop stationCode="S 02" location={S_02} />
            <ShinjukuStop stationCode="S 03" location={S_03} textAlignment={TextAlignment.UP} />
            <ShinjukuStop stationCode="S 04" location={S_04} />
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
            points={[S_01, S_04, S_06, S_09, S_13]}
            radii={{ 2: RADIUS + (OFFSET * 2) / 3 }}
            directions={[E, ENE, E, SSE, E]}
            color="stroke-shinjuku"
        />
    );
};
