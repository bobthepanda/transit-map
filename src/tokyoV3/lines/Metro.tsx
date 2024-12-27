import LinePath from '../../symbols/LinePath';
import { E, NNE, NNW, SSE } from '../../utils/PathUtils';

const Ginza = () => {
    return (
        <LinePath
            color="stroke-ginza"
            points={[
                { location: 'G 10', direction: NNE },
                { location: 'G 11', direction: NNE },
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
                { location: 'M 17', direction: NNW },
                { location: 'M 18', direction: NNE },
            ]}
        />
    );
    // return (
    //     <>
    //         <SVGPath
    //             color="stroke-marunouchi"
    //             points={[
    //                 M_01,
    //                 M_06,
    //                 midPoint(M_07, M_08),
    //                 M_08,
    //                 M_12,
    //                 M_13,
    //                 M_14,
    //                 M_15,
    //                 M_16,
    //                 M_17,
    //                 M_18,
    //                 M_20,
    //                 M_22,
    //                 MARUNOUCHI_MIDPOINT,
    //                 M_25,
    //             ]}
    //             directions={[S, SE, S, SE, S, SE, E, SE, NE, N, NE, N, W, N, W]}
    //         />
    //         <SVGPath color="stroke-marunouchi" points={[MB_03, M_06]} directions={[E, SE]} />
    //     </>
    // );
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
    return null;
    // return <SVGPath color="stroke-yurakucho" points={[Y_09, Y_13, Y_15, Y_16, Y_21]} directions={[S, SW, S, E, SE]} />;
};

const Chiyoda = () => {
    return null;
    // return (
    //     <SVGPath
    //         color="stroke-chiyoda"
    //         points={[C_01, C_03, C_04, C_07, C_08, C_11, C_15, C_16]}
    //         directions={[SE, S, SE, E, SE, NE, N, E]}
    //     />
    // );
};

const Hibiya = () => {
    return (
        <LinePath
            color="stroke-hibiya"
            points={[
                { location: 'H 12', direction: NNE },
                { location: 'H 13', direction: NNE },
                { location: 'H 15', direction: NNW },
            ]}
        />
    ); // return <SVGPath color="stroke-hibiya" points={[H_01, H_02, H_06, H_09, H_12, H_14, H_18]} directions={[SE, E, NE, SE, NE, N, NE]} />;
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
    return null;
    // return (
    //     <SVGPath
    //         color="stroke-mita"
    //         points={[I_01, midPoint(I_03, I_04), I_04, I_08, OTEMACHI_NORTHWEST, I_17]}
    //         directions={[E, SE, E, NE, NW, N]}
    //     />
    // );
};

const Asakusa = () => {
    return (
        <LinePath
            color="stroke-asakusa"
            points={[
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
