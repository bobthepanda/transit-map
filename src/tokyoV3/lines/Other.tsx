import SVGPath from '../../symbols/SVGPath';
import { E, SE, SW, W } from '../../utils/PathUtils';
import { TX_01 } from '../interchanges/InsideYamanote/Akihabara';
import { SA_25 } from '../interchanges/InsideYamanote/HigashiIkebukuro';
import { TX_02 } from '../interchanges/InsideYamanote/ShinOkachimachi';
import { SA_26, SA_27, SA_30 } from '../interchanges/InsideYamanote/Zoshigaya';
import { SA_16 } from '../interchanges/jr/Oji';

const TsukubaExpress = () => {
    return <SVGPath points={[TX_01, TX_02]} directions={[E, SE]} />;
};

const Arakawa = () => {
    return (
        <SVGPath
            points={[SA_16, SA_25, SA_26, SA_27, SA_30]}
            strokeWidth="stroke-[4pt]"
            directions={[W, SW, W, SW, SE]}
            radii={{ 1: 20, 2: 20, 3: 20, 4: 20, 5: 20 }}
        />
    );
};

const Other = () => {
    return (
        <g id="other">
            <TsukubaExpress />
            <Arakawa />
        </g>
    );
};

export default Other;
