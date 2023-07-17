import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { S, W, offset, scaleToUnitX } from '../../utils/PathUtils';
import { JK_28 } from './Akihabara';

export const JK_29 = offset(JK_28, { dy: -MAJOR_LINE });
export const JY_04 = offset(JK_29, scaleToUnitX(W, OFFSET));

const Okachimachi = () => {
    return (
        <g id="okachimachi">
            <Stop stationCode="JK 28" location={JK_29} strokeColor="stroke-keihin-tohoku" />
            <Stop stationCode="JY 04" location={JY_04} strokeColor="stroke-yamanote" />
        </g>
    );
};

export const E_09 = offset(JY_04, { dx: -MAJOR_LINE * 0.5, dy: -OFFSET });

const NakaOkachimachi = () => {
    return <Stop stationCode="E 09" location={E_09} strokeColor="stroke-oedo" textAlignment={TextAlignment.UP} />;
};

export const G_15 = offset(E_09, { dx: -MAJOR_LINE * 0.5, dy: -OFFSET });
export const G_14 = offset(G_15, scaleToUnitX(S, MAJOR_LINE));

const UenoHirokiji = () => {
    return (
        <>
            <Stop stationCode="G 15" location={G_15} strokeColor="stroke-ginza" />
            <Stop stationCode="G 14" location={G_14} strokeColor="stroke-ginza" />
        </>
    );
};

export const C_13 = offset(G_15, { dx: -MAJOR_LINE, dy: OFFSET * 2 });

const Yushima = () => {
    return <Stop stationCode="C 13" location={C_13} strokeColor="stroke-chiyoda" />;
};

const OkachimachiGroup = () => {
    return (
        <>
            <Okachimachi />
            <NakaOkachimachi />
            <UenoHirokiji />
            <Yushima />
        </>
    );
};
export default OkachimachiGroup;
