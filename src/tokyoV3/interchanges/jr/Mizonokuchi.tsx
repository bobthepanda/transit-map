import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { MAJOR_LINE, OFFSET } from '../../../utils/CommonCoordinates';
import { NE, NW, SE, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JN_09 } from './Keihin';
import { NAMBU_SLOPE } from './NAMBU_SLOPE';

export const JN_10 = offset(JN_09, scale(NAMBU_SLOPE, -1)); // Den-en-toshi/Oimachi\

export const DT_10 = offset(JN_10, scaleToUnitX(NW, OFFSET * 3));
export const OM_16 = offset(DT_10, scale(SE, OFFSET));
export const Mizonokuchi = () => {
    return (
        <g id="mizonokuchi">
            <Stop stationCode="JN 10" location={JN_10} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="DT 10" location={DT_10} textAlignment={TextAlignment.NW} />
            <Stop stationCode="OM 16" location={OM_16} hideText />
        </g>
    );
};

const MIZONOKUCHI_OFFSET = scaleToUnitX(NE, MAJOR_LINE + OFFSET);

export const DT_09 = offset(DT_10, MIZONOKUCHI_OFFSET);

export const Takatsu = () => (
    <g id="takatsu">
        <Stop stationCode="DT 09" location={DT_09} textAlignment={TextAlignment.NW} />
        <Stop stationCode="DT 09" location={offset(DT_09, scale(SE, OFFSET))} hideText />
    </g>
);

export const DT_08 = offset(DT_09, MIZONOKUCHI_OFFSET);

export const Futakoshinchi = () => (
    <g id="futakoshinchi">
        <Stop stationCode="DT 08" location={DT_08} textAlignment={TextAlignment.NW} />
        <Stop stationCode="DT 08" location={offset(DT_08, scale(SE, OFFSET))} hideText />
    </g>
);

export const DT_07 = offset(DT_08, MIZONOKUCHI_OFFSET);
export const OM_15 = offset(DT_07, scale(SE, OFFSET));

export const FutakoTamagawa = () => (
    <g id="motosumiyoshi">
        <Stop stationCode="DT 07" location={DT_07} textAlignment={TextAlignment.NW} />
        <Stop stationCode="OM 15" location={OM_15} hideText />
    </g>
);
