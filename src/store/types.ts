export enum Status {
    Success = 'success',
    Pending = 'pending',
    Failed = 'failed',
}

export type CommonStoreState<D> = {
    status?: Status;
    error?: string;
    data?: D;
}
