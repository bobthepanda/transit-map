import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CSVData } from '../../../interfaces/Stops';

export const stopsSlice = createSlice({
  name: 'stops',
  initialState: {},
  reducers: {
    load: (state, action: PayloadAction<CSVData[]>) => {
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

export const { load } = stopsSlice.actions;

export default stopsSlice.reducer;
