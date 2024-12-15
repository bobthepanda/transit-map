/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Coordinates, RelativeCoordinates } from '../interfaces/Dimensions';
import { RootState } from '../tokyo/redux/store';
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

interface ResolvedLocation {
    stationCode: string;
    location: Coordinates;
}

const possibleLocationsMap = createSelector(
    [
        (state: RootState) => state?.stopDefinition,
        (state: RootState, points: PossibleLocationAndDirection[]) =>
            points
                ?.filter((point) => typeof point?.location === 'string')
                ?.map((point) => {
                    return point?.location as string;
                }),
    ],
    (stopDefinition: any, stringLocations: string[]): ResolvedLocation[] => {
        return stringLocations
            .map((str) => {
                return { stationCode: str, location: stopDefinition?.[str]?.location };
            })
            .filter((stringLocation) => stringLocation?.location);
    }
);

const LinePath = ({ color = 'stroke-gray-700', strokeWidth = `stroke-line`, points }: ReduxPathParameters) => {
    const stringLocationsMap: ResolvedLocation[] = useSelector((state: RootState) => possibleLocationsMap(state, points));
    const pointsWithLocations: LocationAndDirection[] = points
        .map((point) => {
            if (typeof point?.location === 'string') {
                const resolvedLocation: ResolvedLocation | undefined = stringLocationsMap?.find(
                    (entry) => entry?.stationCode === point?.location
                );
                const stringLocation: Coordinates | undefined = resolvedLocation?.location;
                if (stringLocation) {
                    return {
                        ...point,
                        location: stringLocation,
                    };
                }
                return undefined;
            }

            return point;
        })
        .filter((point): boolean => !!point?.location)
        .map((point) => point as LocationAndDirection);
    if (pointsWithLocations.length) {
        return <BasicLinePath color={color} strokeWidth={strokeWidth} points={pointsWithLocations} />;
    }
    return null;
};

export default LinePath;
