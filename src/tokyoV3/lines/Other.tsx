import SVGPath from '../../symbols/SVGPath';
import { E, SE, SW, W } from '../../utils/PathUtils';
import { TX_01 } from '../interchanges/InsideYamanote/Akihabara';
import { SA_25 } from '../interchanges/InsideYamanote/HigashiIkebukuro';
import { SA_27, SA_30 } from '../interchanges/InsideYamanote/InsideYamanote';
import { SA_23 } from '../interchanges/InsideYamanote/Otsuka';
import { TX_02 } from '../interchanges/InsideYamanote/ShinOkachimachi';

const TsukubaExpress = () => {
    return <SVGPath points={[TX_01, TX_02]} directions={[E, SE]} />;
};

const Arakawa = () => {
    return <SVGPath points={[SA_23, SA_25, SA_27, SA_30]} strokeWidth="stroke-[4pt]" directions={[SW, W, SW, SE]} radii={{ 3: 60 }} />;
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
