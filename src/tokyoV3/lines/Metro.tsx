const Ginza = () => {
    return null;
    // return <SVGPath color="stroke-ginza" points={[G_01, G_08, G_09, G_13, G_15, G_16]} directions={[E, SE, NE, N, NE, SE]} />;
};

const Marunouchi = () => {
    return null;
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
    return null;
    // return (
    //     <SVGPath
    //         color="stroke-hanzomon"
    //         points={[Z_01, Z_05, Z_07, midPoint(Z_07, C_11), Z_08, midPoint(Z_08, Z_09), Z_11]}
    //         directions={[E, N, E, S, SE, E, SE]}
    //     />
    // );
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
    return null;
    // return <SVGPath color="stroke-hibiya" points={[H_01, H_02, H_06, H_09, H_12, H_14, H_18]} directions={[SE, E, NE, SE, NE, N, NE]} />;
};

const Tozai = () => {
    return null;
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
    return null;
    // return <SVGPath color="stroke-asakusa" points={[A_01, A_03, A_05, A_09, A_10, A_17]} directions={[N, NE, E, NE, SE, NE]} />;
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
