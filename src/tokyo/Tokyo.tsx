import Maronouchi from './tokyo-metro/Maronouchi';
import Mita from './tokyo-metro/Mita';
import './Tokyo.scss'

const Tokyo = (): JSX.Element => {

    return (
        <g id="tokyo">
            <Mita />
        </g>
    );
}

export default Tokyo;