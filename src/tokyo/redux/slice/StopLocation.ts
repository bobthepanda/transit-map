/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Coordinates } from '../../../interfaces/Dimensions';
import { TextData } from './StopText';

export interface StopDefinition {
    location: Coordinates;
    stationCode: string;
    hideText?: boolean;
    textAlignment?: string;
    strokeColor?: string;
    fillColor?: string;
}
export enum TextAlignment {
    UP = '[text-anchor:middle] -translate-y-vertical-double',
    DOWN = '[text-anchor:middle] translate-y-vertical-double',
    RIGHT = 'translate-x-horizontal',
    LEFT = '[text-anchor:end] -translate-x-horizontal',
    NW = `[text-anchor:end] -translate-x-diagonal -translate-y-diagonal-down`,
    SW = `[text-anchor:end] -translate-x-diagonal translate-y-diagonal-down`,
    NE = 'translate-x-diagonal -translate-y-diagonal-down',
    SE = 'translate-x-diagonal translate-y-diagonal-down',
}

export const stopDefinitionSlice = createSlice({
    name: 'stopDefinition',
    initialState: {},
    reducers: {
        addStopLocation: (state, action: PayloadAction<StopDefinition[]>) => {
            const data: StopDefinition[] = action.payload;
            data.forEach((d) => {
                state[d.stationCode] = d;
            });
        },
    },
});

export const { addStopLocation } = stopDefinitionSlice.actions;

export default stopDefinitionSlice.reducer;

const selectStopDefinition = (state, stationCode: string): StopDefinition => state?.StopDefinition?.[stationCode];
export const selectStopLocation = (state, stationCode: string): Coordinates => selectStopDefinition(state, stationCode)?.location;
export const selectStopTextAlignment = (state, stationCode: string): string =>
    selectStopDefinition(state, stationCode)?.textAlignment || TextAlignment.RIGHT;
export const selectStopHideText = (state, stationCode: string): boolean => selectStopDefinition(state, stationCode)?.hideText || false;
export const selectStopStrokeColor = (state, stationCode: string): string =>
    selectStopDefinition(state, stationCode)?.strokeColor || 'stroke-black';
export const selectStopFillColor = (state, stationCode: string): string =>
    selectStopDefinition(state, stationCode)?.fillColor || 'fill-white';
export interface TextDefinition extends TextData {
    textAlignment?: string;
}
