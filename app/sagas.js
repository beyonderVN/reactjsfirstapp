import { call, put, takeLatest } from 'redux-saga/effects'
import {fetchNoteList} from './api'

function* loadNoteList(action) {
   try {
        console.log("fetchNoteList")
        const data = yield call(fetchNoteList)
        yield put({type: "ADD", list:data})
   } catch (error) {
        yield put({type: "FETCH_FAILED", error})
   }
}

export default function* sagas() {
    // console.log("helosaga")
  yield takeLatest('FETCH_NOTE_LIST', loadNoteList)
}
