import React from 'react';
import { useSelector } from 'react-redux';
import { Coordinates } from '../interfaces/Dimensions';
import { MINOR_LINE } from '../map/GridLines';
import { RootState } from '../tokyo/redux/store';
import { useShowGrid } from '../utils/ParameterUtils';
import STOPS_TO_HIDE_TEXT from '../utils/StopUtils';
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

export enum TextAlignment {
    UP = '[text-anchor:middle] -translate-y-8',
    DOWN = '[text-anchor:middle] translate-y-9',
    RIGHT = 'translate-x-6',
    LEFT = '[text-anchor:end] -translate-x-6',
}

interface TextDefinition {
    text?: string;
    subtitleText?: string;
    textAlignment?: string;
}

export interface StopDefinition {
    location: Coordinates;
    stationCode: string;
    hideText?: boolean;
    textAlignment?: string;
    strokeColor?: string;
    fillColor?: string;
}

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

const NonMemoStop = ({
    location,
    stationCode = '',
    textAlignment = TextAlignment.RIGHT,
    hideText = STOPS_TO_HIDE_TEXT.includes(stationCode),
    strokeColor = 'stroke-black',
    fillColor = 'fill-white',
}: StopDefinition) => {
    const { text, subtitleText } = useSelector((state: RootState) => state?.stops?.[stationCode]) || {};

    const { x, y }: Coordinates = location;
    const showGrid = useShowGrid();
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
};

export const Stop = React.memo(NonMemoStop);
