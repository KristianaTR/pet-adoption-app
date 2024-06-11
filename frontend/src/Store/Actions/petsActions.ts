import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AppDispatch, RootState } from "../store";
import { selectAccessToken } from "@Store/Reducers/petsReducer";
import { dogDataTypes } from "@Components/organisms/SectionDogs/SectionDogs.types";
import { PetType } from "@Components/organisms/SectionAdopt/SectionAdopt.types";
import moment from "moment";

const isAccessTokenExpired = (expiresAt: number) => {
  const currentTime = moment().unix();
  console.log("currentTime: ", currentTime);
  console.log("expiresAt: ", expiresAt);
  return currentTime > expiresAt;
};

export const fetchPetfinderToken = createAsyncThunk<string>(
  "pets/fetchPetfinderToken",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/get-petfinder-token"
      );
      console.log("Token API Response:", response);
      
      const accessToken = response.data.accessToken;
      const expiresIn = response.data.expiresIn;
      
      // Calculate expiration time
      const currentTime = moment().unix();
      const expiresAt = currentTime + expiresIn; 
      
      console.log("Expires At:", expiresAt);
      
      // Save access token expiration time to local storage
      localStorage.setItem("accessTokenExpiresAt", String(expiresAt)); // Store as string
      
      return accessToken;
      // return response.data.accessToken;
    } catch (error) {
      console.error("Error fetching Petfinder access token:", error);
      throw error;
    }
  }
);

// export const fetchPetfinderToken = createAsyncThunk<string>(
//   "pets/fetchPetfinderToken",
//   async () => {
//     const accessToken = localStorage.getItem("accessToken");
//     console.log(accessToken);
//     const expiresAt = Number(localStorage.getItem("accessTokenExpiresAt"));
//     console.log(expiresAt);
//     console.log(!isAccessTokenExpired(expiresAt));

//     if (accessToken && !isAccessTokenExpired(expiresAt)) {
//       console.log("Access Token is present and not expired.");
//       console.log("After storing - ExpiresAt: ", expiresAt);
//       console.log("Access Token:", accessToken);

//       return accessToken;
//     } else {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/get-petfinder-token"
//         );
//         const accessToken = response.data.accessToken;
//         const expiresIn = response.data.expiresIn;

//         console.log("Access Token:", accessToken);
//         console.log("Expires In:", expiresIn);

//         const currentTime = moment().unix();
//         const expiresAt = currentTime + expiresIn; // Calculate expiration time

//         console.log("Expires At:", expiresAt);

//         // Save access token and expiration time to local storage
//         localStorage.setItem("accessToken", accessToken);
//         localStorage.setItem("accessTokenExpiresAt", String(expiresAt)); // Store as string

//         return accessToken;
//       } catch (error) {
//         console.error(
//           "Error fetching or refreshing Petfinder access token:",
//           error
//         );
//         throw error;
//       }
//     }
//   }
// );

export const fetchPetTypes = createAsyncThunk<
  PetType[],
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("pets/fetchPetTypes", async (_, { getState, rejectWithValue, dispatch }) => {
  try {
    let accessToken = selectAccessToken(getState());
    console.log(accessToken);

    const expiresAt = Number(localStorage.getItem("accessTokenExpiresAt"));
    console.log(isAccessTokenExpired(expiresAt))
    // if (!accessToken || isAccessTokenExpired(expiresAt)) {
    //   // Access token is not available or has expired, fetch a new one
    //   const response = await dispatch(fetchPetfinderToken());
    //   accessToken = response.payload as string;
    // }
    
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

    localStorage.setItem("petTypes", JSON.stringify(response.data.types));
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
    const response = await axios.get(`https://api.petfinder.com/v2/animals`, {
      params: {
        type: "dog",
        limit: 100,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.animals;
  } catch (error: any) {
    console.error("Error fetching pet types:", error);
    return rejectWithValue(error); // Use rejectWithValue to pass error information
  }
});

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
