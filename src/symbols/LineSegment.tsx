import { Coordinates, RelativeCoordinates } from '../interfaces/Dimensions';
import { CSVData } from '../interfaces/Stops';
import { scale } from '../utils/PathUtils';
import { Stop, TextAlignment } from './BasicStop';

export interface StopMetadata {
    textAlignment?: TextAlignment;
    hideText?: boolean;
}

export interface StopData extends CSVData, StopMetadata {}

interface LineSegmentData {
    strokeColor?: string;
    fillColor?: string;
    stops: string[];
    origin: Coordinates;
    textAlignments?: TextAlignment[];
}

interface LineSegmentDataWithStepChange extends LineSegmentData {
    slope: RelativeCoordinates;
}

interface LineSegmentDataWithTotalChange extends LineSegmentData {
    totalSlope: RelativeCoordinates;
}

interface LineSegmentDataWithEndpoint extends LineSegmentData {
    endpoint: Coordinates;
}

export const LineSegmentWithStepChange = ({
    stops,
    origin,
    slope: { dx = 0, dy = 0 } = {},
    textAlignments = [TextAlignment.RIGHT],
    strokeColor,
    fillColor,
}: LineSegmentDataWithStepChange) => {
    if (stops.length === 0) return null;
    const { x, y } = origin;

    return (
        <>
            {stops.map((stationCode, index) => {
                const textAlignment = textAlignments[index % textAlignments.length];
                return (
                    <Stop
                        key={stationCode}
                        location={{ x: x + index * dx, y: y + index * dy }}
                        stationCode={stationCode}
                        textAlignment={textAlignment}
                        strokeColor={strokeColor}
                        fillColor={fillColor}
                    />
                );
            })}
        </>
    );
};

export const LineSegmentWithTotalChange = ({
    stops,
    origin,
    totalSlope,
    textAlignments,
    strokeColor,
    fillColor,
}: LineSegmentDataWithTotalChange): JSX.Element => {
    return (
        <LineSegmentWithStepChange
            stops={stops}
            origin={origin}
            slope={scale(totalSlope, 1 / (stops.length - 1))}
            textAlignments={textAlignments}
            strokeColor={strokeColor}
            fillColor={fillColor}
        />
    );
};

export const LineSegmentWithEndpoint = ({
    stops,
    origin,
    endpoint,
    textAlignments,
    strokeColor,
    fillColor,
}: LineSegmentDataWithEndpoint): JSX.Element => {
    const { x: originX, y: originY } = origin;
    const { x: endX, y: endY } = endpoint;

    return (
        <LineSegmentWithTotalChange
            stops={stops}
            origin={origin}
            totalSlope={{ dx: endX - originX, dy: endY - originY }}
            textAlignments={textAlignments}
            strokeColor={strokeColor}
            fillColor={fillColor}
        />
    );
};
