import { Coordinates } from '../interfaces/Dimensions';
import { MINOR_LINE } from '../map/GridLines';
import { useShowGrid } from '../utils/ParameterUtils';
import './basic-stop.scss';

const STOP_ID = 'basic-stop';

export const UNIT_SIZE = MINOR_LINE;

export const BasicStopDefinition = (): JSX.Element => {
    return (
        <defs>
            <circle id={STOP_ID} cx="0" cy="0"  r={UNIT_SIZE} className="stop-bullet" />
        </defs>
    );
}

export enum TextAlignment {
    UP = "text-up",
    DOWN = "text-down",
    LEFT = "text-left",
    RIGHT = "text-right",
    UPPER_RIGHT = "text-upper-right",
    UPPER_LEFT = "text-upper-left",
    LOWER_RIGHT = "text-lower-right",
    LOWER_LEFT = "text-lower-left",
}


interface TextDefinition {
    text?: string,
    subtitleText?: string,
    textAlignment?: TextAlignment,
}


interface StopDefinition extends TextDefinition {
    location: Coordinates,
    stationCode?: string,
    hideText?: boolean,
}

const StopText = ({text, subtitleText = '', textAlignment = TextAlignment.RIGHT}: TextDefinition) => {
    return (
        <text className={textAlignment.toString()}>
            <tspan>{text}</tspan>
            {subtitleText.length !== 0 && <tspan className="text-subtitle" x="0" dy="1.2em">{subtitleText}</tspan>}
        </text>
    );
}

const StationCode = ({stationCode} : {stationCode: string}) => {
    const codeArray = stationCode.split(' ');
    return (
        <text className="station-code">
            <tspan>{codeArray[0]}</tspan>
            <tspan x="0" dy=".8em">{codeArray[1]}</tspan>
        </text>
    )

}

export const Stop = ({ location, stationCode = '', text, subtitleText = '', textAlignment = TextAlignment.RIGHT, hideText} : StopDefinition) => {
    const { x, y } : Coordinates = location;
    const showGrid = useShowGrid();
    return (
        <g className="stop-group" transform={`translate(${x} ${y})`}>
            { showGrid && <title>{JSON.stringify(location)}</title>}
            <circle cx="0" cy="0"  r={UNIT_SIZE} className="stop-bullet"/>
            <StationCode stationCode={stationCode} />
            {!hideText && <StopText text={text} subtitleText={subtitleText} textAlignment={textAlignment} />}
        </g>
    )
}