import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ESE, NNE, NNW, offset, scale, scaleToUnitX, SSW } from '../../utils/PathUtils';
import { JY_03 } from '../jr-east/Yamanote';
import { A_12, A_13, A_14 } from '../toei/Asakusa';

export const H_12 = offset(A_12, scaleToUnitX(ESE, MAJOR_LINE), scale(SSW, OFFSET));
export const H_13 = offset(A_13, scaleToUnitX(ESE, MAJOR_LINE));
export const H_14 = offset(A_14, scaleToUnitX(E, OFFSET));
export const H_16 = offset(JY_03, scale(ESE, OFFSET * 3));

const HibiyaStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-hibiya" />;
};

export const HibiyaStops = () => {
    return (
        <>
            <HibiyaStop stationCode="H 12" location={H_12} />
            <HibiyaStop stationCode="H 13" location={H_13} />
            <HibiyaStop stationCode="H 14" location={H_14} />
            <HibiyaStop stationCode="H 15" location={offset(H_14, scaleToUnitX(NNW, MAJOR_LINE * 0.75))} />
            <HibiyaStop stationCode="H 16" location={H_16} />
        </>
    );
};

export const HibiyaPath = () => {
    return <SVGPath points={[H_12, H_14, H_16]} color="stroke-hibiya" directions={[NNE, NNW, NNE]} />;
};
