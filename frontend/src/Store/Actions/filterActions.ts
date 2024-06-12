import { createAction } from "@reduxjs/toolkit";
import { dogDataTypes } from "@Components/organisms/SectionDogs/SectionDogs.types";

export const setSearchIsActive = createAction<boolean>(
  "filter/setSearchIsActive"
);

export const setFilterIsActive = createAction<boolean>(
  "filter/setFilterIsActive"
);

export const setFilteredDogs = createAction<dogDataTypes[]>(
  "pets/setFilteredDogs"
);
