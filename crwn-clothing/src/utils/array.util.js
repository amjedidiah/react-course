export const objectifyArray = (arr) => {
    const result = {};

    arr.forEach((it) => result[it.id] = it);

    return result;
}

export const reverseObject = obj => Object.values(obj).filter(it => it);