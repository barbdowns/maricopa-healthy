// ACTION TYPES and ACTION CREATORS
export const FETCH_RESOURCES_LOADING = "FETCH_RESOURCES_LOADING";
export const fetchResourcesLoading = () => ({
  type: FETCH_RESOURCES_LOADING
});

export const FETCH_RESOURCES_SUCCESS = "FETCH_RESOURCES_SUCCESS";
export const fetchResourcesSuccess = resources => ({
  type: FETCH_RESOURCES_SUCCESS,
  payload: resources
});

export const FETCH_RESOURCES_ERROR = "FETCH_RESOURCES_ERROR";
export const fetchResourcesError = err => ({
  type: FETCH_RESOURCES_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS
