import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AppDispatch, RootState } from "../store";
import { selectAccessToken } from "@Store/Reducers/petsReducer";

interface PetType {
  name: string;
}

export const fetchPetfinderToken = createAsyncThunk<string>(
  "pets/fetchPetfinderToken",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/get-petfinder-token"
      );
      console.log("Token API Response:", response);
      return response.data.accessToken;
    } catch (error) {
      console.error("Error fetching Petfinder access token:", error);
      throw error;
    }
  }
);

export const fetchPetTypes = createAsyncThunk<
PetType[],
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("pets/fetchPetTypes", async (_, { getState, rejectWithValue }) => {
  try {
    const accessToken = selectAccessToken(getState()); // Use the selector to get the access token
    if (!accessToken) {
      // Access token is not available yet, wait for the next render
      console.error("Error fetching Petfinder access token:");
      return [];
    }
    const response = await axios.get("https://api.petfinder.com/v2/types", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.petTypes;
  } catch (error: any) {
    console.error("Error fetching pet types:", error);
    return rejectWithValue(error); // Use rejectWithValue to pass error information
  }
});
