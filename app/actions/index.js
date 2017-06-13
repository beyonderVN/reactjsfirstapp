export const GET_NOTE_LIST = 'GET_NOTE_LIST'
export const UPDATE_NOTE_LIST = 'UPDATE_NOTE_LIST'

function action(type, payload = {}) {
  return {type, ...payload}
}

export function updateNoteList(noteList) {
  return {
    type: UPDATE_NOTE_LIST,
    noteList: noteList
  }
}

export function getNoteList() {
  return {
    type: GET_NOTE_LIST
  }
}

export const loadNoteList = () => action(GET_NOTE_LIST, {})