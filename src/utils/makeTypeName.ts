export const makeTypedName = <T extends object>(key: keyof T) => {
    return key;
};
