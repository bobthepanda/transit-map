import { useSelector } from 'react-redux';
import { Coordinates } from '../../interfaces/Dimensions';
import LinePath from '../../symbols/LinePath';
import { selectIntersection, selectStopLocation } from '../../tokyo/redux/slice/StopLocation';
import { E, ESE, midPoint, NNE, NNW } from '../../utils/PathUtils';

const TsukubaExpress = () => {
    const minowaTurn: Coordinates = useSelector((state) => {
        const turnStart = selectIntersection(state, 'TX 03', NNE, 'H 20', ESE);
        const turnEnd = selectStopLocation(state, 'TX 04');
        return midPoint(turnStart, turnEnd);
    });
    return (
        <LinePath
            points={[
                { location: 'TX 01', direction: NNE },
                { location: 'TX 02', direction: E },
                { location: 'TX 03', direction: NNE },
                { location: minowaTurn, direction: NNW },
                { location: 'TX 04', direction: NNE },
                { location: 'TX 05', direction: NNE },
            ]}
        />
    );
};

const Arakawa = () => {
    return (
        <LinePath
            points={[
                { location: 'SA 01', direction: NNW },
                { location: 'SA 02', direction: NNW },
                { location: 'SA 03', direction: NNW },
                { location: 'SA 04', direction: NNW },
                { location: 'SA 05', direction: NNW },
                { location: 'SA 06', direction: NNW },
            ]}
        />
    );
};

const Rinkai = () => {
    // return <SVGPath points={[R_07, R_08]} />;
    return null;
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
