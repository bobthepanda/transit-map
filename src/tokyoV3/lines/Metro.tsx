import LinePath from '../../symbols/LinePath';
import { E, NNE, NNW, RADIUS, SSE, SSW } from '../../utils/PathUtils';

const Ginza = () => {
    return (
        <LinePath
            color="stroke-ginza"
            points={[
                { location: 'G 05', direction: SSE },
                { location: 'G 06', direction: SSE },
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
                { location: 'M 13', direction: SSE },
                { location: 'M 14', direction: E },
                { location: 'M 15', direction: SSE },
                { location: 'M 16', direction: NNE },
                { location: 'M 17', direction: NNW },
                { location: 'M 18', direction: NNE },
                { location: 'M 19', direction: NNW },
                { location: 'M 20', direction: NNW },
            ]}
        />
    );
};

const Namboku = () => {
    return (
        <LinePath
            color="stroke-namboku"
            points={[
                { location: 'N 06', direction: NNE },
                { location: 'N 07', direction: NNW },
            ]}
        />
    );
};

const Hanzomon = () => {
    return (
        <LinePath
            color="stroke-hanzomon"
            points={[
                { location: 'Z 07', direction: E },
                { location: 'Z 08', direction: SSE },
                { location: 'Z 09', direction: E },
                { location: 'Z 10', direction: E },
                { location: 'Z 11', direction: E },
            ]}
        />
    );
};

const Yurakucho = () => {
    return (
        <LinePath
            color="stroke-yurakucho"
            points={[
                { location: 'Y 16', direction: E },
                { location: 'Y 17', direction: E },
                { location: 'Y 18', direction: SSE },
                { location: 'Y 19', direction: SSE },
                { location: 'Y 20', direction: SSE },
                { location: 'Y 21', direction: SSE },
            ]}
        />
    );
};

const Chiyoda = () => {
    return (
        <LinePath
            color="stroke-chiyoda"
            points={[
                { location: 'C 07', direction: E },
                { location: 'C 08', direction: SSE, radii: RADIUS + 20 },
                { location: 'C 09', direction: NNE },
                { location: 'C 10', direction: NNE },
                { location: 'C 11', direction: NNE },
                { location: 'C 12', direction: NNE },
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
                { location: 'H 16', direction: NNE },
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
                { location: 'T 12', direction: SSE },
            ]}
        />
    );
    // return <SVGPath color="stroke-tozai" points={[T_01, midPoint(T_01, T_03), T_12]} directions={[SE, E, SE]} />;
};

const Shinjuku = () => {
    return (
        <LinePath
            color="stroke-shinjuku"
            points={[
                { location: 'S 06', direction: E },
                { location: 'S 07', direction: E },
                { location: 'S 08', direction: E },
                { location: 'S 09', direction: SSE },
                { location: 'S 10', direction: E },
            ]}
        />
    );
};

const Mita = () => {
    return (
        <LinePath
            color="stroke-mita"
            points={[
                { location: 'I 06', direction: NNE },
                { location: 'I 07', direction: NNE },
                { location: 'I 08', direction: NNE },
                { location: 'I 09', direction: NNE },
                { location: 'I 10', direction: NNW },
                { location: 'I 11', direction: NNW },
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
                { location: 'A 15', direction: NNE },
                { location: 'A 16', direction: NNE },
            ]}
        />
    );
};

const Oedo = () => {
    return (
        <LinePath
            color="stroke-oedo"
            points={[
                { location: 'E 12', direction: SSW },
                { location: 'E 13', direction: SSW },
                { location: 'E 14', direction: SSW },
                { location: 'E 15', direction: SSW },
                { location: 'E 16', direction: SSW },
            ]}
        />
    );
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
