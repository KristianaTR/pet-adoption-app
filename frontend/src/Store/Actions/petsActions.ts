import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AppDispatch, RootState } from "../store";
import { selectAccessToken } from "@Store/Reducers/petsReducer";
import { dogDataTypes } from "@Components/organisms/SectionDogs/SectionDogs.types";
import { PetType } from "@Components/organisms/SectionAdopt/SectionAdopt.types";

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
    return response.data.types;
  } catch (error: any) {
    console.error("Error fetching pet types:", error);
    return rejectWithValue(error); // Use rejectWithValue to pass error information
  }
});

export const fetchDogsData = createAsyncThunk<
dogDataTypes[],
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("pets/fetchDogsData", async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const { dataFetched, dogsData } = state.pets;

  // if (dataFetched) {
  //   // Data already fetched, return it from the state
  //   return dogsData;
  // }

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

export const updateDogsData = createAction<dogDataTypes[]>(
  "pets/updateDogsData"
);

export const fetchMoreDogsData = createAsyncThunk<
  dogDataTypes[],
  number, // Assuming the parameter is the page number
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  "pets/fetchMoreDogsData",
  async (pageNumber, { getState, rejectWithValue }) => {
    try {
      const accessToken = selectAccessToken(getState());
      if (!accessToken) {
        console.error("Error fetching Petfinder access token:");
        return [];
      }
      const response = await axios.get(`https://api.petfinder.com/v2/animals`, {
        params: {
          type: "dog",
          page: pageNumber,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.animals;
    } catch (error: any) {
      console.error("Error fetching more dogs data:", error);
      return rejectWithValue(error);
    }
  }
);


// export const fetchDogsData = createAsyncThunk<
// dogDataTypes[],
//   void,
//   {
//     dispatch: AppDispatch;
//     state: RootState;
//   }
// >("pets/fetchDogsData", async (_, { getState, rejectWithValue }) => {
//   const state = getState();
//   const { dataFetched, dogsData } = state.pets;

//   if (dataFetched) {
//     // Data already fetched, return it from the state
//     return dogsData;
//   }

//   try {
//     const accessToken = selectAccessToken(getState()); // Use the selector to get the access token
//     if (!accessToken) {
//       // Access token is not available yet, wait for the next render
//       console.error("Error fetching Petfinder access token:");
//       return [];
//     }
//     const response = await axios.get(
//       `https://api.petfinder.com/v2/animals`,
//       {
//         params: {
//           type: "dog",
//           // limit: 100,
//         },
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     console.log(response.data.animals)
//     return response.data.animals;
//   } catch (error: any) {
//     console.error("Error fetching pet types:", error);
//     return rejectWithValue(error); // Use rejectWithValue to pass error information
//   }
// });
