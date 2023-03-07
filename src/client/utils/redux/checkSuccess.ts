import {Status} from '__store/types';

export function checkSuccess(status: Status) {
    return status === Status.Success;
}
