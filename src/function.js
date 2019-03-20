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

export {
  debounce
}