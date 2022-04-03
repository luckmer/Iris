import { all } from "redux-saga/effects";
import SagaAuth from "./SagaAuth";

export default function* SagaCombiner() {
  yield all([SagaAuth()]);
}
