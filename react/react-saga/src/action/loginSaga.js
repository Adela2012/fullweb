import { LOGIN_SAGA, LOGIN_SUCCESS,LOGIN_FAILURE, REQUEST } from "./const";
import LoginService from "../service/login";
import {call, put, takeEvery, take, fork} from 'redux-saga'

function loginHandle(action) {
    yield put({
        type: REQUEST
      })
    try {
        let res = yield call(LoginService.login, action.payload)
        let res1 = yield call(LoginService.getMoreUserInfo, res)
        yield put({
            type: LOGIN_SUCCESS,
            payload: { ...res1 }
        })
    } catch (error) {
        yield put({
            type: LOGIN_FAILURE,
            payload: err
        })
    }
}


function* loginSaga() {
    yield takeEvery(LOGIN_SAGA, loginHandle)
}

export default loginSaga