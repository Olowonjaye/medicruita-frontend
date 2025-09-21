import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  email: string | null;
  token: string | null;
  role: string | null;
  profilePicture: string | null;
  loading: boolean;
  error: boolean;
}

const initialState: AuthState = {
  email: null,
  token: null,
  role: null,
  profilePicture: null,
  loading: false,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, { payload }) => {
      state.token = payload.token;
      state.email = payload.email;
      state.role = payload.role;
      state.profilePicture = payload.profilePicture;
    },
    logOut: (state) => {
      state.token = null;
      state.email = null;
      state.role = null;
      state.profilePicture = null;
      state.loading = false;
      state.error = false;
      localStorage.clear();
    },
  },
});

export const { setAuthData, logOut } = authSlice.actions;
export default authSlice.reducer;
