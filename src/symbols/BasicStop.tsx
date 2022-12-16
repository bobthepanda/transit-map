import { Coordinates } from '../interfaces/Dimensions';
import './basic-stop.scss';

const STOP_ID = 'basic-stop';

const UNIT_SIZE = 12;

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
    textAlignment: TextAlignment,
}


interface StopDefinition extends TextDefinition {
    location: Coordinates,
    stationCode?: string,
}

const StopText = ({text, subtitleText = '', textAlignment}: TextDefinition) => {
    return (
        <text className={textAlignment.toString()}>
            <tspan>{text}</tspan>
            {subtitleText.length != 0 && <tspan className="text-subtitle" x="0" dy="1.2em">subTitleText</tspan>}
        </text>
    );
}

export const Stop = ({ location, stationCode = '', text, subtitleText = '', textAlignment} : StopDefinition) => {
    const { x, y } : Coordinates = location;
    return (
        <g className="stop-group" transform={`translate(${x} ${y})`}>
            <circle cx="0" cy="0"  r={UNIT_SIZE} className="stop-bullet"/>
            <StopText text={text} subtitleText={subtitleText} textAlignment={textAlignment} />
        </g>
    )
}