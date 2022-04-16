export const makeTypeName = <T extends object>(key: keyof T) => {
    return key;
};
