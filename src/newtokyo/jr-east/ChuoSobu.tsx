import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NNE, offset, S, scaleToUnitX, SSW, W, WNW } from '../../utils/PathUtils';
import { A_16 } from '../toei/Asakusa';
import { JY_01, JY_03, JY_17, JY_18 } from './Yamanote';

export const JB_19 = offset(JY_03, scaleToUnitX(N, OFFSET));
export const JB_20 = offset(A_16, scaleToUnitX(N, OFFSET));
export const JB_21 = offset(JB_20, scaleToUnitX(E, MAJOR_LINE * 2));
export const JB_22 = offset(JB_21, scaleToUnitX(E, MAJOR_LINE * 2));
export const JB_18 = offset(JB_19, scaleToUnitX(W, MAJOR_LINE * 3));
export const JB_17 = offset(JB_18, scaleToUnitX(W, MAJOR_LINE * 2 + OFFSET));
export const JB_16 = offset(JY_01, scaleToUnitX(WNW, MAJOR_LINE * 5.5), scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const JB_15 = offset(JB_16, scaleToUnitX(SSW, MAJOR_LINE * 0.5 + MINOR_LINE * 0.5));
export const JB_14 = offset(JB_15, scaleToUnitX(SSW, MAJOR_LINE * 0.75 + MINOR_LINE * 0.5));
export const JB_10 = offset(JY_17, { dx: OFFSET });
export const JB_11 = offset(JY_18, { dx: OFFSET });
export const JB_12 = offset(JB_11, { dx: MAJOR_LINE * 1 + OFFSET * 2, dy: MAJOR_LINE * 0.5 });
export const JB_13 = offset(JB_12, { dx: MAJOR_LINE * 1 });

const ChuoSobuStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-chuo-sobu" />;
};

export const ChuoSobuStops = () => {
    return (
        <>
            <ChuoSobuStop stationCode="JB 10" location={JB_10} />
            <ChuoSobuStop stationCode="JB 11" location={JB_11} />
            <ChuoSobuStop stationCode="JB 12" location={JB_12} />
            <ChuoSobuStop stationCode="JB 13" location={JB_13} />

            <ChuoSobuStop stationCode="JB 14" location={JB_14} />
            <ChuoSobuStop stationCode="JB 15" location={JB_15} />
            <ChuoSobuStop stationCode="JB 16" location={JB_16} />
            <ChuoSobuStop stationCode="JB 17" location={JB_17} />
            <ChuoSobuStop stationCode="JB 18" location={JB_18} />
            <ChuoSobuStop stationCode="JB 19" location={JB_19} />
            <ChuoSobuStop stationCode="JB 20" location={JB_20} />
            <ChuoSobuStop stationCode="JB 21" location={JB_21} />
            <ChuoSobuStop stationCode="JB 22" location={JB_22} />
        </>
    );
};

export const ChuoSobuPath = () => {
    return <SVGPath points={[JB_10, JB_12, JB_16, JB_22]} directions={[S, E, NNE, E]} color="stroke-chuo-sobu" />;
};
