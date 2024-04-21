import SVGPath from '../../symbols/SVGPath';
import { E, N, NE, NW, S, SE, SW, W, midPoint } from '../../utils/PathUtils';
import { E_24 } from '../interchanges/InsideYamanote/AoyamaItchome';
import { M_13, Y_16 } from '../interchanges/InsideYamanote/AsakasaMitsukae';
import { G_09, H_09, M_16 } from '../interchanges/InsideYamanote/Ginza';
import { C_03, F_14 } from '../interchanges/InsideYamanote/Harajuku';
import { H_12 } from '../interchanges/InsideYamanote/Hatchobori';
import { I_08 } from '../interchanges/InsideYamanote/Hibiya';
import { E_02 } from '../interchanges/InsideYamanote/HigashiShinjuku';
import { S_04 } from '../interchanges/InsideYamanote/Ichigaya';
import { E_06, N_10, Y_13 } from '../interchanges/InsideYamanote/Iidabashi';
import { F_09, MARUNOUCHI_MIDPOINT, M_25, Y_09 } from '../interchanges/InsideYamanote/Ikebukuro';
import { A_07, A_09, E_20, H_04, I_03, I_04, N_03 } from '../interchanges/InsideYamanote/InsideYamanote';
import { I_10, Z_07 } from '../interchanges/InsideYamanote/Jimbocho';
import { G_13 } from '../interchanges/InsideYamanote/Kanda';
import { E_07, M_22, N_11 } from '../interchanges/InsideYamanote/Kasuga';
import { C_08, M_15 } from '../interchanges/InsideYamanote/Kasumigaseki';
import { Z_11 } from '../interchanges/InsideYamanote/KiyosumiShirakawa';
import { N_14 } from '../interchanges/InsideYamanote/Komagome';
import { Y_15, Z_05 } from '../interchanges/InsideYamanote/Kudanshita';
import { A_17 } from '../interchanges/InsideYamanote/Kuramae';
import { Z_09 } from '../interchanges/InsideYamanote/Mitsukoshimae';
import { T_12 } from '../interchanges/InsideYamanote/MonzenNakacho';
import { S_11 } from '../interchanges/InsideYamanote/Morishita';
import { H_14 } from '../interchanges/InsideYamanote/Ningyocho';
import { C_15, C_16 } from '../interchanges/InsideYamanote/NishiNippori';
import { M_20 } from '../interchanges/InsideYamanote/Ochanomizu';
import { E_09, G_15 } from '../interchanges/InsideYamanote/Okachimachi';
import { C_04 } from '../interchanges/InsideYamanote/Omotesando';
import { C_11, I_09, M_18, Z_08 } from '../interchanges/InsideYamanote/Otemachi';
import { F_16, G_01, Z_01 } from '../interchanges/InsideYamanote/Shibuya';
import { A_10, G_08 } from '../interchanges/InsideYamanote/Shimbashi';
import { E_27, M_08, S_01 } from '../interchanges/InsideYamanote/Shinjuku';
import { F_13 } from '../interchanges/InsideYamanote/ShinjukuSanchome';
import { T_03 } from '../interchanges/InsideYamanote/Takadanobaba';
import { C_07, M_14, N_06 } from '../interchanges/InsideYamanote/TameikeSanno';
import { E_28_START } from '../interchanges/InsideYamanote/Tochomae';
import { M_17 } from '../interchanges/InsideYamanote/TokyoStation';
import { H_06 } from '../interchanges/InsideYamanote/Toranomon';
import { E_16, Y_21 } from '../interchanges/InsideYamanote/Tsukishima';
import { G_16, H_18 } from '../interchanges/InsideYamanote/Ueno';
import { M_12, N_08 } from '../interchanges/InsideYamanote/Yotsuya';
import { E_25, E_26 } from '../interchanges/InsideYamanote/Yoyogi';
import { E_31 } from '../interchanges/jr/HigashiNakano';
import { T_01 } from '../interchanges/jr/Nakano';
import { N_16 } from '../interchanges/jr/Oji';
import { I_17 } from '../interchanges/jr/Tohoku';

const Ginza = () => {
    return <SVGPath color="stroke-ginza" points={[G_01, G_08, G_09, G_13, G_15, G_16]} directions={[E, SE, NE, N, NE, SE]} />;
};

const Marunouchi = () => {
    return (
        <SVGPath
            color="stroke-marunouchi"
            points={[M_08, M_12, M_13, M_14, M_15, M_16, M_17, M_18, M_20, M_22, MARUNOUCHI_MIDPOINT, M_25]}
            directions={[SE, S, SE, E, SE, NE, N, NE, N, W, N, W]}
        />
    );
};

const Namboku = () => {
    return <SVGPath color="stroke-namboku" points={[N_03, N_06, N_08, N_10, N_11, N_14, N_16]} directions={[E, NE, NW, NE, E, N, NE]} />;
};

const Hanzomon = () => {
    return (
        <SVGPath
            color="stroke-hanzomon"
            points={[Z_01, Z_05, Z_07, midPoint(Z_07, C_11), Z_08, midPoint(Z_08, Z_09), Z_11]}
            directions={[E, N, E, S, SE, E, SE]}
        />
    );
};

const Yurakucho = () => {
    return <SVGPath color="stroke-yurakucho" points={[Y_09, Y_13, Y_15, Y_16, Y_21]} directions={[S, SW, S, E, SE]} />;
};

const Chiyoda = () => {
    return <SVGPath color="stroke-chiyoda" points={[C_03, C_04, C_07, C_08, C_11, C_15, C_16]} directions={[S, SE, E, SE, NE, N, E]} />;
};

const Hibiya = () => {
    return <SVGPath color="stroke-hibiya" points={[H_04, H_06, H_09, H_12, H_14, H_18]} directions={[E, NE, SE, NE, N, NE]} />;
};

const Tozai = () => {
    return <SVGPath color="stroke-tozai" points={[T_01, midPoint(T_01, T_03), T_12]} directions={[SE, E, SE]} />;
};

const Shinjuku = () => {
    return <SVGPath color="stroke-shinjuku" points={[S_01, S_04, S_11]} directions={[SE, E, SE]} />;
};

const Mita = () => {
    const OTEMACHI_NORTHWEST = midPoint(I_10, I_09);
    return (
        <SVGPath
            color="stroke-mita"
            points={[I_03, midPoint(I_03, I_04), I_04, I_08, OTEMACHI_NORTHWEST, I_17]}
            directions={[E, SE, E, NE, NW, N]}
        />
    );
};

const Asakusa = () => {
    return <SVGPath color="stroke-asakusa" points={[A_07, A_09, A_10, A_17]} directions={[E, NE, SE, NE]} />;
};

const Oedo = () => {
    return (
        <SVGPath
            color="stroke-oedo"
            points={[E_28_START, E_02, E_06, E_07, E_09, E_16, E_20, E_24, E_25, E_26, E_27, E_31]}
            directions={[E, SE, NE, E, SE, SW, NW, N, NW, NE, NW, NE]}
        />
    );
};

const Fukutoshin = () => {
    return <SVGPath color="stroke-fukutoshin" points={[F_09, F_13, F_14, F_16]} directions={[S, SW, W, SW]} />;
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
