export const CHANGE_NAME     = 'CHANGE_NAME'
export const CHANGE_AGE      = 'CHANGE_AGE'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'
export const REQUEST_DATA         = 'REQUEST_DATA'
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS'
export const RECEIVE_DATA_FAILED  = 'RECEIVE_DATA_FAILED'

export const changeName = name => ({
  type: CHANGE_NAME,
  name,
})
export const changeAge = age => ({
  type: CHANGE_AGE,
  age,
})
export const initializeForm = () => ({
  type: INITIALIZE_FORM,
})
export const requestData = () => ({
  type: REQUEST_DATA,
})
export const receiveDataSuccess = characterArray => ({
  type: RECEIVE_DATA_SUCCESS,
  characterArray,
})
export const receiveDataFailed = () => ({
  type: RECEIVE_DATA_FAILED,
})