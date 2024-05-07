import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, W, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { JM_33, JN_26 } from './Chuo';

const NAMBU_SLOPE = scaleToUnitX(S, MAJOR_LINE + OFFSET * 4);
const JN_21 = offset(JN_26, scale(NAMBU_SLOPE, 5)); // Keio
export const KO_25 = offset(JN_21, scale(E, OFFSET));

const Bubaigawara = () => {
    return (
        <g id="bubaigawara">
            <Stop stationCode="JN 21" location={JN_21} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="KO 25" location={KO_25} hideText />
        </g>
    );
};

const JN_20 = offset(JN_21, NAMBU_SLOPE); // Musashino
export const JM_35 = offset(JN_20, scale(E, OFFSET));
export const JM_34 = midPoint(JM_35, JM_33);

const Fuchuhommachi = () => {
    return (
        <>
            <Stop stationCode="JM 34" location={JM_34} strokeColor="stroke-musashino" />
            <g id="fucuhommachi">
                <Stop stationCode="JN 20" location={JN_20} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
                <Stop stationCode="JM 35" location={JM_35} hideText strokeColor="stroke-musashino" />
            </g>
        </>
    );
};

const JN_19 = offset(JN_20, NAMBU_SLOPE); // Seibu Tamagawa
export const SW_06 = offset(JN_19, scaleToUnitX(NE, OFFSET * 3));

const MinamiTama = () => {
    return (
        <>
            <Stop stationCode="JN 19" location={JN_19} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="SW 06" location={SW_06} />
        </>
    );
};

const JN_16 = offset(JN_19, scale(NAMBU_SLOPE, 3)); // Sagamihara
export const KO_36 = offset(JN_16, scaleToUnitX(NW, OFFSET * 2));

const Inadazutsumi = () => {
    return (
        <g id="inadazutsumi">
            <Stop stationCode="JN 16" location={JN_16} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="KO 36" location={KO_36} textAlignment={TextAlignment.NW} />
        </g>
    );
};
const JN_14 = offset(JN_16, scale(NAMBU_SLOPE, 2)); // Odawara
export const OH_18 = offset(JN_14, scale(E, OFFSET * 0.5), scale(N, OFFSET));

const Noborito = () => {
    return (
        <g id="noborito">
            <Stop stationCode="JN 14" location={JN_14} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="OH 18" location={OH_18} hideText />
        </g>
    );
};

const JN_10 = offset(JN_14, scale(NAMBU_SLOPE, 4)); // Den-en-toshi/Oimachi\
export const DT_10 = offset(JN_10, scaleToUnitX(NW, OFFSET * 2));
export const OM_16 = offset(DT_10, scale(SE, OFFSET));

const Mizonokuchi = () => {
    return (
        <g id="mizonokuchi">
            <Stop stationCode="JN 10" location={JN_10} strokeColor="stroke-nambu" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="DT 10" location={DT_10} hideText />
            <Stop stationCode="OM 16" location={OM_16} hideText />
        </g>
    );
};
const JN_07 = offset(JN_10, scale(NAMBU_SLOPE, 3)); // Musashi-Kosugi

export const TY_11 = offset(JN_07, scale(E, OFFSET));
export const MG_11 = offset(TY_11, scale(SE, OFFSET));

export const JO_15 = offset(JN_07, scale(W, OFFSET * 2));
export const JS_15 = offset(JO_15, scale(W, OFFSET));

const MusashiKosugi = () => {
    return (
        <g id="musashi-kosugi">
            <Stop stationCode="JN 07" location={JN_07} strokeColor="stroke-nambu" hideText />
            <Stop stationCode="JS 15" location={JS_15} strokeColor="stroke-shonan-shinjuku" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JO 15" location={JO_15} strokeColor="stroke-sobu-rapid" hideText />
            <Stop stationCode="MG 11" location={MG_11} hideText />
            <Stop stationCode="TY 11" location={TY_11} hideText />
        </g>
    );
};

const JN_04 = offset(JN_07, scale(NAMBU_SLOPE, 3));
export const JO_14 = offset(JN_04, scale(W, OFFSET * 2));
export const JS_14 = offset(JO_14, scale(W, OFFSET));

const ShinKawasaki = () => {
    return (
        <g id="shin-kawasaki">
            <Stop stationCode="JN 04" location={JN_04} strokeColor="stroke-nambu" />
            <Stop stationCode="JS 14" location={JS_14} strokeColor="stroke-shonan-shinjuku" textAlignment={TextAlignment.LEFT} />
            <Stop stationCode="JO 14" location={JO_14} strokeColor="stroke-sobu-rapid" hideText />
        </g>
    );
};

export const Nambu = () => {
    return (
        <>
            <Bubaigawara />
            <Fuchuhommachi />
            <MinamiTama />
            <Inadazutsumi />
            <Noborito />
            <Mizonokuchi />
            <MusashiKosugi />
            <ShinKawasaki />
            <LineSegmentWithStepChange
                origin={JN_26}
                slope={NAMBU_SLOPE}
                stops={generateStationCodes('JN', 26, 11)}
                skipBeginning
                strokeColor="stroke-nambu"
                stopsToSkip={['JN 21', 'JN 20', 'JN 19', 'JN 16', 'JN 14', 'JN 10', 'JN 04', 'JN 07']}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                origin={JN_10}
                slope={NAMBU_SLOPE}
                stops={generateStationCodes('JN', 10, 4)}
                skipBeginning
                strokeColor="stroke-nambu"
                stopsToSkip={['JN 21', 'JN 20', 'JN 19', 'JN 16', 'JN 14', 'JN 10', 'JN 04', 'JN 07']}
            />
        </>
    );
};
