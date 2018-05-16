import React from 'react';
import thunk from 'redux-thunk';
import { GET_MESSAGES } from "../constants/constants";

const initialState = {
  loading: false,
  messages: []
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES: return {loading: true, messages: []};
    default: return state;
  }
};

const getMessagesThunk = dispatch => {
  dispatch({type: GET_MESSAGES})
  fetch("https://wendy-test-autotelic.herokuapp.com/messages/?format=json")
    .then((messages) => {
      console.log(messages)
    })
    .catch((err) => {
      console.log(err)
    })
}

export default { messageReducer, getMessagesThunk };