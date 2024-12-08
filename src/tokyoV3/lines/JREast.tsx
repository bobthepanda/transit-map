const Yamanote = () => {
    // return (
    //     <SVGPath
    //         color="stroke-yamanote"
    //         points={[JY_29, JY_08, JY_11, JY_15, JY_20, OSAKI_CORNER, JY_25, JY_26, JY_29]}
    //         directions={[NE, NW, W, SW, S, E, NE, E, NE]}
    //     />
    // );
    return null;
};

const ChuoSobu = () => {
    // return <SVGPath color="stroke-chuo-sobu" points={[JB_01, JB_10, JB_12, JB_14, JB_17, JB_21]} directions={[SE, SW, SE, NE, E, SE]} />;
    return null;
};

const KeihinTohoku = () => {
    // return <SVGPath color="stroke-keihin-tohoku" points={[JK_12, JK_16, JK_21, JK_24, JK_33, JK_47]} directions={[E, NE, E, NE, NW, N]} />;
    return null;
};

const Tokaido = () => {
    // return <SVGPath color="stroke-tokaido" points={[JU_02, TAMACHI_OFFSET, JT_04, JT_05]} directions={[SW, W, SW, W]} />;
    return null;
};

// const JS_SK_CORNER = offset(JS_14, scaleToUnitX(SE, OFFSET * 2), scale(S, OFFSET * 2));

const SobuRapid = () => {
    // return (
    //     <SVGPath
    //         color="stroke-sobu-rapid"
    //         points={[
    //             JO_13,
    //             offset(JS_SK_CORNER, scale(SE, OFFSET)),
    //             JO_14,
    //             JO_15,
    //             SOBU_OSAKI_CORNER,
    //             JO_17,
    //             offset(TAMACHI_OFFSET, scale(S, OFFSET)),
    //             JO_18,
    //             JO_21,
    //         ]}
    //         directions={[E, NE, NW, NE, E, NE, E, NE, E]}
    //     />
    // );
    return null;
};

const ChuoRapid = () => {
    // return (
    //     <SVGPath
    //         color="stroke-chuo-rapid"
    //         points={[JC_01, JC_03, offset(JB_17, scaleToUnitX(S, OFFSET)), JC_04, offset(JB_12, scale(SW, OFFSET)), JC_05, JC_12, JC_22]}
    //         directions={[NE, NW, W, SW, NW, NE, NW, W]}
    //     />
    // );

    return null;
};

const Keiyo = () => {
    // return <SVGPath color="stroke-keiyo" points={[JE_01, JE_02]} />;
    return null;
};

const Musashino = () => {
    return (
        // <>
        //     <SVGPath color="stroke-musashino" points={[JM_01, JM_02]} />
        //     <SVGPath color="stroke-musashino" points={[JM_33, JM_35]} directions={[SW, S]} />
        // </>
        null
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
