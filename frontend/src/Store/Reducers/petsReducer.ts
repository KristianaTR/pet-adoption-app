import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchDogsData, fetchPetfinderToken, fetchPetTypes, updateDogsData } from "../Actions/petsActions";
import { PetType } from "@Components/organisms/SectionAdopt/SectionAdopt.types";
import { dogDataTypes } from "@Components/organisms/SectionDogs/SectionDogs.types";

export const petsSlice = createSlice({
  name: "pets",
  initialState: {
    accessToken: "",
    petTypes: [] as PetType[],
    dogsData: [] as dogDataTypes[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPetfinderToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        // console.log("Access Token:", action.payload);
      })
      .addCase(fetchPetTypes.fulfilled, (state, action) => {
        state.petTypes = action.payload;
        // console.log("Pet Types API Response:", action.payload);
      })
      .addCase(fetchDogsData.fulfilled, (state, action) => {
        state.dogsData = action.payload;
        console.log("Dogs data API Response:", action.payload);
      })
      .addCase(updateDogsData, (state, action) => { // Handle the new action
        state.dogsData = action.payload;
        console.log("Updated Dogs data API Response:", action.payload);
      })
      .addCase(fetchPetfinderToken.rejected, (state, action) => {
        console.error("Error fetching Petfinder access token:", action.error);
        state.accessToken = ""; // Set a default or empty string
      })
      .addCase(fetchPetTypes.rejected, (state, action) => {
        console.error("Error fetching pet types:", action.error);
        state.petTypes = []; // Set a default or empty array
      })
      .addCase(fetchDogsData.rejected, (state, action) => {
        console.error("Error fetching dogs data:", action.error);
        state.dogsData = []; // Set a default or empty array
      });
  },
});

// export const { setPetsList } = petsSlice.actions;
export const selectAccessToken = (state: RootState) => state.pets.accessToken;
export const selectPetTypes = (state: RootState) => state.pets.petTypes;
export const selectDogsData = (state: RootState) => state.pets.dogsData;
export default petsSlice.reducer;
