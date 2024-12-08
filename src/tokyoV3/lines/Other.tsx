const TsukubaExpress = () => {
    // return <SVGPath points={[TX_01, TX_02]} directions={[E, SE]} />;
    return null;
};

const Arakawa = () => {
    // return (
    //     <SVGPath
    //         points={[SA_16, SA_25, SA_26, SA_27, SA_30]}
    //         strokeWidth="stroke-[4pt]"
    //         directions={[W, SW, W, SW, SE]}
    //         radii={{ 1: 20, 2: 20, 3: 20, 4: 20, 5: 20 }}
    //     />
    // );
    return null;
};

const Rinkai = () => {
    // return <SVGPath points={[R_07, R_08]} />;
    return null;
};

const Other = () => {
    return (
        <g id="other">
            <TsukubaExpress />
            <Arakawa />
            <Rinkai />
        </g>
    );
};

export default Other;
