import {configuredApiInstance} from '__utils/api/apiTransport';

import {API_ENDPOINT} from './consts';
import {UsersApiGetResponse, UsersApiQueryParamsGet} from './types';

class UsersApi {
    public get = (params?: UsersApiQueryParamsGet) =>
        configuredApiInstance.get<UsersApiGetResponse[]>(API_ENDPOINT, {params})
            .then(({data}) => data);
}

export const apiInstance = new UsersApi();
