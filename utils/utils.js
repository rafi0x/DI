export function giveBool(value) {
    return value === '' || value === null || value === undefined || value === [] || value === {} ? false : true;
}