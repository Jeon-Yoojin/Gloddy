import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    email: string | null;
    name: string | null;
    school: string | null;
    birth: string | null;
    gender: string | null;
    personalities: Array<string> | null;
}

interface AuthSate {
    user: User | {
        email: null,
        name: null,
        school: null,
        birth: null,
        gender: null,
        personalities: null
    };
}

const initialState: AuthSate = {
    user: {
        email: null,
        name: null,
        school: null,
        birth: null,
        gender: null,
        personalities: null
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authorize(state, action:PayloadAction<User>) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = {
                email: null,
                name: null,
                school: null,
                birth: null,
                gender: null,
                personalities: null
            };
        },
        setEmail(state, action:PayloadAction<string>) {
            state.user.email = action.payload;
        }
    },
});

export default authSlice.reducer;
export const {authorize, logout, setEmail} = authSlice.actions;