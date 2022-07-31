import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from '@reduxjs/toolkit';

export type BaseActions<T> = {
    pending: ActionCreatorWithoutPayload<string>;
    success: ActionCreatorWithPayload<T, string>;
    failed: ActionCreatorWithPayload<string, string>;
}

export type AsyncRequest<T> = () => Promise<T>;
