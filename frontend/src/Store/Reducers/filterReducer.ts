import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { setFilteredDogs, setFilterIsActive } from "../Actions/filterActions";
import { dogDataTypes } from "@Components/organisms/SectionDogs/SectionDogs.types";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterIsActive: false,
    filteredDogs: [] as dogDataTypes[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setFilterIsActive, (state, action) => {
        state.filterIsActive = action.payload;
      })
      .addCase(setFilteredDogs, (state, action) => {
        state.filteredDogs = action.payload;
        console.log("Filtered dogs:", action.payload);
      });
  },
});

export const selectFilteredDogs = (state: RootState) => state.filter.filteredDogs;
export const selectFilterIsActive = (state: RootState) => state.filter.filterIsActive;
export default filterSlice.reducer;
