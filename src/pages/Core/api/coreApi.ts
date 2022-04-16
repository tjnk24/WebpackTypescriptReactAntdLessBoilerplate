import {configuredApiInstance} from '__utils/api/apiTransport';

import {API_ENDPOINT} from './consts';
import {CoreApiGetResponse, CoreApiQueryParamsGet} from './types';

class CoreApi {
    public get = (params?: CoreApiQueryParamsGet) =>
        configuredApiInstance.get<CoreApiGetResponse[]>(API_ENDPOINT, {params})
            .then(({data}) => data);
}

export const apiInstance = new CoreApi();
