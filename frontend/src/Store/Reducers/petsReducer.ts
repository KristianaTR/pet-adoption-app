import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchPetfinderToken, fetchPetTypes } from "../Actions/petsActions";

interface PetType {
  name: string;
}

export const petsSlice = createSlice({
  name: "pets",
  initialState: {
    accessToken: "",
    petTypes: [] as PetType[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPetfinderToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        console.log("Access Token:", action.payload);
      })
      .addCase(fetchPetTypes.fulfilled, (state, action) => {
        state.petTypes = action.payload;
        console.log("Pet Types API Response:", action.payload);
      })
      .addCase(fetchPetfinderToken.rejected, (state, action) => {
        console.error("Error fetching Petfinder access token:", action.error);
        state.accessToken = ""; // Set a default or empty string
      })
      .addCase(fetchPetTypes.rejected, (state, action) => {
        console.error("Error fetching pet types:", action.error);
        state.petTypes = []; // Set a default or empty array
      });
  },
});

// export const { setPetsList } = petsSlice.actions;
export const selectAccessToken = (state: RootState) => state.pets.accessToken;
export const selectPetTypes = (state: RootState) => state.pets.petTypes;

export default petsSlice.reducer;
