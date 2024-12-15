/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Coordinates, RelativeCoordinates } from '../../../interfaces/Dimensions';
import { midPoint, offsetCoordinates, scale } from '../../../utils/PathUtils';
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
        addStopDefinition: (state, action: PayloadAction<StopDefinition>) => {
            const data = action.payload;
            state[data.stationCode] = data;
        },
    },
});

export const { addStopDefinition } = stopDefinitionSlice.actions;

export default stopDefinitionSlice.reducer;

const selectStopDefinition = (state, stationCode: string): StopDefinition => state?.stopDefinition?.[stationCode];
export const selectStopLocation = (state, stationCode: string): Coordinates => selectStopDefinition(state, stationCode)?.location;
export const selectStopTextAlignment = (state, stationCode: string): string =>
    selectStopDefinition(state, stationCode)?.textAlignment || TextAlignment.RIGHT;
export const selectStopHideText = (state, stationCode: string): boolean => selectStopDefinition(state, stationCode)?.hideText || false;
export const selectStopStrokeColor = (state, stationCode: string): string =>
    selectStopDefinition(state, stationCode)?.strokeColor || 'stroke-black';
export const selectStopFillColor = (state, stationCode: string): string =>
    selectStopDefinition(state, stationCode)?.fillColor || 'fill-white';
export const selectDisplayStationCode = (state, stationCode: string): string =>
    selectStopDefinition(state, stationCode)?.displayStationCode || stationCode;
export const selectMidpoint = (state, firstStationCode: string, secondStationCode: string): Coordinates => {
    const firstStop = selectStopLocation(state, firstStationCode);
    const secondStop = selectStopLocation(state, secondStationCode);
    if (!firstStop) {
        throw new Error(`could not find undefined location ${firstStationCode}`);
    }
    if (!secondStop) {
        throw new Error(`could not find undefined location ${secondStationCode}`);
    }
    return midPoint(firstStop, secondStop);
};

export interface TextDefinition extends TextData {
    textAlignment?: string;
}

export const addStopDefinitions = (stops: StopDefinition[]) => {
    return (dispatch) => {
        stops.forEach((stop) => dispatch(addStopDefinition(stop)));
    };
};

export const offsetSingleStop = (originStationCode: string, newStationData: StopMetadata, ...offsets: RelativeCoordinates[]) => {
    return (dispatch, getState) => {
        const originalLocation = selectStopLocation(getState(), originStationCode);
        if (!originalLocation) {
            console.warn('Could not offset new stations because the original location is not in redux.', originStationCode, newStationData);
            return;
        }
        const newLocation = offsetCoordinates(originalLocation, ...offsets);
        console.debug(originStationCode, originalLocation, newStationData.stationCode, { newStationData, newLocation }, offsets);
        dispatch(addStopDefinition({ ...newStationData, location: newLocation }));
    };
};

export const offsetEquallySpacedStops = (originStationCode: string, newStationData: StopMetadata[], offset: RelativeCoordinates) => {
    return (dispatch, getState) => {
        const originalLocation = selectStopLocation(getState(), originStationCode);
        if (!originalLocation) {
            console.warn('Could not offset new stations because the original location is not in redux.', originStationCode, newStationData);
            return;
        }
        dispatch(
            addStopDefinitions(
                newStationData.map((newStation, index) => {
                    return {
                        ...newStation,
                        location: offsetCoordinates(originalLocation, scale(offset, index + 1)),
                    };
                })
            )
        );
    };
};

interface GridOffsetStop {
    stationCode: string;
    newStationData: StopMetadata;
}

export const offsetGridOfStops = (gridOffsetStops: GridOffsetStop[], ...offsets: RelativeCoordinates[]) => {
    return (dispatch) => {
        gridOffsetStops.forEach((gridOffsetStop) => {
            const { stationCode, newStationData } = gridOffsetStop;
            dispatch(offsetSingleStop(stationCode, newStationData, ...offsets));
        });
    };
};
