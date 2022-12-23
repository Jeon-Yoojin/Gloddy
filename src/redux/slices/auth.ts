import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    userId: number | null;
    email: string | null;
    name: string | null;
    school: string | null;
    birth: string | null;
    gender: string | null;
    personalities: Array<string> | null;
    profileImage: string | null;
}

export interface AuthToken {
    token: string | null;
}

export interface LoginIndicator{
    isLoading: boolean,
    isSignout: boolean,
    isSignedIn: boolean
}

interface AuthState {
    loginIndicator: LoginIndicator | {
        isLoading: true,
        isSignOut: false,
        isSignedIn: false
    }
    authToken: AuthToken | {
        token: null,
    }
    user: User | {
        userId: null,
        email: null,
        name: null,
        school: null,
        birth: null,
        gender: null,
        personalities: null,
        profileImage: null
    };
}

const initialState: AuthState = {
    loginIndicator: {
        isLoading: true,
        isSignOut: false,
        isSignedIn: false
    },
    authToken: {
        token: null
    },
    user: {
        userId: null,
        email: null,
        name: null,
        school: null,
        birth: null,
        gender: null,
        personalities: null,
        profileImage: null
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
        signIn(state, action:PayloadAction<number>) {
            state.loginIndicator.isSignedIn = true;
            state.user.userId = action.payload;
            console.log("isSignedIn in onSuccess", state.loginIndicator.isSignedIn);
        },
        logout(state) {
            state.user = {
                userId: null,
                email: null,
                name: null,
                school: null,
                birth: null,
                gender: null,
                personalities: null,
                profileImage: null
            };
        },
        setEmail(state, action:PayloadAction<string>) {
            state.user.email = action.payload;
        }
    },
});

export default authSlice.reducer;
export const {setToken, authorize, signIn, logout, setEmail} = authSlice.actions;