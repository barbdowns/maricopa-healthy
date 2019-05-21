import axios from 'axios'

// ACTION TYPES and ACTION CREATORS
export const FETCH_MARKETS_LOADING = "FETCH_MARKETS_LOADING";
const fetchMarketsLoading = () => ({ 
  type: FETCH_MARKETS_LOADING 
})

export const FETCH_MARKETS_SUCCESS = "FETCH_MARKETS_SUCCESS";
const fetchMarketsSuccess = (markets) => ({ 
  type: FETCH_MARKETS_SUCCESS, 
  payload: markets 
})

export const FETCH_MARKETS_ERROR = "FETCH_MARKETS_ERROR";
const fetchMarketsError = (error) => ({ 
  type: FETCH_MARKETS_ERROR, 
  payload: error 
})

// ASYNC ACTION CREATORS

export const fetchMarkets = () => {
  return async dispatch => {
    dispatch(fetchMartketsLoading());
    try {
      const response = await axios.get("http://localhost:9000/martkets");
      dispatch(fetchMartketsSuccess(response.data));
    } catch (err) {
      dispatch(fetchMartketsError(err));
    }
  };
}
