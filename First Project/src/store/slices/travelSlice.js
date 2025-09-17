import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  packages: [],
  selectedPackage: null,
  itinerary: [],
  loading: false,
  error: null,
};

const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    setPackages: (state, action) => {
      state.packages = action.payload;
      state.error = null;
    },
    setSelectedPackage: (state, action) => {
      state.selectedPackage = action.payload;
    },
    setItinerary: (state, action) => {
      state.itinerary = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setPackages, setSelectedPackage, setItinerary, setLoading, setError } = travelSlice.actions;
export default travelSlice.reducer; 