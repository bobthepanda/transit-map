import { Coordinates } from '../interfaces/Dimensions';
import { CSVData } from '../interfaces/Stops';
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
    xstep?: number;
    ystep?: number;
}

interface LineSegmentDataWithTotalChange extends LineSegmentData {
    dx?: number;
    dy?: number;
}

interface LineSegmentDataWithEndpoint extends LineSegmentData {
    endpoint: Coordinates;
}

export const LineSegmentWithStepChange = ({
    stops,
    origin,
    xstep = 0,
    ystep = 0,
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
                        location={{ x: x + index * xstep, y: y + index * ystep }}
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
    dx = 0,
    dy = 0,
    textAlignments,
    strokeColor,
    fillColor,
}: LineSegmentDataWithTotalChange): JSX.Element => {
    const xstep = dx / (stops.length - 1);
    const ystep = dy / (stops.length - 1);

    return (
        <LineSegmentWithStepChange
            stops={stops}
            origin={origin}
            xstep={xstep}
            ystep={ystep}
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
            dx={endX - originX}
            dy={endY - originY}
            textAlignments={textAlignments}
            strokeColor={strokeColor}
            fillColor={fillColor}
        />
    );
};
