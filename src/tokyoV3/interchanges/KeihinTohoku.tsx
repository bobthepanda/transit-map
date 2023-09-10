import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NW, S, SE, SW, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JO_17, JY_25 } from './Shinagawa';

const KEIKYU_STOP_SPACING = scaleToUnitX(S, OFFSET * 3);

export const KK_02 = offset(JO_17, { dx: OFFSET * 2, dy: MAJOR_LINE });
export const KK_04 = offset(KK_02, scale(KEIKYU_STOP_SPACING, 2));
export const KK_03 = offset(KK_02, KEIKYU_STOP_SPACING);
export const KK_07 = offset(KK_04, scale(KEIKYU_STOP_SPACING, 3));
export const KK_11 = offset(KK_07, scale(KEIKYU_STOP_SPACING, 4));
export const KK_18 = offset(KK_11, KEIKYU_STOP_SPACING);
export const KK_20 = offset(KK_18, scale(KEIKYU_STOP_SPACING, 2), { dx: -OFFSET * 2 });

const KEIKYU_KANAGAWA_SPACING = scaleToUnitX(SW, OFFSET * 3);
export const KK_27 = offset(KK_20, KEIKYU_KANAGAWA_SPACING);
export const KK_29 = offset(KK_27, scale(KEIKYU_KANAGAWA_SPACING, 2));
export const KK_32 = offset(KK_29, scale(KEIKYU_KANAGAWA_SPACING, 3));
export const KK_35 = offset(KK_32, scale(KEIKYU_KANAGAWA_SPACING, 3));

const Hatchonawate = () => {
    return (
        <g id="hatchonawate">
            <Stop stationCode="KK 27" location={KK_27} />
        </g>
    );
};

const KeikyuMain = () => {
    return (
        <>
            <LineSegmentWithStepChange
                origin={KK_02}
                slope={KEIKYU_STOP_SPACING}
                stops={[...generateStationCodes('KK', 2, 11), ...generateStationCodes('KK', 18, 19)]}
            />
            <Stop stationCode="KK 20" location={KK_20} />
            <LineSegmentWithStepChange
                origin={offset(KK_27, KEIKYU_KANAGAWA_SPACING)}
                slope={KEIKYU_KANAGAWA_SPACING}
                stops={generateStationCodes('KK', 28, 35)}
            />
        </>
    );
};

export const R_07 = { x: JY_25.x, y: midPoint(KK_03, KK_04).y };
export const JK_19 = offset(R_07, { dx: OFFSET, dy: -OFFSET * 0.5 });

export const JK_18 = offset(KK_07, { dx: -OFFSET * 4 });

const Oimachi = () => {
    return (
        <g id="oimachi">
            <Stop stationCode="R 07" location={R_07} textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JK 19" location={JK_19} strokeColor="stroke-keihin-tohoku" hideText />
        </g>
    );
};

export const JK_17 = offset(KK_11, { dx: -OFFSET * 4 });

const Kamata = () => {
    return (
        <g id="kamata">
            <Stop stationCode="JK 17" location={JK_17} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

const JK_DIAGONAL_OFFSET = scaleToUnitX(NW, OFFSET * 3.5);

export const JK_16 = offset(KK_20, JK_DIAGONAL_OFFSET);
export const JT_04 = offset(JK_16, scale(SE, OFFSET));

const Kawasaki = () => {
    return (
        <g id="kawasaki">
            <Stop stationCode="JK 16" location={JK_16} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JT 04" location={JT_04} strokeColor="stroke-tokaido" hideText />
        </g>
    );
};

export const JK_15 = offset(KK_29, JK_DIAGONAL_OFFSET);

const Tsurumi = () => {
    return (
        <g id="tsurumi">
            <Stop stationCode="JK 15" location={JK_15} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export const JK_13 = offset(KK_35, JK_DIAGONAL_OFFSET);

const HigashiKanagawa = () => {
    return (
        <g id="tsurumi">
            <Stop stationCode="JK 13" location={JK_13} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export const JK_12 = offset(JK_13, scale(KEIKYU_KANAGAWA_SPACING, 2));
const Yokohama = () => {
    return (
        <g id="yokohama">
            <Stop stationCode="JK 12" location={JK_12} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

const KeihinTohokuGroup = () => {
    return (
        <>
            <Oimachi />
            <KeikyuMain />
            <Kamata />
            <Kawasaki />
            <Hatchonawate />
            <Tsurumi />
            <HigashiKanagawa />
            <Yokohama />
            <Stop stationCode="JK 18" location={JK_18} strokeColor="stroke-keihin-tohoku" textAlignment={TextAlignment.LEFT} />
            <Stop
                stationCode="JK 14"
                location={offset(KK_32, JK_DIAGONAL_OFFSET)}
                strokeColor="stroke-keihin-tohoku"
                textAlignment={TextAlignment.LEFT}
            />
            <Stop stationCode="KK 36" location={offset(KK_35, KEIKYU_KANAGAWA_SPACING)} />
        </>
    );
};

export default KeihinTohokuGroup;
