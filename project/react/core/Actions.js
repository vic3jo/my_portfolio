/**
 * Author: Victor Trejo.
 * Description: This file contains all the Actions that
 *              be performed.
 */
import URLS from './URLS';
import ActionTypes from './ActionTypes';
import axios from 'axios';


/**
 * Makes a get request to a given url and notifies a given
 * type of action event.
 * @param  {string} url               target url
 * @param  {string} successActionType action type to be notified on success
 * @param  {string} errorActionType   action type to be notified on error
 * @return {function}                 a function that can be dispatch by
 *                                    the store's dispatch function.
 */
const loadAndNotify = (
    url,
    successActionType,
    errorActionType = ActionTypes.ERROR_LOADING_DATA
) => {
  (
    (dispatch) => {
      axios.get(url).then((response) => {
        dispatch({
          type: successActionType,
          payload: response.data,
        });
      }).catch((response) => {
        dispatch({
          type: errorActionType,
          payload: response,
        });
      });
    }
  );
};


/**
 * Loads all the necessary data from the API for each section
 * in the web page.
 * @param  {function} dispatch store's dispatch function.
 */
const loadData = (dispatch) => {
  Object.keys(URLS).forEach((key, index) => {
    dispatch(
      loadAndNotify(
        URLS[key],
        ActionTypes[key]
      )
    );
  });
};

export default loadData;
