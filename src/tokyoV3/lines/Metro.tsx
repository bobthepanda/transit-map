import SVGPath from '../../symbols/SVGPath';
import { E, N, NE, NW, S, SE, SW, W, midPoint } from '../../utils/PathUtils';
import { G_04, Z_03 } from '../interchanges/InsideYamanote/AoyamaItchome';
import { M_13, Y_16 } from '../interchanges/InsideYamanote/AsakasaMitsukae';
import { G_09, H_09, M_16 } from '../interchanges/InsideYamanote/Ginza';
import { H_12 } from '../interchanges/InsideYamanote/Hatchobori';
import { I_08 } from '../interchanges/InsideYamanote/Hibiya';
import { S_04 } from '../interchanges/InsideYamanote/Ichigaya';
import { E_06, N_10, Y_13 } from '../interchanges/InsideYamanote/Iidabashi';
import { MARUNOUCHI_MIDPOINT, M_25, T_03, Y_09 } from '../interchanges/InsideYamanote/InsideYamanote';
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
import { C_16 } from '../interchanges/InsideYamanote/NishiNippori';
import { M_20 } from '../interchanges/InsideYamanote/Ochanomizu';
import { E_09, G_15 } from '../interchanges/InsideYamanote/Okachimachi';
import { C_11, I_09, M_18, Z_08 } from '../interchanges/InsideYamanote/Otemachi';
import { A_10, G_08 } from '../interchanges/InsideYamanote/Shimbashi';
import { I_15 } from '../interchanges/InsideYamanote/Sugamo';
import { C_07, M_14, N_06 } from '../interchanges/InsideYamanote/TameikeSanno';
import { M_17 } from '../interchanges/InsideYamanote/TokyoStation';
import { H_06 } from '../interchanges/InsideYamanote/Toranomon';
import { E_16, Y_21 } from '../interchanges/InsideYamanote/Tsukishima';
import { G_16, H_18 } from '../interchanges/InsideYamanote/Ueno';
import { M_12, N_08 } from '../interchanges/InsideYamanote/Yotsuya';

const Ginza = () => {
    return <SVGPath color="stroke-ginza" points={[G_04, G_08, G_09, G_13, G_15, G_16]} directions={[E, SE, NE, N, NE, SE]} />;
};

const Marunouchi = () => {
    return (
        <SVGPath
            color="stroke-marunouchi"
            points={[M_12, M_13, M_14, M_15, M_16, M_17, M_18, M_20, M_22, MARUNOUCHI_MIDPOINT, M_25]}
            directions={[S, SE, E, SE, NE, N, NE, N, W, N, W]}
        />
    );
};

const Namboku = () => {
    return <SVGPath color="stroke-namboku" points={[N_06, N_08, N_10, N_11, N_14]} directions={[NE, NW, NE, E, NE]} />;
};

const Hanzomon = () => {
    return (
        <SVGPath
            color="stroke-hanzomon"
            points={[Z_03, Z_05, Z_07, midPoint(Z_07, C_11), Z_08, midPoint(Z_08, Z_09), Z_11]}
            directions={[E, N, E, S, SE, E, SE]}
        />
    );
};

const Yurakucho = () => {
    return <SVGPath color="stroke-yurakucho" points={[Y_09, Y_13, Y_15, Y_16, Y_21]} directions={[S, SW, S, E, SE]} />;
};

const Chiyoda = () => {
    return <SVGPath color="stroke-chiyoda" points={[C_07, C_08, C_11, C_16]} directions={[E, SE, NE, E]} />;
};

const Hibiya = () => {
    return <SVGPath color="stroke-hibiya" points={[H_06, H_09, H_12, H_14, H_18]} directions={[NE, SE, NE, N, NE]} />;
};

const Tozai = () => {
    return <SVGPath color="stroke-tozai" points={[T_03, T_12]} />;
};

const Shinjuku = () => {
    return <SVGPath color="stroke-shinjuku" points={[S_04, S_11]} directions={[E, SE]} />;
};

const Mita = () => {
    const OTEMACHI_NORTHWEST = midPoint(I_10, I_09);
    return <SVGPath color="stroke-mita" points={[I_08, OTEMACHI_NORTHWEST, I_15]} directions={[NE, NW, N]} />;
};

const Asakusa = () => {
    return <SVGPath color="stroke-asakusa" points={[A_10, A_17]} directions={[SE, NE]} />;
};

const Oedo = () => {
    return <SVGPath color="stroke-oedo" points={[E_06, E_07, E_09, E_16]} directions={[NE, E, SE, SW]} />;
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
        </g>
    );
};

export default Metro;
