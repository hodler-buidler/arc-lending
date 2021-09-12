import { createAction } from '@reduxjs/toolkit';
import { AppMessage } from '@typings/app';

export const showMessage = createAction<AppMessage>('app/showMessage');
export const removeMessage = createAction<AppMessage & { uuid: string }>('app/removeMessage');
