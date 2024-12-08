/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { CSVData } from '../../../interfaces/CSVData';

export interface TextData {
    text?: string;
    subtitleText?: string;
}

export const stopTextSlice = createSlice({
    name: 'stopText',
    initialState: {},
    reducers: {
        loadCSVData: (state, action: PayloadAction<CSVData[]>) => {
            const data: CSVData[] = action.payload;
            data.forEach((d) => {
                state[d.stationCode] = {
                    stationCode: d.stationCode,
                    text: d.eng,
                    subtitleText: d.jp,
                };
            });
        },
    },
});

export const { loadCSVData } = stopTextSlice.actions;

export default stopTextSlice.reducer;

const PLACEHOLDER_TEXT = 'Placeholder text';
const selectCSVData = (state: any, stationCode: string): TextData => state?.stopText?.[stationCode];
export const selectStopText = (state: any, stationCode: string): string => selectCSVData(state, stationCode)?.text || PLACEHOLDER_TEXT;
export const selectStopSubtitleText = (state: any, stationCode: string): string =>
    selectCSVData(state, stationCode)?.subtitleText || PLACEHOLDER_TEXT;
