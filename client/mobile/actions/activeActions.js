import axios from "axios";

// ACTION TYPES and ACTION CREATORS
export const FETCH_ACTIVE_LOADING = "FETCH_ACTIVE_LOADING";
export const fetchActiveLoading = () => ({
  type: FETCH_ACTIVE_LOADING
});

export const FETCH_ACTIVE_SUCCESS = "FETCH_ACTIVE_SUCCESS";
export const fetchActiveSuccess = activities => ({
  type: FETCH_ACTIVE_SUCCESS,
  payload: activities
});

export const FETCH_ACTIVE_ERROR = "FETCH_ACTIVE_ERROR";
const fetchActiveError = err => ({
  type: FETCH_ACTIVE_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS

export const fetchActive = () => dispatch => {
  dispatch(
    fetchActiveLoading()
  )
  return axios.get(`${apiUrl}/active`)
    .then(response => {
      dispatch(
        fetchActiveSuccess(response.data)
      )
    })
    .catch(err => {
      dispatch(
        fetchActiveError(err)
      )
    })
}
