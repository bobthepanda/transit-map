import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NE, NW, S, SE, SW, W, midPoint, offset } from '../../utils/PathUtils';
import { A_16, H_16, I_11, M_20, N_10, T_06 } from '../interchanges/Akihabara';
import { A_09, C_03, C_04, C_05, E_20, E_24, G_01, Z_01 } from '../interchanges/Hamamatsucho';
import { C_12, E_27, G_13, M_08, M_09, M_10, S_01, S_09, T_08, Y_14, Z_05, Z_06 } from '../interchanges/Kanda';
import { C_16 } from '../interchanges/NishiNippori';
import { C_13, G_15 } from '../interchanges/Okachimachi';
import { A_14, C_11, H_13, M_18, T_11, Z_08, Z_09, Z_10 } from '../interchanges/Otemachi';
import { A_10, E_25, G_05, H_05, M_12, M_13, N_06, N_08, Y_16, Y_17, Z_04 } from '../interchanges/Shimbashi';
import { A_05, E_21, E_22, H_02, I_01, N_01, N_04, N_05 } from '../interchanges/Shinagawa';
import { A_07 } from '../interchanges/TakanawaGateway';
import { I_04 } from '../interchanges/Tamachi';
import { G_10, M_17 } from '../interchanges/TokyoStation';
import { C_07, C_08, C_09, H_07, H_08, I_08, M_14, M_15, M_16, Y_20 } from '../interchanges/YurakuchoStation';

const Ginza = () => {
    return (
        <SVGPath
            points={[G_01, offset(G_05, { dx: -OFFSET * 4, dy: -OFFSET }), G_05, G_10, G_13, G_15]}
            directions={[NE, E, SE, NE, NW, N]}
            color="stroke-ginza"
        />
    );
};

const Asakusa = () => {
    return <SVGPath points={[A_05, A_07, A_09, A_10, A_14, A_16]} directions={[E, N, NE, SE, NE, N]} color="stroke-asakusa" />;
};

const Hibiya = () => {
    return <SVGPath points={[H_02, H_05, H_07, H_08, H_13, H_16]} directions={[NE, E, NE, SE, NE, N]} color="stroke-hibiya" />;
};

const Yurakucho = () => {
    return <SVGPath points={[Y_14, Y_16, Y_17, Y_20]} directions={[SW, S, E, SE]} color="stroke-yurakucho" />;
};

const Tozai = () => {
    return <SVGPath points={[T_06, T_08, T_11]} directions={[SE, E, SE]} color="stroke-tozai" />;
};

const Hanzomon = () => {
    return (
        <SVGPath
            points={[Z_01, Z_04, Z_05, Z_06, Z_08, midPoint(Z_08, Z_09), Z_09, Z_10]}
            directions={[NE, E, N, E, SE, E, SE, E]}
            radii={{ 2: OFFSET * 4, 3: OFFSET * 4 }}
            color="stroke-hanzomon"
        />
    );
};

const Marunouchi = () => {
    return (
        <SVGPath
            points={[M_08, M_09, M_10, M_12, M_13, M_14, M_15, M_16, M_17, M_18, M_20]}
            directions={[E, SE, E, S, SE, E, SE, NE, NW, NE, NW]}
            color="stroke-marunouchi"
        />
    );
};

const Shinjuku = () => {
    return <SVGPath points={[S_01, S_09]} directions={[E, SE]} color="stroke-shinjuku" />;
};

const Mita = () => {
    return <SVGPath points={[I_01, I_04, I_08, I_11]} directions={[E, N, NE, NW]} color="stroke-mita" />;
};

const Namboku = () => {
    return <SVGPath points={[N_01, N_04, N_05, N_06, N_08, N_10]} directions={[E, N, NE, N, NW, NE]} color="stroke-namboku" />;
};

const Oedo = () => {
    return <SVGPath points={[E_20, E_21, E_22, E_24, E_25, E_27]} directions={[NW, SW, W, N, W, N]} color="stroke-oedo" />;
};

const Chiyoda = () => {
    return (
        <SVGPath
            points={[C_03, C_04, C_05, C_07, C_08, C_09, midPoint(C_11, C_12), C_12, C_13, C_16]}
            directions={[E, SE, NE, E, SE, NE, N, NE, NW, N]}
            color="stroke-chiyoda"
        />
    );
};

const Metro = () => {
    return (
        <g id="tokyo-metro">
            <Ginza />
            <Asakusa />
            <Hibiya />
            <Yurakucho />
            <Tozai />
            <Hanzomon />
            <Marunouchi />
            <Shinjuku />
            <Mita />
            <Chiyoda />
            <Namboku />
            <Oedo />
        </g>
    );
};

export default Metro;
