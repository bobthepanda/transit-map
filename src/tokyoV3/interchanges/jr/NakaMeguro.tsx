import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, S, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { TY_04 } from './Jiyugaoka';

const TY_03 = offset(TY_04, scaleToUnitX(E, MAJOR_LINE));
export const H_01 = offset(TY_03, scale(S, OFFSET));

export const NakaMeguro = () => {
    return (
        <g id="naka-meguro">
            <Stop stationCode="TY 03" location={TY_03} textAlignment={TextAlignment.UP} />
            <Stop stationCode="H 01" location={H_01} hideText strokeColor="stroke-hibiya" />
        </g>
    );
};
