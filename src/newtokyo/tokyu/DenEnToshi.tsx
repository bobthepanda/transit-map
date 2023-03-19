import { MAJOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { offset, scale, scaleToUnitX, SW, WSW } from '../../utils/PathUtils';
import { Z_01 } from '../metro/Hanzomon';
import { OH_28 } from '../odakyu/Odawara';

const DT_01 = offset(Z_01, scale(WSW, OFFSET));
const DT_02 = offset(DT_01, scaleToUnitX(WSW, MAJOR_LINE * 1.5));
const DEN_EN_TOSHI_OFFSET = scaleToUnitX(WSW, (DT_02.x - OH_28.x) / 25);
const DT_08_OFFSET = DEN_EN_TOSHI_OFFSET;

export const DT_03 = offset(DT_02, scale(DEN_EN_TOSHI_OFFSET, 1));
export const DT_07 = offset(DT_03, scale(DEN_EN_TOSHI_OFFSET, 4));
export const DT_10 = offset(DT_07, scale(DT_08_OFFSET, 3));
export const DT_16 = offset(DT_10, scale(DT_08_OFFSET, 6));
export const DT_22 = offset(DT_16, scale(DT_08_OFFSET, 6));
export const DT_27 = offset(DT_22, scale(DT_08_OFFSET, 5));

export const DenEnToshiStops = () => {
    return (
        <>
            <Stop stationCode="DT 01" location={DT_01} />
            <Stop stationCode="DT 02" location={DT_02} />
            <Stop stationCode="DT 03" location={DT_03} />
            <Stop stationCode="DT 07" location={DT_07} />
            <Stop stationCode="DT 10" location={DT_10} />
            <Stop stationCode="DT 16" location={DT_16} />
            <Stop stationCode="DT 22" location={DT_22} />
            <Stop stationCode="DT 27" location={DT_27} />
        </>
    );
};

export const DenEnToshiPath = () => {
    return <SVGPath points={[DT_01, DT_27]} directions={[WSW, SW]} />;
};
