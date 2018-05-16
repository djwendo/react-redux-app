import React from 'react';
import { GET_MESSAGES } from "../constants/constants";

export const getMessages = messages => ({ type: "GET_MESSAGES", payload: messages});
