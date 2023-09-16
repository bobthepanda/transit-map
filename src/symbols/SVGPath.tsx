import { Coordinates, RelativeCoordinates } from '../interfaces/Dimensions';
import { curveFrom, lineToLocation, startAtLocation } from '../utils/PathUtils';

interface PathParameters {
    color?: string;
    strokeWidth?: string;
    points: Coordinates[];
    directions?: RelativeCoordinates[];
    radii?: any;
}

const SVGPath = ({ color = 'stroke-gray-700', strokeWidth = `stroke-line`, points, directions, radii }: PathParameters) => {
    const d: string[] = [startAtLocation(points[0])];

    if (directions?.length === points.length) {
        for (let i = 1; i < points.length; i += 1) {
            d.push(
                curveFrom({
                    start: points[i - 1],
                    end: points[i],
                    firstDirection: directions[i - 1],
                    secondDirection: directions[i],
                    radius: radii?.[i],
                })
            );
        }
    } else if (points.length === 2) {
        d.push(lineToLocation(points[1]));
    } else {
        throw new Error('Invalid input for line.');
    }

    return <path className={`${color} ${strokeWidth} fill-none`} d={`${d.join(' ')}`} />;
};

export default SVGPath;
