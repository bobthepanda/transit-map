import { Coordinates } from "../interfaces/Dimensions"
import { CSVData } from "../interfaces/Stops"
import { Stop, TextAlignment } from "./BasicStop";

export interface StopMetadata {
    textAlignment?: TextAlignment,
    hideText?: boolean,
}

export interface StopData extends CSVData, StopMetadata {
}

interface LineSegmentData {
    className?: string,
    stops: StopData[],
    origin: Coordinates,
    textAlignments?: TextAlignment[],
}

interface LineSegmentDataWithStepChange extends LineSegmentData {
    xstep?: number,
    ystep?: number,
}

interface LineSegmentDataWithTotalChange extends LineSegmentData {
    dx?: number,
    dy?: number,
}

interface LineSegmentDataWithEndpoint extends LineSegmentData {
    endpoint: Coordinates,
}

export const LineSegmentWithStepChange = ({ className, stops, origin, xstep = 0, ystep = 0, textAlignments = [TextAlignment.RIGHT]} : LineSegmentDataWithStepChange): JSX.Element => {
    if (stops.length === 0) return <></>;
    const { x, y } = origin;
    const numberOfSteps = stops.length - 1;

    const stopElements: JSX.Element[] = stops.map(({stationCode, eng, jp, hideText}, index) => {
        const textAlignment = textAlignments[index % textAlignments.length];
        return (
            <Stop 
                key={index}
                location={{x: x + index * xstep, y: y + index * ystep}} 
                text={eng} 
                subtitleText={jp} 
                stationCode={stationCode} 
                textAlignment={textAlignment} 
                hideText={hideText}
            />)
    });

    return (
        <g className={className}>  
            <line x1={x} y1={y} x2={x + xstep * numberOfSteps} y2={y + ystep * numberOfSteps} />
            { stopElements }
        </g>
    );
}

export const LineSegmentWithTotalChange = ({ className, stops, origin, dx = 0, dy = 0, textAlignments} : LineSegmentDataWithTotalChange): JSX.Element => {
    const xstep = dx / (stops.length - 1);
    const ystep = dy / (stops.length - 1);

    return (
        <LineSegmentWithStepChange 
            className={className}
            stops={stops}
            origin={origin}
            xstep={xstep}
            ystep={ystep}
            textAlignments={textAlignments}
        />
    )
}

export const LineSegmentWithEndpoint =  ({ className, stops, origin, endpoint, textAlignments } : LineSegmentDataWithEndpoint): JSX.Element => {
    const { x: originX, y: originY } = origin;
    const { x: endX, y: endY } = endpoint;

    return (
        <LineSegmentWithTotalChange
            className={className}
            stops={stops}
            origin={origin}
            dx={endX - originX}
            dy={endY - originY}
            textAlignments={textAlignments}
        />
    )
}