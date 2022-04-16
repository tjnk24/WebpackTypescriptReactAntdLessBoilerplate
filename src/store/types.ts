export enum Status {
    Success = 'success',
    Pending = 'pending',
    Failed = 'failed',
}

export type CommonStoreState<D> = {
    status: Status | null;
    error: string | null;
    data?: D;
}
