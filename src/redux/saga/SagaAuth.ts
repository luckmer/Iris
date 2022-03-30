import { takeLatest } from "redux-saga/effects";
import sagaActions from "./sagaActions";

function* registerSaga() {}

function* SagaAuth() {
  yield takeLatest(sagaActions.REGISTER_USER, registerSaga);
}

export default SagaAuth;
