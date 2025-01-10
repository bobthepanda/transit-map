/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Coordinates } from '../../../interfaces/Dimensions';
import { findIntersectionFromSlopes, findOffset, midPoint } from '../../../utils/PathUtils';
import { TextData } from './StopText';

export interface StopMetadata {
    stationCode: string;
    displayStationCode?: string;
    hideText?: boolean;
    textAlignment?: string;
    strokeColor?: string;
    fillColor?: string;
}

export interface StopDefinition extends StopMetadata {
    location: Coordinates;
}
export enum TextAlignment {
    UP = '[text-anchor:middle] -translate-y-vertical-double',
    DOWN = '[text-anchor:middle] translate-y-vertical-double',
    DOWN_LEFT_ALIGN = 'translate-y-vertical-double',
    RIGHT = 'translate-x-horizontal',
    LEFT = '[text-anchor:end] -translate-x-horizontal',
    NW = `[text-anchor:end] -translate-x-diagonal -translate-y-diagonal-down`,
    SW = `[text-anchor:end] -translate-x-diagonal translate-y-diagonal-down`,
    NE = 'translate-x-diagonal -translate-y-diagonal-down',
    SE = 'translate-x-diagonal translate-y-diagonal-down',
    ENE = 'translate-x-half-diagonal-x -translate-y-half-diagonal-y',
    ESE = 'translate-x-half-diagonal-x translate-y-half-diagonal-y',
    WNW = '-translate-x-half-diagonal-x -translate-y-half-diagonal-y [text-anchor:end]',
    WSW = '-translate-x-half-diagonal-x translate-y-half-diagonal-y [text-anchor:end]',
}

export const stopDefinitionSlice = createSlice({
    name: 'stopDefinition',
    initialState: {},
    reducers: {
        addStopDefinition: (state, action: PayloadAction<StopDefinition>) => {
            const data = action.payload;
            state[data.stationCode] = { ...data, location: { x: +data.location.x.toFixed(4), y: +data.location.y.toFixed(4) } };
        },
    },
});

export const { addStopDefinition } = stopDefinitionSlice.actions;

export default stopDefinitionSlice.reducer;

const selectStopDefinition = (state, stationCode: string): StopDefinition => state?.stopDefinition?.[stationCode];
const selectStopX = (state, stationCode: string) => selectStopDefinition(state, stationCode)?.location?.x;
const selectStopY = (state, stationCode: string) => selectStopDefinition(state, stationCode)?.location?.y;

export const selectStopLocation = createSelector(
    [(state, stationCode: string) => selectStopX(state, stationCode), (state, stationCode: string) => selectStopY(state, stationCode)],
    (x, y) => {
        return { x, y };
    }
);
export const selectStopTextAlignment = (state, stationCode: string): string =>
    selectStopDefinition(state, stationCode)?.textAlignment || TextAlignment.RIGHT;
export const selectStopHideText = (state, stationCode: string): boolean => selectStopDefinition(state, stationCode)?.hideText || false;
export const selectStopStrokeColor = (state, stationCode: string): string =>
    selectStopDefinition(state, stationCode)?.strokeColor || 'stroke-black';
export const selectStopFillColor = (state, stationCode: string): string =>
    selectStopDefinition(state, stationCode)?.fillColor || 'fill-white';
export const selectDisplayStationCode = (state, stationCode: string): string =>
    selectStopDefinition(state, stationCode)?.displayStationCode || stationCode;
export const selectMidpoint = createSelector(
    [
        (state) => state?.stopDefinition,
        (state, firstStationCode, secondStationCode) => selectStopLocation(state, firstStationCode),
        (state, firstStationCode, secondStationCode) => selectStopLocation(state, secondStationCode),
    ],
    (_state, firstStop, secondStop) => {
        if (firstStop && secondStop) {
            return midPoint(firstStop, secondStop);
        }
        throw Error('Could not find locations for midpoint.');
    }
);
export const selectIntersection = createSelector(
    [
        (state) => state?.stopDefinition,
        (state, firstStationCode, firstDirection, secondStationCode, secondDirection) => {
            return { location: selectStopLocation(state, firstStationCode), direction: firstDirection };
        },
        (state, firstStationCode, firstDirection, secondStationCode, secondDirection) => {
            return { location: selectStopLocation(state, secondStationCode), direction: secondDirection };
        },
    ],
    (_state, start, end) => {
        if (start && end) {
            return findIntersectionFromSlopes({ start, end });
        }
        throw Error('Could not find locations for midpoint.');
    }
);
export interface TextDefinition extends TextData {
    textAlignment?: string;
}
export const selectOffset = createSelector(
    [
        (state) => state?.stopDefinition,
        (state, firstStationCode, secondStationCode) => selectStopLocation(state, firstStationCode),
        (state, firstStationCode, secondStationCode) => selectStopLocation(state, secondStationCode),
    ],
    (_state, firstStop, secondStop) => {
        if (firstStop && secondStop) {
            return findOffset(firstStop, secondStop);
        }
        throw Error('Could not find locations for midpoint.');
    }
);
