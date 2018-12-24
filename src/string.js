/**
 * what: update the query string by relative key and value
 * @param uri web url
 * @param key which query key to update
 * @param value  which query key value to set
 * 
 * @return new query string updated
 */
const updateQueryStringParameter = (uri, key, value) => {
    const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i')
    const separator = uri.includes('?') ? '&' : '?'
    if (uri.match(re)) {
        return uri.replace(re, `$1${key}=${value}$2`)
    }

    // 带有hash的情况
    if (uri.includes('#')) {
        const pairs = uri.split('#')

        return `${pairs[0] + separator + key}=${value}#${pairs[1]}`
    }

    return `${uri + separator + key}=${value}`
}

export {
    updateQueryStringParameter
}