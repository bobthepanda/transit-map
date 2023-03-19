import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, N, NNE, NW, offset, S, scale, scaleToUnitX, SSE, W, WNW } from '../../utils/PathUtils';
import { JB_17 } from '../jr-east/ChuoSobu';
import { JY_11, JY_22 } from '../jr-east/Yamanote';
import { C_09, C_11 } from '../metro/Chiyoda';
import { A_08 } from './Asakusa';

const I_15 = offset(JY_11, { dx: OFFSET, dy: OFFSET * 0.5 });
const I_09 = offset(C_11, scale(WNW, OFFSET));
const I_11 = offset(JB_17, { dy: -OFFSET });
export const I_10 = offset(C_11, { dx: -MAJOR_LINE * 0.5, dy: -MAJOR_LINE - OFFSET });
export const I_12 = offset(I_15, scaleToUnitX(S, MAJOR_LINE * 3 - OFFSET));
const I_08 = offset(C_09, scale(W, OFFSET));
const I_07 = offset(C_09, { dx: -MAJOR_LINE * 0.5, dy: MAJOR_LINE * 1.5 });
export const I_04 = offset(A_08, scale(WNW, OFFSET));
export const I_01 = offset(JY_22, scale(SSE, OFFSET * 2));
export const I_02 = offset(I_01, scaleToUnitX(ENE, MAJOR_LINE));
export const I_03 = offset(I_02, scaleToUnitX(ENE, MAJOR_LINE));

const MitaStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-mita" />;
};

export const MitaStops = () => {
    return (
        <>
            <MitaStop stationCode="I 01" location={I_01} />
            <MitaStop stationCode="I 02" location={I_02} />
            <MitaStop stationCode="I 03" location={I_03} />
            <MitaStop stationCode="I 04" location={I_04} />
            <MitaStop stationCode="I 07" location={I_07} />
            <MitaStop stationCode="I 08" location={I_08} />
            <MitaStop stationCode="I 09" location={I_09} />
            <MitaStop stationCode="I 10" location={I_10} />
            <MitaStop stationCode="I 11" location={I_11} />
            <MitaStop stationCode="I 12" location={I_12} />
            <MitaStop stationCode="I 15" location={I_15} />
        </>
    );
};

export const MitaPath = () => {
    return (
        <SVGPath
            points={[I_01, offset(I_03, { dx: MAJOR_LINE, dy: -OFFSET }), I_04, I_08, I_09, I_10, I_15]}
            directions={[ENE, E, NNE, N, NNE, NW, N]}
            color="stroke-mita"
        />
    );
};
