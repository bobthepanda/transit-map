import LinePath from '../../symbols/LinePath';
import { E, NNE, NNW, SSE } from '../../utils/PathUtils';

const Ginza = () => {
    return (
        <LinePath
            color="stroke-ginza"
            points={[
                { location: 'G 07', direction: SSE },
                { location: 'G 08', direction: SSE },
                { location: 'G 09', direction: NNE },
                { location: 'G 10', direction: NNE },
                { location: 'G 11', direction: NNE },
                { location: 'G 12', direction: NNE },
                { location: 'G 13', direction: NNW },
            ]}
        />
    );
};

const Marunouchi = () => {
    return (
        <LinePath
            color="stroke-marunouchi"
            points={[
                { location: 'M 15', direction: SSE },
                { location: 'M 16', direction: NNE },
                { location: 'M 17', direction: NNW },
                { location: 'M 18', direction: NNE },
            ]}
        />
    );
};

const Namboku = () => {
    return null;
    // return <SVGPath color="stroke-namboku" points={[N_01, N_06, N_08, N_10, N_11, N_14, N_16]} directions={[E, NE, NW, NE, E, N, NE]} />;
};

const Hanzomon = () => {
    return (
        <LinePath
            color="stroke-hanzomon"
            points={[
                { location: 'Z 08', direction: SSE },
                { location: 'Z 10', direction: E },
            ]}
        />
    );
};

const Yurakucho = () => {
    return (
        <LinePath
            color="stroke-yurakucho"
            points={[
                { location: 'Y 18', direction: SSE },
                { location: 'Y 19', direction: SSE },
                { location: 'Y 20', direction: SSE },
            ]}
        />
    );
};

const Chiyoda = () => {
    return (
        <LinePath
            color="stroke-chiyoda"
            points={[
                { location: 'C 08', direction: SSE },
                { location: 'C 09', direction: NNE },
                { location: 'C 10', direction: NNE },
                { location: 'C 11', direction: NNE },
            ]}
        />
    );
};

const Hibiya = () => {
    return (
        <LinePath
            color="stroke-hibiya"
            points={[
                { location: 'H 06', direction: NNE },
                { location: 'H 07', direction: NNE },
                { location: 'H 08', direction: SSE },
                { location: 'H 09', direction: SSE },
                { location: 'H 10', direction: SSE },
                { location: 'H 11', direction: NNE },
                { location: 'H 12', direction: NNE },
                { location: 'H 13', direction: NNE },
                { location: 'H 14', direction: NNW },
                { location: 'H 15', direction: NNW },
            ]}
        />
    );
};

const Tozai = () => {
    return (
        <LinePath
            color="stroke-tozai"
            points={[
                { location: 'T 09', direction: E },
                { location: 'T 10', direction: SSE },
                { location: 'T 11', direction: SSE },
            ]}
        />
    );
    // return <SVGPath color="stroke-tozai" points={[T_01, midPoint(T_01, T_03), T_12]} directions={[SE, E, SE]} />;
};

const Shinjuku = () => {
    return null;
    // return <SVGPath color="stroke-shinjuku" points={[S_01, S_04, S_11]} directions={[SE, E, SE]} />;
};

const Mita = () => {
    return (
        <LinePath
            color="stroke-mita"
            points={[
                { location: 'I 07', direction: NNW },
                { location: 'I 08', direction: NNW },
                { location: 'I 09', direction: NNW },
            ]}
        />
    );
};

const Asakusa = () => {
    return (
        <LinePath
            color="stroke-asakusa"
            points={[
                { location: 'A 10', direction: SSE },
                { location: 'A 11', direction: NNE },
                { location: 'A 12', direction: NNE },
                { location: 'A 13', direction: NNE },
                { location: 'A 14', direction: NNE },
            ]}
        />
    );
};

const Oedo = () => {
    return null;
    // return (
    //     <SVGPath
    //         color="stroke-oedo"
    //         points={[E_28_START, E_02, E_06, E_07, E_09, E_16, E_20, E_24, E_25, E_26, E_27, E_31]}
    //         directions={[E, SE, NE, E, SE, SW, NW, N, NW, NE, NW, NE]}
    //     />
    // );
};

const Fukutoshin = () => {
    // return <SVGPath color="stroke-fukutoshin" points={[F_09, F_13, F_14, F_16]} directions={[S, SW, W, SW]} />;
    return null;
};

const Metro = () => {
    return (
        <g id="tokyo-metro">
            <Ginza />
            <Marunouchi />
            <Namboku />
            <Hanzomon />
            <Yurakucho />
            <Chiyoda />
            <Hibiya />
            <Tozai />
            <Shinjuku />
            <Mita />
            <Asakusa />
            <Oedo />
            <Fukutoshin />
        </g>
    );
};

export default Metro;
