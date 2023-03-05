import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NNE, offset, scale, scaleToUnitX, WNW } from '../../utils/PathUtils';
import { JY_01 } from './Yamanote';

export const JC_01 = offset(JY_01, scale(WNW, OFFSET));
export const JC_02 = offset(JC_01, scaleToUnitX(NNE, MAJOR_LINE * 1.5));

const ChuoRapidStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-chuo-rapid" />;
};

export const ChuoRapidStops = () => {
    return (
        <>
            <ChuoRapidStop stationCode="JC 01" location={JC_01} />
            <ChuoRapidStop stationCode="JC 02" location={JC_02} />
        </>
    );
};

export const ChuoRapidPath = () => {
    return <SVGPath points={[JC_01, JC_02]} color="stroke-chuo-rapid" />;
};
