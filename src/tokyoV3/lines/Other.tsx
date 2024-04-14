import SVGPath from '../../symbols/SVGPath';
import { E, SE } from '../../utils/PathUtils';
import { TX_01 } from '../interchanges/InsideYamanote/Akihabara';
import { TX_02 } from '../interchanges/InsideYamanote/ShinOkachimachi';

const TsukubaExpress = () => {
    return <SVGPath points={[TX_01, TX_02]} directions={[E, SE]} />;
};

const Other = () => {
    return (
        <g id="other">
            <TsukubaExpress />
        </g>
    );
};

export default Other;
