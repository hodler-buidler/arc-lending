import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { AppMessage } from '@typings/app';
import {
  showMessage,
  removeMessage,
} from './actions';

export interface AppState {
  messages: Array<AppMessage & { uuid: string }>,
};

export const initialState: AppState = {
  messages: [],
};

export default createReducer(initialState, builder => 
  builder
    .addCase(showMessage, (state, { payload }) => {
      state.messages.push({
        ...payload,
        uuid: uuidv4(),
      });
    })
    .addCase(removeMessage, (state, { payload }) => {
      const messageIdx = state.messages.findIndex(message => message.uuid === payload.uuid);
      if (messageIdx > -1) state.messages.splice(messageIdx, 1);
    })
);