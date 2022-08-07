declare module 'history' {
    export interface Location<S = unknown> {
        pathname: string;
        search: string;
        state: S;
        hash: string;
        key?: string;
    }

    export const createBrowserHistory: () => any;
}
