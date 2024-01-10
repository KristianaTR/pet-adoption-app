import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../App/store";

const getInitialPetsList = () => {
    
}

const initialState = {
    petsList: getInitialPetsList(),
};

export const petsSlice = createSlice({
    name: "pets",
    initialState,
    reducers: {
        setPetsList: (state, action ) => {
            state.petsList = action.payload;
            //save fetched data into database?!?
        }
    }
});

export const { setPetsList } = petsSlice.actions;
export const selectPets = (state: RootState) => state.pets;

export default petsSlice.reducer;