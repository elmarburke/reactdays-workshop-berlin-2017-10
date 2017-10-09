const initialState = {
  conferenceTopics: ['react', 'angular', 'html', 'css']
}

const reducer = (state = initialState, action) => {
  return state
}

export default reducer

export const getAllConferenceTopics = (state) => state.data.conferenceTopics
