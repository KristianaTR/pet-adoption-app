// export const fetchData = () => async (dispatch) => {
//   try {
//     // Make API request to fetch data
//     const response = await fetch("http://localhost:3000/get-petfinder-data");
//     const data = await response.json();

//     // Dispatch an action to store the data
//     dispatch(storeData(data));
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// export const storeData = (data) => ({
//   type: "STORE_DATA",
//   payload: data,
// });

export {}
