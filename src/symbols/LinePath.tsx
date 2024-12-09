import { useSelector } from 'react-redux';
import { Coordinates, RelativeCoordinates } from '../interfaces/Dimensions';
import { selectStopLocation } from '../tokyo/redux/slice/StopLocation';
import { curveFrom, lineToLocation, startAtLocation } from '../utils/PathUtils';

interface CommonLocationAndDirection {
    direction?: RelativeCoordinates;
    radii?: number;
}

interface LocationAndDirection extends CommonLocationAndDirection {
    location: Coordinates;
}

interface PossibleLocationAndDirection extends CommonLocationAndDirection {
    location: Coordinates | string;
}

interface CommonPathParameters {
    color?: string;
    strokeWidth?: string;
}

interface BasicPathParameters extends CommonPathParameters {
    points: LocationAndDirection[];
}

interface ReduxPathParameters extends CommonPathParameters {
    points: PossibleLocationAndDirection[];
}

const BasicLinePath = ({ color = 'stroke-gray-700', strokeWidth = `stroke-line`, points }: BasicPathParameters) => {
    const d: string[] = [startAtLocation(points[0].location)];

    for (let i = 1; i < points.length; i += 1) {
        const prevDirection = points[i - 1].direction;
        const nextDirection = points[i].direction;
        if (!prevDirection || !nextDirection || prevDirection === nextDirection) {
            d.push(lineToLocation(points[i].location));
        } else {
            d.push(
                curveFrom({
                    start: points[i - 1].location,
                    end: points[i].location,
                    firstDirection: prevDirection,
                    secondDirection: nextDirection,
                    radius: points?.[i].radii,
                })
            );
        }
    }

    return <path className={`${color} ${strokeWidth} fill-none`} d={`${d.join(' ')}`} />;
};

const LinePath = ({ color = 'stroke-gray-700', strokeWidth = `stroke-line`, points }: ReduxPathParameters) => {
    const pointsWithLocations: LocationAndDirection[] = useSelector((state) => {
        return points
            .map((point) => {
                const actualLocation: Coordinates =
                    typeof point.location === 'string' ? selectStopLocation(state, point?.location) : point.location;
                if (!actualLocation) {
                    console.warn('No location available', point);
                }
                return {
                    ...point,
                    location: actualLocation,
                };
            })
            .filter((point) => point.location);
    });

    return <BasicLinePath color={color} strokeWidth={strokeWidth} points={pointsWithLocations} />;
};

export default LinePath;
