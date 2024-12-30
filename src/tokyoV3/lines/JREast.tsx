import { useSelector } from 'react-redux';
import LinePath from '../../symbols/LinePath';
import { selectStopLocation } from '../../tokyo/redux/slice/StopLocation';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, NNE, NNW, offsetCoordinates, SSE, W } from '../../utils/PathUtils';

const Yamanote = () => {
    return (
        <LinePath
            color="stroke-yamanote"
            points={[
                { location: 'JY 29', direction: NNE },
                { location: 'JY 30', direction: NNE },
                { location: 'JY 01', direction: NNE },
                { location: 'JY 02', direction: NNE },
                { location: 'JY 03', direction: NNE },
            ]}
        />
    );
};

const ChuoSobu = () => {
    return (
        <LinePath
            color="stroke-chuo-sobu"
            points={[
                { location: 'JB 17', direction: E },
                { location: 'JB 18', direction: E },
                { location: 'JB 19', direction: E },
            ]}
        />
    );
};

const KeihinTohoku = () => {
    return (
        <LinePath
            color="stroke-keihin-tohoku"
            points={[
                { location: 'JK 24', direction: NNE },
                { location: 'JK 25', direction: NNE },
                { location: 'JK 26', direction: NNE },
                { location: 'JK 27', direction: NNE },
                { location: 'JK 28', direction: NNE },
            ]}
        />
    );
};

const Tokaido = () => {
    // return <SVGPath color="stroke-tokaido" points={[JU_02, TAMACHI_OFFSET, JT_04, JT_05]} directions={[SW, W, SW, W]} />;
    return null;
};

// const JS_SK_CORNER = offset(JS_14, scaleToUnitX(SE, OFFSET * 2), scale(S, OFFSET * 2));

const SobuRapid = () => {
    return (
        <LinePath
            color="stroke-sobu-rapid"
            points={[
                { location: 'JO 17', direction: NNE },
                { location: 'JO 18', direction: E },
            ]}
        />
    );
};

const ChuoRapid = () => {
    const kanda = useSelector((state) => selectStopLocation(state, 'JC 02'));
    return (
        <LinePath
            color="stroke-chuo-rapid"
            points={[
                { location: 'JC 01', direction: NNE },
                { location: 'JC 02', direction: NNE },
                { location: offsetCoordinates(kanda, { dy: OFFSET * -4 }), direction: NNW },
                { location: 'JC 03', direction: W },
            ]}
        />
    );
};

const Keiyo = () => {
    return (
        <LinePath
            color="stroke-keiyo"
            points={[
                { location: 'JE 01', direction: SSE },
                { location: 'JE 02', direction: SSE },
            ]}
        />
    );
};

const Musashino = () => {
    return (
        <LinePath
            color="stroke-musashino"
            points={[
                { location: 'JE 01 M', direction: SSE },
                { location: 'JE 02 M', direction: SSE },
            ]}
        />
    );
};

const Saikyo = () => {
    // return <SVGPath color="stroke-saikyo" points={[JA_08, JA_11, JA_12, JA_13, JA_15]} directions={[N, NE, E, NE, N]} />;
    return null;
};

const ShonanShinjuku = () => {
    // return (
    //     <SVGPath
    //         color="stroke-shonan-shinjuku"
    //         points={[JS_13, JS_SK_CORNER, JS_14, JS_15, offset(OSAKI_CORNER, { dx: -MAJOR_LINE }), JS_17, JS_20, JS_21, JS_22]}
    //         directions={[E, NE, NW, NE, E, N, NE, E, N]}
    //     />
    // );
    return null;
};

const Nambu = () => {
    // return <SVGPath color="stroke-nambu" points={[JN_01, JN_14, JN_20, JN_26]} directions={[NW, N, NW, N]} />;
    return null;
};

const Yokohama = () => {
    // return <SVGPath color="stroke-yokohama" points={[JH_12, JH_14, JH_15, JH_32]} directions={[E, N, NW, N]} />;
    return null;
};

const JREast = () => {
    return (
        <g id="jr-east">
            <Yamanote />
            <ChuoSobu />
            <KeihinTohoku />
            <Tokaido />
            <SobuRapid />
            <ChuoRapid />
            <Musashino />
            <Keiyo />
            <Saikyo />
            <ShonanShinjuku />
            <Nambu />
            <Yokohama />
        </g>
    );
};

export default JREast;
