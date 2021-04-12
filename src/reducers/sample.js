// Types d’actions
// ---------------

const ADD_SAMPLE = 'react-base/sample/ADD_SAMPLE'
const REMOVE_SAMPLE = 'react-base/sample/REMOVE_SAMPLE'
const UPDATE_SAMPLE = 'react-base/sample/UPDATE_SAMPLE'

// Réducteur
// ---------
const defaultSample = []

export default function reduceSample(state = defaultSample, action) {
  switch (action.type) {
    case ADD_SAMPLE: {
      const { name, target, units } = action.payload
      const id = state.reduce((max, { id }) => (max > id ? max : id), -1) + 1
      return [...state, { id, name, target, units }]
    }

    case REMOVE_SAMPLE:
      return state.filter(({ id }) => id !== action.payload.id)

    case UPDATE_SAMPLE: {
      return state.map((sample) =>
        sample.id === action.payload.id ? action.payload : sample
      )
    }

    default:
      return state
  }
}

// Action Creators
// ---------------

export function addSample(name, target, units) {
  return { type: ADD_SAMPLE, payload: { name, target, units } }
}

export function removeSample(id) {
  return { type: REMOVE_SAMPLE, payload: { id } }
}

export function updateSample(id, name, target, units) {
  return { type: UPDATE_SAMPLE, payload: { id, name, target, units } }
}
