import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AppDispatch, RootState } from "../store";
import { selectAccessToken } from "@Store/Reducers/petsReducer";
import { dogDataTypes } from "@Components/organisms/SectionDogs/SectionDogs.types";

export const fetchAllDogsData = createAsyncThunk<
dogDataTypes[],
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("pets/fetchDogsData", async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const { dataFetched, dogsData } = state.pets;

  if (dataFetched) {
    // Data already fetched, return it from the state
    return dogsData;
  }

  try {
    const accessToken = selectAccessToken(getState()); // Use the selector to get the access token
    if (!accessToken) {
      // Access token is not available yet, wait for the next render
      console.error("Error fetching Petfinder access token:");
      return [];
    }
    const response = await axios.get(
      `https://api.petfinder.com/v2/animals`,
      {
        params: {
          type: "dog",
          limit: 100,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data.animals;
  } catch (error: any) {
    console.error("Error fetching pet types:", error);
    return rejectWithValue(error); // Use rejectWithValue to pass error information
  }
});