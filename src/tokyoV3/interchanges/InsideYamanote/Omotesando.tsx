import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { G_04 } from './AoyamaItchome';

const G_03 = offset(G_04, scaleToUnitX(W, MAJOR_LINE));
export const G_02 = offset(G_03, scaleToUnitX(W, MAJOR_LINE));
export const Z_02 = offset(G_02, scaleToUnitX(N, OFFSET));
export const C_04 = offset(Z_02, scaleToUnitX(N, OFFSET));

export const Omotesando = () => {
    return (
        <>
            <Stop stationCode="G 03" location={G_03} strokeColor="stroke-ginza" textAlignment={TextAlignment.DOWN} />
            <g id="aoyama-itchome">
                <Stop stationCode="G 02" location={G_02} strokeColor="stroke-ginza" hideText />
                <Stop stationCode="Z 02" location={Z_02} strokeColor="stroke-hanzomon" hideText />
                <Stop stationCode="C 04" location={C_04} strokeColor="stroke-chiyoda" />
            </g>
        </>
    );
};
