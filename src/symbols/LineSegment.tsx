import { Coordinates } from "../interfaces/Dimensions"
import { CSVData } from "../interfaces/Stops"
import { Stop, TextAlignment } from "./BasicStop";

export interface StopData extends CSVData {
    textAlignment?: TextAlignment
}

interface LineSegmentData {
    className?: string,
    stops: StopData[],
    origin: Coordinates,
    dx?: number,
    dy?: number,
}

const LineSegment = ({ className, stops, origin, dx = 0, dy = 0} : LineSegmentData): JSX.Element => {
    if (stops.length === 0) return <></>;
    const { x, y } = origin;
    const xstep = dx / (stops.length - 1);
    const ystep = dy / (stops.length - 1);

    const stopElements: JSX.Element[] = stops.map(({stationCode, eng, jp, textAlignment}, index) => {
        return (
            <Stop 
                location={{x: x + index * xstep, y: y + index * ystep}} 
                text={eng} 
                subtitleText={jp} 
                stationCode={stationCode} 
                textAlignment={textAlignment} />)
    });

    return (
        <g className={className}>  
            <line x1={x} y1={y} x2={x + dx} y2={y + dy} />
            { stopElements }
        </g>
    );
}

export default LineSegment;