import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NNE, offset, scale, scaleToUnitX, SSW, WNW } from '../../utils/PathUtils';
import { JK_26 } from '../jr-east/KeihinTohoku';
import { JY_01 } from '../jr-east/Yamanote';

export const M_17 = offset(JK_26, scale(SSW, OFFSET));
export const M_18 = offset(JY_01, scaleToUnitX(WNW, MAJOR_LINE), scaleToUnitX(NNE, MAJOR_LINE * 0.5));

const MarunouchiStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-marunouchi" />;
};

export const MarunouchiStops = () => {
    return (
        <>
            <MarunouchiStop stationCode="M 17" location={M_17} />
            <MarunouchiStop stationCode="M 18" location={M_18} />
        </>
    );
};

export const MarunouchiPath = () => {
    return <SVGPath points={[M_17, M_18]} color="stroke-marunouchi" directions={[WNW, NNE]} />;
};
