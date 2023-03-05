import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { HEIGHT, WIDTH } from '../../utils/CommonCoordinates';
import { NNE, offset, scaleToUnitX } from '../../utils/PathUtils';

export const JY_01 = { x: WIDTH / 2 - ((WIDTH / 2) % 144), y: HEIGHT / 2 - ((HEIGHT / 2) % 144) };
export const JY_02 = offset(JY_01, scaleToUnitX(NNE, MAJOR_LINE * 1.5));
export const JY_03 = offset(JY_02, scaleToUnitX(NNE, MAJOR_LINE * 0.5));

const YamanoteStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-yamanote" />;
};

export const YamanoteStops = () => {
    return (
        <>
            <YamanoteStop stationCode="JY 01" location={JY_01} />
            <YamanoteStop stationCode="JY 02" location={JY_02} />
            <YamanoteStop stationCode="JY 03" location={JY_03} />
        </>
    );
};

export const YamanotePath = () => {
    return <SVGPath points={[JY_01, JY_03]} color="stroke-yamanote" />;
};
