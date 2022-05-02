import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  priKey: string;
  pubKey: string;
  addr: string;
  isLoggedIn: boolean;
}

const initialState = {
  priKey: "",
  pubKey: "",
  addr: "",
  isLoggedIn: false,
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<UserState>) => {
      state.priKey = action.payload.priKey;
      state.pubKey = action.payload.pubKey;
      state.addr = action.payload.addr;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    remove: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { remove, update } = userSlice.actions;

export default userSlice.reducer;
