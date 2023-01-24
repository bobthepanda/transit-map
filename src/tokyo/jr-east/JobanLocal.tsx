import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, midPoint, N, offset, RADIUS, scale } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { KS_10 } from '../keisei/Main';
import { C_19 } from '../tokyo-metro/Chiyoda';

const JL_19 = offset(C_19, { dx: OFFSET });
export const JL_21 = { y: JL_19.y, x: KS_10.x + OFFSET };
export const JL_22 = offset(JL_21, { dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 });
export const JL_25 = offset(JL_22, { dy: -MAJOR_LINE * 3 });
const JL_26 = offset(JL_25, { dx: (MAJOR_LINE * 2) / 3, dy: -MAJOR_LINE });
export const JL_28 = offset(JL_26, scale({ dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 }, 2));
export const JL_30 = offset(JL_28, scale({ dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 }, 2));
export const JL_32 = offset(JL_30, scale({ dx: MAJOR_LINE, dy: -MAJOR_LINE * 0.5 }, 2));

export const JobanLocalPath = () => {
    return (
        <SVGPath
            color="stroke-joban-local"
            points={[JL_19, JL_25, JL_32]}
            directions={[E, N, ENE]}
            radii={{ 2: RADIUS + (OFFSET * 2) / 3 }}
        />
    );
};

const JobanLocalStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-joban-local" />;
};

const JobanLocal = () => {
    return (
        <g className="joban-local">
            <JobanLocalStop stationCode="JL 19" location={JL_19} />
            <JobanLocalStop stationCode="JL 20" location={midPoint(JL_19, JL_21)} />
            <JobanLocalStop stationCode="JL 21" location={JL_21} />
            <LineSegmentWithEndpoint
                origin={JL_22}
                endpoint={JL_25}
                stops={generateStationCodes('JL', 22, 25)}
                strokeColor="stroke-joban-local"
            />
            <LineSegmentWithEndpoint
                origin={JL_26}
                endpoint={JL_32}
                stops={generateStationCodes('JL', 26, 32)}
                strokeColor="stroke-joban-local"
            />
        </g>
    );
};

export default JobanLocal;
