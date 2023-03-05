import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, offset, scaleToUnitX } from '../../utils/PathUtils';
import { A_16 } from '../toei/Asakusa';
import { JY_03 } from './Yamanote';

export const JB_19 = offset(JY_03, scaleToUnitX(N, OFFSET));
export const JB_20 = offset(A_16, scaleToUnitX(N, OFFSET));
export const JB_21 = offset(JB_20, scaleToUnitX(E, MAJOR_LINE * 2));
export const JB_22 = offset(JB_21, scaleToUnitX(E, MAJOR_LINE * 2));

const ChuoSobuStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-chuo-sobu" />;
};

export const ChuoSobuStops = () => {
    return (
        <>
            <ChuoSobuStop stationCode="JB 19" location={JB_19} />
            <ChuoSobuStop stationCode="JB 20" location={JB_20} />
            <ChuoSobuStop stationCode="JB 21" location={JB_21} />
            <ChuoSobuStop stationCode="JB 22" location={JB_22} />
        </>
    );
};

export const ChuoSobuPath = () => {
    return <SVGPath points={[JB_19, JB_22]} color="stroke-chuo-sobu" />;
};
