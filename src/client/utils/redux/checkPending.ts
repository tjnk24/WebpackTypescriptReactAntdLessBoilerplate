import {Status} from '__store/types';

export function checkPending(status: Status) {
    return status === Status.Pending;
}
