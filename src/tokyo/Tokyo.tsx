import Maronouchi from './tokyo-metro/Marunouchi';
import Mita from './toei/Mita';
import './Tokyo.scss'
import Chiyoda from './tokyo-metro/Chiyoda';
import './colors.scss';

const Tokyo = (): JSX.Element => {

    return (
        <g id="tokyo">
            <Mita />
            <Chiyoda />
        </g>
    );
}

export default Tokyo;