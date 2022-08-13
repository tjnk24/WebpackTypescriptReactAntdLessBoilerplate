import {Stringifiable} from 'query-string';

export interface RouterState {
    from?: string;
}

export interface RouterPushData<T>{
    path: string;
    queries?: {[p in keyof T]: Stringifiable | Stringifiable[]};
    state?: RouterState;
}
