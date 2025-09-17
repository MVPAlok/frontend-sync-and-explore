import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TravelPackage {
  id: string;
  name: string;
  destination: string;
  duration: number;
  price: number;
  description: string;
  includes: string[];
  image: string;
  rating: number;
}

interface Itinerary {
  id: string;
  packageId: string;
  day: number;
  activities: {
    time: string;
    description: string;
    location: string;
  }[];
}

interface TravelState {
  packages: TravelPackage[];
  selectedPackage: TravelPackage | null;
  itinerary: Itinerary[];
  loading: boolean;
  error: string | null;
}

const initialState: TravelState = {
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
    setPackages: (state, action: PayloadAction<TravelPackage[]>) => {
      state.packages = action.payload;
      state.error = null;
    },
    setSelectedPackage: (state, action: PayloadAction<TravelPackage>) => {
      state.selectedPackage = action.payload;
    },
    setItinerary: (state, action: PayloadAction<Itinerary[]>) => {
      state.itinerary = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setPackages, setSelectedPackage, setItinerary, setLoading, setError } = travelSlice.actions;
export default travelSlice.reducer; 