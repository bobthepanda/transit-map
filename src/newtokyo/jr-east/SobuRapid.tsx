import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, NNE, offset, S, scale, scaleToUnitX, WSW } from '../../utils/PathUtils';
import { A_15 } from '../toei/Asakusa';
import { JB_22 } from './ChuoSobu';
import { JY_01 } from './Yamanote';

export const JO_19 = offset(JY_01, scale(ESE, OFFSET * 3));
export const JO_21 = offset(A_15, { dx: -OFFSET, dy: -OFFSET * 2 });
export const JO_22 = offset(JB_22, scaleToUnitX(S, OFFSET));

const SobuRapidStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-sobu-rapid" />;
};

export const SobuRapidStops = () => {
    return (
        <>
            <SobuRapidStop stationCode="JO 19" location={JO_19} />
            <SobuRapidStop stationCode="JO 20" location={offset(JO_21, scaleToUnitX(WSW, MAJOR_LINE * 1.5))} />
            <SobuRapidStop stationCode="JO 21" location={JO_21} />
            <SobuRapidStop stationCode="JO 22" location={JO_22} />
        </>
    );
};

export const SobuRapidPath = () => {
    return <SVGPath points={[JO_19, JO_21, JO_22]} directions={[NNE, ENE, E]} color="stroke-sobu-rapid" />;
};
