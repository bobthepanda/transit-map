import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { S, SW, W, midPoint, offset, scaleToUnitX } from '../../utils/PathUtils';
import { KK_01 } from '../interchanges/InsideYamanote/Shinagawa.tsx';
import { A_07 } from '../interchanges/InsideYamanote/TakanawaGateway';

const Keikyu = () => {
    return <SVGPath points={[A_07, offset(midPoint(A_07, KK_01), scaleToUnitX(W, OFFSET * 3)), KK_01]} directions={[W, SW, S]} />;
};

const Private = () => {
    return <Keikyu />;
};

export default Private;
