import Maronouchi from './tokyo-metro/Marunouchi';
import Mita from './toei/Mita';
import './Tokyo.scss'

const Tokyo = (): JSX.Element => {

    return (
        <g id="tokyo">
            <Mita />
        </g>
    );
}

export default Tokyo;