import SVGPath from '../../symbols/SVGPath';
import { E, SE, SW, W } from '../../utils/PathUtils';
import { TX_01 } from '../interchanges/InsideYamanote/Akihabara';
import { SA_25 } from '../interchanges/InsideYamanote/HigashiIkebukuro';
import { R_08 } from '../interchanges/InsideYamanote/Osaki';
import { TX_02 } from '../interchanges/InsideYamanote/ShinOkachimachi';
import { SA_26, SA_27, SA_30 } from '../interchanges/InsideYamanote/Zoshigaya';
import { R_07 } from '../interchanges/jr/Oimachi';
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

const Rinkai = () => {
    return <SVGPath points={[R_07, R_08]} />;
};

const Other = () => {
    return (
        <g id="other">
            <TsukubaExpress />
            <Arakawa />
            <Rinkai />
        </g>
    );
};

export default Other;
