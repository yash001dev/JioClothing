import UserActionTypes from './user.types';

const INITIAL_STATE={
    currentUser:null,
    error:null,
}

export const googleSignInStart=()=>({
    type:UserActionTypes.GOOGLE_SIGN_IN_START,
});


export const emailSignInStart=()=>({
    type:UserActionTypes.EMAIL_SIGN_IN_START,
});

export const  signInSuccess=emailAndPassword=>({
    type:UserActionTypes.SIGN_IN_SUCCESS,
    payload:emailAndPassword
});

export const signInFailure=error=>({
    type:UserActionTypes.SIGN_IN_FAILURE,
    payload:error
});