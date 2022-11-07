import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    email: string | null;
    name: string | null;
    school: string | null;
    birth: string | null;
    gender: string | null;
    personalities: Array<string> | null;
}

export interface AuthToken {
    token: string | null;
}

export interface LoginIndicator{
    isLoading: boolean,
    isSignout: boolean
}

interface AuthState {
    loginIndicator: LoginIndicator | {
        isLoading: true,
        isSignOut: false
    }
    authToken: AuthToken | {
        token: null,
    }
    user: User | {
        email: null,
        name: null,
        school: null,
        birth: null,
        gender: null,
        personalities: null
    };
}

const initialState: AuthState = {
    loginIndicator: {
        isLoading: true,
        isSignOut: false
    },
    authToken: {
        token: null
    },
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
        setToken(state, action:PayloadAction<string|null>){
            state.loginIndicator.isLoading = false;
            state.authToken.token = action.payload ? action.payload : null;
        },
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
export const {setToken, authorize, logout, setEmail} = authSlice.actions;