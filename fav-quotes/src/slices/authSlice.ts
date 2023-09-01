import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserInfo = {
 
  name: string;
  email: string;
};

type AuthState = {
  userInfo: UserInfo | null;
};



// Function to safely parse JSON from localStorage
const getLocalStorageItem = (key: string): UserInfo | null => {
  const item = localStorage.getItem(key);
  if (item === null) {
    return null;
  }
  try {
    return JSON.parse(item);
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    return null;
  }
};

// Function to save user info to localStorage
const saveUserInfoToLocalStorage = (userInfo: UserInfo) => {
  const userInfoToSave = {
 
    name: userInfo.name,
    email: userInfo.email,
  };
  localStorage.setItem("userInfo", JSON.stringify(userInfoToSave));
};
const initialState: AuthState = {
    userInfo: getLocalStorageItem("userInfo"),
  };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      saveUserInfoToLocalStorage(action.payload);
    },
    clearCredentials: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
