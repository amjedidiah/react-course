type ObjectToConvert = {
    id?: string | number;
    [key: string]: any;
}

type ObjectConverted = {
    [key: string]: ObjectToConvert;
}

export const objectifyArray = <T extends ObjectToConvert> (arr: T[], determinant: keyof T = "id") => arr.reduce((acc, it) => {
    acc[it[determinant]] = it;
    return acc;
}, {} as ObjectConverted);

export const reverseObject = <T extends ObjectToConvert> (obj: T) => Object.values(obj).filter(Boolean);