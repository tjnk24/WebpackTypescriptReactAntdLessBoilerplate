export type GeoLocation = {
    lat: string;
    lng: string;
}

export type Address = {
    city: string;
    geo: GeoLocation;
    street: string;
    suite: string;
    zipcode: string;
}

export type Company = {
    bs: string;
    catchPhrase: string;
    name: string;
}

export type UsersApiGetResponse = {
    id: number;
    email: string;
    address: Address;
    company: Company;
    name: string;
    phone: string;
    username: string;
    website: string;
}

export type UsersApiQueryParamsGet = {
    _limit: number;
};
