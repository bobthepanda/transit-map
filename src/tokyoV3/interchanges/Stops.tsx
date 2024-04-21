import InsideYamanote from './InsideYamanote/InsideYamanote';
import { Chuo } from './jr/Chuo';
import { Tohoku } from './jr/Tohoku';

const Interchanges = () => {
    return (
        <g id="interchanges">
            <InsideYamanote />;
            <Tohoku />
            <Chuo />
        </g>
    );
};

export default Interchanges;
