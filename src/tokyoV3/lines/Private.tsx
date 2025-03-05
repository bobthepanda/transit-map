import LinePath from '../../symbols/LinePath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, NNE, NNW, RADIUS, SSE } from '../../utils/PathUtils';

const Keikyu = () => {
    // return (
    //     <SVGPath
    //         points={[A_07, offset(midPoint(A_07, KK_01), scaleToUnitX(W, OFFSET * 3)), KK_01, KK_20, KK_37]}
    //         directions={[W, SW, S, SW, W]}
    //     />
    // );
    return null;
};

const DenEnToshi = () => {
    // return <SVGPath points={[DT_01, DT_10]} directions={[W, SW]} />;
    return null;
};

const Meguro = () => {
    // return <SVGPath points={[MG_01, MG_13]} directions={[W, SW]} />;
    return null;
};
const Toyoko = () => {
    // return <SVGPath points={[TY_01, TY_04, TY_11, TY_21]} directions={[SW, W, SW, S]} />;
    return null;
};

const Oimachi = () => {
    // return <SVGPath points={[OM_01, OM_16]} directions={[NW, SW]} />;
    return null;
};

const Odawara = () => {
    // return <SVGPath points={[OH_01, OH_18]} directions={[W, SW]} />;
    return null;
};

const Keio = () => {
    // return <SVGPath points={[KO_01, KO_18, KO_19, KO_25]} directions={[NW, W, NW, W]} />;
    return null;
};

const Samigarhara = () => {
    // return (
    //     <SVGPath
    //         points={[KO_18, offset(KO_18, scaleToUnitX(W, OFFSET * 2), scaleToUnitX(SW, OFFSET * 2)), KO_35, KO_36]}
    //         directions={[W, SW, S, SW]}
    //     />
    // );
    return null;
};

const Inokashira = () => {
    // return <SVGPath points={[IN_01, IN_04, IN_05, IN_08, midPoint(IN_08, IN_17), IN_17]} directions={[NW, N, NE, N, NW, N]} />;
    return null;
};

const SeibuTamagawa = () => {
    // return <SVGPath points={[SW_01, SW_06]} directions={[S, SW]} />;
    return null;
};

const Ikegami = () => {
    // return <SVGPath points={[IK_01, IK_05, IK_13, IK_15]} directions={[W, SW, SE, S]} />;
    return null;
};

const Tamagawa = () => {
    // return <SVGPath points={[TM_01, TM_07]} directions={[SW, SE]} />;
    return null;
};

const Setagaya = () => {
    // return <SVGPath points={[SG_01, SG_08, SG_09, SG_10]} directions={[NW, NE, E, NE]} />;
    return null;
};

const KeiseiMain = () => {
    return (
        <LinePath
            points={[
                { location: 'KS 01', direction: NNE },
                { location: 'KS 02', direction: NNW },
                { location: 'KS 03', direction: NNE },
                { location: 'KS 04', direction: E },
                { location: 'KS 05', direction: E },
                { location: 'KS 06', direction: E },
                { location: 'KS 07', direction: E },
                { location: 'KS 08', direction: E },
                { location: 'KS 09', direction: E },
                { location: 'KS 10', direction: E },
                { location: 'KS 11', direction: SSE, radii: RADIUS + (OFFSET * 2) / 3 },
                { location: 'KS 12', direction: SSE },
                { location: 'KS 13', direction: SSE },
                { location: 'KS 14', direction: SSE },
                { location: 'KS 15', direction: SSE },
                { location: 'KS 16', direction: SSE },
                { location: 'KS 17', direction: SSE },
                { location: 'KS 18', direction: SSE },
                { location: 'KS 19', direction: SSE },
                { location: 'KS 20', direction: SSE },
                { location: 'KS 21', direction: SSE },
                { location: 'KS 22', direction: SSE },
                { location: 'KS 23', direction: SSE },
                { location: 'KS 24', direction: SSE },
                { location: 'KS 25', direction: SSE },
            ]}
        />
    );
};

const TobuSkytree = () => {
    return (
        <>
            <LinePath
                points={[
                    { location: 'TS 01', direction: E },
                    { location: 'TS 02', direction: NNE },
                    { location: 'TS 08', direction: NNW },
                    { location: 'TS 09', direction: NNW },
                    { location: 'TS 20', direction: NNW },
                ]}
            />
            <LinePath
                points={[
                    { location: 'TS 03', direction: NNW },
                    { location: 'TS 04', direction: NNE },
                ]}
            />
        </>
    );
};

const KeiseiOshiage = () => {
    return (
        <LinePath
            points={[
                { location: 'KS 45', direction: NNE },
                { location: 'KS 09', direction: E },
            ]}
        />
    );
};

const TobuKameido = () => {
    return (
        <LinePath
            points={[
                { location: 'TS 04 KAMEIDO', direction: SSE },
                { location: 'TS 44', direction: E },
            ]}
        />
    );
};

const Hokuso = () => {
    return (
        <LinePath
            points={[
                { location: 'KS 10 HOKUSO', direction: E },
                { location: 'HS 05', direction: E },
            ]}
        />
    );
};

const ShinKeisei = () => {
    return (
        <LinePath
            points={[
                { location: 'SL 01', direction: E },
                { location: 'SL 05', direction: E },
            ]}
        />
    );
};

const KeiseiKanamachi = () => {
    return (
        <LinePath
            points={[
                { location: 'KS 10 KANAMACHI', direction: NNE },
                { location: 'KS 50', direction: NNE },
                { location: 'KS 51', direction: NNW },
            ]}
        />
    );
};

const Private = () => {
    return (
        <>
            <Keikyu />
            <DenEnToshi />
            <Meguro />
            <Toyoko />
            <Oimachi />
            <Odawara />
            <Keio />
            <Samigarhara />
            <Inokashira />
            <SeibuTamagawa />
            <Ikegami />
            <Tamagawa />
            <Setagaya />
            <KeiseiMain />
            <TobuSkytree />
            <KeiseiOshiage />
            <TobuKameido />
            <Hokuso />
            <ShinKeisei />
            <KeiseiKanamachi />
        </>
    );
};

export default Private;
