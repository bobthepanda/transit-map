import Chiyoda from './Chiyoda';
import Fukutoshin from './Fukutoshin';
import Ginza from './Ginza';
import Hanzomon from './Hanzomon';
import Hibiya from './Hibiya';
import Marunouchi from './Marunouchi';
import Namboku from './Namboku';
import Tozai from './Tozai';
import Yurakucho from './Yurakucho';

const TokyoMetro = () => {
    return (
        <g id="tokyo-metro">
            <Chiyoda />
            <Marunouchi />
            <Hibiya />
            <Ginza />
            <Tozai />
            <Yurakucho />
            <Hanzomon />
            <Namboku />
            <Fukutoshin />
        </g>
    );
};

export default TokyoMetro;
