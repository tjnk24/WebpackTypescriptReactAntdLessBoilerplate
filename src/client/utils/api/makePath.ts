export const makePath = (mainRoute: string, params: (string | number)[]) => `${mainRoute}/${params.join('/')}`;
