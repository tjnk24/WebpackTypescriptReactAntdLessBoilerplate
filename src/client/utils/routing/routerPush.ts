import isEmpty from 'lodash/isEmpty';
import {stringify} from 'query-string';

import {commonActions} from '__commonActions';

import {RouterPushData, RouterState} from './types';

const push = (path: string, state?: RouterState) => {
    commonActions.router.push(path, state);
};

export const routerPush = <T>(
    {path, queries, state}: RouterPushData<T>,
    makeHref?: boolean,
) => {
    const url = isEmpty(queries) ? path : `${path}?${stringify(queries, {skipEmptyString: true, skipNull: true})}`;

    if (makeHref) {
        return url;
    }

    push(url, state);
};
