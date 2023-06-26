import { Z_07 } from '../../newtokyo/metro/Hanzomon';
import SVGPath from '../../symbols/SVGPath';
import { E, N, NE, NW, SE, midPoint } from '../../utils/PathUtils';
import { A_16, H_16, I_11, M_20 } from '../interchanges/Akihabara';
import { G_13, S_07, S_09 } from '../interchanges/Kanda';
import { A_14, H_13, I_09, M_18, T_10, T_12, Z_08, Z_09, Z_10 } from '../interchanges/Otemachi';
import { A_10, G_08 } from '../interchanges/Shimbashi';
import { G_10, M_17 } from '../interchanges/TokyoStation';
import { H_09, M_16, Y_18, Y_20 } from '../interchanges/YurakuchoStation';

const Ginza = () => {
    return <SVGPath points={[G_08, G_10, G_13]} directions={[SE, NE, NW]} color="stroke-ginza" />;
};

const Asakusa = () => {
    return <SVGPath points={[A_10, A_14, A_16]} directions={[SE, NE, N]} color="stroke-asakusa" />;
};

const Hibiya = () => {
    return <SVGPath points={[H_09, H_13, H_16]} directions={[SE, NE, N]} color="stroke-hibiya" />;
};

const Yurakucho = () => {
    return <SVGPath points={[Y_18, Y_20]} color="stroke-yurakucho" />;
};

const Tozai = () => {
    return <SVGPath points={[T_10, T_12]} color="stroke-tozai" />;
};

const Hanzomon = () => {
    return <SVGPath points={[Z_07, Z_08, midPoint(Z_08, Z_09), Z_09, Z_10]} directions={[E, SE, E, SE, E]} color="stroke-hanzomon" />;
};

const Marunouchi = () => {
    return <SVGPath points={[M_16, M_17, M_18, M_20]} directions={[NE, NW, NE, NW]} color="stroke-marunouchi" />;
};

const Shinjuku = () => {
    return <SVGPath points={[S_07, S_09]} directions={[E, SE]} color="stroke-shinjuku" />;
};

const Mita = () => {
    return <SVGPath points={[I_09, I_11]} directions={[NE, NW]} color="stroke-mita" />;
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
        </g>
    );
};

export default Metro;
