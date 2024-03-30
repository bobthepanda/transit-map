import SVGPath from '../../symbols/SVGPath';
import { E, N, NE, NW, S, SE, SW } from '../../utils/PathUtils';
import {
    C_07,
    C_08,
    C_11,
    G_04,
    G_08,
    G_09,
    H_06,
    H_09,
    M_12,
    M_13,
    M_14,
    M_15,
    M_16,
    M_17,
    M_18,
    N_06,
    N_08,
    N_10,
    T_06,
    T_09,
    Y_13,
    Y_15,
    Y_16,
    Y_18,
    Z_03,
    Z_04,
} from '../interchanges/InsideYamanote';

const Ginza = () => {
    return <SVGPath color="stroke-ginza" points={[G_04, G_08, G_09]} directions={[NE, SE, NE]} />;
};

const Marunouchi = () => {
    return <SVGPath color="stroke-marunouchi" points={[M_12, M_13, M_14, M_15, M_16, M_17, M_18]} directions={[S, SE, E, SE, NE, N, NE]} />;
};

const Namboku = () => {
    return <SVGPath color="stroke-namboku" points={[N_06, N_08, N_10]} directions={[N, NW, NE]} />;
};

const Hanzomon = () => {
    return <SVGPath color="stroke-hanzomon" points={[Z_03, Z_04]} directions={[NE, E]} />;
};

const Yurakucho = () => {
    return <SVGPath color="stroke-yurakucho" points={[Y_13, Y_15, Y_16, Y_18]} directions={[SW, S, E, SE]} />;
};

const Chiyoda = () => {
    return <SVGPath color="stroke-chiyoda" points={[C_07, C_08, C_11]} directions={[E, SE, NE]} />;
};

const Hibiya = () => {
    return <SVGPath color="stroke-hibiya" points={[H_06, H_09]} directions={[NE, SE]} />;
};

const Tozai = () => {
    return <SVGPath color="stroke-tozai" points={[T_06, T_09]} />;
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
        </g>
    );
};

export default Metro;
