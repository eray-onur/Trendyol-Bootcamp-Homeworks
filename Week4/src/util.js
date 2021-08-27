export const addParamToUrl = (url) => {
    return url.includes('?') ? '&' : '?';
}