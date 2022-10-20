type Object = {
    id?: number;
    [key: string]: any;
}

export const reverseObject = <T extends Object> (obj: T) => Object.values(obj).filter(Boolean) as T[keyof T][];