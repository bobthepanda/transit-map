/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Coordinates } from '../../../interfaces/Dimensions';
import { StopDefinition } from '../../../symbols/BasicStop';

export const stopLocationSlice = createSlice({
    name: 'stopLocation',
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

export const { addStopLocation } = stopLocationSlice.actions;

export default stopLocationSlice.reducer;

const selectStopLocation = (state, stationCode: string): StopDefinition => state?.stopLocation?.[stationCode];
export const selectStopLocationCoordinates = (state, stationCode: string): Coordinates => selectStopLocation(state, stationCode)?.location;
