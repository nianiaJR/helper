/**
 * 
 * @param {Function} fn  function which need to debounce
 * @param {Number} wait  how many milseconds waiting to call fn
 */

function debounce(fn, wait) {
    let timer;

    return function debounced(...rest) {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, rest);
        }, wait)
    }
}

function throttle(fn, interval, immediate) {
    let timer;

    return function throttled(...rest) {
        if (timer) {
            return;
        }
        if (immediate) {
            fn.apply(this, rest)
            return
        }
        timer = setTimeout(() => {
            timer = null
            fn.apply(this, rest)
        }, interval)
    }
}

export {
    debounce,
    throttle
}