import { createAction } from "@reduxjs/toolkit";
import { dogDataTypes } from "@Components/organisms/SectionDogs/SectionDogs.types";

export const setFilterIsActive = createAction<boolean>(
  "filter/setFilterIsActive"
);

export const setFilteredDogs = createAction<dogDataTypes[]>(
  "pets/setFilteredDogs"
);
