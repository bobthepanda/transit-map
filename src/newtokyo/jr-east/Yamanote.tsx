import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { HEIGHT, OFFSET, WIDTH } from '../../utils/CommonCoordinates';
import { E, ENE, N, NNE, NNW, RADIUS, S, SE, SSW, W, WSW, midPoint, offset, scaleToUnitX } from '../../utils/PathUtils';

export const JY_01 = { x: WIDTH / 2 - ((WIDTH / 2) % 144), y: HEIGHT / 2 - ((HEIGHT / 2) % 144) };
export const JY_02 = offset(JY_01, scaleToUnitX(NNE, MAJOR_LINE * 1.25));
export const JY_03 = offset(JY_02, scaleToUnitX(NNE, MAJOR_LINE * 0.75));
export const JY_04 = offset(JY_03, scaleToUnitX(NNE, MAJOR_LINE * 0.5 - MINOR_LINE * 0.5));
export const JY_05 = offset(JY_04, scaleToUnitX(NNE, MAJOR_LINE * 0.5));
export const JY_06 = offset(JY_05, { dy: -MAJOR_LINE - OFFSET * 0.5, dx: OFFSET * 0.25 });
export const JY_07 = offset(JY_06, scaleToUnitX(NNW, MAJOR_LINE * 0.5 - MINOR_LINE * 0.5));
export const JY_08 = offset(JY_07, scaleToUnitX(NNW, MAJOR_LINE * 0.5 - MINOR_LINE * 0.5));
export const JY_09 = offset(JY_08, scaleToUnitX(NNW, MAJOR_LINE * 0.5 + MINOR_LINE));
export const JY_10 = offset(JY_09, scaleToUnitX(W, MAJOR_LINE * 2), scaleToUnitX(WSW, MAJOR_LINE));
export const JY_17 = offset(JY_02, scaleToUnitX(W, MAJOR_LINE * 11), { dy: MAJOR_LINE * 0.5 });
export const JY_16 = offset(JY_17, scaleToUnitX(N, MAJOR_LINE * 1.5));
export const JY_15 = offset(JY_16, scaleToUnitX(N, MAJOR_LINE));
export const JY_14 = offset(JY_15, scaleToUnitX(N, MAJOR_LINE));
export const JY_13 = offset(JY_14, scaleToUnitX(N, MAJOR_LINE));
export const JY_12 = { x: JY_17.x + MAJOR_LINE * 2, y: JY_06.y };
export const JY_11 = offset(JY_10, scaleToUnitX(WSW, MAJOR_LINE * 2.5));
export const JY_30 = offset(JY_01, scaleToUnitX(SSW, MAJOR_LINE * 0.5));
export const JY_29 = offset(JY_30, scaleToUnitX(SSW, MAJOR_LINE * 0.75));
export const JY_28 = offset(JY_29, { dx: -MAJOR_LINE, dy: MAJOR_LINE }, scaleToUnitX(NNE, OFFSET));
export const JY_27 = offset(JY_28, { dx: -MAJOR_LINE, dy: MAJOR_LINE }, scaleToUnitX(NNE, OFFSET));
export const JY_26 = offset(JY_27, scaleToUnitX(SSW, MAJOR_LINE * 0.875 - OFFSET * 0.75));
export const JY_25 = offset(JY_26, scaleToUnitX(SSW, MAJOR_LINE * 0.5));

export const JY_18 = offset(JY_17, scaleToUnitX(S, MAJOR_LINE * 1));
export const JY_19 = offset(JY_18, scaleToUnitX(S, MAJOR_LINE * 1.5));
export const JY_20 = offset(JY_19, scaleToUnitX(S, MAJOR_LINE * 1.5));
export const JY_21 = offset(JY_20, { dx: MAJOR_LINE * 0.5, dy: MAJOR_LINE }, scaleToUnitX(SE, OFFSET));
export const JY_22 = offset(JY_21, scaleToUnitX(SE, MAJOR_LINE + OFFSET * 2));
export const JY_23 = offset(JY_22, scaleToUnitX(SE, MAJOR_LINE - OFFSET * 1.5));
export const JY_24 = offset(JY_23, scaleToUnitX(SE, MAJOR_LINE - MINOR_LINE));

const YamanoteStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-yamanote" />;
};

export const YamanoteStops = () => {
    return (
        <>
            <YamanoteStop stationCode="JY 01" location={JY_01} />
            <YamanoteStop stationCode="JY 02" location={JY_02} />
            <YamanoteStop stationCode="JY 03" location={JY_03} />
            <YamanoteStop stationCode="JY 04" location={JY_04} />
            <YamanoteStop stationCode="JY 05" location={JY_05} />
            <YamanoteStop stationCode="JY 06" location={JY_06} />
            <YamanoteStop stationCode="JY 07" location={JY_07} />
            <YamanoteStop stationCode="JY 08" location={JY_08} />
            <YamanoteStop stationCode="JY 09" location={JY_09} />
            <YamanoteStop stationCode="JY 10" location={JY_10} />
            <YamanoteStop stationCode="JY 11" location={JY_11} />
            <YamanoteStop stationCode="JY 12" location={JY_12} />
            <YamanoteStop stationCode="JY 13" location={JY_13} />
            <YamanoteStop stationCode="JY 14" location={JY_14} />
            <YamanoteStop stationCode="JY 15" location={JY_15} />
            <YamanoteStop stationCode="JY 16" location={JY_16} />
            <YamanoteStop stationCode="JY 17" location={JY_17} />
            <YamanoteStop stationCode="JY 18" location={JY_18} />
            <YamanoteStop stationCode="JY 19" location={JY_19} />
            <YamanoteStop stationCode="JY 20" location={JY_20} />
            <YamanoteStop stationCode="JY 21" location={JY_21} />
            <YamanoteStop stationCode="JY 22" location={JY_22} />
            <YamanoteStop stationCode="JY 23" location={JY_23} />
            <YamanoteStop stationCode="JY 24" location={JY_24} />
            <YamanoteStop stationCode="JY 25" location={JY_25} />
            <YamanoteStop stationCode="JY 26" location={JY_26} />
            <YamanoteStop stationCode="JY 27" location={JY_27} />
            <YamanoteStop stationCode="JY 28" location={JY_28} />
            <YamanoteStop stationCode="JY 29" location={JY_29} />
            <YamanoteStop stationCode="JY 30" location={JY_30} />
        </>
    );
};

export const YamanotePath = () => {
    return (
        <SVGPath
            points={[JY_29, JY_07, JY_10, JY_12, JY_17, JY_24, offset(midPoint(JY_24, JY_25), { dy: OFFSET * 2 }), JY_27, JY_28, JY_29]}
            directions={[NNE, NNW, WSW, W, S, SE, E, NNE, ENE, NNE]}
            radii={{ 1: RADIUS + OFFSET * 0.5 }}
            color="stroke-yamanote"
        />
    );
};
