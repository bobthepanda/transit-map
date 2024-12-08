import React from 'react';
import { useSelector } from 'react-redux';
import { Coordinates } from '../interfaces/Dimensions';
import { MINOR_LINE } from '../map/GridLines';
import {
    selectStopFillColor,
    selectStopHideText,
    selectStopLocation,
    selectStopStrokeColor,
    selectStopTextAlignment,
    TextAlignment,
    TextDefinition,
} from '../tokyo/redux/slice/StopLocation';
import { selectStopSubtitleText, selectStopText } from '../tokyo/redux/slice/StopText';
import { useShowGrid } from '../utils/ParameterUtils';
import './basic-stop.css';

const STOP_ID = 'basic-stop';

export const UNIT_SIZE = MINOR_LINE;

export const BasicStopDefinition = (): JSX.Element => {
    return (
        <defs>
            <circle id={STOP_ID} cx="0" cy="0" r={UNIT_SIZE} className="stop-bullet" />
        </defs>
    );
};

const StopText = ({
    text = 'Placeholder text',
    subtitleText = 'Placeholder text',
    textAlignment = TextAlignment.RIGHT,
}: TextDefinition) => {
    const content = (
        <>
            <tspan className="text-base">{text}</tspan>
            {subtitleText.length !== 0 && (
                <tspan className="text-subtitle" x="0" dy="1.2em">
                    {subtitleText}
                </tspan>
            )}
        </>
    );
    return (
        <>
            <text className={`label-text-bg ${textAlignment}`}>{content}</text>
            <text className={`label-text ${textAlignment}`}>{content}</text>
        </>
    );
};

const StationCode = ({ stationCode, fillColor = 'fill-white' }: { stationCode: string; fillColor?: string }) => {
    const codeArray = stationCode.split(' ');
    return (
        <text className={`font-bold [text-anchor:middle] ${fillColor === 'fill-white' ? 'text-black' : 'text-white'} text-subtitle`}>
            <tspan>{codeArray[0]}</tspan>
            <tspan x="0" dy=".8em">
                {codeArray[1]}
            </tspan>
        </text>
    );
};

const NonMemoStop = ({ stationCode }: { stationCode: string }) => {
    const text = useSelector((state) => selectStopText(state, stationCode));
    const subtitleText = useSelector((state) => selectStopSubtitleText(state, stationCode));
    const location = useSelector((state) => selectStopLocation(state, stationCode));
    const textAlignment = useSelector((state) => selectStopTextAlignment(state, stationCode));
    const hideText = useSelector((state) => selectStopHideText(state, stationCode));
    const strokeColor = useSelector((state) => selectStopStrokeColor(state, stationCode));
    const fillColor = useSelector((state) => selectStopFillColor(state, stationCode));
    const showGrid = useShowGrid();

    if (location) {
        const { x, y }: Coordinates = location;
        return (
            <g className="stop-group" transform={`translate(${x} ${y})`} data-stationcode={stationCode}>
                <g>
                    {showGrid && <title>{JSON.stringify({ ...location, stationCode, text, subtitleText, hideText })}</title>}
                    <circle cx="0" cy="0" r={UNIT_SIZE} className={`stop-bullet stroke-stop ${fillColor} ${strokeColor}`} />
                    <StationCode stationCode={stationCode} fillColor={fillColor} />
                </g>
                {!hideText && <StopText text={text} subtitleText={subtitleText} textAlignment={textAlignment} />}
            </g>
        );
    }
    return null;
};

export const Stop = React.memo(NonMemoStop);
