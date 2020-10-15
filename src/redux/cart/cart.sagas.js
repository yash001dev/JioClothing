import {all,call,takeLatest,put} from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import {clearCart} from './cart.actions';

export function* clearCartOutSignOut(){
    yield put(clearCart());
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartOutSignOut)
}

export function* cartSagas(){
    yield all([call(onSignOutSuccess)]); 
}